import { MapPin, Phone, Mail } from "lucide-react";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.01a8.16 8.16 0 004.77 1.52V7.07a4.85 4.85 0 01-1-.38z" />
    </svg>
  );
}

export default function AddressMap() {
  const contactDetails = [
    {
      icon: <MapPin className="w-5 h-5 flex-shrink-0" />,
      label: "Alamat",
      value: "Jln Merak No 24 Sei Sekambing Medan Sunggal, Kota Medan, Sumatera Utara 20122",
      href: "https://maps.app.goo.gl/dUAF5S8sXZp7tyhC7",
    },
    {
      icon: <Phone className="w-5 h-5 flex-shrink-0" />,
      label: "Telepon / WhatsApp",
      value: "+62 813 7364 5393",
      href: "https://wa.me/6281373645393",
    },
    {
      icon: <Mail className="w-5 h-5 flex-shrink-0" />,
      label: "Email",
      value: "cs@travelhiaceaceh.com",
      href: "mailto:cs@travelhiaceaceh.com",
    },
  ];

  const socials = [
    {
      icon: <InstagramIcon />,
      label: "Instagram",
      href: "https://www.instagram.com/travelhiaceaceh/",
      color: "#E1306C",
    },
    {
      icon: <TikTokIcon />,
      label: "TikTok",
      href: "https://tiktok.com/@travelhiaceaceh",
      color: "#000000",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="lokasi">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 px-4 py-1.5 rounded-full"
            style={{ background: "#FEF9C3", color: "#854D0E" }}
          >
            Temukan Kami
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight"
            style={{ color: "#1E3A8A" }}
          >
            Lokasi &amp; Kontak
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Kunjungi kantor kami atau hubungi langsung untuk pemesanan dan informasi rute.
          </p>
        </div>

        {/* ── Responsive 2-col grid — stacks on mobile ── */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">

          {/* ── Left col: Google Maps iframe ── */}
          <div className="relative min-h-[300px] md:min-h-0">
            <iframe
              title="Lokasi Kantor Hiace Aceh Medan"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.011598670296!2d98.6283857758966!3d3.584810950318206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312e4c3ee47ff1%3A0x92e6c65599ea26f8!2sJl.%20Merak%20No.24%2C%20Sei%20Sikambing%20B%2C%20Kec.%20Medan%20Sunggal%2C%20Kota%20Medan%2C%20Sumatera%20Utara%2020122!5e0!3m2!1sid!2sid!4v1786824606011!5m2!1sid!2sid"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />

            {/* Red pin overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="flex flex-col items-center">
                <MapPin
                  className="w-12 h-12"
                  style={{
                    color: "#ef4444",
                    filter: "drop-shadow(0 4px 10px rgba(239,68,68,0.6))",
                  }}
                />
                <span
                  className="mt-1 px-3 py-1 rounded-full text-xs font-bold text-white shadow"
                  style={{ background: "rgba(15,23,42,0.80)", backdropFilter: "blur(6px)" }}
                >
                  Kantor Pusat
                </span>
              </div>
            </div>

            {/* Open maps link */}
            <a
              href="https://maps.app.goo.gl/dUAF5S8sXZp7tyhC7"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white shadow-lg hover:scale-105 transition-all whitespace-nowrap"
              style={{ background: "rgba(15,23,42,0.85)", backdropFilter: "blur(6px)" }}
            >
              <MapPin className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
              Buka di Google Maps
            </a>
          </div>

          {/* ── Right col: Contact info ── */}
          <div
            className="flex flex-col justify-center p-7 sm:p-8 md:p-10 lg:p-12"
            style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)" }}
          >
            <div className="mb-7">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-2 leading-tight">
                Kantor Pusat Medan
              </h3>
              <div className="w-14 h-1.5 rounded-full" style={{ background: "#EAB308" }} />
            </div>

            {/* Contact items */}
            <div className="space-y-5 mb-8">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: "rgba(234,179,8,0.2)", color: "#EAB308" }}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-white font-semibold leading-snug group-hover:text-yellow-300 transition-colors text-sm md:text-base break-words">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="mb-7">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4">
                Media Sosial
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1"
                    style={{ background: s.color, color: "white" }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/6281373645393?text=Halo%20Admin%20Hiace%20Aceh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-bold text-base transition-all hover:scale-105 w-full"
              style={{
                background: "linear-gradient(135deg, #EAB308, #ca8a04)",
                color: "#1E3A8A",
              }}
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
