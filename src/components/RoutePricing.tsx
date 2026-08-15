"use client";

import { useState } from "react";
import { MapPin, Calendar, Clock, ChevronDown, Tag } from "lucide-react";

const fromOptions = [
  "Medan (Kualanamu)",
  "Medan (Kota)",
  "Pelabuhan Belawan",
  "Banda Aceh",
  "Lhokseumawe",
  "Bireuen",
  "Langsa",
];

const toOptions: Record<string, string[]> = {
  "Medan (Kualanamu)": [
    "Banda Aceh",
    "Sigli (Pidie)",
    "Bireuen",
    "Lhokseumawe",
    "Langsa",
    "Takengon",
    "Beureunuen",
  ],
  "Medan (Kota)": [
    "Banda Aceh",
    "Sigli (Pidie)",
    "Bireuen",
    "Lhokseumawe",
    "Langsa",
    "Kuala Simpang",
    "Takengon",
  ],
  "Pelabuhan Belawan": ["Banda Aceh", "Lhokseumawe", "Bireuen", "Langsa"],
  "Banda Aceh": [
    "Medan (Kualanamu)",
    "Medan (Kota)",
    "Lhokseumawe",
    "Bireuen",
    "Sigli",
    "Kuala Simpang",
    "Langsa",
  ],
  Lhokseumawe: ["Medan (Kualanamu)", "Banda Aceh", "Takengon", "Bireuen"],
  Bireuen: ["Medan (Kualanamu)", "Banda Aceh", "Lhokseumawe"],
  Langsa: ["Medan (Kualanamu)", "Banda Aceh", "Kuala Simpang"],
};

// Dummy price ranges keyed by destination
const priceMap: Record<string, string> = {
  "Banda Aceh": "Rp 270.000 – Rp 300.000",
  "Sigli (Pidie)": "Rp 250.000 – Rp 270.000",
  Sigli: "Rp 100.000 – Rp 120.000",
  Bireuen: "Rp 170.000 – Rp 190.000",
  Lhokseumawe: "Rp 150.000 – Rp 170.000",
  Langsa: "Rp 120.000 – Rp 140.000",
  "Kuala Simpang": "Rp 110.000 – Rp 130.000",
  Takengon: "Rp 230.000 – Rp 260.000",
  Beureunuen: "Rp 230.000 – Rp 250.000",
  "Medan (Kualanamu)": "Rp 140.000 – Rp 170.000",
  "Medan (Kota)": "Rp 280.000 – Rp 310.000",
};

const timeOptions = [
  "08:00","09:00","10:00","11:00","12:00","13:00","14:00",
  "15:00","16:00","17:00","18:00","19:00","20:00","21:00",
  "22:00","23:00","00:00","01:00",
];

function SelectField({
  id,
  label,
  icon,
  value,
  onChange,
  options,
  placeholder,
  disabled,
}: {
  id: string;
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
  disabled?: boolean;
}) {
  return (
    <div className="flex-1 min-w-0">
      <label
        htmlFor={id}
        className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 leading-none"
      >
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          {icon}
        </span>
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-9 py-3.5 text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
}

export default function BookingWidget() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const availableTo = from ? (toOptions[from] ?? []) : [];

  // Derived price estimate shown once all fields filled
  const estimatedPrice =
    from && to && date && time ? (priceMap[to] ?? "Rp 100.000 – Rp 300.000") : null;

  const handleBook = () => {
    if (!from || !to || !date || !time) {
      alert("Mohon lengkapi semua field sebelum memesan.");
      return;
    }
    // Format date to Indonesian style
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const msg = [
      "Halo Admin Hiace Aceh, saya ingin memesan tiket.",
      "",
      `Dari: ${from}`,
      `Ke: ${to}`,
      `Tanggal: ${formattedDate}`,
      `Jam: ${time}`,
      `Estimasi Harga: ${priceMap[to] ?? "Sesuai tarif berlaku"}`,
    ].join("\n");
    window.open(
      `https://wa.me/6281373645393?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <section
      className="py-16 md:py-24 relative overflow-hidden"
      id="booking-section"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-72 md:w-96 h-72 md:h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "#EAB308" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 md:w-80 h-64 md:h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "#3b82f6" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 px-4 py-1.5 rounded-full"
            style={{ background: "rgba(234,179,8,0.2)", color: "#EAB308" }}
          >
            Booking Online
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Pesan Tiket Sekarang
          </h2>
          <p className="text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            Pilih rute, tanggal, dan jam keberangkatan — langsung terhubung ke
            WhatsApp Admin kami.
          </p>
        </div>

        {/* Booking Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8">
          {/* Fields Grid — 1 col on mobile, 2 on sm, then horizontal on md */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row gap-4 mb-5">
            <SelectField
              id="from"
              label="Lokasi Jemput (Dari)"
              icon={<MapPin className="w-4 h-4" />}
              value={from}
              onChange={(v) => {
                setFrom(v);
                setTo("");
              }}
              options={fromOptions}
              placeholder="Pilih kota asal..."
            />

            {/* Arrow divider — desktop only */}
            <div className="hidden md:flex items-end pb-1 flex-shrink-0">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-base font-bold"
                style={{
                  background: "linear-gradient(135deg, #1E3A8A, #3b82f6)",
                }}
              >
                →
              </div>
            </div>

            <SelectField
              id="to"
              label="Tujuan (Ke)"
              icon={<MapPin className="w-4 h-4" />}
              value={to}
              onChange={setTo}
              options={availableTo}
              placeholder={from ? "Pilih tujuan..." : "Pilih asal dulu..."}
              disabled={!from}
            />

            {/* Date */}
            <div className="flex-1 min-w-0">
              <label
                htmlFor="travel-date"
                className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 leading-none"
              >
                Tanggal Berangkat
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <input
                  id="travel-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            <SelectField
              id="time"
              label="Jam Berangkat"
              icon={<Clock className="w-4 h-4" />}
              value={time}
              onChange={setTime}
              options={timeOptions}
              placeholder="Pilih jam..."
            />
          </div>

          {/* Price Estimate Banner */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              estimatedPrice ? "max-h-24 opacity-100 mb-5" : "max-h-0 opacity-0 mb-0"
            }`}
          >
            <div
              className="flex items-center gap-3 px-5 py-4 rounded-2xl border"
              style={{
                background: "linear-gradient(135deg, #fefce8, #fef9c3)",
                borderColor: "#EAB308",
              }}
            >
              <Tag className="w-5 h-5 flex-shrink-0" style={{ color: "#854D0E" }} />
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: "#854D0E" }}
                >
                  Estimasi Harga Tiket
                </p>
                <p className="text-lg font-extrabold" style={{ color: "#1E3A8A" }}>
                  {estimatedPrice}
                </p>
              </div>
              <p className="ml-auto text-xs text-gray-400 text-right hidden sm:block leading-snug">
                Harga bisa berbeda.<br />Konfirmasi via WA.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleBook}
            className="w-full py-4 text-base sm:text-lg font-extrabold rounded-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-lg flex items-center justify-center gap-3"
            style={{
              background: "linear-gradient(135deg, #EAB308, #ca8a04)",
              color: "#1E3A8A",
              boxShadow: "0 8px 32px rgba(234,179,8,0.4)",
            }}
          >
            {/* WhatsApp icon */}
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.12 1.529 5.851L.057 23.571a.75.75 0 00.92.92l5.72-1.472A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75A9.716 9.716 0 016.54 20.18l-.387-.23-4.004 1.03 1.03-3.893-.253-.405A9.716 9.716 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
            </svg>
            Lanjut Pesan via WhatsApp
          </button>

          <p className="text-center text-xs text-gray-400 mt-3 leading-relaxed">
            Anda akan diarahkan ke WhatsApp Admin kami secara otomatis
          </p>
        </div>
      </div>
    </section>
  );
}
