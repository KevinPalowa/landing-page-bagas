import { BsGeoAlt, BsBell, BsBarChart } from "react-icons/bs";

const services = [
  {
    icon: <BsGeoAlt />,
    title: "Pelacakan Kendaraan Real-Time",
    description:
      "Pantau lokasi kendaraan Anda secara langsung kapan saja dan di mana saja.",
  },
  {
    icon: <BsBell />,
    title: "Pengingat Pemeliharaan Kendaraan",
    description: "Dapatkan pengingat otomatis untuk perawatan kendaraan Anda.",
  },
  {
    icon: <BsBarChart />,
    title: "Pantau Penggunaan Bahan Bakar",
    description:
      "Optimalkan pengeluaran bahan bakar kendaraan Anda secara akurat.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services section py-12">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Layanan</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 text-center bg-white rounded-lg shadow-lg"
              data-aos="fade-up"
            >
              <div className="text-blue-600 text-4xl mb-4">{service.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
