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
              <a
                href="https://x.com/FleetGPS"
                className="text-blue-600 hover:text-blue-800 text-xl"
              >
                <BsTwitter />
              </a>
              <a
                href="https://www.facebook.com/Kharscoffee"
                className="text-blue-600 hover:text-blue-800 text-xl"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.instagram.com/fleetgps.id"
                className="text-blue-600 hover:text-blue-800 text-xl"
              >
                <BsInstagram />
              </a>
              <a
                href=" https://www.linkedin.com/in/fleetgps-id-104a05346"
                className="text-blue-600 hover:text-blue-800 text-xl"
              >
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
                <a href="#hero" className="hover:text-blue-600">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-600">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600">
                  Contact
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
              <a href="https://wa.me/6283850557070" target="_blank">
                +62 838-5055-7070 (Chat Only)
              </a>
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong>{" "}
              <a href="mailto:fleetgpsid@gmail.com">fleetgpsid@gmail.com </a>
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
