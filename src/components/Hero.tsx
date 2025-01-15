const Hero = () => {
  return (
    <section id="hero" className="hero section relative bg-cover bg-center">
      <img
        src="assets/img/hero-bg-abstract.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        data-aos="fade-in"
      />

      <div className="container mx-auto relative z-10 px-4 lg:px-16">
        <div className="flex justify-center text-center" data-aos="zoom-out">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#124265]">
              The Future of Fleet
            </h1>
            <p className="text-lg lg:text-xl mt-4 text-gray-300">
              Keamanan dan Efisiensi Kendaraan Anda dalam Satu Platform
            </p>
          </div>
        </div>

        <div
          className="text-center mt-6"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          <a
            href="#about"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Mulai
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div
            className="p-6 text-center bg-white rounded-lg shadow-lg"
            data-aos="zoom-out"
            data-aos-delay="100"
          >
            <div className="text-blue-600 text-4xl mb-4">
              <i className="bi bi-geo-alt"></i>
            </div>
            <h4 className="text-xl font-semibold mb-2">
              Pelacakan Kendaraan Real-Time
            </h4>
            <p className="text-gray-600">
              Dengan Fleetwize, Anda bisa memantau lokasi kendaraan Anda kapan
              saja, sehingga lebih tenang dalam perjalanan.
            </p>
          </div>
          {/* Add other icon boxes following the same structure */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
