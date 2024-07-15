import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'; 

const RegisterForm = () => {
  const initialState = {
    name: '',
    cpf: '',
    email: '',
    phone: '',
    state: '',
    radioOption: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Nome é obrigatório.';
    if (!formData.cpf || !/^\d{11}$/.test(formData.cpf)) newErrors.cpf = 'CPF deve ter 11 dígitos.';
    if (!formData.email) newErrors.email = 'Email é obrigatório.';
    if (!formData.phone || !/^\d{10,11}$/.test(formData.phone)) newErrors.phone = 'Telefone deve ter 10 ou 11 dígitos.';
    if (!formData.state) newErrors.state = 'Estado é obrigatório.';
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

  const handleContinue = () => {
    setShowPopup(false);
    
  };

  return (
    <div >
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg shadow-md" >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-900">Seja um colaborador AeC</h2>
        <p className="text-center mb-6 text-gray-600">Faça parte do nosso time de atendimento.</p>

        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nome:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.cpf ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.cpf && <p className="text-red-500 text-xs italic">{errors.cpf}</p>}
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Telefone/WhatsApp:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Estado:
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.state ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Selecione um estado</option>
            <option value="SP">São Paulo</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="MG">Minas Gerais</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="BA">Bahia</option>
          </select>
          {errors.state && <p className="text-red-500 text-xs italic">{errors.state}</p>}
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Opção:
          <div className="flex items-center">
            <input
              type="radio"
              name="radioOption"
              value="option1"
              checked={formData.radioOption === 'option1'}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            <span className="text-sm">Opção 1</span>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="radioOption"
              value="option2"
              checked={formData.radioOption === 'option2'}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            
            <span className="text-sm">Opção 2</span>
          </div>
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4"
        >
          Cadastrar
        </button>
        <p className="mt-4 text-center text-gray-600">
          Já possui cadastro? <a href="/login" className="text-blue-500 hover:text-blue-700">Efetuar Login</a>.
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
