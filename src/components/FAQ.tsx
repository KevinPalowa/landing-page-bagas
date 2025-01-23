import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";

const faqs = [
  {
    question: "Apakah ada garansi pada setiap unit yang terpasang?",
    answer:
      "Garansi tersedia selama masa sewa selama memenuhi syarat dan ketentuan yang berlaku.",
  },
  {
    question: "Apakah saya bisa memonitoring bahan bahar?",
    answer: "Tentu, kami bisa menyesuaikan dengan permintaan anda.",
  },
  {
    question: "Bagaimana jika kendaraan saya dicuri?",
    answer:
      "Anda bisa menggunakan fitur Immobilizer untuk memutuskan aliran listrik pada kendaraan anda, dan sesegera mungkin hubungi kami.",
  },
  {
    question:
      "Apakah ada santunan jika terjadi kecelakaan pada unit yang terpasang GPS?",
    answer:
      "Tidak, saat ini kami hanya membantu dalam proses laporan data GPS saja.",
  },
  {
    question: "Setelah servis kendaraan, GPS saya tiba-tiba mati?",
    answer:
      "Tim akan membantu anda dalam proses perbaikan GPS, diluar garansi sewa.",
  },
  {
    question: "Apakah saya bisa membeli putus GPS ini?",
    answer: "Bisa, dan gratis biaya server selama 12 Bulan.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq section py-16 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Title */}
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item border-b ${
                activeIndex === index
                  ? "faq-active bg-white shadow"
                  : "bg-gray-50"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="flex justify-between items-center cursor-pointer py-4 px-6"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-gray-800">
                  {faq.question}
                </h3>
                <BsChevronRight
                  className={`text-xl text-gray-600 transition-transform ${
                    activeIndex === index ? "rotate-90" : ""
                  }`}
                />
              </div>
              {activeIndex === index && (
                <div className="faq-content px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
