# NeonBrutal - Neubrutalism Company Profile Web

Proyek ini adalah platform web *Company Profile* interaktif yang dibangun menggunakan pendekatan **Vanilla Web Engineering** (murni HTML5, CSS3, dan Vanilla JavaScript) tanpa ketergantungan pada *framework* CSS (seperti Tailwind/Bootstrap) maupun *library* JS (seperti React/Vue). Desain mengadopsi tren **Neubrutalism** dengan palet warna kontras tinggi: **Hijau Neon** dan **Putih**.

---

## 📂 Struktur Folder Proyek

Proyek ini distrukturkan secara modular untuk memastikan isolasi kode yang bersih, profesional, dan mudah dikelola oleh Users:

```text
company-profile-neubrutalism/
│
├── assets/
│   ├── css/
│   │   ├── main.css          # Style global, reset, dan variabel tema (IMMUNE)
│   │   ├── navbar.css        # Komponen navigasi atas (IMMUNE)
│   │   ├── hero.css          # Komponen papan utama (Hero Section)
│   │   ├── about.css         # Komponen Bento Grid (About Us)
│   │   ├── services.css      # Komponen grid kartu layanan
│   │   └── contact.css       # Komponen formulir kontak & status error
│   │
│   ├── js/
│   │   ├── main.js           # Inisialisasi global dan routing event listener
│   │   └── interaction.js    # Logika animasi, smooth scroll, & validasi form
│   │
│   └── img/                  # Aset gambar, ikon, atau SVG
│       └── logo.svg
│
├── index.html                # Dokumen HTML utama (Entry Point)
└── README.md                 # Berkas panduan regulasi pengembangan proyek