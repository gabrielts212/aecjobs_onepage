import Image from "next/image";

const Aboutus = () => {
  return (
    <div className="p-6 bg-white ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-700 mb-4 text-left">
          Aqui na AeC somos felizes com o que fazemos!
        </h1>
        <p className="text-lg mb-4 text-left">
          Quer saber por quê? Com 32 anos de história, somos uma das líderes
          brasileiras em relacionamento com clientes, presentes em 19 unidades,
          7 estados e 11 cidades pelo Brasil.
        </p>
        <p className="text-lg mb-4 text-left">
          Desde o primeiro emprego até a escola de liderança, buscamos
          proporcionar a melhor experiência para nossos colaboradores, com base
          em relacionamento e responsabilidade.
        </p>
        <p className="text-lg mb-4 text-left">
          Desde 2020, somos certificados pela Great Place to Work como uma das
          Melhores Empresas para se trabalhar. E continuamos crescendo: em 2023,
          mais de 5.000 promoções internas demonstram nossa aposta em você e
          confiança no seu crescimento profissional.
        </p>
        <p className="text-lg mb-4 text-left">
          Aqui, seu plano de carreira começa após apenas 90 dias de trabalho.
          Com ou sem experiência, venha ser AeC!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24">
        <div className="p-1 flex justify-center">
          <Image
            src="/Imagetext.png"
            alt="Imagem 1"
            width={220}
            height={200}
            className="object-contain"
          />
        </div>
        <div className="p-1 flex justify-center">
          <Image
            src="/imagetext2.png"
            alt="Imagem 2"
            width={220}
            height={200}
            className="object-contain"
          />
        </div>
        <div className="p-1 flex justify-center">
          <Image
            src="/imagetext3.png"
            alt="Imagem 3"
            width={220}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
      <div className="p-6 bg-white">
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
          <div className="p-4 bg-white border border-gray-300 rounded-lg flex flex-row items-center max-w-md mx-auto">
            <p className="text-sm flex-1">
              A AeC foi certificada pela GPTW como uma das melhores empresas
              para se trabalhar, com um índice de confiança acima de 85%, tendo
              um clima organizacional em que os profissionais de todos os
              setores se sentem respeitados e reconhecidos.
            </p>
            <div className="ml-4">
              <Image
                src="/Image2.png"
                alt="GPTW Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg flex flex-row items-center max-w-md mx-auto">
            <p className="text-sm flex-1">
              Em 2023 fomos eleitos pelo Grupo Gestão RH como o CEO e RH mais
              admirados em nosso segmento, além de estarmos entre as 50 maiores
              empresas e as 1000 maiores de RH do Brasil.
            </p>
            <div className="ml-4">
              <Image
                src="/Image3.png"
                alt="Award Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
