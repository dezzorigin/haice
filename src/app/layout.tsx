import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adun Travel Hiace Aceh | Sewa & Travel Lintas Provinsi Resmi",
  description:
    "Armada resmi Adun Travel Hiace Aceh. Melayani sewa Hiace Banda Aceh, rental Hiace Medan, travel lintas provinsi, dan penjemputan Bandara Kualanamu. Keberangkatan setiap hari.",
  keywords:
    "Adun Travel Hiace Aceh, Sewa Hiace Banda Aceh, Travel Medan Aceh, Rental Hiace Kualanamu, Rental Hiace Medan",
};

const schemaJSON = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Adun Travel Hiace Aceh",
  description:
    "Premium travel and rental car business serving Medan, Banda Aceh, and Sabang.",
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
