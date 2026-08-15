import Image from "next/image";

const ownerStats = [
  {
    value: "Est. 2020",
    label: "Fokus Pelayanan Konsisten",
  },
  {
    value: "500+",
    label: "Total Armada Aktif",
  },
  {
    value: "800+",
    label: "Mitra Supir Profesional",
  },
  {
    value: "25.000+",
    label: "Penumpang Telah Dilayani",
  },
];

export default function LeaderProfile() {
  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      id="owner"
      style={{
        background:
          "linear-gradient(135deg, #f8fafc 0%, #fff 50%, #f8fafc 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl opacity-40 -z-10 pointer-events-none"
        style={{ background: "#dbeafe" }}
      />
      <div
        className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl opacity-30 -z-10 pointer-events-none"
        style={{ background: "#fef9c3" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 px-4 py-1.5 rounded-full"
            style={{ background: "#FEF9C3", color: "#854D0E" }}
          >
            Tentang Kami
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
            style={{ color: "#1E3A8A" }}
          >
            Founder &amp; Owner
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Sosok visioner di balik armada yang telah melayani puluhan ribu
            penumpang lintas provinsi dengan standar premium.
          </p>
        </div>

        {/* Premium Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="flex flex-col md:flex-row items-stretch">
            {/* ── Left: Portrait Panel ── */}
            <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[400px]">
              <Image
                src="/images/owner-teuku-nasri.jpg"
                alt="Teuku Nasri Pratama — Owner & Founder Hiace Aceh"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="absolute inset-0 w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
              />
            </div>

            {/* ── Right: Content Panel ── */}
            <div className="w-full md:w-3/5 p-7 sm:p-8 md:p-12 flex flex-col justify-center bg-white">
              {/* Name + role */}
              <div className="mb-6">
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 leading-tight"
                  style={{ color: "#1E3A8A" }}
                >
                  Teuku Nasri Pratama
                </h3>
                <span
                  className="inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: "#FEF9C3", color: "#854D0E" }}
                >
                  Owner &amp; Founder — Group HIACE ACEH
                </span>
                <div
                  className="w-16 h-1.5 rounded-full mt-4"
                  style={{ background: "#EAB308" }}
                />
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-7 p-4 rounded-2xl" style={{ background: "#f8fafc" }}>
                {ownerStats.map((stat) => (
                  <div key={stat.value} className="text-center">
                    <div
                      className="text-lg sm:text-xl font-extrabold leading-none mb-1"
                      style={{ color: "#1E3A8A" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500 font-medium leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="text-base sm:text-lg text-gray-700 italic leading-relaxed mb-7 pl-5"
                style={{ borderLeft: "4px solid #EAB308" }}
              >
                &ldquo;Sejak 2020, visi kami tidak pernah berubah: menghadirkan
                standar transportasi lintas provinsi yang memberikan kenyamanan
                premium dan jaminan keamanan layaknya kendaraan pribadi.
                Lebih dari 25.000 penumpang telah mempercayakan perjalanan mereka bersama
                armada kami.&rdquo;
              </blockquote>

              {/* Signature row */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-black text-base flex-shrink-0"
                  style={{ borderColor: "#EAB308", color: "#EAB308" }}
                >
                  T
                </div>
                <div>
                  <p
                    className="font-extrabold text-sm leading-none mb-0.5"
                    style={{ color: "#1E3A8A" }}
                  >
                    Teuku Nasri Pratama
                  </p>
                  <p className="text-gray-400 text-xs font-medium">
                    — HIACE MEDAN ACEH RESMI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
