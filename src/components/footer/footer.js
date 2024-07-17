import CustomLink from "../../components/link/link";
import Image from "next/image";
// import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-customBlue shadow">
      <div className="container mx-auto py-4 px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
          <div className="flex justify-center space-x-4 md:hidden">
            <CustomLink
              to="https://facebook.com"
              
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900"
            >
              <Image
                src="/Iconfacebook.png"
                alt="Facebook"
                width={28}
                height={28}
              />
            </CustomLink>

            <CustomLink
              to="https://instagram.com"
             
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Iconinstagram.png"
                alt="Youtube"
                width={28}
                height={28}
              />
            </CustomLink>

            <CustomLink
              to="https://youtube.com"
             
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Iconyoutube.png"
                alt="Youtube"
                width={28}
                height={28}
              />
            </CustomLink>
            <CustomLink
              to="https://linkedin.com"
              
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Iconlinkedin.png"
                alt="Linkedin"
                width={28}
                height={28}
              />
            </CustomLink>
          </div>

          <div className="text-blue-900 text-lg font-semibold text-center md:hidden">
            Política de privacidade
          </div>

          <div className="flex justify-center md:justify-start items-center space-x-4 mb-4 md:mb-0">
            <CustomLink to="/" passHref>
              <div
                
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Image
                  src="/Imagefooter.png"
                  alt="Logo"
                  width={80}
                  height={80}
                />
                <div className="flex flex-col ml-2">
                  <span className="text-blue-900 text-sm">
                    Relacionamento com
                  </span>
                  <span className="text-blue-900 text-sm">
                    Responsabilidade
                  </span>
                </div>
              </div>
            </CustomLink>
          </div>

          <div className="hidden md:block text-blue-900 text-lg font-semibold text-center md:text-left">
            Política de privacidade
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <CustomLink
              to="https://facebook.com"
              
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900"
            >
              <Image
                src="/Iconfacebook.png"
                alt="Facebook"
                width={28}
                height={28}
              />
            </CustomLink>
            <CustomLink
              to="https://instagram.com"
             
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Iconinstagram.png"
                alt="Youtube"
                width={28}
                height={28}
              />
            </CustomLink>
            <CustomLink
              
              to="https://youtube.com"
             
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Iconyoutube.png"
                alt="Youtube"
                width={28}
                height={28}
              />
            </CustomLink>
            <CustomLink
              to="https://linkedin.com"
              // className="text-blue-900 text-lg font-semibold"
              target="_blank"
              rel="noopener noreferrer"
              
            >
             
            <Image
              src="/Iconlinkedin.png"
              alt="Linkedin"
              width={28}
              height={28}
            />
            </CustomLink>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
