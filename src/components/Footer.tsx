const Footer = () => {
  return (
    <footer className="footer py-8 bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center">
          <h3 className="text-xl font-bold text-white">Fleetwize</h3>
          <p className="mt-2">Keamanan dan Efisiensi Kendaraan Anda</p>
          <div className="flex justify-center mt-4 space-x-6">
            <a href="#" className="text-blue-500 hover:text-white">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-blue-500 hover:text-white">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-blue-500 hover:text-white">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-blue-500 hover:text-white">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
          <p className="mt-4 text-sm">
            &copy; 2025 Fleetwize. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
