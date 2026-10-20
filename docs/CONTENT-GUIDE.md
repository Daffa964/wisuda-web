# Panduan Lengkap Kustomisasi Konten Website Hadiah Wisuda

Website ini didesain agar **100% mudah dikustomisasi** melalui satu file konfigurasi terpusat:
📁 `src/data/site-content.ts`

Anda **tidak perlu** mengutak-atik kode komponen atau styling untuk mengganti tulisan, nama, foto, atau isi surat.

---

## 1. Mengubah Data Pribadi & Pasangan

Buka file `src/data/site-content.ts` dan ubah nilai pada baris awal:

```typescript
export const siteContent: SiteContent = {
  recipientName: "Adinda Putri Salsabila",      // Nama lengkap pasangan
  recipientNickname: "Dinda",                   // Panggilan sayang
  senderName: "Rian Pratama",                   // Nama lengkap Anda
  senderNickname: "Rian",                       // Panggilan Anda
  relationshipDuration: "3 Tahun Bersama",      // Lama kebersamaan (opsional)
  graduationDate: "18 Oktober 2026",            // Tanggal wisuda
  university: "Universitas Indonesia",          // Nama universitas / kampus
  major: "Ilmu Komunikasi",                     // Jurusan / Program studi
  degreeTitle: "S.I.Kom.",                      // Gelar kelulusan (cth: S.Kom., S.E., S.Ked)
```

---

## 2. Mengubah Foto

Struktur folder foto sudah disiapkan di dalam folder `public/images/`:

| Bagian | Lokasi Folder | Rekomendasi Rasio | Format |
|---|---|---|---|
| **Foto Hero Utama** | `public/images/hero/hero-portrait.jpg` | 3:4 atau Portrait | JPG / PNG / WebP |
| **Foto Timeline Kuliah** | `public/images/journey/timeline-1.jpg` s/d `timeline-6.jpg` | 16:9 atau 4:3 | JPG / PNG / WebP |
| **Foto Babak Skripsi** | `public/images/thesis/desk.jpg`, `draft.jpg`, `coffee.jpg` | 4:3 atau Square | JPG / PNG / WebP |
| **Galeri Foto Kenangan**| `public/images/memories/photo-1.jpg` s/d `photo-6.jpg` | Campuran (Portrait/Landscape/Square) | JPG / PNG / WebP |
| **Foto Favorit Penutup** | `public/images/hero/hero-portrait.jpg` | Portrait / Square | JPG / PNG / WebP |

> 💡 **Fitur Aman (Graceful Fallback):**
> Jika Anda belum memasukkan foto ke folder tersebut, website **tidak akan error atau rusak**. Sistem akan secara otomatis menampilkan ilustrasi kartu scrapbook yang rapi dengan label yang elegan.

---

## 3. Mengubah & Menambah Timeline Perjalanan

Di dalam `src/data/site-content.ts`, cari bagian `timeline.items`. Anda bisa mengedit, menghapus, atau menambah milestone perjalanan:

```typescript
{
  id: "step-1",
  period: "Semester 1 - 2",
  title: "Awal Mula Perjalanan (The Beginning)",
  description: "Cerita awal mula kuliah...",
  tag: "Babak Pertama",
  photo: "/images/journey/timeline-1.jpg", // Opsional
  caption: "Senyum pertama saat masa orientasi",
}
```

---

## 4. Mengubah Cerita Babak Skripsi

Pada bagian `thesis`:
- `paragraphs`: Array kalimat cerita tentang suka duka, revisi, dan ketangguhan pasangan saat mengerjakan skripsi.
- `quote`: Kutipan emosional yang mengapresiasi usahanya.
- `items`: 3 kartu momen (meja belajar, draf skripsi, secangkir kopi).

---

## 5. Mengubah Isi Galeri & Kategori Foto

Pada bagian `gallery.photos`:
```typescript
{
  id: "gal-1",
  title: "Tawa di Selasar Kampus",
  category: "college", // college | thesis | moments | together | graduation
  url: "/images/memories/photo-1.jpg",
  caption: "Caption manis yang akan muncul saat foto dibuka di lightbox",
  date: "April 2024",
  aspect: "portrait", // portrait | landscape | square
}
```

---

## 6. Mengubah Isi Surat Pribadi (Love Letter)

Cari bagian `loveLetter`:
- `greeting`: Salam pembuka (cth: *"Untuk seseorang yang paling kusayangi,"*)
- `paragraphs`: Paragraf surat. Anda dapat menuliskan isi hati Anda sebebas mungkin. Setiap item di dalam array `[]` akan menjadi 1 paragraf terpisah dengan spasi yang rapi.
- `closing`: Kalimat penutup (cth: *"Dengan segenap rasa bangga dan cinta,"*)
- `signature`: Tanda tangan nama Anda.
- `date`: Tanggal penulisan surat.

---

## 7. Musik Latar Belakang (Opsional)

Untuk menyertakan lagu romantis pengiring:
1. Siapkan file lagu berformat `.mp3` (disarankan instrumen piano/akustik).
2. Simpan file di: `public/audio/background-music.mp3`
3. Atur konfigurasi di `src/data/site-content.ts`:
   ```typescript
   audio: {
     enabled: true, // Ubah ke false jika tidak ingin menggunakan musik
     src: "/audio/background-music.mp3",
     title: "Judul Lagu (Acoustic Piano)",
     artist: "Nama Artis / Instrumental",
   }
   ```
> Sesuai standar privasi browser modern, musik tidak akan autoplay secara tiba-tiba tanpa interaksi pengguna. Musik akan aktif begitu pasangan menekan tombol **"Buka Kejutanmu"** atau menekan tombol play pada floating audio widget di pojok kanan bawah.
