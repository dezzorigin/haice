export default function RouteMap() {
  const cities = [
    { name: "Banda Aceh", distance: "0 km", start: true },
    { name: "Sigli", distance: "110 km", start: false },
    { name: "Bireuen", distance: "220 km", start: false },
    { name: "Lhokseumawe", distance: "275 km", start: false },
    { name: "Langsa", distance: "370 km", start: false },
    { name: "Kuala Simpang", distance: "420 km", start: false },
    { name: "Binjai", distance: "520 km", start: false },
    { name: "Medan", distance: "570 km", start: false },
  ];

  const stats = [
    { value: "± 12 Jam", label: "Estimasi Perjalanan" },
    { value: "570 KM", label: "Total Jarak Tempuh" },
    { value: "8+", label: "Kota Singgah" },
    { value: "24/7", label: "Operasi Harian" },
  ];

  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      id="rute"
      style={{ background: "#f8fafc" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 px-4 py-1.5 rounded-full"
            style={{ background: "#FEF9C3", color: "#854D0E" }}
          >
            Peta Rute Armada
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
            style={{ color: "#1E3A8A" }}
          >
            Rute Aceh — Medan
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Armada kami melayani jalur utama Sumatera — dari ujung barat Banda
            Aceh hingga Kota Medan dan sebaliknya.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-14 max-w-3xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center p-4 md:p-5 rounded-2xl border bg-white"
              style={{
                borderColor: "#e2e8f0",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}
            >
              <div
                className="text-2xl md:text-3xl font-extrabold mb-1 leading-none"
                style={{ color: "#1E3A8A" }}
              >
                {s.value}
              </div>
              <div className="text-[10px] md:text-xs text-gray-500 font-semibold uppercase tracking-wider leading-tight mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps iframe */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            title="Rute Banda Aceh ke Medan"
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2065419.2310696847!2d96.13628063984375!3d4.589234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x30395e26caec6a91%3A0x7aef08ae9da1c97e!2sBanda%20Aceh%2C%20Aceh!3m2!1d5.5483352!2d95.32373129999999!4m5!1s0x3020d7d4dc29c00d%3A0xb8c2210b2e29aac6!2sMedan%2C%20Sumatera%20Utara!3m2!1d3.5952099!2d98.6721522!5e0!3m2!1sid!2sid!4v1692000000000!5m2!1sid!2sid"
            className="w-full"
            style={{ border: 0, height: "360px" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Overlay badge */}
          <div
            className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg z-10 max-w-[calc(100%-1.5rem)]"
            style={{
              background: "rgba(15,23,42,0.85)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse flex-shrink-0"
              style={{ background: "#EAB308" }}
            />
            <span className="text-white text-xs sm:text-sm font-bold truncate">
              Jalur Utama: Banda Aceh ↔ Medan
            </span>
          </div>
        </div>

        {/* City Stops — vertical on mobile, horizontal on desktop */}
        <div className="mt-8 md:mt-10 bg-white rounded-3xl p-5 sm:p-6 md:p-8 shadow-sm border border-gray-100">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-6"
            style={{ color: "#94a3b8" }}
          >
            Titik Singgah Utama
          </p>

          {/* ── MOBILE: vertical timeline ── */}
          <div className="flex flex-col gap-0 md:hidden relative">
            {/* Vertical connector line */}
            <div
              className="absolute left-[7px] top-4 bottom-4 w-0.5"
              style={{
                background:
                  "linear-gradient(to bottom, #1E3A8A, #EAB308, #1E3A8A)",
              }}
            />
            {cities.map((city, i) => (
              <div
                key={city.name}
                className="flex items-center gap-4 relative py-2"
              >
                {/* Dot */}
                <div
                  className="w-4 h-4 rounded-full border-2 border-white flex-shrink-0 z-10 shadow"
                  style={{
                    background:
                      i === 0 || i === cities.length - 1
                        ? "#EAB308"
                        : "#1E3A8A",
                  }}
                />
                <div>
                  <span
                    className="text-sm font-extrabold leading-none block"
                    style={{ color: "#1E3A8A" }}
                  >
                    {city.name}
                  </span>
                  <span className="text-[11px] text-gray-400 font-medium">
                    {city.distance}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ── DESKTOP: horizontal timeline ── */}
          <div className="hidden md:block overflow-x-auto">
            <div className="relative flex items-start min-w-[640px]">
              {/* Horizontal line */}
              <div
                className="absolute left-0 right-0 h-1 rounded-full"
                style={{
                  top: "8px",
                  background:
                    "linear-gradient(90deg, #1E3A8A, #EAB308, #1E3A8A)",
                }}
              />
              {cities.map((city, i) => (
                <div
                  key={city.name}
                  className="flex flex-col items-center relative"
                  style={{ flex: 1 }}
                >
                  <div
                    className="w-4 h-4 rounded-full border-2 border-white z-10 flex-shrink-0 shadow-md"
                    style={{
                      background:
                        i === 0 || i === cities.length - 1
                          ? "#EAB308"
                          : "#1E3A8A",
                    }}
                  />
                  <div className="mt-3 text-center px-1">
                    <div
                      className="text-xs font-extrabold leading-tight"
                      style={{ color: "#1E3A8A" }}
                    >
                      {city.name}
                    </div>
                    <div className="text-[10px] text-gray-400 font-medium mt-0.5">
                      {city.distance}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
