import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer" className="footer py-16 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Footer Top */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="footer-about">
            <a
              href="index.html"
              className="flex items-center text-2xl font-bold text-blue-600"
            >
              fleetGPS.id
            </a>
            <p className="mt-4 text-gray-600">
              Keamanan dan Efisiensi Kendaraan Anda dalam Satu Platform
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">
                <BsTwitter />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">
                <BsFacebook />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">
                <BsInstagram />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-xl">
                <BsLinkedin />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="footer-links">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Tautan Berguna
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Ketentuan Layanan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-links">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Kontak Kami
            </h4>
            <p className="text-gray-600">Indonesia</p>
            <p className="mt-4 text-gray-600">
              <strong>Whatsapp:</strong>{" "}
              <span>+62 838-5055-7070 (Chat Only)</span>
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> <span>leetgpsid@gmail.com </span>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            © <span>Copyright</span>{" "}
            <strong className="text-blue-600">fleetGPS.id</strong>.{" "}
            <span>Semua hak cipta dilindungi</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
