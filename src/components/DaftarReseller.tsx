import { useState } from "react";
import ResellerModal from "./Modal";

const DaftarReseller = () => {
  const [open, isOpen] = useState(false);
  return (
    <section id="daftar-reseller" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Daftar Jadi Reseller
        </h2>
        <p className="text-gray-600 mb-8">
          Gabung Reseller kami dan dapat kan keuntungan yang menarik
        </p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition" onClick={() => isOpen(true)}>Daftar Reseller</button>
        <ResellerModal isOpen={open} onClose={() => isOpen(false)} />
      </div>
    </section>
  );
};
export default DaftarReseller;
