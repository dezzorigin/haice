"use client";

import { useState } from "react";
import { ChevronDown, MapPin, Calendar, Clock, Car, UserCheck, Users, Search, X } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const ROUTE_LOCATIONS = [
  "Banda Aceh",
  "Sigli",
  "Pidie",
  "Pidie Jaya",
  "Meureudu",
  "Samalanga",
  "Jeunieb",
  "Bireuen",
  "Kuta Blang",
  "Krueng Mane",
  "Keude Krueng Geukueh (Krukuh)",
  "Lhokseumawe",
  "Aceh Utara",
  "Lhoksukon",
  "Panton Labu",
  "Lhoknibong",
  "Simpang Ulim",
  "Aceh Timur",
  "Idi Cut",
  "Idi Rayeuk",
  "Peudawa",
  "Peureulak Barat",
  "Peureulak Timur",
  "Sungai Raya",
  "Bayeun",
  "Langsa",
  "Paya Tenggar",
  "Tualang Cut",
  "Simpang Opak",
  "Aceh Tamiang",
  "Kuala Simpang",
  "Semadam",
  "Pulau Tiga",
  "Besitang",
  "Halban",
  "Pangkalan Susu",
  "Pangkalan Brandan",
  "Tanjung Pura",
  "Tanjung Beringin",
  "Stabat",
  "Langkat",
  "Binjai",
  "Medan",
  "Kualanamu (KNO)",
  "Belawan"
];

const timeGridOptions = [
  "08:00", "09:00", "10:00", "11:00", 
  "14:00", "15:00", "16:00", "17:00", 
  "20:00", "21:00", "22:00", "23:00"
];

type TabType = "reguler" | "charter";
type PickerType = "from" | "to" | null;

export default function Hero() {
  const [activeTab, setActiveTab] = useState<TabType>("reguler");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState<{from?: boolean; to?: boolean; date?: boolean; time?: boolean}>({});
  
  // Modal state
  const [pickerOpen, setPickerOpen] = useState<PickerType>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocations = ROUTE_LOCATIONS.filter(loc => 
    loc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBook = () => {
    if (activeTab === "charter") {
      const msg = "Halo Admin Adun Travel, saya ingin informasi Sewa/Charter Hiace.";
      window.open(`https://wa.me/6281373645393?text=${encodeURIComponent(msg)}`, "_blank");
      return;
    }
    const newErrors = {
      from: !from,
      to: !to,
      date: !date,
      time: !time
    };

    if (Object.values(newErrors).some(Boolean)) {
      setErrors(newErrors);
      const firstErrorKey = Object.keys(newErrors).find(k => newErrors[k as keyof typeof newErrors]);
      if (firstErrorKey) {
        document.getElementById(`input-${firstErrorKey}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
    
    setErrors({});

    const formattedDate = date.toLocaleDateString("id-ID", {
      weekday: "long", year: "numeric", month: "long", day: "numeric",
    });

    const fromIndex = ROUTE_LOCATIONS.indexOf(from);
    const toIndex = ROUTE_LOCATIONS.indexOf(to);
    let tarif = "Konfirmasi Admin";
    
    if (fromIndex !== -1 && toIndex !== -1) {
      const diff = Math.abs(fromIndex - toIndex);
      if (diff > 30) {
        tarif = "Rp 300.000";
      } else if (diff > 10) {
        tarif = "Rp 170.000 - Rp 250.000";
      } else {
        tarif = "Rp 100.000";
      }
    }

    const msg = `TIKET BOOKING - ADUN TRAVEL HIACE ACEH
----------------------------------------
RUTE PERJALANAN:
- Titik Asal : ${from}
- Titik Tujuan: ${to}

WAKTU KEBERANGKATAN:
- Tanggal     : ${formattedDate}
- Jam         : ${time} WIB

STATUS:
- Booking via aduntravelhiace.my.id
- Total Tarif : ${tarif}
----------------------------------------
Halo Admin Adun Travel, mohon konfirmasi ketersediaan kursi untuk jadwal perjalanan saya di atas. Terima kasih.`;

    window.open(`https://wa.me/6281373645393?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const openPicker = (type: PickerType) => {
    setSearchQuery("");
    setPickerOpen(type);
  };

  const selectLocation = (loc: string) => {
    if (pickerOpen === "from") setFrom(loc);
    if (pickerOpen === "to") setTo(loc);
    setPickerOpen(null);
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
            Armada Resmi Lintas Aceh - Medan
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-center mb-4 leading-tight max-w-5xl">
          Perjalanan Lintas Provinsi Lebih{" "}
          <span
            className="block sm:inline"
            style={{
              background: "linear-gradient(90deg, #EAB308, #fde68a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Aman, Nyaman, &amp; Tepat Waktu
          </span>
        </h1>
        <p className="text-white/70 text-sm sm:text-base md:text-lg text-center mb-6 max-w-2xl leading-relaxed font-medium">
          "Melayani rute Banda Aceh - Medan (PP), Antar Jemput Bandara Kualanamu &amp; Sultan Iskandar Muda, serta Sewa Charter Armada Hiace Premio."
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
        <div id="booking-section" className="w-[95%] sm:w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-visible scroll-mt-24">

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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                  {/* From */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                      Kota Asal
                    </label>
                    <button
                      id="input-from"
                      onClick={() => openPicker("from")}
                      className={`w-full relative bg-gray-50 border rounded-xl px-4 py-3 text-left focus:outline-none transition cursor-pointer flex items-center justify-between group ${
                        errors.from ? "border-red-500 ring-1 ring-red-500" : "border-gray-200 focus:ring-2 focus:ring-blue-500"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className={`w-4 h-4 transition-colors ${errors.from ? "text-red-500" : "text-gray-400 group-hover:text-blue-500"}`} />
                        <span className={`text-sm font-semibold ${from ? "text-gray-800" : errors.from ? "text-red-500" : "text-gray-400"}`}>
                          {from || "Pilih Kota Asal"}
                        </span>
                      </div>
                      <ChevronDown className={`w-4 h-4 ${errors.from ? "text-red-500" : "text-gray-400"}`} />
                    </button>
                    {errors.from && (
                      <span className="text-xs text-red-500 font-medium mt-1 block">Harap pilih kota asal</span>
                    )}
                  </div>

                  {/* To */}
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                      Kota Tujuan
                    </label>
                    <button
                      id="input-to"
                      onClick={() => openPicker("to")}
                      className={`w-full relative bg-gray-50 border rounded-xl px-4 py-3 text-left focus:outline-none transition cursor-pointer flex items-center justify-between group ${
                        errors.to ? "border-red-500 ring-1 ring-red-500" : "border-gray-200 focus:ring-2 focus:ring-blue-500"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className={`w-4 h-4 transition-colors ${errors.to ? "text-red-500" : "text-gray-400 group-hover:text-blue-500"}`} />
                        <span className={`text-sm font-semibold ${to ? "text-gray-800" : errors.to ? "text-red-500" : "text-gray-400"}`}>
                          {to || "Pilih Tujuan"}
                        </span>
                      </div>
                      <ChevronDown className={`w-4 h-4 ${errors.to ? "text-red-500" : "text-gray-400"}`} />
                    </button>
                    {errors.to && (
                      <span className="text-xs text-red-500 font-medium mt-1 block">Harap pilih kota tujuan</span>
                    )}
                  </div>
                </div>

                {/* Row 2: Date / Time Grid */}
                <div className="mb-5 border-t border-gray-100 pt-5">
                  {/* Date */}
                  <div className="mb-5">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
                      Tanggal Berangkat
                    </label>
                    <div id="input-date" className="relative max-w-sm">
                      <Calendar className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 z-10 pointer-events-none ${errors.date ? "text-red-500" : "text-gray-400"}`} />
                      <DatePicker
                        selected={date}
                        onChange={(d: Date | null) => setDate(d)}
                        minDate={new Date()}
                        dateFormat="dd MMMM yyyy"
                        placeholderText="Pilih tanggal..."
                        className={`w-full bg-gray-50 border rounded-xl pl-9 pr-4 py-3 text-sm font-semibold focus:outline-none transition cursor-pointer ${
                          errors.date ? "border-red-500 ring-1 ring-red-500 text-red-900" : "border-gray-200 focus:ring-2 focus:ring-blue-500 text-gray-800"
                        }`}
                        wrapperClassName="w-full"
                      />
                    </div>
                    {errors.date && (
                      <span className="text-xs text-red-500 font-medium mt-1 block">Harap pilih tanggal keberangkatan</span>
                    )}
                  </div>

                  {/* Time Grid */}
                  <div id="input-time">
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                      Pilih Jam Berangkat
                    </label>
                    <div className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 ${errors.time ? "p-2 border border-red-500 ring-1 ring-red-500 rounded-xl bg-red-50/20" : ""}`}>
                      {timeGridOptions.map((t) => (
                        <button
                          key={t}
                          onClick={() => setTime(t)}
                          className={`py-2 rounded-xl text-center text-sm transition-all ${
                            time === t
                              ? "bg-yellow-500 border-2 border-yellow-500 text-white font-bold shadow-md transform scale-[1.02]"
                              : "bg-white border-2 border-gray-100 text-gray-700 font-medium hover:border-yellow-400 hover:bg-yellow-50"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    {errors.time && (
                      <span className="text-xs text-red-500 font-medium mt-1 block">Harap pilih jam keberangkatan</span>
                    )}
                  </div>
                </div>
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
              className="w-full py-4 mt-2 text-base sm:text-lg font-extrabold rounded-xl transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-3 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #1E3A8A 0%, #2563eb 100%)",
                color: "#ffffff",
                boxShadow: "0 8px 28px rgba(30,58,138,0.35)",
              }}
            >
              {activeTab === "reguler" ? "Cari Tiket (Booking via WA)" : "Hubungi Admin (Sewa/Charter)"}
            </button>
            <p className="text-center text-[11px] text-gray-400 mt-3">
              Diarahkan otomatis ke WhatsApp Admin Adun Travel
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

      {/* ── Searchable Location Modal ── */}
      {pickerOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col max-h-[85vh]">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
              <h3 className="font-bold text-gray-800 text-lg">
                {pickerOpen === "from" ? "Pilih Kota Asal" : "Pilih Kota Tujuan"}
              </h3>
              <button 
                onClick={() => setPickerOpen(null)}
                className="p-1.5 rounded-full hover:bg-gray-200 transition-colors text-gray-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 border-b border-gray-100">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Ketik nama kota / daerah..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  autoFocus
                />
              </div>
            </div>

            <div className="overflow-y-auto flex-1 p-2">
              {filteredLocations.length > 0 ? (
                filteredLocations.map(loc => (
                  <button
                    key={loc}
                    onClick={() => selectLocation(loc)}
                    className="w-full text-left py-3 px-4 rounded-lg hover:bg-yellow-50 focus:bg-yellow-50 transition-colors text-gray-700 font-medium text-sm flex items-center gap-3 group"
                  >
                    <MapPin className="w-4 h-4 text-gray-300 group-hover:text-yellow-500" />
                    {loc}
                  </button>
                ))
              ) : (
                <div className="py-8 text-center text-gray-400 text-sm">
                  Kota tidak ditemukan.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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
