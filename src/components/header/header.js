import { useState } from "react";
import Image from "next/image";
import CustomLink from "../../components/link/link";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScrollToSection = (event) => {
    event.preventDefault();
    const section = document.getElementById('about-us-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); 
  };


  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <div className="flex items-center space-x-4">
          <CustomLink href="/">
            <div>
              <div className="flex items-center">
                <Image
                  src="/Imageheader.png"
                  alt="Logo"
                  width={80}
                  height={80}
                />
                <div className="flex flex-col ml-2">
                  <span className="text-blue-700 text-sm">
                    Relacionamento com
                  </span>
                  <span className="text-blue-700 text-sm">
                    Responsabilidade
                  </span>
                </div>
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

        <div className="hidden md:flex md:space-x-8">
          <CustomLink
            to="https://sou.aec.com.br/"
            className="text-blue-900 text-lg font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vagas de Atendimento
          </CustomLink>

          <CustomLink
            href="#about-us-section"
            onClick={handleScrollToSection}
            className="text-blue-900 text-lg font-semibold"
          >
            Quem somos
          </CustomLink>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
          <div className="flex flex-col items-center justify-start h-full pt-20 space-y-4">
            <CustomLink
              to="https://sou.aec.com.br/"
              className="text-blue-900 text-lg font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vagas de Atendimento
            </CustomLink>

            <CustomLink
            href="#about-us-section"
            onClick={handleScrollToSection}
            className="text-blue-900 text-lg font-semibold"
          >
            Quem somos
          </CustomLink>
          </div>

          <button
            onClick={toggleMenu}
            className="absolute bottom-10 self-center text-blue-900 text-lg font-semibold focus:outline-none"
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
        </div>
      )}
    </header>
  );
};

export default Header;
