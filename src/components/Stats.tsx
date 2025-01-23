const stats = [
  { count: 3, label: "Pengguna" },
  { count: 2, label: "Proyek" },
  { count: 168, label: "Jam Dukungan" },
  { count: 5, label: "Pekerja" },
];

const Stats = () => {
  return (
    <section id="stats" className="stats section py-12 bg-gray-100">
      <div
        className="container mx-auto px-4 lg:px-16"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-blue-50">
          {stats.map((stat, index) => (
            <div key={index} className="stats-item text-center   p-6">
              <span className="text-4xl font-bold text-blue-600">
                {stat.count}
              </span>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
