import { BsCheck, BsX } from "react-icons/bs";

const pricingPlans = [
  {
    name: "Standar",
    price: "999.000",
    duration: "/ Bulan",
    features: [
      "Pelacakan lokasi real-time",
      "Playback histori perjalanan",
      "Alarm notifikasi kendaraan",
      "Platform monitor iOS/Android",
      "Gratis paket pulsa selama 1 tahun (Rp 70.000/Bulan)",
      "Support 24/7",
      "na:Notifikasi batasan wilayah (geofence)",
      "na:Sadap suara",
      "na:Matikan mesin jarak jauh",
      "na:Tombol SOS",
      "na:CANbus (Control Area Network)",
      "na:Driver behavior",
      "na:Monitoring bahan bakar",
      "na:Sensor (pintu, suhu, & identitas pengemudi)",
      "na:Kamera dual cam",
      "na:Kamera DMS (Driver Monitoring System)",
      "na:Kamera ADAS (Advanced Driver Assistance System)",
      "na:Kamera livestreaming (Pemantauan kamera langsung)",
    ],
    isFeatured: false,
  },
  {
    name: "Plus",
    price: "1.599.000",
    duration: "/ Bulan",
    features: [
      "Pelacakan lokasi real-time",
      "Playback histori perjalanan",
      "Alarm notifikasi kendaraan",
      "Platform monitor iOS/Android",
      "Gratis paket pulsa selama 1 tahun (Rp 70.000/Bulan)",
      "Support 24/7",
      "Notifikasi batasan wilayah (geofence)",
      "Sadap suara",
      "Matikan mesin jarak jauh",
      "Tombol SOS",
      "na:CANbus (Control Area Network)",
      "na:Driver behavior",
      "na:Monitoring bahan bakar",
      "na:Sensor (pintu, suhu, & identitas pengemudi)",
      "na:Kamera dual cam",
      "na:Kamera DMS (Driver Monitoring System)",
      "na:Kamera ADAS (Advanced Driver Assistance System)",
      "na:Kamera livestreaming (Pemantauan kamera langsung)",
    ],
    isFeatured: true,
  },
  {
    name: "Pro",
    price: "Hubungi Kami",
    duration: "",
    features: [
      "Pelacakan lokasi real-time",
      "Playback histori perjalanan",
      "Alarm notifikasi kendaraan",
      "Platform monitor iOS/Android",
      "Gratis paket pulsa selama 1 tahun (Rp 70.000/Bulan)",
      "Support 24/7",
      "Notifikasi batasan wilayah (geofence)",
      "Sadap suara",
      "Matikan mesin jarak jauh",
      "Tombol SOS",
      "CANbus (Control Area Network)",
      "Driver behavior",
      "Monitoring bahan bakar",
      "Sensor (pintu, suhu, & identitas pengemudi)",
      "Kamera dual cam",
      "Kamera DMS (Driver Monitoring System)",
      "Kamera ADAS (Advanced Driver Assistance System)",
      "Kamera livestreaming (Pemantauan kamera langsung)",
    ],
    isFeatured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing section py-16 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Section Title */}
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800">Harga</h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-item p-6 rounded-lg shadow-lg ${
                plan.isFeatured ? "bg-blue-100" : "bg-white"
              }`}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {plan.name}
              </h3>
              <h4 className="text-4xl font-bold text-blue-600 mb-6">
                <sup className="text-xl">Rp</sup>
                {plan.price !== "Hubungi Kami" ? (
                  <>
                    {plan.price}
                    <span className="text-base text-gray-600">
                      {" "}
                      {plan.duration}
                    </span>
                  </>
                ) : (
                  <span className="text-base text-gray-600">{plan.price}</span>
                )}
              </h4>
              <ul className="space-y-4 mb-6">
                {plan.features.map((feature, i) => {
                  const isUnavailable = feature.startsWith("na:");
                  const featureText = feature.replace("na:", "");

                  // Check for "70.000" and apply <del> tag
                  const updatedFeatureText = featureText.includes("70.000") ? (
                    <>
                      Gratis paket pulsa selama 1 tahun (Rp <del>70.000</del>
                      /Bulan)
                    </>
                  ) : (
                    featureText
                  );

                  return (
                    <li
                      key={i}
                      className={`flex items-center ${
                        isUnavailable ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {isUnavailable ? (
                        <BsX className="text-red-500 mr-2" />
                      ) : (
                        <BsCheck className="text-green-500 mr-2" />
                      )}
                      <span>{updatedFeatureText}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="text-center">
                <a
                  href="https://wa.me/6283850557070"
                  className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                >
                  {plan.price !== "Hubungi Kami" ? "Pasang" : "Hubungi Kami"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
