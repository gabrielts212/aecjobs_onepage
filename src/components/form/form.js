import axios from 'axios';
import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import Modal from '../modal/Modal';
import InputMask from "react-input-mask";


const RegisterForm = () => {
  const initialState = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    cidadeId: '',
    concordaPoliticaPrivacidade: false,
    concordaPreCadastro: false,
    s: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const cpfRef = useRef(null);
  const phoneRef = useRef(null);
  const [cities, setCities] = useState([]);
  
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  useEffect(() => {
    const allFieldsFilled =
      formData.nome &&
      formData.cpf &&
      formData.email &&
      formData.telefone &&
      formData.cidadeId &&
      formData.concordaPreCadastro &&
      formData.concordaPoliticaPrivacidade;
    setIsButtonDisabled(!allFieldsFilled);
  }, [formData]);



  useEffect(() => {
    const origemAbreviado = new URLSearchParams(window.location.search).get('utm_source');
    const origemCompleta = mapOrigemAbreviado(origemAbreviado);
    setFormData((prevFormData) => ({ ...prevFormData, s: origemCompleta }));
    console.log('URL acessada:', window.location.href);
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get("https://crio/SOU/Cidade");
        if (response.status === 200) {
          setCities(response.data);
        }
      } catch (error) {
        console.error("Erro ao buscar cidades:", error);
      }
    };

    fetchCities();
  }, []);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nome) newErrors.nome = 'Nome é obrigatório.';
    const cpfWithoutSpecialChars = formData.cpf.replace(/[.\s-]/g, "");

    if (!cpfWithoutSpecialChars || cpfWithoutSpecialChars.length !== 11) {
      newErrors.cpf = 'CPF deve ter 11 dígitos.';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email é obrigatório e deve ser válido.';


    
    const telefone = formData.telefone.replace(/\D/g, ''); 

    if (!formData.telefone || !/^\d{10,11}$/.test(telefone)) {
      newErrors.telefone = 'Telefone deve ter 10 ou 11 dígitos.';
    }


    
    if (!formData.concordaPreCadastro) newErrors.concordaPreCadastro = '';
    if (!formData.concordaPoliticaPrivacidade) newErrors.concordaPoliticaPrivacidade = '';
    return newErrors;
  };

  const mapOrigemAbreviado = (origemAbreviado) => {
    const mapping = {
      mt: 'Meta',
      gg: 'Google',
      af: 'Anuncios físicos',
      yt: 'Youtube Oficial',
      st: 'Site AeC Oficial',
      ig: 'Instagram oficial',
      wp: 'Whatsapp',
      im: 'Imprensa',
      fe: 'Feirão de emprego',
      se: 'Sites de emprego',
      ge: 'Grupos de emprego',
    };
    return mapping[origemAbreviado] || 'Desconhecido';
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    console.log("Dados enviados ao servidor:", formData);
    try {
      const response = await axios.post("https://crio/SOU", formData);
      console.log("Resposta do servidor:", response.data);
      setMessage(response.data.message);
      setShowPopup(true);
      setFormData(initialState);

      if (response.status === 200) {
        router.push("/");
      }
    } catch (error) {
      console.error("Erro ao registrar o usuário:", error);
      setMessage(
        error.response?.data?.message || "Erro ao registrar o usuário."
      );
      setShowPopup(true);
    }
  };



  const handleContinue = () => {
    setShowPopup(false);
    if (message === 'Seu pré-cadastro foi feito com sucesso. Agora, você pode continuar o processo do cadastro de login, para visualizar a vaga de atendente da cidade escolhida.') {
      window.open('https://sou.aec.com.br/', '_blank');
    } else {
      router.push('/');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-10 rounded-xl shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">Seja um colaborador AeC</h2>
        <p className="text-center mb-6 text-customText3">Faça parte do nosso time de atendimento.</p>
        
        <label className="block text-customText3 text-sm mb-2">
          Nome*
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite seu nome aqui"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-hoverBlue ${errors.nome ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.nome && <p className="text-red-500 text-xs italic">{errors.nome}</p>}
        </label>


        <label className="block text-customText3 text-sm mb-2">
          CPF*
          <InputMask
            mask="999.999.999-99"
            maskChar=""
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            inputRef={cpfRef}

            placeholder="000.000.000-00"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-hoverBlue ${errors.cpf ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.cpf && <p className="text-red-500 text-xs italic">{errors.cpf}</p>}
        </label>



        <label className="block text-customText3 text-sm mb-2">
          E-mail*
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu e-mail aqui"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-hoverBlue ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </label>


        <label className="block text-customText3 text-sm mb-2">
          Telefone (WhatsApp)*
          <InputMask
            mask="(99) 99999-9999"
            maskChar=""
            type="text"
            name="telefone"
            inputRef={phoneRef}

            value={formData.telefone}
            onChange={handleChange}
            placeholder="(__)_____-____"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-hoverBlue ${errors.telefone ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.telefone && <p className="text-red-500 text-xs italic">{errors.telefone}</p>}
        </label>






        <label className="block text-customText3 text-sm mb-2">
          Cidade onde deseja trabalhar*
          <div className="relative">
            

            <select
              type="text"
              name="cidadeId"
              value={formData.city}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-hoverBlue ${errors.cidadeId ? 'border-red-500' : 'border-gray-300'}`}
              style={{ appearance: 'none', backgroundColor: '#F5F5F5' }}
            >
              <option value="" disabled hidden>
                Selecione a cidade
              </option>
              {cities.map((city) => (
                <option key={city.Id} value={city.Id}>
                  {city.Nome}
                </option>
              ))}
            </select>

            
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 cursor-pointer">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>


          {errors.city && (
            <p className="text-red-500 text-xs italic">{errors.city}</p>)}          
        </label>







        <label className="block text-gray-700 text-sm mb-2 flex items-center">
          <input
            type="checkbox"
            name="concordaPreCadastro"
            checked={formData.concordaPreCadastro}
            onChange={handleChange}
            className="mr-2 leading-tight"
          />
          <span className="text-xs text-customText3">
            Aceito realizar o pré-cadastro no SOU AeC e ser contatado pela AeC para vagas de atendimento.
          </span>
          {errors.concordaPreCadastro && (
            <p className="text-red-500 text-xs italic ml-2">
              {errors.concordaPreCadastro}
            </p>
          )}
        </label>

        <label className="block text-gray-700 text-sm mb-2 flex items-center">
          <input
            type="checkbox"
            name="concordaPoliticaPrivacidade"
            checked={formData.concordaPoliticaPrivacidade}
            onChange={handleChange}
            className="mr-2 leading-tight"
          />
          <span className="text-xs text-customText3">
            Eu li e concordo com a{' '}
            <span
              className="text-xs text-customText4 cursor-pointer"
              onClick={handleModalOpen}
            >
              Política de Privacidade
            </span>.
          </span>
          {/* <input type="hidden" name="s" value={formData.s} /> */}

          {errors.concordaPoliticaPrivacidade && (
            <p className="text-red-500 text-xs italic ml-2">
              {errors.concordaPoliticaPrivacidade}
            </p>
          )}
        </label>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isButtonDisabled}
            className={`w-full py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-4 font-bold border transition-colors duration-300 ${
              isButtonDisabled
                ? "bg-gray-400 text-white border-gray-400"
                : "bg-customText1 text-white border-customText1 hover:bg-white hover:text-customText1 hover:border-customText1"
            }`}
          >
            Cadastrar
          </button>
        </div>
        <p className="mt-4 text-center text-gray-600">
          Já possui cadastro? <a href="https://sou.aec.com.br/" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Efetuar Login</a>.
        </p>
      </form>


      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6 md:p-8 lg:p-10">
  <div className="bg-white p-6 rounded shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
    <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">Cadastro realizado</h2>
    <p className="text-center mb-4 text-gray-600">{message}</p>
    <button
      onClick={handleContinue}
      
       className="w-full bg-customText1 text-white py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-4 font-bold border border-customText1 hover:bg-white hover:text-customText1 hover:border-customText1 transition-colors duration-300"
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
