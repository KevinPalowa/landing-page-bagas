import {
  BsActivity,
  BsBroadcast,
  BsEasel,
  BsBoundingBoxCircles,
  BsCalendar4Week,
  BsChatSquareText,
} from "react-icons/bs";

const services = [
  {
    icon: <BsActivity />,
    title: "Pelacakan Kendaraan Real-Time",
    description:
      "Pantau lokasi kendaraan Anda secara langsung kapan saja dan di mana saja. Dengan teknologi GPS canggih, fleetGPS.id memberi Anda informasi lokasi kendaraan dalam waktu nyata, memberikan rasa aman dan kenyamanan setiap kali Anda atau anggota keluarga bepergian.",
    link: "service-details.html",
    color: "bg-white",
  },
  {
    icon: <BsBroadcast />,
    title: "Pengingat Pemeliharaan Kendaraan Otomatis",
    description:
      "Jangan khawatir lagi melupakan jadwal servis rutin. fleetGPS.id memberikan pengingat otomatis untuk perawatan kendaraan Anda, mulai dari penggantian oli, pengecekan rem, hingga pemeriksaan berkala lainnya. Semua bisa diatur melalui aplikasi, sehingga kendaraan Anda selalu dalam kondisi terbaik.",
    link: "service-details.html",
    color: "bg-white",
  },
  {
    icon: <BsEasel />,
    title: "Pemantauan Penggunaan Bahan Bakar",
    description:
      "fleetGPS.id memungkinkan Anda memantau konsumsi bahan bakar kendaraan secara akurat. Dengan fitur ini, Anda bisa mengidentifikasi pola penggunaan bahan bakar dan membuat keputusan yang lebih bijak untuk menghemat pengeluaran.",
    link: "service-details.html",
    color: "bg-white",
  },
  {
    icon: <BsBoundingBoxCircles />,
    title: "Laporan Perjalanan & Analisis",
    description:
      "Dapatkan laporan lengkap mengenai perjalanan Anda—jarak tempuh, kecepatan, konsumsi bahan bakar, hingga waktu yang dihabiskan di jalan. Dengan laporan yang mudah dipahami, fleetGPS.id membantu Anda merencanakan perjalanan dengan lebih baik, serta mengetahui pola penggunaan kendaraan.",
    link: "service-details.html",
    color: "bg-white",
  },
  {
    icon: <BsCalendar4Week />,
    title: "Keamanan Kendaraan dengan Geofencing",
    description:
      "Fitur Geofencing memungkinkan Anda mengatur area aman di mana kendaraan Anda dapat berada. Jika kendaraan Anda keluar dari zona yang telah ditentukan, Anda akan menerima notifikasi segera. Ini memberikan lapisan tambahan keamanan bagi kendaraan Anda.",
    link: "service-details.html",
    color: "bg-white",
  },
  {
    icon: <BsChatSquareText />,
    title: "Dukungan Pelanggan 24/7",
    description:
      "Dapatkan dukungan pelanggan kapan saja, 24 jam sehari, 7 hari seminggu. Jika Anda mengalami masalah dengan aplikasi atau memerlukan bantuan terkait kendaraan, tim kami siap memberikan solusi.",
    link: "service-details.html",
    color: "bg-white",
  },
];

const Services = () => {
  return (
    <section id="services" className="services section py-16 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Title */}
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800">Layanan</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-item p-6 rounded-lg shadow-lg ${service.color} relative`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="icon mb-4 text-center">
                <div className="w-20 h-20 mx-auto flex items-center justify-center text-4xl text-white rounded-full bg-blue-600">
                  {service.icon}
                </div>
              </div>
              <a href={service.link} className="stretched-link">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
              </a>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
