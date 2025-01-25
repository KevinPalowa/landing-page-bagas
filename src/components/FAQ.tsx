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
      "jika sudah melewati 1 tahun aktif, berapa biaya langganan selanjutnya?",
    answer: "Cukup membayar Rp600.000 per tahun atau Rp70.000 per bulan.",
  },
  {
    question: "Setelah servis kendaraan, GPS saya tiba-tiba mati?",
    answer:
      "Tim akan membantu anda dalam proses perbaikan GPS, diluar garansi sewa.",
  },
  {
    question: "Apakah saya bisa membeli putus GPS ini?",
    answer:
      "Tentu saja bisa! Anda akan mendapatkan gratis biaya server dan pulsa selama 2 tahun",
  },
  {
    question: "Apakah saya bisa berlangganan hanya platform monitoring saja?",
    answer:
      "Tentu bisa, Anda memiliki fleksibilitas untuk berlangganan hanya platform monitoring saja atau layanan SIM-card saja, sesuai kebutuhan Anda.",
  },

  {
    question:
      "Apakah saya bisa request fitur yang lebih canggih sesuai kebutuhan bisnis?",
    answer:
      "Tentu saja bisa! Kami memiliki tim R&D profesional yang siap menyesuaikan fitur dengan kebutuhan spesifik bisnis Anda.",
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
