import { useState } from "react";
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header sticky top-0 bg-white shadow z-50">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-16 py-7">
        <a href="/" className="logo flex items-center">
          <h1 className="text-2xl font-bold text-gray-800">fleetGPS.id</h1>
        </a>
        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <a href="#hero" className="text-gray-800 hover:text-blue-600">
              Beranda
            </a>
            <a href="#about" className="text-gray-800 hover:text-blue-600">
              Tentang Kami
            </a>
            <a href="#services" className="text-gray-800 hover:text-blue-600">
              Layanan
            </a>
            <a href="#contact" className="text-gray-800 hover:text-blue-600">
              Kontak
            </a>
          </nav>

          {/* Get Started Button */}
          <a
            href="#about"
            className="hidden lg:block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Mulai Gratis
          </a>

          {/* Hamburger Button */}
          <button
            className="lg:hidden text-gray-800 text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <AiOutlineClose /> : <BsList />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a
                href="#hero"
                className="text-gray-800 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-800 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-800 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Layanan
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-800 hover:text-blue-600"
                onClick={toggleMenu}
              >
                Kontak
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition block text-center"
                onClick={toggleMenu}
              >
                Mulai Gratis
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
