import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import RouteMap from "@/components/Schedule";
import LeaderProfile from "@/components/LeaderProfile";
import AddressMap from "@/components/AddressMap";
import FloatingCTA from "@/components/FloatingCTA";

/**
 * Page flow:
 * 1. Hero  (Booking widget embedded)
 * 2. Layanan Kami
 * 3. Peta Rute Singgah
 * 4. Profil Founder & Owner
 * 5. Lokasi & Kontak
 * 6. Footer
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <RouteMap />
        <LeaderProfile />
        <AddressMap />
      </main>
      <FloatingCTA />

      {/* Footer */}
      <footer
        className="text-white py-10 text-center border-t border-white/10"
        style={{ background: "#0f172a" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-xl font-extrabold mb-2" style={{ color: "#EAB308" }}>
            Travel<span className="text-white">Hiace</span>Aceh
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Armada Resmi Adun Travel Hiace Aceh–Medan · Nyaman, Aman &amp; Terpercaya
          </p>
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} HIACE MEDAN ACEH RESMI. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
