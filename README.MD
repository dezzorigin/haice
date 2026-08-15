# 🚐 HIACE MEDAN ACEH RESMI - Official Landing Page

Repository untuk pengembangan landing page **HIACE MEDAN ACEH RESMI**, grup layanan transportasi dan rental Toyota Hiace untuk rute lintas provinsi (Medan - Aceh - Sabang). 

Fokus utama website ini adalah mengkonversi traffic dari Instagram (dan media sosial lainnya) menjadi pemesanan langsung via WhatsApp dengan menyajikan informasi armada, layanan jemput, dan daftar rute yang terstruktur rapi.

## 🌟 Fitur Utama (Key Features)
* **Direct Booking via WhatsApp**: Integrasi langsung ke WhatsApp admin (`081373645393`) dengan format pesan otomatis untuk setiap rute.
* **Interactive Route & Pricing Table**: Daftar harga rute lintas kota yang clean, modern, dan responsif untuk mobile.
* **Fleet Showcase**: Galeri foto eksterior dan interior armada Hiace yang menonjolkan kenyamanan, kebersihan, dan fasilitas (AC, legroom).
* **Service Highlights**: Informasi layanan terstruktur (Drop-off/Pick-up bandara, Travel Reguler, Tour & Rental Harian).
* **SEO Optimized**: Dibangun dengan praktik SEO terbaik untuk mendominasi pencarian organik Google.

## 🔎 Strategi SEO & Copywriting

Website dioptimalkan untuk mendominasi pencarian organik (Google Search) dengan menargetkan *keyword* lokal bervolume tinggi. *Copywriting* dibuat elegan, *to-the-point*, dan menonjolkan otoritas mereka sebagai armada grup resmi yang besar.

**Target Keyword SEO:**
*   `Sewa Hiace Banda Aceh`
*   `Rental Hiace Medan`
*   `Travel Medan Aceh Sabang`
*   `Sewa Mobil Rombongan Aceh`
*   `Penjemputan Bandara Kualanamu SIM Hiace`
*   `Paket Tour Wisata Banda Aceh Sabang`

**Tone Copywriting (Brand Pride):**
Menekankan posisi sebagai "Armada Resmi & Terbesar". Narasi difokuskan pada keandalan operasional, armada yang selalu *ready*, kabin yang bersih, dan pengemudi profesional yang hafal medan lintas Sumatera.

## 🖥️ Struktur UI & Desain Visual

Desain UI menerapkan *background* dominan putih untuk kesan bersih dan lapang (seperti kemeja putih profesional), dipadukan dengan aksen **Navy** (kepercayaan/profesionalisme) dan **Gold** (premium/kualitas). Menghindari desain yang ramai atau "norak".

*   **Hero Section**: Menampilkan visual Hiace yang elegan dengan Headline yang kuat (CPA).
*   **Layanan Kami**: Grid/Cards interaktif untuk menjelaskan Drop-off, Travel Lintas Provinsi, dan Tour Harian.
*   **Tabel Rute & Harga**: UI tabel modern yang mudah dibaca di mobile.
*   **Fasilitas Interior**: Slider/Grid foto interior untuk membangun *trust*.

## 🚀 Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (App Router, Server-Side Rendering untuk performa dan SEO).
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Desain responsif, ringan, utility-first).
*   **Icons:** Lucide React / React Icons (Clean UI icons).
*   **Deployment:** Vercel (Edge network untuk akses super cepat dari seluruh Indonesia).

## 🛠️ Getting Started (Cara Menjalankan Project)

Ikuti langkah-langkah berikut untuk menjalankan project ini di komputer lokal Anda:

1. **Clone repository ini:**
   ```bash
   git clone <url-repository>
   cd haicebandamedan
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # atau
   yarn install
   # atau
   pnpm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   # atau
   yarn dev
   # atau
   pnpm dev
   ```

4. **Buka di Browser:**
   Buka [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

## 📂 Struktur Folder (Draft)

```text
/
├── app/                  # Next.js App Router (Pages & Layout)
│   ├── layout.tsx        # Global layout & SEO Metadata
│   └── page.tsx          # Main Landing Page
├── components/           # Reusable UI Components
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── RouteTable.tsx
│   └── FleetVisual.tsx
├── public/               # Static assets (Images, Icons)
│   └── images/
├── styles/               # Global CSS (Tailwind config)
├── tailwind.config.ts
└── package.json
```

---
*Kode ditulis dengan mengutamakan performa (Core Web Vitals), aksesibilitas mobile, dan konversi sales.*