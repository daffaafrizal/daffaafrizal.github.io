# Portofolio Daffa Afrizal Wijaya

Website portofolio yang dibangun dengan [Astro](https://astro.build). Hasil akhirnya HTML statis yang di-deploy otomatis ke GitHub Pages: **https://daffaafrizal.github.io/**

## Mengubah isi
Hampir semua isi website ada di folder `src/data/`. Cukup ubah file di sini, tidak perlu menyentuh HTML:

| File | Isi |
|---|---|
| `src/data/profile.ts` | Nama, tagline, ringkasan About Me, kotak info, email, LinkedIn, GitHub, menu |
| `src/data/education.ts` | Riwayat pendidikan |
| `src/data/skills.ts` | Kelompok keahlian |
| `src/data/experience.ts` | Pengalaman kerja |
| `src/data/certifications.ts` | Sertifikasi |
| `src/data/projects.ts` | Project |

Gambar (foto, logo) disimpan di `public/assets/` dan dipanggil dengan path `/assets/nama-file.jpg`.

## Struktur
- `src/pages/index.astro` — halaman utama, menyusun semua bagian
- `src/components/` — satu komponen per bagian (Hero, About, Experience, Certifications, Projects, Contact, Header, Footer)
- `src/layouts/Base.astro` — kerangka halaman (head, header, footer)
- `src/styles/global.css` — tampilan, warna, mode gelap, efek scroll
- `src/scripts/main.js` — tombol salin, form kontak (Gmail), menu aktif, efek scroll, tombol kembali ke atas
- `.github/workflows/deploy.yml` — build dan deploy otomatis ke GitHub Pages setiap push ke `main`

## Menjalankan di laptop
Butuh [Node.js](https://nodejs.org) versi 18 ke atas.

```bash
npm install      # sekali saja
npm run dev      # buka http://localhost:4321, otomatis refresh saat file diubah
npm run build    # membuat versi final di folder dist/
```

## Publikasi
Push ke branch `main`, GitHub Actions akan membangun dan menerbitkan website dalam 1–2 menit.
Pastikan **Settings → Pages → Source** diatur ke **GitHub Actions**.
