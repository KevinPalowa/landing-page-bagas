const Header = () => {
  return (
    <header className="header sticky top-0 bg-white shadow z-50">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-16 py-7">
        <a href="/" className="logo flex items-center">
          <h1 className="text-2xl font-bold text-gray-800">Fleetwize</h1>
        </a>
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
        <button className="lg:hidden text-gray-800 text-2xl">
          <i className="bi bi-list"></i>
        </button>
        <a
          href="#about"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
        >
          Mulai Gratis
        </a>
      </div>
    </header>
  );
};

export default Header;
