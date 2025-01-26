import { useState } from "react";

const testimonials = [
  {
    quote:
      "saya menggunakan fleetgpsid selama 8bulan dasaya merasakan manfaatnya untuk memonitoring kenadaraan saya, dan tidak perlu khawatir karna dapat dimatikan mesinnya jarak jauh, serta menhemat bahan bakardan biaya untuk perawatan",
    img: "/assets/img/testi-2.jpg",
    name: "Bunga Fauziah",
    role: "Pengguna Pribadi",
  },
  {
    quote:
      "Saya telah menggunakan GPS dari FleetGPS selama lebih dari satu tahun, dan sangat puas dengan keandalannya. Berkat FleetGPS, saya merasa lebih aman saat bekerja di malam hari. Pernah suatu ketika saya mengalami kejadian tidak menyenangkan, yaitu menjadi korban begal. Namun, berkat teknologi GPS dari FleetGPS, pelaku berhasil ditemukan dengan cepat. Terima kasih FleetGPS, kini saya dapat bekerja dengan lebih tenang dan percaya diri!",
    img: "/assets/img/testi-1.jpg",
    name: "Syaipul ",
    role: "Driver ojek online",
  },
  {
    quote:
      "Fitur pengingat pemeliharaan sangat membantu! Kendaraan saya selalu dalam kondisi terbaik dan tidak pernah terlewat untuk servis rutin.",
    img: "/assets/img/testi-3.webp",
    name: "Lia",
    role: "Pengguna fleetGPS.id",
  },
];
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <section
      id="testimonials"
      className="testimonials section py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Testimoni Pengguna
          </h2>
        </div>

        {/* Mobile View: Carousel */}
        <div className="relative lg:hidden">
          <div className="testimonial-item bg-white rounded-lg shadow-lg p-6 text-center mx-auto max-w-xl">
            <p className="text-gray-600 italic mb-6">
              <i className="text-blue-600 mr-2">“</i>
              {testimonials[currentIndex].quote}
              <i className="text-blue-600 ml-2">”</i>
            </p>
            <img
              src={testimonials[currentIndex].img}
              alt={testimonials[currentIndex].name}
              className="testimonial-img w-20 h-20 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-bold text-gray-800">
              {testimonials[currentIndex].name}
            </h3>
            <h4 className="text-sm text-blue-600">
              {testimonials[currentIndex].role}
            </h4>
          </div>

          {/* Navigation Buttons (Mobile Only) */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition"
          >
            &gt;
          </button>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-item bg-white rounded-lg shadow-lg p-6 text-center flex flex-col justify-between"
            >
              <p className="text-gray-600 italic mb-6">
                <i className="text-blue-600 mr-2">“</i>
                {testimonial.quote}
                <i className="text-blue-600 ml-2">”</i>
              </p>
              <div>
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="testimonial-img w-20 h-20 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-gray-800">
                  {testimonial.name}
                </h3>
                <h4 className="text-sm text-blue-600">{testimonial.role}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
