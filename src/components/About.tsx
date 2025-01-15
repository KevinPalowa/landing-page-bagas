const About = () => {
  return (
    <section id="about" className="about section py-12 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Tentang Kami</h2>
          <p className="mt-4 text-gray-600">
            Fleetwize hadir untuk membantu Anda mengelola kendaraan dengan lebih
            cerdas.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/2">
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="bi bi-check-circle text-blue-600 text-xl mr-4"></i>
                <p className="text-gray-600">Kemudahan Akses</p>
              </li>
              <li className="flex items-start">
                <i className="bi bi-check-circle text-blue-600 text-xl mr-4"></i>
                <p className="text-gray-600">Hemat Biaya</p>
              </li>
              <li className="flex items-start">
                <i className="bi bi-check-circle text-blue-600 text-xl mr-4"></i>
                <p className="text-gray-600">Lebih Aman</p>
              </li>
              <li className="flex items-start">
                <i className="bi bi-check-circle text-blue-600 text-xl mr-4"></i>
                <p className="text-gray-600">Mengurangi Stres</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
