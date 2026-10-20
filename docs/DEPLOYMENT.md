# Panduan Menjalankan & Deployment Website Hadiah Wisuda

## 1. Menjalankan di Komputer Lokal (Development)

Untuk melihat dan menguji website di laptop/komputer Anda:

```bash
# 1. Jalankan server lokal
npm run dev
```

Buka peramban (browser) di:
👉 `http://localhost:3000`

---

## 2. Menguji Kesiapan Production (Build & Lint)

Sebelum di-deploy ke internet, pastikan tidak ada error kompilasi:

```bash
# Linting kode
npm run lint

# Build uji coba production
npm run build
```

Jika pesan `✓ Compiled successfully` muncul, website siap 100% untuk dipublikasikan.

---

## 3. Opsi Deployment Gratis & Termudah (Vercel)

Vercel adalah platform resmi pembuat Next.js. Sangat cepat, gratis, dan otomatis mendukung HTTPS serta preview link WhatsApp yang rapi.

### Langkah-langkah:
1. Buat akun gratis di [vercel.com](https://vercel.com).
2. Simpan proyek ini ke akun GitHub pribadi Anda:
   ```bash
   git init
   git add .
   git commit -m "feat: graduation gift surprise website"
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git
   git push -u origin main
   ```
3. Di dashboard Vercel, klik **"Add New..."** ➔ **"Project"** ➔ Pilih repository GitHub Anda.
4. Klik tombol **"Deploy"**.
5. Dalam kurun waktu 1–2 menit, Anda akan mendapatkan tautan publik, contohnya:
   `https://for-my-graduate.vercel.app`

---

## 4. Opsi Deployment Alternatif (Netlify / Static Export)

Jika Anda ingin hosting sebagai file HTML/CSS/JS statis biasa:
Tambahkan `output: 'export'` di file `next.config.ts`, lalu jalankan `npm run build`. Hasil file statis akan berada di folder `out/` dan dapat diunggah ke hosting cPanel, GitHub Pages, atau Netlify Drop.

---

## 5. Catatan Privasi & Keamanan

- Tautan website ini bersifat publik bagi siapa saja yang memiliki link.
- Jangan menyertakan informasi rahasia perbankan, kata sandi, atau data identitas sensitif (seperti NIK / nomor telepon).
- Preview tautan di WhatsApp akan menampilkan judul hangat: `Happy Graduation, [Panggilan Sayang]! 🎓❤️` beserta deskripsi singkat yang manis.
