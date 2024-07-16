import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const RegisterForm = () => {
  const initialState = {
    name: '',
    cpf: '',
    email: '',
    phone: '',
    city: '', 
    checkboxOptions: [],
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const updatedOptions = checked
        ? [...formData.checkboxOptions, value]
        : formData.checkboxOptions.filter(option => option !== value);
      setFormData({ ...formData, checkboxOptions: updatedOptions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Nome é obrigatório.';
    if (!formData.cpf || !/^\d{11}$/.test(formData.cpf)) newErrors.cpf = 'CPF deve ter 11 dígitos.';
    if (!formData.email) newErrors.email = 'Email é obrigatório.';
    if (!formData.phone || !/^\d{10,11}$/.test(formData.phone)) newErrors.phone = 'Telefone deve ter 10 ou 11 dígitos.';
    if (!formData.city) newErrors.city = 'Cidade é obrigatória.';
    if (!formData.checkboxOptions.includes('preCadastro')) newErrors.checkboxOptions = 'Aceitar o pré-cadastro é obrigatório.';
    if (!formData.checkboxOptions.includes('politicaPrivacidade')) newErrors.checkboxOptions = 'Aceitar a política de privacidade é obrigatório.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    try {
      const response = await axios.post('/api/register', formData);
      console.log('Resposta do servidor:', response.data);
      setMessage(response.data.message);
      setShowPopup(true);
      setFormData(initialState);

      if (response.status === 200) {
        router.push('/');
      }
    } catch (error) {
      console.error('Erro ao registrar o usuário:', error);
      setMessage(error.response?.data?.message || 'Erro ao registrar o usuário.');
      setShowPopup(true);
    }
  };

  // const handleContinue = () => {
  //   setShowPopup(false);
  //   if (message === 'Cadastro Realizado!') {
  //     window.open('https://www.youtube.com/', '_blank');
  //   } else {
  //     window.open('https://sou.aec.com.br/'); 
  //   }
  // };
  const handleContinue = () => {
    setShowPopup(false);
    if (message === 'Seu pré-cadastro foi feito com sucesso. Agora, você pode continuar o processo do cadastro de login, para visualizar a vaga de atendente da cidade escolhida.') {
      window.open('https://sou.aec.com.br/', '_blank'); 
    } else {
      router.push('/'); 
    }
  };
  
  
  
  return (
    <div >
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">Seja um colaborador AeC</h2>
        <p className="text-center mb-6 text-gray-600">Faça parte do nosso time de atendimento.</p>

        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nome:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
             placeholder="Digite seu nome aqui"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          CPF:
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            placeholder="000.000.000-00"

            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.cpf ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.cpf && <p className="text-red-500 text-xs italic">{errors.cpf}</p>}
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          E-mail:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu e-mail aqui"

            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Telefone (WhatsApp):
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
             placeholder="(__)_____-____"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
              Cidade onde deseja trabalhar:
              <div className="relative">
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.city ? 'border-red-500' : 'border-gray-300'
                  }`}
                  style={{ appearance: 'none', backgroundColor: '#F5F5F5' }}
                >
                  <option value="" disabled hidden>
                    Selecione a cidade
                  </option>
                  <option value="SP">São Paulo</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="BA">Bahia</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 cursor-pointer">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
                </div>
              </div>
              {errors.city && <p className="text-red-500 text-xs italic">{errors.city}</p>}
            </label>


        <div className="mb-4">
  <div className="flex items-center mb-2">
    <input
      type="checkbox"
      name="checkboxOption"
      value="preCadastro"
      checked={formData.checkboxOptions.includes('preCadastro')}
      onChange={handleChange}
      className="mr-2 leading-tight"
    />
    <span className="text-sm">Aceito realizar o pré-cadastro no SOU AeC e ser contatado pela AeC para vagas de atendimento.</span>
  </div>

  <div className="flex items-center">
    <input
      type="checkbox"
      name="checkboxOption"
      value="politicaPrivacidade"
      checked={formData.checkboxOptions.includes('politicaPrivacidade')}
      onChange={handleChange}
      className="mr-2 leading-tight"
    />
    <span className="text-sm">Eu li e concordo com a Política de Privacidade.</span>
  </div>

  {errors.checkboxOptions && <p className="text-red-500 text-xs italic">{errors.checkboxOptions}</p>}
</div>



        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4"
        >
          Cadastrar
        </button>
        <p className="mt-4 text-center text-gray-600">
          Já possui cadastro? <a href="/" className="text-blue-500 hover:text-blue-700">Efetuar Login</a>.
        </p>
      </form>

      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Cadastro Realizado!</h2>
            <p className="text-lg mb-4">{message}</p>
            <button
              onClick={handleContinue}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Continuar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
