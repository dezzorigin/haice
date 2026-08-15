import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sewa Hiace Banda Aceh & Rental Hiace Medan | Resmi",
  description:
    "Armada resmi HIACE Aceh. Melayani sewa Hiace Banda Aceh, rental Hiace Medan, travel lintas provinsi, dan penjemputan Bandara Kualanamu. Keberangkatan setiap hari.",
  keywords:
    "Sewa Hiace Banda Aceh, Travel Medan Aceh, Rental Hiace Kualanamu, Rental Hiace Medan, Sewa Mobil Rombongan Aceh",
};

const schemaJSON = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "HIACE MEDAN ACEH RESMI",
  description:
    "Premium travel and rental car business serving Medan, Banda Aceh, and Sabang.",
  url: "https://hiacemedanaceh.com",
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
