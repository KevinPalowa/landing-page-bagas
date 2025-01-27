import { useState } from "react";
import { toast } from "react-toastify";

const ResellerModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    province: "",
    city: "",
    address: "",
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
    const chatId = "-1002442130345"; // Replace with your channel ID
    const message = `
      📝 *New Reseller Application*:
      - *Nama*: ${formData.name}
      - *Email*: ${formData.email}
      - *No Telepon WhatsApp*: ${formData.phone}
      - *Provinsi*: ${formData.province}
      - *Kota*: ${formData.city}
      - *Alamat Lengkap*: ${formData.address}
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
        toast.success("Pendaftaran reseller telah dikirim");
        setFormData({
          name: "",
          email: "",
          phone: "",
          province: "",
          city: "",
          address: "",
        });
        onClose();
      } else {
        toast.error("Gagal mengirim pendaftaran. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error sending application to Telegram:", error);
      toast.error("Tidak dapat mengirim pendaftaran. Periksa koneksi Anda.");
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={() => onClose()}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>

            {/* Modal Header */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Reseller Application
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nama"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="No Telepon WhatsApp"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="province"
                  value={formData.province}
                  onChange={handleInputChange}
                  className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Provinsi"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Kota"
                  required
                />
              </div>

              <div>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={4}
                  className="form-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Alamat Lengkap"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResellerModal;
