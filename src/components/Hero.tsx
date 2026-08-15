"use client";

import { useState } from "react";
import { ChevronDown, MapPin, Calendar, Clock, Car, UserCheck, Users } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const fromOptions = [
  "Medan (Kualanamu / KNO)",
  "Medan (Kota)",
  "Pelabuhan Belawan",
  "Banda Aceh",
  "Lhokseumawe",
  "Bireuen",
  "Langsa",
];

const toOptions: Record<string, string[]> = {
  "Medan (Kualanamu / KNO)": ["Banda Aceh", "Sigli (Pidie)", "Bireuen", "Lhokseumawe", "Langsa", "Takengon", "Beureunuen", "Kuala Simpang"],
  "Medan (Kota)": ["Banda Aceh", "Sigli (Pidie)", "Bireuen", "Lhokseumawe", "Langsa", "Kuala Simpang", "Takengon"],
  "Pelabuhan Belawan": ["Banda Aceh", "Lhokseumawe", "Bireuen", "Langsa"],
  "Banda Aceh": ["Medan (Kualanamu / KNO)", "Medan (Kota)", "Lhokseumawe", "Bireuen", "Sigli", "Kuala Simpang", "Langsa"],
  "Lhokseumawe": ["Medan (Kualanamu / KNO)", "Banda Aceh", "Takengon", "Bireuen"],
  "Bireuen": ["Medan (Kualanamu / KNO)", "Banda Aceh", "Lhokseumawe"],
  "Langsa": ["Medan (Kualanamu / KNO)", "Banda Aceh", "Kuala Simpang"],
};

const priceMap: Record<string, string> = {
  "Banda Aceh": "300.000",
  "Sigli (Pidie)": "270.000",
  "Sigli": "120.000",
  "Bireuen": "190.000",
  "Lhokseumawe": "170.000",
  "Langsa": "140.000",
  "Kuala Simpang": "130.000",
  "Takengon": "260.000",
  "Beureunuen": "250.000",
  "Medan (Kualanamu / KNO)": "170.000",
  "Medan (Kota)": "310.000",
};

const timeOptionsMedan = [
  "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", 
  "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", 
  "22:00", "23:00", "24:00", "01:00"
];

const timeOptionsAceh = [
  "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", 
  "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00"
];

type TabType = "reguler" | "charter";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<TabType>("reguler");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState("");

  const availableTo = from ? (toOptions[from] ?? []) : [];
  const availableTimes = from === "Banda Aceh" ? timeOptionsAceh : timeOptionsMedan;

  // We show price prominently, calculate it if from and to are selected
  const calculatedPrice = from && to ? (priceMap[to] ?? "150.000") : "0";

  const handleBook = () => {
    if (activeTab === "charter") {
      const msg = "Halo Admin Hiace Aceh, saya ingin informasi Sewa/Charter Hiace.";
      window.open(`https://wa.me/6281373645393?text=${encodeURIComponent(msg)}`, "_blank");
      return;
    }
    
    if (!from || !to || !date || !time) {
      alert("Mohon lengkapi semua field terlebih dahulu.");
      return;
    }

    const formattedDate = date.toLocaleDateString("id-ID", {
      weekday: "long", year: "numeric", month: "long", day: "numeric",
    });

    const msg = `Halo Min! 👋 Saya mau pesan tiket Hiace nih, kebetulan lihat dari website. 
Berikut detail pesanan saya:

📍 *Titik Jemput:* ${from}
🏁 *Tujuan:* ${to}
🗓️ *Tanggal:* ${formattedDate}
⏰ *Jam Berangkat:* ${time} WIB

💳 *Estimasi Tagihan:* Rp ${calculatedPrice}

Kira-kira untuk jadwal ini kursi masih aman kan, Min? Ditunggu info kelanjutannya ya, makasih! 🙏`;

    window.open(`https://wa.me/6281373645393?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col" id="beranda">
      {/* ── Hero Background Image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-hiace.jpg')" }}
      />
      {/* Fallback gradient when image hasn't loaded */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #0f172a 100%)" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55 z-[1]" />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 sm:px-6 lg:px-8 pt-24 pb-12 min-h-screen">

        {/* Status pill */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse flex-shrink-0" />
          <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
            Armada Resmi · Beroperasi Setiap Hari
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-center mb-3 leading-tight max-w-4xl">
          Perjalanan Lintas Provinsi{" "}
          <span
            className="block sm:inline"
            style={{
              background: "linear-gradient(90deg, #EAB308, #fde68a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Nyaman &amp; Terpercaya
          </span>
        </h1>
        <p className="text-white/70 text-sm sm:text-base text-center mb-6 max-w-lg leading-relaxed">
          Medan ↔ Banda Aceh setiap hari. Penjemputan dari Bandara, Pelabuhan &amp; Stasiun.
        </p>

        {/* ── Mini Portfolio Stats ── */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
          <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" />
            <span className="text-[10px] sm:text-xs font-bold text-white tracking-wider">
              <span className="text-yellow-400">EST.</span> 2020
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" />
            <span className="text-[10px] sm:text-xs font-bold text-white tracking-wider">
              <span className="text-yellow-400">500+</span> ARMADA
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" />
            <span className="text-[10px] sm:text-xs font-bold text-white tracking-wider">
              <span className="text-yellow-400">800+</span> SUPIR
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400" />
            <span className="text-[10px] sm:text-xs font-bold text-white tracking-wider">
              <span className="text-yellow-400">25.000+</span> PENUMPANG
            </span>
          </div>
        </div>

        {/* ── Booking Widget Card ── */}
        <div className="w-[95%] sm:w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-visible">

          {/* Tabs */}
          <div className="flex border-b border-gray-100 rounded-t-2xl overflow-hidden">
            {(["reguler", "charter"] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3.5 text-sm font-bold tracking-wide transition-all ${
                  activeTab === tab
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-700 bg-gray-50"
                }`}
                style={
                  activeTab === tab
                    ? { background: "linear-gradient(135deg, #1E3A8A, #2563eb)" }
                    : {}
                }
              >
                {tab === "reguler" ? "✈  Travel Reguler" : "🚐  Sewa / Charter"}
              </button>
            ))}
          </div>

          <div className="p-4 sm:p-6 overflow-visible">
            {activeTab === "reguler" ? (
              <>
                {/* Row 1: From / To */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  {/* From */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                      Lokasi Keberangkatan
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <select
                        value={from}
                        onChange={(e) => { 
                          setFrom(e.target.value); 
                          setTo(""); 
                          setTime(""); 
                        }}
                        className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-8 py-3 text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer"
                      >
                        <option value="">Pilih kota asal...</option>
                        {fromOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* To */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                      Tujuan
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <select
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        disabled={!from}
                        className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-8 py-3 text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="">{from ? "Pilih tujuan..." : "Pilih asal dulu..."}</option>
                        {availableTo.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Row 2: Date / Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  {/* Date */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                      Tanggal Berangkat
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10 pointer-events-none" />
                      <DatePicker
                        selected={date}
                        onChange={(d: Date | null) => setDate(d)}
                        minDate={new Date()}
                        dateFormat="dd MMMM yyyy"
                        placeholderText="Pilih tanggal..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer"
                        wrapperClassName="w-full"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                      Jam Berangkat
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        disabled={!from}
                        className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-8 py-3 text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <option value="">{from ? "Pilih jam..." : "Pilih asal dulu..."}</option>
                        {availableTimes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Exact Price Display */}
                {from && to && (
                  <div className="flex flex-col items-center justify-center mb-5 pb-5 border-b border-gray-100">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                      Total Harga
                    </p>
                    <p className="text-3xl sm:text-4xl font-black text-navy" style={{ color: "#1E3A8A" }}>
                      Rp {calculatedPrice}
                    </p>
                  </div>
                )}
              </>
            ) : (
              /* Charter Tab Info */
              <div className="py-4 text-center text-gray-600 text-sm leading-relaxed mb-4 border-b border-gray-100 pb-8">
                <p className="text-3xl mb-2">🚐</p>
                <p className="font-bold text-gray-800 mb-1">Sewa Hiace untuk Rombongan</p>
                <p className="text-gray-500">Charter harian, tour wisata, atau perjalanan dinas.<br />Klik tombol di bawah untuk negosiasi langsung.</p>
              </div>
            )}

            {/* CTA */}
            <button
              onClick={handleBook}
              className="w-full py-4 text-base sm:text-lg font-extrabold rounded-xl transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #1E3A8A 0%, #2563eb 100%)",
                color: "#ffffff",
                boxShadow: "0 8px 28px rgba(30,58,138,0.35)",
              }}
            >
              {/* WhatsApp icon */}
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.12 1.529 5.851L.057 23.571a.75.75 0 00.92.92l5.72-1.472A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75A9.716 9.716 0 016.54 20.18l-.387-.23-4.004 1.03 1.03-3.893-.253-.405A9.716 9.716 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
              {activeTab === "reguler" ? "Cari Tiket (Booking via WA)" : "Hubungi Admin (Sewa/Charter)"}
            </button>

            <p className="text-center text-[11px] text-gray-400 mt-3">
              Diarahkan otomatis ke WhatsApp Admin kami
            </p>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8 text-xs sm:text-sm font-semibold text-white/80">
          {["Keberangkatan Tiap Jam", "Nonstop · Aman", "Driver Profesional"].map((b) => (
            <div key={b} className="flex items-center gap-1.5">
              <span className="text-green-400">✓</span>
              <span>{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Global overrides for react-datepicker to match theme */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .react-datepicker-wrapper {
          width: 100%;
        }
        .react-datepicker {
          font-family: inherit;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        }
        .react-datepicker__header {
          background-color: #f8fafc;
          border-bottom: 1px solid #e5e7eb;
          border-top-left-radius: 1rem !important;
          border-top-right-radius: 1rem !important;
          padding-top: 12px;
        }
        .react-datepicker__day--selected, .react-datepicker__day--keyboard-selected {
          background-color: #1E3A8A !important;
          color: white !important;
          border-radius: 0.5rem;
        }
      `
      }} />
    </section>
  );
}
