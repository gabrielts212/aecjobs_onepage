import React from 'react';

const Modal = ({ isOpen, onClose, onContinue }) => {
  if (!isOpen) return null
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mx-4 relative max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300 focus:outline-none"
        >
          &times;
        </button>
        <h1 className="text-xl font-semibold text-center mb-4">Política de Privacidade</h1>
       
        <button
          onClick={onContinue}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none"
        >
          Continuar
        </button>

      </div>
    </div>
  );
};

export default Modal;
