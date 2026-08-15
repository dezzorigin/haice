const services = [
  {
    title: "Sewa Hiace & Tour",
    description:
      "Rental armada premium + driver profesional untuk rombongan wisata, perjalanan dinas, dan acara keluarga.",
    // Local image path — fallback to Unsplash if file not found
    imageUrl: "/images/layanan-1.jpg",
    fallback: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&q=80",
    tag: "Rental & Charter",
  },
  {
    title: "Travel Antar Provinsi",
    description:
      "Medan–Banda Aceh (PP) setiap hari dengan jadwal tetap. Tepat waktu, nonstop, dan nyaman.",
    imageUrl: "/images/layanan-2.jpg",
    fallback: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=900&q=80",
    tag: "Rute Reguler",
  },
  {
    title: "Antar Jemput Bandara",
    description:
      "Drop & pick-up dari Bandara Kualanamu (KNO), Pelabuhan Belawan, dan Bandara Sultan Iskandar Muda.",
    imageUrl: "/images/layanan-3.jpg",
    fallback: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80",
    tag: "Airport Transfer",
  },
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-white" id="layanan">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 px-4 py-1.5 rounded-full"
            style={{ background: "#FEF9C3", color: "#854D0E" }}
          >
            Apa yang Kami Tawarkan
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
            style={{ color: "#1E3A8A" }}
          >
            Layanan Kami
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Solusi transportasi premium untuk berbagai kebutuhan perjalanan Anda.
          </p>
        </div>

        {/* Image-Heavy Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer"
              style={{ minHeight: "380px" }}
            >
              {/* Background image — try local first, Unsplash as CSS fallback */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{
                  backgroundImage: `url('${service.imageUrl}'), url('${service.fallback}')`,
                }}
              />

              {/* Dark gradient overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.50) 55%, rgba(15,23,42,0.10) 100%)",
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <span
                  className="inline-block self-start text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3"
                  style={{ background: "#EAB308", color: "#1E3A8A" }}
                >
                  {service.tag}
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-tight">
                  {service.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-xs">
                  {service.description}
                </p>

                {/* Hover CTA */}
                <div className="translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href="https://wa.me/6281373645393?text=Halo%20Admin%20Hiace%20Aceh,%20saya%20ingin%20informasi%20layanan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, #EAB308, #ca8a04)",
                      color: "#1E3A8A",
                    }}
                  >
                    Hubungi Kami →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
