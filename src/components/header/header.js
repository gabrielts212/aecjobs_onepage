import { useState } from "react";

import Image from "next/image";
import CustomLink from "../../components/link/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <div className="flex items-center space-x-4">
          <CustomLink to="/" passHref>
            <div
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image src="/Imageheader.png" alt="Logo" width={80} height={80} />
              <div className="flex flex-col ml-2">
                <span className="text-blue-700 text-sm">
                  Relacionamento com
                </span>
                <span className="text-blue-700 text-sm">Responsabilidade</span>
              </div>
            </div>
          </CustomLink>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-900 text-lg font-semibold focus:outline-none"
          >
            <svg
              className={`w-6 h-6 ${menuOpen ? "hidden" : "block"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-8 md:items-center  mt-4 md:mt-0 relative`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-0 right-0 md:hidden text-blue-900 text-lg font-semibold focus:outline-none mt-4 mr-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <CustomLink to="/">
            <p className="text-blue-900 text-lg font-semibold">
              Vagas de Atendimento
            </p>
          </CustomLink>

          <CustomLink to="/">
            <p className="text-blue-900 text-lg font-semibold">Quem somos</p>
          </CustomLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
