import React from "react";

const RegisterPage = ({ form }) => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: "url(background2.png)",
          width: "100%",
          height: "50%",
        }}
      ></div>
      <div
        className="absolute inset-0   md:bg-cover z-30"
        style={{
          backgroundImage: "url(/backgroundform.png)",
          width: "100%",
          height: "100%",
        }}
      ></div>
      {/* <div className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-auto md:bg-cover z-30" style={{
        backgroundImage: 'url(/background1.png)',
        width: '100%',
        height: '100%',
        
      }}></div> */}

      <div className="relative z-40 flex justify-center items-center min-h-screen">
        <div className="w-full max-w-2xl p-6 rounded-lg flex flex-col md:flex-row items-center md:items-start bg-opacity-75 md:bg-opacity-0">
          <div className="md:w-1/2 p-4"></div>
          <div className="w-full p-4">{form}</div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center items-center bg-white bg-opacity-75"></div>

      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center"></div>
    </div>
  );
};

export default RegisterPage;
