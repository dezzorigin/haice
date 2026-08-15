"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MoreVertical, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinks = [
    { name: "Layanan", href: "#layanan" },
    { name: "Pesan", href: "#beranda" },
    { name: "Lokasi", href: "#lokasi" },
    { name: "Owner", href: "#owner" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Brand */}
            <Link
              href="/"
              className="flex items-center gap-2 flex-shrink-0"
              aria-label="TravelHiaceAceh Home"
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-black flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #1E3A8A, #EAB308)",
                }}
              >
                H
              </span>
              <span
                className="text-lg font-extrabold tracking-tight leading-none"
                style={{ color: "#1E3A8A" }}
              >
                Travel<span style={{ color: "#EAB308" }}>Hiace</span>
                <span className="text-gray-700">Aceh</span>
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:text-navy hover:bg-blue-50 transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#beranda"
                className="ml-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:scale-105 flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #EAB308, #ca8a04)",
                  color: "#1E3A8A",
                }}
              >
                Pesan Tiket
              </Link>
            </div>

            {/* Mobile Right Content */}
            <div className="flex md:hidden items-center gap-3">
              <Link
                href="#beranda"
                className="bg-[#EAB308] text-white px-4 py-1.5 rounded-md text-sm font-bold shadow-sm"
              >
                Pesan
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors flex-shrink-0"
                aria-label={isOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <MoreVertical className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown — stays inside the nav so it doesn't break layout */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } bg-white border-t border-gray-100`}
        >
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-navy transition-all"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#beranda"
              onClick={() => setIsOpen(false)}
              className="block mt-1 px-4 py-3 rounded-xl text-base font-bold text-center shadow-sm"
              style={{
                background: "linear-gradient(135deg, #EAB308, #ca8a04)",
                color: "#1E3A8A",
              }}
            >
              Pesan Tiket Sekarang
            </Link>
          </div>
          <div className="h-3" />
        </div>
      </nav>
    </>
  );
}
