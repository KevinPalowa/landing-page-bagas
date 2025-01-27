import { BsTelephone, BsEnvelope } from "react-icons/bs";
import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const botToken = "7302897669:AAF08-22QRLWxzis11YZgX3bV4AYVmTOzg0"; // Replace with your bot's API token
    const chatId = "-1002442130345"; // Replace with your chat ID
    const message = `
      📝 *New Contact Form Submission*:
      - *Name*: ${formData.name}
      - *Email*: ${formData.email}
      - *Subject*: ${formData.subject}
      - *Message*: ${formData.message}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "Markdown",
          }),
        },
      );

      if (response.ok) {
        toast.success("Pesan berhasil dikirim!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Terjadi kesalahan. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
      toast.error("Tidak dapat mengirim pesan. Periksa koneksi Anda.");
    }
  };

  return (
    <section id="contact" className="contact section py-16 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Title */}
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800">Kontak</h2>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Contact Information */}
          <div className="space-y-6">
            <div
              className="info-item flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <BsTelephone className="text-3xl text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Kontak Kami
                </h3>
                <a
                  href="https://wa.me/6283850557070"
                  target="_blank"
                  className="text-gray-600"
                >
                  +62 838-5055-7070 (Chat Only)
                </a>
              </div>
            </div>

            <div
              className="info-item flex items-start space-x-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <BsEnvelope className="text-3xl text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Email Kami
                </h3>
                <a href="mailto:fleetgpsid@gmail.com" className="text-gray-600">
                  fleetgpsid@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-lg space-y-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nama anda"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email anda"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-input w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subjek"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="form-input w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Pesan"
                required
              ></textarea>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
