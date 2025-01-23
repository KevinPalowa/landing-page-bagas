import { LuCircleCheckBig } from "react-icons/lu";

const About = () => {
  return (
    <section id="about" className="about section py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
              Tentang Kami
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              fleetGPS.ID hadir untuk membantu Anda mengelola kendaraan pribadi
              atau keluarga Anda dengan lebih cerdas. Dengan teknologi pelacakan
              real-time, pengingat pemeliharaan otomatis, dan pemantauan
              konsumsi bahan bakar, fleetGPS.ID memudahkan Anda untuk menjaga
              kendaraan tetap dalam kondisi prima dan menghemat biaya
              operasional.
            </p>
          </div>
          <ul className="space-y-6">
            {[
              {
                title: "Kemudahan Akses",
                desc: "Aplikasi fleetGPS.ID tersedia di smartphone Anda, memberikan kemudahan akses di ujung jari Anda kapan saja dan di mana saja.",
              },
              {
                title: "Hemat Biaya",
                desc: "Dengan memonitor konsumsi bahan bakar dan mematuhi jadwal perawatan, fleetGPS.ID membantu Anda mengurangi pengeluaran yang tidak perlu.",
              },
              {
                title: "Lebih Aman",
                desc: "Keamanan kendaraan lebih terjamin dengan fitur pelacakan yang terus menerus, memberi Anda ketenangan pikiran di setiap perjalanan.",
              },
              {
                title: "Mengurangi Stres",
                desc: "Berkendara tanpa khawatir—fleetGPS.ID memastikan kendaraan Anda selalu dalam kondisi terbaik dan siap untuk digunakan.",
              },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="p-4 bg-blue-100 text-blue-600 rounded-full">
                  <LuCircleCheckBig className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
