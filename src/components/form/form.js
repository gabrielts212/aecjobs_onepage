import { useState, useEffect,useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Modal from "../modal/Modal";
import InputMask from "react-input-mask";

const RegisterForm = () => {
  const initialState = {
    name: "",
    cpf: "",
    email: "",
    phone: "",
    city: "",
    checkboxOptions: [],
    referrer: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cities, setCities] = useState([]);
  const router = useRouter();
  const cpfRef = useRef(null);
  const phoneRef = useRef(null);

  useEffect(() => {
    const origemAbreviado = new URLSearchParams(window.location.search).get(
      "utm_source"
    );
    const origemCompleta = mapOrigemAbreviado(origemAbreviado);
    setFormData((prevFormData) => ({
      ...prevFormData,
      referrer: origemCompleta,
    }));
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
    const { name, value, checked } = e.target;
    if (name === "checkboxOptions") {
      const updatedOptions = checked
        ? [...formData.checkboxOptions, value]
        : formData.checkboxOptions.filter((option) => option !== value);
      setFormData({ ...formData, checkboxOptions: updatedOptions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Digite um nome com mais caracteres";

    const cpfWithoutSpecialChars = formData.cpf.replace(/[.-]/g, "");
    if (!cpfWithoutSpecialChars || cpfWithoutSpecialChars.length !== 11) {
      newErrors.cpf = "CPF Inválido";
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Digite um e-mail válido";
    }

    const phoneWithoutSpecialChars = formData.phone.replace(/[()\s-]/g, "");
    if (
      !phoneWithoutSpecialChars ||
      phoneWithoutSpecialChars.length < 10 ||
      phoneWithoutSpecialChars.length > 11
    ) {
      newErrors.phone = "Digite um número de telefone válido.";
    }

    if (!formData.city) newErrors.city = "Selecione uma cidade válida";

    // if (!formData.checkboxOptions.includes("preCadastro")) {
    //   newErrors.checkboxOptions = "Aceitar o pré-cadastro é obrigatório.";
    // }

    // if (!formData.checkboxOptions.includes("politicaPrivacidade")) {
    //   newErrors.checkboxOptions =
    //     "Aceitar a política de privacidade é obrigatório.";
    // }

    return newErrors;
  };

  const mapOrigemAbreviado = (origemAbreviado) => {
    const mapping = {
      mt: "Meta",
      gg: "Google",
      af: "Anuncios físicos",
      yt: "Youtube Oficial",
      st: "Site AeC Oficial",
      ig: "Instagram oficial",
      wp: "Whatsapp",
      im: "Imprensa",
      fe: "Feirão de emprego",
      se: "Sites de emprego",
      ge: "Grupos de emprego",
    };
    return mapping[origemAbreviado] || "Desconhecido";
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
    if (
      message ===
      "Seu pré-cadastro foi feito com sucesso. Agora, você pode continuar o processo do cadastro de login, para visualizar a vaga de atendente da cidade escolhida."
    ) {
      window.open("https://sou.aec.com.br/", "_blank");
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-10 rounded-xl shadow-xl  "
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">
          Seja um colaborador AeC
        </h2>
        <p className="text-center mb-6 text-customText3">
          Faça parte do nosso time de atendimento.
        </p>

        <label className="block text-customText3 text-sm  mb-2 ">
          Nome*
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite seu nome aqui"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-hoverBlue ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name}</p>
          )}
        </label>
        <label className="block text-customText3 text-sm  mb-2">
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
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-hoverBlue ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.cpf && (
            <p className="text-red-500 text-xs italic">{errors.cpf}</p>
          )}
        </label>
        <label className="block text-customText3 text-sm  mb-2">
          E-mail*
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
           
            placeholder="Digite seu e-mail aqui"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-hoverBlue ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </label>
        <label className="block text-customText3 text-sm  mb-2">
          Telefone (WhatsApp)*
          <InputMask
            mask="(99) 99999-9999"
            maskChar=""
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            inputRef={phoneRef} 
            placeholder="(__)_____-____"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-hoverBlue ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs italic">{errors.phone}</p>
          )}
        </label>

        <label className="block text-customText3 text-sm mb-2">
          Cidade onde deseja trabalhar*
          <div className="relative">
            <select
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-hoverBlue ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              style={{ appearance: "none", backgroundColor: "#F5F5F5" }}
            >
              <option value="" disabled hidden>
                Selecione a cidade
              </option>
              {cities.map((city) => (
                <option key={city.Id} value={city.Estado}>
                  {city.Nome}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 cursor-pointer">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
          {errors.city && (
            <p className="text-red-500 text-xs italic">{errors.city}</p>
          )}
        </label>

        <label className="block text-gray-700 text-sm  mb-2">
          <input
            type="checkbox"
            id="preCadastro"
            name="checkboxOptions"
            value="preCadastro"
            checked={formData.checkboxOptions.includes("preCadastro")}
            onChange={handleChange}
            className="mr-2 leading-tight"
          />
          <span className="text-xs text-customText3">
            Aceito realizar o pré-cadastro no SOU AeC e ser contatado pela AeC
            para vagas de atendimento.
          </span>
        </label>
        <label className="block text-customText3 text-sm mb-2">
          <input
            type="checkbox"
            id="politicaPrivacidade"
            value="politicaPrivacidade"
            name="checkboxOptions"
            checked={formData.checkboxOptions.includes("politicaPrivacidade")}
            onChange={handleChange}
            className="mr-2 leading-tight"
          />
          <span className="text-xs text-customText3">
            Eu li e concordo com a{" "}
            <span
              className="text-xs text-customText4 cursor-pointer"
              onClick={handleModalOpen}
            >
              Política de Privacidade
            </span>
            .
          </span>
        </label>
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          title="Política de Privacidade"
        >
          <p>
            Aqui está o texto da política de privacidade. Você pode adicionar o
            conteúdo completo da política de privacidade aqui.
          </p>
        </Modal>
        <input type="hidden" name="s" value={formData.referrer} />

        {errors.checkboxOptions && (
          <p className="text-red-500 text-xs italic">
            {errors.checkboxOptions}
          </p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-700 focus:outline-none focus:shadow-outline mt-4"
        >
          Cadastrar
        </button>
        <p className="mt-4 text-center text-customText3">
          Já possui cadastro?{" "}
          <a
            href="https://sou.aec.com.br/"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Efetuar Login
          </a>
          .
        </p>
      </form>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-900">
              Cadastro realizado
            </h2>
            <p className="text-center mb-4 text-gray-600">{message}</p>
            <button
              onClick={handleContinue}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
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
