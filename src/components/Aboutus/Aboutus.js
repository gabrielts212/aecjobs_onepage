import Image from "next/image";

const Aboutus = () => {
  return (
    <div className="p-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-customText2 mb-4 text-left">
          Aqui na AeC somos felizes com o que fazemos!
        </h1>
        <p className="text-xl mb-4 text-left text-customText3">
          Quer saber por quê? Com 32 anos de história, somos uma das líderes
          brasileiras em relacionamento com clientes, presentes em 19 unidades,
          7 estados e 11 cidades pelo Brasil.
        </p>
        <p className="text-xl mb-4 text-left text-customText3">
          Desde o primeiro emprego até a escola de liderança, buscamos
          proporcionar a melhor experiência para nossos colaboradores, com base
          em relacionamento e responsabilidade.
        </p>
        <p className="text-xl mb-4 text-left text-customText3">
          Desde 2020, somos certificados pela Great Place to Work como uma das
          Melhores Empresas para se trabalhar. E continuamos crescendo: em 2023,
          mais de 5.000 promoções internas demonstram nossa aposta em você e
          confiança no seu crescimento profissional.
        </p>
        <p className="text-xl mb-4 text-left text-customText3">
          Aqui, seu plano de carreira começa após apenas 90 dias de trabalho.
          Com ou sem experiência, venha ser AeC!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-1 flex justify-center">
          <Image
            src="/Imagetext.png"
            alt="Imagem 1"
            width={390}
            height={470}
            className="object-contain"
          />
        </div>
        <div className="p-1 flex justify-center md:col-span-1 lg:col-span-1">
          <Image
            src="/imagetext2.png"
            alt="Imagem 2"
            width={390}
            height={470}
            className="object-contain"
          />
        </div>
        <div className="p-1 flex justify-center hidden lg:block">
          <Image
            src="/imagetext3.png"
            alt="Imagem 3"
            width={390}
            height={470}
            className="object-contain"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 justify-center pt-10">
        <div className="p-6 bg-white border border-gray-300 rounded-lg flex items-center shadow-md mx-auto max-w-3/4">
          <p className="text-base flex-1 text-customText3">
            A AeC foi certificada pela quarta vez como um ótimo lugar para
            trabalhar! Isso significa que nosso cuidado com as pessoas, nossos
            projetos e programas, nossas oportunidades e a sua colaboração fazem
            a diferença e o mercado reconhece!
          </p>
          <div className="ml-4">
            <img
              src="/Image2.png"
              alt="GPTW Logo"
              width="100"
              height="200"
              className="object-contain"
            />
          </div>
        </div>
        <div className="p-6 bg-white border border-gray-300 rounded-lg flex items-center shadow-md mx-auto max-w-3/4 lg:max-w-xl xl:max-w-xl">
          <p className="text-base flex-1 text-customText3">
            Em 2023 fomos eleitos pelo Grupo Gestão RH como o CEO e RH mais
            admirados do Brasil reconhecendo os líderes de empresas que
            valorizam a gestão de pessoas na estratégia do negócio e, por isso,
            tem a admiração dos próprios profissionais da área de RH.
          </p>
          <div className="ml-4">
            <img
              src="/Image3.png"
              alt="Award Logo"
              width="100"
              height="200"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
