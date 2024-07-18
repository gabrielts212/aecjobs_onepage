import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Aboutus = () => {
  return (
    <div className="p-6 bg-white">
      <div className="max-w-full mx-auto">
        <h1 className="text-4xl font-bold text-customText2 mb-4 text-left">
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
          Desde 2020, somos certificados pela Great Place to Work como uma das{" "}
          <strong className="text-customText3">Melhores Empresas</strong> para
          se trabalhar. E continuamos crescendo: em 2023, mais de 5.000
          promoções internas demonstram nossa aposta em você e confiança no seu
          crescimento profissional.
        </p>
        <p className="text-xl mb-4 text-left text-customText3">
          Aqui, seu plano de carreira começa após apenas 90 dias de trabalho.
          <strong className="text-customText3">
            Com ou sem experiência, venha ser AeC!
          </strong>
        </p>
      </div>

      <div className="hidden lg:grid lg:grid-cols-3 gap-4">
        <div className="p-1 flex justify-center">
          <Image
            src="/Imagetext.png"
            alt="Imagem 1"
            width={390}
            height={470}
            className="object-contain"
          />
        </div>
        <div className="p-1 flex justify-center">
          <Image
            src="/Imagetext2.png"
            alt="Imagem 2"
            width={390}
            height={470}
            className="object-contain"
          />
        </div>
        <div className="p-1 flex justify-center">
          <Image
            src="/Imagetext3.png"
            alt="Imagem 3"
            width={390}
            height={470}
            className="object-contain"
          />
        </div>
      </div>

      <div className="lg:hidden mt-6">
        <Carousel showThumbs={false} showStatus={false} infiniteLoop>
          <div className="flex justify-center">
            <div className="max-w-full">
              <Image
                src="/Imagetext.png"
                alt="Imagem 1"
                width={350}
                height={350}
                className="object-contain"
                style={{ width: "350px", height: "350px" }}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="max-w-full">
              <Image
                src="/Imagetext2.png"
                alt="Imagem 2"
                width={350}
                height={350}
                className="object-contain"
                style={{ width: "350px", height: "350px" }}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="max-w-full">
              <Image
                src="/Imagetext3.png"
                alt="Imagem 3"
                width={350}
                height={350}
                className="object-contain"
                style={{ width: "350px", height: "350px" }}
              />
            </div>
          </div>
        </Carousel>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 justify-center pt-10">
        <div className="p-6 bg-white border border-gray-400 rounded-xl flex items-center shadow-2xl mx-auto max-w-3/4">
          <p className="text-xs flex-1 text-customText3 font-bold">
            A AeC foi certificada pela quarta vez como um ótimo lugar para
            trabalhar! Isso significa que nosso cuidado com as pessoas, nossos
            projetos e programas, nossas oportunidades e a sua colaboração fazem
            a diferença e o mercado reconhece!
          </p>
          <div className="ml-4">
            <Image
              src="/Image2.png"
              alt="GPTW Logo"
              width={143}
              height={200}
              className="object-contain"
              style={{ width: "140px", height: "143px" }}
            />
          </div>
        </div>
        <div className="p-6 bg-white border border-gray-400 rounded-xl flex items-center shadow-2xl mx-auto max-w-3/4 lg:max-w-xl xl:max-w-xl">
          <p className="text-xs flex-1 text-customText3 font-bold">
            Em 2023 fomos eleitos pelo Grupo Gestão RH como o CEO e RH mais
            admirados do Brasil reconhecendo os líderes de empresas que
            valorizam a gestão de pessoas na estratégia do negócio e, por isso,
            tem a admiração dos próprios profissionais da área de RH.
          </p>
          <div className="ml-4">
            <Image
              src="/Image3.png"
              alt="Award Logo"
              width={143}
              height={200}
              className="object-contain"
              style={{ width: "140px", height: "143px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
