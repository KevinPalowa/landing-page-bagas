import {
  BsGeoAlt,
  BsTools,
  BsFuelPump,
  BsGraphUp,
  BsPower,
  BsCameraVideo,
} from "react-icons/bs";

const data = [
  {
    title: "Pelacakan Kendaraan Real-Time",
    desc: "Dengan fleetGPS.id, Anda bisa memantau lokasi kendaraan Anda kapan saja, sehingga lebih tenang dalam perjalanan.",
    icon: <BsGeoAlt />,
  },
  {
    title: "Pemberitahuan Pemeliharaan Kendaraan",
    desc: "Jangan pernah lewatkan jadwal servis atau perawatan rutin kendaraan Anda lagi. fleetGPS.id akan mengingatkan Anda.",
    icon: <BsTools />,
  },
  {
    title: "Pantau Penggunaan Bahan Bakar",
    desc: "Optimalkan pengeluaran bahan bakar Anda dengan memantau penggunaan bahan bakar kendaraan secara akurat.",
    icon: <BsFuelPump />,
  },
  {
    title: "Laporan dan Analisis",
    desc: "Dapatkan laporan perjalanan yang membantu Anda memahami penggunaan kendaraan dan merencanakan perjalanan lebih baik.",
    icon: <BsGraphUp />,
  },
  {
    title: "Matikan Mesin",
    desc: "Memungkinkan untuk mematikan mesin kendaraan dari jarak jauh dalam situasi darurat atau keamanan kendaraan.",
    icon: <BsPower />,
  },
  {
    title: "Pemantauan Kamera",
    desc: "Memungkinkan untuk melihat kondisi atau kejadian secara langsung melalui kamera yang terpasang di kendaraan.",
    icon: <BsCameraVideo />,
  },
];

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
            <p className="text-lg lg:text-xl mt-4 text-gray-500">
              Mudah Pantau Kendaraan Melalui Smartphonemu
            </p>
          </div>
        </div>

        <div
          className="text-center mt-6"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          <a
            href="https://wa.me/6283850557070"
            target="_blank"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Pasang Sekarang
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {data.map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-lg shadow-lg text-left transition-transform duration-300 transform hover:scale-105"
              data-aos="zoom-out"
              data-aos-delay={100 * index}
            >
              <div className="text-blue-600 text-4xl mb-4 flex items-center">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2 text-[#124265] group-hover:text-[#2487ce]">
                {item.title}
              </h4>
              <p className="text-gray-400 transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
