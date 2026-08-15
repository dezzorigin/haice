import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adun Travel Aceh | Pesan Hiace Online & Travel Lintas Provinsi",
  description:
    "Adun Travel Aceh melayani pesan Hiace online untuk rute Banda Aceh, Medan, dan sekitarnya. Sewa Hiace Banda Aceh, travel Hiace Medan, penjemputan Bandara Kualanamu, dan charter Hiace Aceh yang nyaman dan terpercaya.",
  keywords:
    "Adun Travel Aceh, pesan hiace online, hiace aceh, hiace banda aceh, hiace medan, sewa hiace aceh, travel medan aceh, rental hiace medan, travel hiace kualanamu",
};

const schemaJSON = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Adun Travel Aceh",
  alternateName: ["Adun Travel Hiace Aceh", "Hiace Aceh", "Sewa Hiace Banda Aceh", "Travel Hiace Medan"],
  description:
    "Layanan pemesanan tiket travel lintas provinsi secara online, melayani rute Banda Aceh - Medan. Pusat sewa mobil Hiace Aceh, rental Hiace Kualanamu, dan charter eksekutif terpercaya.",
  url: "https://aduntravelhiace.my.id",
  telephone: "+6281373645393",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Medan",
    addressRegion: "Sumatera Utara",
    addressCountry: "ID",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  makesOffer: [
    {
      "@type": "Offer",
      name: "Travel Medan - Banda Aceh",
      price: "300000",
      priceCurrency: "IDR",
    },
    {
      "@type": "Offer",
      name: "Travel Medan - Lhokseumawe",
      price: "170000",
      priceCurrency: "IDR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJSON) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-white overflow-x-hidden"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
