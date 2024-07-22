import React from "react";

const RegisterPage = ({ form }) => {
  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row">
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: "url('/frame10.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      ></div>

      <div
        className="absolute inset-0 z-10 block lg:hidden"
        style={{
          backgroundImage: "url('/mobile.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      ></div>

      <div className="absolute bottom-0 w-full flex flex-col lg:flex-row items-center lg:justify-center lg:space-x-4 bg-opacity-5 bg-white p-4 z-20">
        <div className="lg:w-1/2 w-full flex items-center justify-center lg:order-1 order-1">
          <img
            src="/pngcheck.png"
            alt="Imagem"
            className="w-3/4 h-auto lg:w-full lg:max-w-sm mx-auto"
          />
        </div>
        <div className="lg:w-1/2 w-full lg:order-2 order-2 text-center lg:text-left mt-4 lg:mt-0">
          <p className="text-customText3 text-lg lg:text-xl font-medium">
            Junte-se a mais de 50 mil colaboradores AeC.
          </p>
        </div>
      </div>

      <div className="absolute bottom-16 pb-20 right-1 z-20 w-full max-w-md mx-auto px-4">
        <div className="">{form}</div>
      </div>
    </div>
  );
};

export default RegisterPage;
