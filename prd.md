# MASTER PROMPT: PRODUCT REQUIREMENTS DOCUMENT (PRD) & FULL IMPLEMENTATION — PERSONAL GRADUATION SURPRISE WEBSITE

## 1. ROLE & OBJECTIVE

Bertindaklah sebagai Senior Product Designer, UI/UX Designer, Creative Developer, Frontend Engineer, dan Software Architect yang ahli membuat personal storytelling websites dengan kualitas visual premium.

Saya ingin membangun sebuah website hadiah wisuda untuk pacar saya. Website ini dibuat secara personal sebagai bentuk apresiasi, rasa bangga, cinta, dan dukungan atas perjuangannya selama kuliah, mengerjakan skripsi, menghadapi revisi, melewati masa sulit, sampai akhirnya berhasil mencapai kelulusan dan wisuda.

Website ini bukan website wisuda universitas, bukan landing page bisnis, dan bukan template ucapan generik.

Website harus terasa seperti sebuah surat cinta digital yang hidup, sebuah digital scrapbook, dan sebuah perjalanan emosional yang diceritakan melalui foto, tulisan, interaksi, dan animasi.

Ketika pacar saya membuka website ini, saya ingin dia merasa:

- Dihargai atas seluruh perjuangannya.
- Bangga terhadap dirinya sendiri.
- Diingatkan bahwa proses panjangnya tidak sia-sia.
- Merasakan bahwa ada seseorang yang memperhatikan perjalanan dan usaha yang telah ia lalui.
- Mendapatkan kejutan kecil yang menyenangkan, romantis, hangat, dan personal.
- Memiliki sesuatu yang bisa dibuka kembali di masa depan untuk mengenang pencapaian ini.

Bangun website yang benar-benar berfungsi, bukan sekadar mockup, wireframe, atau desain statis.

Jangan berhenti setelah membuat halaman pertama. Implementasikan seluruh halaman, komponen, interaksi, responsivitas, animasi, pengelolaan foto, dan detail UX yang dijelaskan dalam dokumen ini.

## 2. PRODUCT VISION

Nama proyek sementara: "For You, My Graduate"

Nama website, judul, nama penerima, nama pengirim, panggilan sayang, dan seluruh teks harus mudah diganti melalui satu konfigurasi terpusat.

Konsep utama:

"A personal digital love letter celebrating her journey, her struggles, her growth, and her graduation."

Website harus memiliki alur storytelling:

1. The Surprise — kejutan pertama saat website dibuka.
2. The Celebration — ucapan selamat wisuda.
3. The Journey — cerita perjalanan kuliah dan skripsi.
4. The Memories — kumpulan foto dan kenangan.
5. The Words — surat personal dari pasangan.
6. The Future — harapan untuk perjalanan hidup selanjutnya.
7. The Final Surprise — penutup emosional yang berkesan.

Pengalaman harus terasa intim, tulus, dan dewasa. Jangan membuatnya terlihat seperti website jualan, dashboard SaaS, portofolio developer, atau halaman penuh komponen generik.

## 3. TARGET USERS

Primary user:
Pacar saya sebagai penerima hadiah wisuda.

Secondary user:
Saya sebagai pembuat website yang akan menyiapkan foto, cerita, tanggal, dan pesan personal.

Pengalaman penerima harus sederhana: membuka tautan, menikmati cerita, melihat foto, membaca pesan, dan menemukan kejutan di bagian akhir.

Pengalaman pembuat harus mudah: mengganti konten tanpa perlu mengedit banyak file atau memahami keseluruhan struktur kode.

## 4. DESIGN DIRECTION

Gunakan pendekatan visual premium dengan kombinasi romantic editorial, modern scrapbook, dan cinematic storytelling.

### Color palette

Gunakan design tokens yang konsisten:

- Warm Ivory: #FFF9F3
- Soft Blush: #F4DDE1
- Dusty Rose: #C88E9A
- Deep Burgundy: #702F42
- Warm Brown: #5B463E
- Muted Gold: #C6A56B
- White: #FFFFFF

Warna harus terasa hangat, elegan, dan nyaman dipandang.

Hindari penggunaan pink neon, gradient berlebihan, saturasi tinggi, efek glow berlebihan, dan terlalu banyak warna dekoratif.

### Typography

Gunakan kombinasi:

- Elegant serif untuk judul dan kalimat emosional.
- Sans-serif modern untuk navigasi, metadata, dan teks pendukung.
- Handwritten font secara terbatas untuk catatan kecil, caption foto, dan aksen surat cinta.

Pilihan font dapat menggunakan Google Fonts seperti Cormorant Garamond atau Playfair Display, dipadukan dengan DM Sans atau Inter.

Pastikan font fallback tersedia jika font eksternal gagal dimuat.

### Visual principles

- Gunakan whitespace yang cukup.
- Gunakan hierarki tipografi yang jelas.
- Foto menjadi elemen utama, bukan sekadar dekorasi.
- Setiap section memiliki komposisi visual yang berbeda tetapi tetap konsisten.
- Gunakan subtle grain texture, paper texture, tape, polaroid frame, garis tipis, dan dekorasi floral secukupnya.
- Hindari tampilan terlalu childish.
- Hindari layout yang seluruhnya terdiri dari card dengan bentuk dan ukuran seragam.
- Gunakan editorial asymmetry secara terkontrol.
- Pastikan website tetap indah pada layar ponsel.

Website harus terasa seperti hadiah yang benar-benar dibuat dengan perhatian, bukan template yang hanya diganti namanya.

## 5. INFORMATION ARCHITECTURE

Buat website utama berbentuk single-page storytelling experience dengan navigasi yang ringan.

Urutan section:

1. Intro / Opening Surprise
2. Hero Graduation
3. A Note Before You Continue
4. Her Journey
5. The Thesis Era
6. Photo Memories
7. Things I Admire About You
8. Personal Love Letter
9. A Little Celebration
10. Wishes for Your Next Chapter
11. Final Surprise
12. Footer

Setiap section harus memiliki identitas visual dan tujuan emosional yang berbeda.

Jangan membuat semua section tampil sekaligus dengan kepadatan tinggi. Atur ritme visual melalui pergantian latar, foto besar, teks pendek, ruang kosong, dan elemen interaktif.

## 6. FEATURE SPECIFICATIONS

### FEATURE A — OPENING SURPRISE

Buat halaman pembuka atau overlay yang memberikan kesan seperti membuka hadiah.

Elemen:

- Background warm ivory.
- Dekorasi floral atau elemen scrapbook yang sangat halus.
- Teks kecil: "A little something, just for you."
- Headline: "This is all about you."
- Nama atau panggilan penerima.
- Tombol utama: "Open Your Surprise".
- Micro-interaction pada tombol.
- Animasi pembuka yang lembut.

Ketika tombol diklik:

1. Jalankan animasi transisi pembukaan.
2. Tampilkan hero graduation.
3. Mulai musik hanya jika tersedia dan pengguna sudah memberikan interaksi yang memungkinkan audio diputar.
4. Jangan mengharuskan musik aktif untuk menikmati website.

Tambahkan pilihan "Skip intro" atau mekanisme untuk melewati animasi jika diperlukan.

Jangan membuat intro terlalu lama. Pengguna harus dapat memahami cara melanjutkan tanpa kebingungan.

Jika animasi dilewati, semua konten tetap dapat diakses.

### FEATURE B — HERO GRADUATION

Buat hero section yang emosional dan visualnya kuat.

Konten default:

Eyebrow:
"YOUR SPECIAL DAY"

Headline:
"YOU DID IT, MY LOVE."

Subheadline:
"After all the late nights, the doubts, the revisions, and the little victories — look at you now."

Supporting text:
"Today, the world gets to celebrate what you've worked so hard for. And I get to celebrate you."

CTA:
"Let's look back at your journey"

Elemen visual:

- Foto utama penerima, idealnya foto wisuda atau portrait terbaik.
- Komposisi foto editorial dengan frame elegan.
- Decorative date label.
- Small handwritten annotation.
- Subtle floating petals atau grain texture.
- Animasi masuk yang lembut.

Seluruh copy di atas hanyalah placeholder dan harus mudah diganti.

Jika foto wisuda belum tersedia, gunakan placeholder visual yang jelas dan elegan, bukan foto orang asing yang berpura-pura sebagai penerima.

### FEATURE C — PERSONAL INTRODUCTION

Setelah hero, tampilkan sebuah pesan pendek yang menjadi jembatan menuju perjalanan masa lalu.

Contoh:

"Before the gown, before the graduation photos, and before everyone says congratulations, there was a long journey that not everyone got to see."

Lanjutkan dengan:

"But I want you to remember something: you were already amazing long before this day."

Gunakan typography editorial dengan maksimal beberapa paragraf pendek.

Hindari teks yang terlalu padat.

### FEATURE D — HER JOURNEY TIMELINE

Buat timeline visual untuk menceritakan perjalanan penerima.

Timeline harus mendukung data dinamis, misalnya:

- The Beginning — awal perjalanan kuliah.
- The Learning Years — proses belajar, organisasi, dan pengalaman.
- The Hard Days — masa sulit dan kelelahan.
- The Thesis Era — mulai menyusun skripsi.
- The Revision Loop — revisi dan perbaikan berulang.
- The Final Defense — sidang atau ujian akhir.
- The Finish Line — dinyatakan lulus.
- The Graduation Day — hari wisuda.

Jangan mengasumsikan bahwa seluruh kejadian benar-benar dialami penerima. Semua milestone harus bisa diedit, dihapus, atau ditambahkan.

Setiap timeline item dapat memuat:

- Tanggal atau periode.
- Judul.
- Cerita pendek.
- Satu foto opsional.
- Caption personal.
- Dekorasi visual yang relevan.

Gunakan timeline vertikal yang nyaman dibaca pada mobile dan komposisi editorial pada desktop.

Animasi timeline dipicu secara halus ketika elemen memasuki viewport.

Jika tanggal tidak diketahui, gunakan label periode seperti "The Thesis Era" tanpa mengarang tanggal.

### FEATURE E — THE THESIS ERA

Buat satu section khusus tentang perjuangan skripsi karena ini merupakan salah satu inti hadiah.

Judul:
"Behind Every 'I'm Fine'"

Alternatif:
"The Chapter That Took So Much Courage"

Tujuan section ini adalah menghargai perjuangan di balik pencapaian, bukan hanya hasil akhirnya.

Elemen konten:

- Foto saat mengerjakan skripsi.
- Foto laptop, meja belajar, buku, catatan, atau tempat pengerjaan skripsi.
- Foto ketika bimbingan, revisi, atau persiapan sidang jika tersedia.
- Cerita tentang proses, kesabaran, dan ketekunan.
- Kutipan pendek yang ditulis secara personal.
- Kolase foto dengan gaya jurnal atau scrapbook.

Contoh copy:

"I know this journey wasn't always easy. There were days when everything felt overwhelming, when the revisions seemed endless, and when you probably wished the finish line would come a little sooner."

"But you kept going. Maybe not always confidently, maybe not always without tears or exhaustion, but you kept showing up."

"And I hope you know how much that means."

Copy tersebut hanya contoh. Sediakan konfigurasi untuk menggantinya dengan cerita yang lebih sesuai dengan pengalaman sebenarnya.

Jangan menambahkan cerita spesifik seperti menangis, begadang, gagal sidang, atau konflik dengan dosen kecuali memang diberikan oleh pemilik website.

### FEATURE F — PHOTO MEMORY GALLERY

Buat galeri foto personal dengan desain scrapbook yang interaktif.

Persyaratan:

- Mendukung banyak foto.
- Mendukung caption per foto.
- Mendukung tanggal atau label momen opsional.
- Mendukung kategori foto.
- Mendukung portrait, landscape, dan square.
- Mempertahankan rasio foto dengan object-fit yang sesuai.
- Menyediakan layout editorial yang tidak monoton.
- Menampilkan thumbnail dengan lazy loading.
- Memiliki lightbox ketika foto diklik.
- Lightbox memiliki tombol previous, next, dan close.
- Keyboard navigation dengan ArrowLeft, ArrowRight, dan Escape.
- Pada mobile, navigasi tetap mudah digunakan.
- Menampilkan alt text yang bermakna.
- Menangani foto gagal dimuat dengan fallback yang elegan.

Kategori opsional:

- College Days
- Thesis Days
- Little Moments
- Our Memories
- Graduation

Kategori harus bisa disesuaikan dan boleh dihapus jika tidak relevan.

Jangan memaksakan seluruh kategori jika foto yang tersedia sedikit.

Gallery tidak boleh mengubah urutan foto secara acak setiap kali halaman dibuka.

Buat komposisi foto dengan ukuran yang bervariasi, seperti editorial grid, polaroid collage, atau masonry-style layout jika implementasinya sesuai.

Jangan menggunakan efek hover yang menghalangi akses pada layar sentuh.

### FEATURE G — THINGS I ADMIRE ABOUT YOU

Buat section apresiasi personal.

Judul:
"Things I Hope You Never Forget About Yourself"

Tampilkan beberapa hal yang saya kagumi dari dirinya.

Contoh placeholder:

- Your courage to keep going.
- Your patience through difficult days.
- The way you try, even when things feel uncertain.
- The effort you put into becoming a better version of yourself.
- The person you are beyond your achievements.

Setiap item memiliki:

- Judul pendek.
- Penjelasan satu atau dua kalimat.
- Elemen dekoratif minimalis.

Buat tampilannya seperti halaman jurnal atau kumpulan catatan personal.

Jangan gunakan card generik yang terlalu mirip dengan dashboard.

Semua kalimat harus bisa diedit.

### FEATURE H — PERSONAL LOVE LETTER

Ini merupakan salah satu section terpenting.

Buat tampilan seperti surat yang ditulis secara personal.

Elemen:

- Paper-like background.
- Tipografi yang nyaman untuk membaca.
- Heading "A Letter From Me to You".
- Salam pembuka menggunakan nama atau panggilan.
- Isi surat dengan paragraf yang cukup pendek.
- Penutup dengan nama atau panggilan pengirim.
- Tanggal opsional.
- Animasi reveal yang halus.

Contoh pembuka:

"To my favorite person,"

"Today is your day, and I wish I could put into words just how proud I am of you."

"I hope when you look back at your university journey, you don't only remember the deadlines, the revisions, or the days when everything felt difficult. I hope you also remember how much you learned, how much you grew, and how many times you found the strength to keep going."

"I am so proud of the person you are, not only because you made it to graduation, but because of everything it took for you to get here."

Contoh penutup:

"Congratulations on this beautiful chapter of your life. I hope you always remember that you deserve to celebrate yourself, too."

"With all my love,"

"[Nama Pengirim]"

Ini hanya contoh awal, bukan surat final yang harus digunakan tanpa perubahan.

Sediakan satu file konfigurasi untuk isi surat lengkap agar saya bisa mengganti seluruh teks dengan versi yang lebih personal.

Jangan otomatis menambahkan nama, tanggal, atau detail hubungan yang belum saya berikan.

### FEATURE I — LITTLE CELEBRATION

Buat sebuah interaksi kecil untuk merayakan kelulusan.

Contoh:

- Tombol "Celebrate This Moment".
- Saat diklik, muncul animasi confetti lembut.
- Menampilkan pesan seperti "You deserve every bit of this happiness."
- Bisa memutar animasi bunga atau bintang kecil.
- Animasi berhenti secara otomatis dan tidak terus berjalan di background.

Confetti harus ringan dan tidak menyebabkan frame drops pada ponsel.

Hindari penggunaan animasi yang terlalu ramai.

Jika prefers-reduced-motion aktif, gunakan efek minimal atau tampilkan pesan tanpa animasi.

### FEATURE J — WISHES FOR THE NEXT CHAPTER

Buat section tentang masa depan.

Judul:
"Here's to Everything Waiting for You"

Isi berupa harapan untuk perjalanan berikutnya:

- Semoga karier dan cita-citanya berkembang.
- Semoga ia mendapatkan kesempatan yang baik.
- Semoga ia tetap menjaga dirinya di tengah kesibukan.
- Semoga ia tidak meragukan kemampuan dirinya sendiri.
- Semoga ia tetap bahagia dan bangga terhadap prosesnya.

Tambahkan pesan bahwa wisuda bukan akhir dari perjalanan, melainkan awal dari bab baru.

Jangan memberikan kesan bahwa masa depan harus selalu sempurna.

Gunakan copy yang hangat, realistis, dan mendukung.

### FEATURE K — FINAL SURPRISE

Buat bagian penutup yang memorable.

Konsep:

Setelah pengguna selesai melihat perjalanan, galeri, dan surat, tampilkan sebuah final message yang terasa seperti penutup film pendek atau surat cinta.

Judul:
"One Last Thing..."

Teks contoh:

"If you ever look back at this chapter and forget how far you've come, I hope this little corner of the internet reminds you."

"You did something meaningful. You worked for it. You grew through it. And you deserve to be proud."

"Congratulations, my graduate. I'm so, so proud of you."

Tambahkan:

- Foto favorit.
- Nama atau panggilan penerima.
- Nama pengirim.
- Tanggal wisuda jika sudah tersedia.
- Animasi lembut berupa bintang, petals, atau paper confetti.
- Tombol "Read Our Memories Again" yang menggulir kembali ke gallery.
- Tombol "Back to the Beginning" yang kembali ke hero.
- Opsi menampilkan surat sekali lagi.

Jangan menambahkan fitur berbagi otomatis atau mengunggah informasi pribadi ke platform eksternal.

Pastikan tombol navigasi benar-benar bekerja.

### FEATURE L — NAVIGATION & PROGRESS

Buat navigasi yang minimal dan elegan.

Desktop:
- Logo teks sederhana.
- Navigasi menuju Journey, Memories, dan Letter.
- Progress indicator opsional.
- Navigasi tidak boleh menutupi konten.

Mobile:
- Gunakan navigasi ringkas atau menu yang mudah dibuka.
- Hindari navbar yang memakan terlalu banyak ruang vertikal.
- Pastikan anchor links memiliki scroll offset yang benar.
- Semua navigasi bisa digunakan dengan keyboard dan screen reader.

Pertimbangkan progress indicator tipis yang menunjukkan posisi pengguna dalam storytelling.

Jangan menggunakan navigasi yang terlalu ramai karena fokus utama adalah cerita dan foto.

## 7. CONTENT MANAGEMENT SYSTEM

Website harus mudah dikustomisasi oleh pemiliknya.

Untuk versi awal, jangan membuat backend atau dashboard admin jika tidak diperlukan.

Gunakan satu file konfigurasi terpusat, misalnya:

src/data/site-content.ts

Konfigurasi tersebut harus mengatur:

- Nama penerima.
- Nama pengirim.
- Panggilan sayang.
- Tanggal wisuda.
- Hero title dan subtitle.
- Intro.
- Timeline.
- Foto dan caption.
- Kategori galeri.
- Daftar apresiasi.
- Isi surat.
- Pesan masa depan.
- Final surprise.
- Musik opsional.
- Preferensi visual sederhana.

Buat struktur data TypeScript yang jelas dan mudah diedit.

Contoh struktur:

siteContent = {
  recipientName: "Nama Penerima",
  recipientNickname: "Panggilan Sayang",
  senderName: "Nama Pengirim",
  graduationDate: "",
  hero: {
    eyebrow: "YOUR SPECIAL DAY",
    title: "YOU DID IT, MY LOVE.",
    subtitle: "A personal message for your special day.",
    image: "/images/hero.jpg"
  },
  timeline: [],
  gallery: [],
  appreciations: [],
  letter: {
    greeting: "",
    paragraphs: [],
    closing: "",
    signature: ""
  },
  futureWishes: [],
  finalMessage: {}
}

Ini hanya contoh bentuk data. Sesuaikan struktur akhir dengan arsitektur aplikasi yang benar.

Gunakan TypeScript types/interfaces untuk memastikan struktur konten valid.

Jangan menyimpan semua konten sebagai hardcoded text tersebar di banyak komponen.

Buat dokumentasi sederhana yang menjelaskan cara mengganti konten, menambah foto, menghapus foto, mengganti tanggal, dan mengubah surat.

## 8. PHOTO ASSET MANAGEMENT

Siapkan struktur aset yang mudah digunakan.

Contoh:

public/
  images/
    hero.jpg
    journey/
    thesis/
    memories/
    graduation/
  audio/
    background-music.mp3

Gunakan file foto lokal sebagai pendekatan default untuk versi statis.

Jika framework mendukung optimasi gambar lokal, manfaatkan fitur tersebut tanpa membuat konfigurasi yang tidak diperlukan.

Sediakan placeholder untuk foto yang belum tersedia.

Jangan mengambil foto pribadi dari internet secara otomatis.

Jangan menggunakan foto acak orang lain sebagai pengganti foto pacar saya.

Jangan mengarang caption seolah-olah foto placeholder merupakan dokumentasi asli.

Tambahkan dokumentasi mengenai format gambar yang direkomendasikan dan cara mengganti file foto.

Jika menggunakan foto dengan nama file yang sama untuk penggantian, jelaskan bahwa cache browser atau cache deployment mungkin perlu diperhatikan.

## 9. TECHNICAL STACK

Jika repository yang sudah ada menggunakan stack tertentu, periksa dan pertahankan stack tersebut jika masih layak.

Jika memulai dari repository kosong, gunakan:

- Next.js dengan App Router.
- React.
- TypeScript.
- Tailwind CSS.
- Lucide React untuk icon.
- Framer Motion atau Motion untuk animasi jika kompatibel dengan versi stack.
- CSS custom untuk paper texture, decorative elements, dan komposisi scrapbook.
- HTML semantik.

Gunakan dependency sesedikit mungkin.

Jangan menambahkan library hanya untuk efek sederhana yang dapat dibuat dengan CSS.

Jangan menggunakan backend, database, authentication, atau CMS eksternal untuk versi pertama.

Website ini adalah personal gift website, sehingga kesederhanaan deployment dan kemudahan pemeliharaan lebih penting daripada kompleksitas arsitektur.

Jika repository saat ini menggunakan versi dependency yang berbeda, audit terlebih dahulu sebelum melakukan upgrade.

Jangan melakukan upgrade besar tanpa alasan yang jelas.

## 10. RESPONSIVE DESIGN

Website wajib mendukung:

- Mobile kecil sekitar 320–375 px.
- Mobile umum sekitar 390–430 px.
- Tablet.
- Laptop 1366 px.
- Desktop lebar.

Mobile-first design merupakan prioritas karena penerima kemungkinan besar membuka website melalui WhatsApp di ponsel.

Persyaratan:

- Tidak ada horizontal overflow.
- Judul tidak terpotong.
- Foto tidak gepeng.
- Lightbox tidak keluar dari viewport.
- Tombol memiliki touch target yang memadai.
- Paragraf mudah dibaca.
- Animasi tidak menyebabkan layout shift berlebihan.
- Navigasi tidak menutupi judul atau foto.
- Section tetap memiliki whitespace yang cukup.
- Grid foto berubah secara adaptif.

Pada mobile, utamakan satu kolom dengan storytelling yang jelas.

Jangan sekadar mengecilkan layout desktop.

## 11. ANIMATION & INTERACTION GUIDELINES

Gunakan animasi untuk memperkuat cerita, bukan sebagai hiasan yang mengganggu.

Animasi yang direkomendasikan:

- Fade-in dan translate kecil.
- Reveal foto saat scroll.
- Staggered reveal untuk timeline.
- Transisi pembukaan hadiah.
- Hover micro-interaction pada tombol.
- Transisi lightbox.
- Confetti yang terbatas.
- Subtle floating decorative elements.

Hindari:

- Animasi yang terus berjalan pada seluruh halaman.
- Scroll hijacking.
- Memaksa pengguna menunggu animasi sebelum membaca.
- Cursor custom yang merusak usability.
- Parallax berlebihan.
- Animasi yang membuat pusing.
- Audio autoplay.
- Efek yang mengganggu input atau navigasi.

Hormati prefers-reduced-motion.

Pastikan website tetap berfungsi dengan JavaScript animation yang dinonaktifkan atau gagal dimuat, sejauh memungkinkan dalam arsitektur yang digunakan.

## 12. MUSIC & AUDIO

Musik merupakan fitur opsional.

Jika digunakan:

- Musik baru dimulai setelah interaksi pengguna.
- Sediakan tombol play/pause.
- Sediakan kontrol mute yang jelas.
- Jangan memulai audio secara otomatis sebelum izin/interaksi yang sesuai.
- Jangan menghalangi konten ketika audio tidak tersedia.
- Tangani kegagalan pemutaran.
- Jangan mengunduh atau meng-host lagu berhak cipta tanpa izin.
- Gunakan audio milik sendiri atau audio yang memiliki lisensi sesuai.

Website harus tetap terasa lengkap tanpa musik.

## 13. ACCESSIBILITY

Implementasikan:

- Semantic HTML.
- Heading hierarchy yang benar.
- Alt text untuk foto.
- Label pada seluruh tombol interaktif.
- Focus indicator yang terlihat.
- Navigasi keyboard.
- Kontras teks yang memadai.
- ARIA attributes hanya ketika dibutuhkan.
- Modal/lightbox dengan pengelolaan fokus yang benar.
- Escape untuk menutup lightbox.
- prefers-reduced-motion.
- Jangan menggunakan warna saja untuk menyampaikan informasi.

Pastikan dekorasi tidak dibaca sebagai konten penting oleh screen reader.

## 14. PERFORMANCE

Targetkan pengalaman cepat dan ringan.

Persyaratan:

- Lazy loading pada foto di luar viewport.
- Gunakan ukuran gambar yang masuk akal.
- Hindari dependency berat yang tidak diperlukan.
- Hindari animasi layout yang menyebabkan banyak re-render.
- Gunakan dynamic import hanya jika memberi manfaat nyata.
- Optimalkan font loading.
- Jangan memuat seluruh foto resolusi besar jika thumbnail sudah cukup.
- Tidak ada console error yang tidak ditangani.
- Tidak ada permintaan API yang sebenarnya tidak dibutuhkan.

Target kualitas:
- Lighthouse Performance: usahakan 90+.
- Accessibility: usahakan 90+.
- Best Practices: usahakan 90+.
- SEO: usahakan 90+ jika konfigurasi dan kondisi pengujian memungkinkan.

Angka tersebut merupakan target, bukan klaim hasil yang boleh dibuat sebelum pengujian dilakukan.

## 15. PRIVACY & SECURITY

Website berisi foto, pesan, dan informasi pribadi.

Karena itu:

- Jangan mengirim foto ke layanan eksternal tanpa kebutuhan dan persetujuan.
- Jangan menambahkan analytics pihak ketiga secara default.
- Jangan menyertakan secret atau API key di frontend.
- Jangan menyimpan informasi pribadi yang tidak diperlukan.
- Jangan membuat form yang mengumpulkan data penerima.
- Jangan membuat fitur upload publik.
- Jangan membuat admin endpoint tanpa autentikasi.
- Jangan mengekspos source data sensitif yang tidak seharusnya tersedia di browser.

Jika website akan dipublikasikan melalui URL publik, dokumentasikan bahwa siapa pun yang memiliki akses ke URL dan file publik berpotensi melihat konten tersebut.

Jangan menjanjikan bahwa website bersifat privat hanya karena URL-nya tidak dibagikan secara terbuka.

Jika dibutuhkan privasi lebih tinggi, rekomendasikan password protection atau mekanisme akses yang benar di level server/deployment.

## 16. SEO & SHARING

Atur metadata website:

- Title yang personal.
- Description singkat.
- Open Graph title.
- Open Graph description.
- Open Graph image jika tersedia.
- Theme color.
- Favicon sederhana.

Contoh title:
"For You, My Graduate ❤️"

Jangan memasukkan detail pribadi berlebihan ke metadata.

Karena tautan akan dikirim kepada penerima, pastikan preview WhatsApp atau media sosial terlihat rapi jika platform deployment mendukungnya.

Gunakan canonical URL hanya jika domain final sudah diketahui.

Jangan membuat klaim bahwa preview pasti tampil sempurna pada semua platform sebelum diuji.

## 17. DEPLOYMENT

Siapkan agar website bisa di-deploy ke layanan yang kompatibel dengan stack, misalnya Vercel atau VPS sendiri.

Untuk versi statis, pertimbangkan static export hanya jika seluruh fitur dan konfigurasi framework kompatibel.

Jika menggunakan Next.js static export:

- Pastikan seluruh route dan fitur kompatibel.
- Hindari ketergantungan pada fitur server runtime.
- Periksa optimasi gambar dan konfigurasi output.
- Pastikan file di public tersedia setelah deployment.

Jika menggunakan VPS:

- Dokumentasikan build dan start commands.
- Dokumentasikan kebutuhan reverse proxy jika relevan.
- Hindari memasukkan secret ke repository.
- Pastikan URL menggunakan HTTPS pada deployment final.

Berikan petunjuk deployment yang sesuai dengan pendekatan yang benar-benar digunakan, bukan instruksi generik yang tidak cocok dengan repository.

## 18. PROJECT STRUCTURE

Usulkan struktur yang rapi seperti:

src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
      Navigation.tsx
      SectionWrapper.tsx
    opening/
      OpeningExperience.tsx
    sections/
      HeroSection.tsx
      IntroductionSection.tsx
      JourneyTimeline.tsx
      ThesisSection.tsx
      MemoryGallery.tsx
      AppreciationSection.tsx
      LoveLetterSection.tsx
      CelebrationSection.tsx
      FutureWishesSection.tsx
      FinalSurpriseSection.tsx
    gallery/
      PhotoLightbox.tsx
      PhotoItem.tsx
    effects/
      Confetti.tsx
      Reveal.tsx
  data/
    site-content.ts
  lib/
    utils.ts
  types/
    content.ts

public/
  images/
  audio/

docs/
  CONTENT-GUIDE.md
  DEPLOYMENT.md

Struktur di atas merupakan acuan. Sesuaikan berdasarkan kebutuhan nyata dan hindari membuat banyak file kecil yang tidak memberi manfaat.

Jangan membuat komponen terlalu besar, tetapi jangan memecah setiap elemen kecil menjadi file terpisah tanpa alasan.

## 19. IMPLEMENTATION WORKFLOW

Kerjakan secara sistematis.

PHASE 1 — Repository Audit

- Periksa struktur repository.
- Identifikasi framework, package manager, versi dependency, dan konfigurasi yang tersedia.
- Periksa komponen yang dapat digunakan kembali.
- Jangan menghapus atau menimpa pekerjaan yang sudah ada tanpa alasan.
- Buat ringkasan singkat mengenai kondisi repository.

PHASE 2 — Design System & Content Model

- Buat design tokens.
- Tentukan typography dan spacing.
- Buat TypeScript types.
- Buat konfigurasi konten terpusat.
- Siapkan placeholder foto.
- Pastikan struktur konten dapat berkembang tanpa refactor besar.

PHASE 3 — Build Core Experience

Implementasikan:
- Opening experience.
- Hero.
- Introduction.
- Journey timeline.
- Thesis storytelling.
- Photo gallery.
- Appreciation section.
- Personal letter.
- Celebration.
- Future wishes.
- Final surprise.
- Navigation.

PHASE 4 — Visual Refinement

- Perbaiki layout dan hierarki visual.
- Tambahkan dekorasi scrapbook yang proporsional.
- Perbaiki typography.
- Pastikan section tidak monoton.
- Pastikan foto dan teks terasa menyatu.
- Optimalkan tampilan mobile.

PHASE 5 — Interaction & Accessibility

- Implementasikan lightbox.
- Implementasikan navigasi antarbagian.
- Implementasikan tombol surprise dan celebration.
- Tambahkan reduced-motion support.
- Uji keyboard navigation.
- Uji error state dan placeholder.

PHASE 6 — Quality Assurance

Jalankan seluruh pemeriksaan yang relevan:

- Dependency installation jika diperlukan.
- Lint.
- Type checking.
- Production build.
- Test yang tersedia.
- Browser testing.
- Mobile viewport testing.
- Lightbox interaction.
- Opening interaction.
- Navigation anchor behavior.
- Foto gagal dimuat.
- Reduced motion.
- Audio fallback jika musik digunakan.

Jangan menyatakan seluruh test berhasil jika belum dijalankan.

Jika ditemukan masalah, perbaiki dan jalankan kembali pemeriksaan terkait.

PHASE 7 — Documentation & Handover

Buat dokumentasi yang menjelaskan:

- Cara menjalankan proyek.
- Cara mengganti nama dan panggilan.
- Cara mengganti foto.
- Cara menambah atau menghapus timeline.
- Cara mengubah surat.
- Cara menonaktifkan musik.
- Cara build.
- Cara deployment.
- Hal yang masih memerlukan input pemilik.

## 20. ACCEPTANCE CRITERIA

Website dinyatakan selesai apabila:

1. Seluruh section utama sudah tersedia.
2. Seluruh teks personal dapat diedit dari konfigurasi terpusat.
3. Foto dapat diganti tanpa mengubah komponen utama.
4. Gallery mendukung lightbox yang benar-benar berfungsi.
5. Tombol pembuka surprise berfungsi.
6. Tombol celebration berfungsi.
7. Tombol navigasi kembali berfungsi.
8. Website responsif di mobile, tablet, dan desktop.
9. Tidak ada horizontal overflow yang tidak disengaja.
10. Tidak ada placeholder rusak atau broken image yang dibiarkan tanpa fallback.
11. Tidak ada audio autoplay yang tidak diinginkan.
12. prefers-reduced-motion dihormati.
13. Keyboard navigation dan fokus interaktif berfungsi.
14. Production build berhasil.
15. Tidak ada error runtime utama pada alur penggunaan normal.
16. Dokumentasi penggantian konten tersedia.
17. Website tidak mengarang data personal.
18. Website tidak bergantung pada layanan backend yang tidak diperlukan.
19. Tampilan akhir terasa personal, elegan, emosional, dan konsisten.
20. Seluruh keterbatasan atau item yang belum selesai didokumentasikan secara jujur.

## 21. CREATIVE DIRECTION — IMPORTANT

Jangan mengimplementasikan semua section dengan pola visual yang identik.

Buat variasi komposisi:

- Hero menggunakan visual besar dan editorial typography.
- Timeline menggunakan garis perjalanan dan milestone.
- Thesis section menggunakan kolase seperti jurnal.
- Gallery menggunakan layout foto yang bervariasi.
- Appreciation section menggunakan kumpulan catatan pendek.
- Love letter menggunakan halaman surat.
- Final surprise menggunakan komposisi yang lebih tenang dan emosional.

Gunakan animasi dan dekorasi hanya jika memperkuat cerita.

Jangan mengorbankan keterbacaan untuk estetika.

Jangan mengisi website dengan teks panjang di setiap bagian. Sisakan ruang untuk foto, whitespace, dan momen hening.

Jangan menggunakan emoji di setiap paragraf. Emoji boleh digunakan secara terbatas jika sesuai dengan karakter website.

Jangan mengarang foto, nama, cerita, atau tanggal yang belum diberikan.

Gunakan placeholder yang jelas dan mudah diganti.

## 22. FINAL INSTRUCTIONS

Mulai dengan memeriksa repository yang tersedia.

Setelah audit, langsung implementasikan website berdasarkan PRD ini. Jangan hanya memberikan rekomendasi atau source code yang terpisah tanpa mengintegrasikannya ke proyek.

Jangan berhenti untuk meminta semua foto dan detail personal sebelum membuat kerangka website. Gunakan placeholder yang jelas agar pengembangan dapat dimulai sekarang.

Jika ada keputusan desain yang belum ditentukan, pilih solusi yang paling elegan, sederhana, ringan, dan konsisten dengan konsep personal graduation gift.

Jangan mengubah scope menjadi platform kompleks atau menambahkan backend tanpa kebutuhan yang jelas.

Prioritaskan hasil akhir yang siap dikustomisasi, siap diuji, dan siap di-deploy.

Pada akhir pengerjaan, berikan ringkasan:
1. Fitur yang sudah selesai.
2. File penting yang dibuat atau diubah.
3. Cara menjalankan proyek.
4. Cara mengganti foto dan isi surat.
5. Hasil lint, typecheck, build, dan test yang benar-benar telah dijalankan.
6. Cara deployment.
7. Daftar konten personal yang masih perlu saya isi.

Tujuan akhirnya bukan sekadar membuat website yang indah, tetapi membuat sebuah kenangan digital yang bisa saya berikan kepada seseorang yang saya sayangi pada hari wisudanya.