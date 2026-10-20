import { SiteContent } from "@/types/content";

export const siteContent: SiteContent = {
  // === INFORMASI UTAMA PENERIMA & PENGIRIM ===
  recipientName: "Naili Sarifatul Izah",
  recipientNickname: "Naili",
  senderName: "Daffa' Fairuz Aditya",
  senderNickname: "Daffa",
  relationshipDuration: "6 Tahun Bersama",
  graduationDate: "21 Oktober 2026",
  university: "Universitas Muria Kudus",
  major: "Ilmu Hukum",
  degreeTitle: "S.H.",

  // === FEATURE A: HALAMAN AWAL (OPENING SURPRISE CARD) ===
  opening: {
    badge: "A little something, just for you",
    subnote: "Spesial di Hari Wisudamu",
    headlinePrefix: "This is all about you,", // Diikuti nama panggilan penerima
    description:
      "Sebuah ruang apresiasi kecil yang dibuat dengan sepenuh hati, merayakan seluruh perjuangan, keteguhan, dan senyum manismu.",
    buttonText: "Buka Kejutanmu",
    skipText: "Lewati intro & langsung ke cerita",
    footerNote: "dengan penuh cinta",
  },

  // === AUDIO PENGIRING (OPSIONAL) ===
  audio: {
    enabled: true,
    src: "/audio/background-music.mp3", // Letakkan file mp3 di public/audio/background-music.mp3
    title: "Gymnopédie No. 1 (Acoustic Piano)",
    artist: "Erik Satie (Arr. Kevin MacLeod)",
  },

  // === FEATURE B: HERO GRADUATION ===
  hero: {
    eyebrow: "A SPECIAL CELEBRATION FOR YOU",
    title: "Selamat Wisuda,",
    highlightWord: "Sayangku.",
    subtitle:
      "Setelah semua yang kamu lewati, mulai dari hari-hari penuh revisi, rasa capek, sampai momen ketika semuanya terasa berat, akhirnya hari ini datang juga. Hari di mana kamu bisa tersenyum bangga atas semua usaha yang udah kamu perjuangkan selama ini.",
    quote:
      "“Buat orang lain, hari ini mungkin tentang gelar dan toga. Tapi buat aku, hari ini tentang kamu, tentang semua perjuanganmu, dan tentang betapa bangganya aku melihat kamu sampai di titik ini.”",
    supportingText:
      "Halaman ini mungkin sederhana, tapi aku membuatnya khusus buat kamu. Aku ingin menyimpan sedikit cerita tentang perjuanganmu di sini, supaya suatu hari nanti, saat kamu melihatnya lagi, kamu bisa tersenyum dan bilang ke diri sendiri, “Ternyata aku bisa sampai sejauh ini, ya.”",
    ctaText: "Mulai Jelajahi Perjalananmu",
    heroImage: "/images/hero/hero-portrait.jpg",
    heroImageAlt: "Foto Cantik Favoritku • Naili",
    photoDateNote: "Happy Graduation Day • 21 Oktober 2026",
  },

  // === FEATURE C: PERSONAL INTRODUCTION ===
  intro: {
    badge: "Catatan Pembuka",
    title: "Sebelum Kamu Melangkah Lebih Jauh...",
    paragraphs: [
      "Sebelum hari ini, sebelum toga dan bunga yang kamu bawa, ada banyak hal yang harus kamu lewati buat sampai di titik ini.",
      "Ada hari-hari ketika semuanya terasa melelahkan, revisi yang seolah nggak ada habisnya, dan mungkin ada saatnya kamu cuma ingin semuanya cepat selesai.",
      "Orang-orang mungkin akan melihatmu hari ini sebagai seseorang yang berhasil menyelesaikan kuliahnya. Tapi aku ingin kamu ingat, aku bangga sama kamu bukan cuma karena hari ini kamu akhirnya wisuda, tapi juga karena semua usaha yang udah kamu lakukan untuk sampai ke sini.",
    ],
    highlightQuote:
      "“Perjuanganmu adalah cerita favoritku, dan keberhasilanmu adalah kebahagiaan terbesarku.”",
  },

  // === FEATURE D: HER JOURNEY TIMELINE ===
  timeline: {
    badge: "Langkah Demi Langkah",
    title: "Peta Jejak Langkah Kuliahmu",
    subtitle:
      "Setiap semester menyimpan cerita, tawa, dan ujian kedewasaan yang membentukmu menjadi sosok sekuat hari ini.",
    items: [
      {
        id: "step-1",
        period: "Semester 1 - 2",
        title: "Awal Mula Perjalanan (The Beginning)",
        description:
          "Pertama kali melangkah ke gerbang kampus dengan ransel penuh mimpi. Menyesuaikan diri dengan ritme perkuliahan baru, teman-teman baru, dan rasa ingin tahu yang membuncah.",
        tag: "Babak Pertama",
        photo: "/images/journey/timeline-1.jpg",
        caption: "Senyum pertama saat masa orientasi kampus",
      },
      {
        id: "step-2",
        period: "Semester 3 - 4",
        title: "Dinamika & Pendewasaan (The Learning Years)",
        description:
          "Tugas kelompok yang menumpuk, presentasi demi presentasi, aktif berorganisasi dan kepanitiaan. Kamu mulai menemukan ritme dan passion terbesarmu.",
        tag: "Bertumbuh",
        photo: "/images/journey/timeline-2.jpg",
        caption: "Diskusi seru di perpustakaan bersama kawan",
      },
      {
        id: "step-3",
        period: "Semester 5 - 6",
        title: "Ujian Kesabaran & Magang (The Hard Days)",
        description:
          "Membagi waktu antara tugas kuliah tingkat lanjut, persiapan magang kerja, dan kelelahan fisik. Namun di saat lelah pun, kamu tidak pernah menyerah.",
        tag: "Ketangguhan",
        photo: "/images/journey/semester-5.jpg",
        caption: "Masa-masa penuh deadline dan kopi penahan kantuk",
      },
      {
        id: "step-4",
        period: "Semester 7",
        title: "Gerbang Skripsi Dimulai (The Proposal Defense)",
        description:
          "Menyusun ide penelitian, mengumpulkan jurnal tebal, dan menghadapi Seminar Proposal. Rasa gugup yang berhasil kamu taklukkan dengan elegan.",
        tag: "Sempro Lolos!",
        photo: "/images/journey/semester-7.jpg",
        caption: "Seikat bunga dan senyum lega setelah sempro",
      },
      {
        id: "step-5",
        period: "Semester 8",
        title: "Babak Akhir: Sidang Skripsi (The Defense)",
        description:
          "Hari penentuan di hadapan para dosen penguji. Segala argumen, data, dan analisa yang kamu susun dengan teliti berbuah kata 'LULUS'.",
        tag: "Yudisium & Lulus",
        photo: "/images/journey/timeline-5.jpg",
        caption: "Momen bersejarah saat diumumkan lulus sidang skripsi",
      },
      {
        id: "step-6",
        period: "Hari Ini",
        title: "Hari Wisuda: Mahkota Perjuangan (The Finish Line)",
        description:
          "Hari ini adalah pembuktian atas semua kerja kerasmu. Toga kebanggaan itu resmi kamu kenakan hari ini, dan aku nggak sabar melihat senyum paling bahagiamu!",
        tag: "Official Graduate",
        photo: "",
        caption: "Nggak sabar foto toga bareng kamu hari ini! 🎓❤️",
      },
    ],
  },

  // === FEATURE E: THE THESIS ERA ===
  thesis: {
    badge: "Di Balik Kata 'Aku Gak Apa-Apa'",
    title: "Babak Skripsi: Bab yang Paling Membutuhkan Keberanian",
    subtitle:
      "Bukan sekadar lembaran ratusan halaman kertas, melainkan bukti ketangguhan mentalmu yang paling nyata.",
    paragraphs: [
      "Aku tahu perjalanan ini tidak selalu mudah. Ada hari-hari di mana laptop terasa begitu berat dibuka, ketika revisian terasa tak berujung, dan ketika kamu mungkin diam-diam bertanya kapan semua ini akan selesai.",
      "Tapi kamu terus melangkah. Mungkin tidak selalu dengan rasa percaya diri penuh, mungkin sesekali dengan air mata dan rasa letih yang mendalam, tapi kamu tetap memilih untuk hadir dan menyelesaikannya.",
      "Dan aku harap kamu tahu, betapa dalamnya rasa kagum dan banggaku melihat kegigihanmu itu.",
    ],
    quote:
      "“Skripsi ini bukan hanya membuktikan kecerdasan akademismu, tapi membuktikan bahwa hatimu jauh lebih kuat dari keraguanmu.”",
    items: [
      {
        title: "Meja Belajar Penuh Catatan",
        caption: "Saksi bisu ribuan jam analisa dan revisi data",
        image: "/images/thesis/desk.jpg",
      },
      {
        title: "Draf Bab 1 Hingga Bab 5",
        caption: "Dari coretan merah dosen hingga cap persetujuan final",
        image: "/images/thesis/draft.jpg",
      },
      {
        title: "Secangkir Kopi & Laptop",
        caption: "Kawan setia di malam-malam panjang penulisan",
        image: "/images/thesis/coffee.jpg",
      },
    ],
  },

  // === FEATURE F: PHOTO MEMORY GALLERY ===
  gallery: {
    badge: "Kliping Kenangan",
    title: "Galeri Foto & Momen Berharga",
    subtitle:
      "Klik foto mana pun untuk memperbesar dan membaca kenangan di baliknya.",
    categories: [
      { id: "all", label: "Semua Momen" },
      { id: "together", label: "Kenangan Kita" },
      { id: "moments", label: "Tawa Manis" },
      { id: "college", label: "Dunia Kampus" },
      { id: "thesis", label: "Masa Skripsi" },
    ],
    photos: [
      {
        id: "gal-1",
        title: "Senyum Manis yang Bikin Kangen",
        category: "moments",
        url: "/images/memories/photo-1.jpg",
        caption: "Senyuman manismu yang selalu berhasil bikin hari-hariku teduh.",
        date: "Kenangan Manis",
        aspect: "portrait",
      },
      {
        id: "gal-2",
        title: "Momen Sempro Selesai",
        category: "thesis",
        url: "/images/memories/photo-2.jpg",
        caption: "Wajah lelah bercampur lega sehabis ujian seminar proposal.",
        date: "September 2025",
        aspect: "landscape",
      },
      {
        id: "gal-3",
        title: "Kencan Sambil Nugas",
        category: "together",
        url: "/images/memories/photo-3.jpg",
        caption: "Di kafe sudut kota, kamu mengetik skripsi dan aku menemanimu dengan bangga.",
        date: "Desember 2025",
        aspect: "square",
      },
      {
        id: "gal-4",
        title: "Enam Tahun Kebersamaan",
        category: "together",
        url: "/images/memories/photo-4.jpg",
        caption: "Perjalanan 6 tahun menemani dan melihatmu bertumbuh sehebat sekarang.",
        date: "Our Journey",
        aspect: "portrait",
      },
      {
        id: "gal-5",
        title: "Tawa Ceria di Luar Kampus",
        category: "moments",
        url: "/images/memories/photo-5.jpg",
        caption: "Momen tawa lepas yang selalu aku suka dari kamu.",
        date: "Tawa Bahagia",
        aspect: "landscape",
      },
      {
        id: "gal-6",
        title: "Rayakan Sidang Lulus",
        category: "thesis",
        url: "/images/memories/photo-6.jpg",
        caption: "Sore harinya setelah sidang akhir, kita rayakan kelegaan perjuanganmu.",
        date: "Agustus 2026",
        aspect: "portrait",
      },
    ],
  },

  // === FEATURE G: THINGS I ADMIRE ABOUT YOU ===
  appreciation: {
    badge: "Hal-Hal yang Aku Kagumi dari Kamu ♡",
    title: "Hal Kecil Tentangmu yang Selalu Aku Suka",
    subtitle:
      "Buat aku, kamu bukan cuma hebat karena berhasil sampai di titik ini. Ada banyak hal kecil tentangmu yang bikin aku makin sayang setiap harinya.",
    items: [
      {
        id: "admire-1",
        title: "Kamu yang Nggak Gampang Menyerah",
        description:
          "Aku tahu ada hari-hari ketika semuanya terasa berat, tapi kamu tetap berusaha sampai akhirnya bisa melewati semuanya.",
        tag: "Your Strength",
        iconName: "Sparkles",
      },
      {
        id: "admire-2",
        title: "Ketulusan & Kebaikan Hatimu",
        description:
          "Aku suka caramu peduli sama orang lain dan tetap punya hati yang tulus. Hal sederhana seperti itu justru jadi salah satu hal yang bikin aku kagum sama kamu.",
        tag: "Your Kind Heart",
        iconName: "Heart",
      },
      {
        id: "admire-3",
        title: "Kesungguhanmu dalam Berusaha",
        description:
          "Aku kagum sama caramu bertanggung jawab dan menyelesaikan apa yang udah kamu mulai. Kamu mungkin nggak selalu sadar, tapi usaha kamu itu berarti banget.",
        tag: "Your Dedication",
        iconName: "Award",
      },
      {
        id: "admire-4",
        title: "Senyummu yang Selalu Aku Suka",
        description:
          "Entah kenapa, melihat kamu tersenyum aja bisa bikin aku ikut senang. Senyuman manis yang bikin selalu terbayang-bayang. Ngangenin bangett emang senyumnyaa 💗",
        tag: "Your Beautiful Smile",
        iconName: "Sun",
      },
    ],
  },

  // === FEATURE H: PERSONAL LOVE LETTER ===
  loveLetter: {
    badge: "Surat Khusus Dari Hatiku",
    title: "A Letter From Me to You",
    paperNote: "Ditulis dengan penuh rasa bangga dan cinta",
    greeting: "Untuk seseorang yang paling kusayangi,",
    paragraphs: [
      "Akhirnyaaa, hari yang kamu tunggu-tunggu datang juga, sayangkuu! ♡  Hari ini kamu bisa berdiri dengan toga di kepalamu, tersenyum bahagia, dan melihat sendiri sejauh apa kamu udah melangkah. Jujur, aku ikut bahagia dan banggaa banget sama kamu. Rasanya seneng banget bisa melihat kamu sampai di titik ini setelah semua yang udah kamu perjuangin selama ini.",

      "Aku tahu perjalanan sampai ke sini nggak selalu gampang. Ada banyak hal yang harus kamu pikirkan, rintangan yang harus kamu lewati, revisi yang seolah nggak ada habisnya, sampai hari-hari melelahkan yang mungkin bikin kamu pengen semuanya cepat berakhir. Tapi lihat deh, sayang, kamu berhasil melewatinya satu per satu sampai akhirnya hari yang kamu tunggu-tunggu ini datang juga. Kamu hebat banget karena udah bertahan dan berjuang sejauh ini.",

      "Makanya, nanti kalau suatu saat kamu mengingat masa-masa kuliah dan skripsimu, aku harap yang kamu ingat bukan cuma capeknya, pusingnya, atau susahnya waktu itu. Ingat juga betapa kuatnya kamu, berapa banyak hal yang udah berhasil kamu lewati, dan betapa berharganya semua usaha yang udah kamu lakukan. Kamu pantas menikmati hari ini, berbahagia, dan bangga sama diri kamu sendiri. Jangan sampai kamu lupa itu, yaa, cantikk. 🥺💗",

      "Dan sekarang, setelah semua perjuangan itu, akhirnya kamu resmi jadi sarjanaaa! AAAAA, SELAMAT WISUDA YAA, SAYANGKUU, CINTAKUUU! ♡ Sinii sini, aku mau kasih peluk paling erat buat perempuan hebat yang satu ini! Hehehe. Aku berharap setelah ini banyak hal baik yang datang ke hidup kamu, banyak mimpi yang satu per satu bisa kamu wujudin, dan banyak kebahagiaan yang bikin kamu senyum manis kayak biasanya.",

      "Kalau nanti dunia mulai terasa melelahkan lagi, jangan lupa istirahat yaa, babyyy. Kamu nggak harus selalu kuat setiap saat dan nggak harus menghadapi semuanya sendirian. Pelan-pelan aja, ya, sayang? Aku mau kamu tetap bahagia, tetap jadi Naili yang paling akuu sayang, dan tetap punya waktu buat manjain diri sendiri. Hari ini kamu boleh bangga sama diri kamu sepuasnya, boleh senyum paling lebar, bahkan boleh foto seratus kali kalau perlu, karena hari ini memang harinya kamuuu! Hehehe. 📸💕",

      "Sekali lagi, selamat wisuda, cintakuuu! I'm so, so proud of you, babyyy. Kamu udah sampai sejauh ini, dan aku harap kamu juga bisa melihat betapa hebatnya diri kamu sendiri. Sekarang resmi jadi sarjana, nih? Wahhh, makin banyak alasan buat aku jatuh cinta sama kamu! Love youu always, my pretty graduate! 💗🎓",
    ],
    closing: "Dengan segenap rasa bangga dan cinta,",
    signature: "Daffa' Fairuz Aditya",
    date: "21 Oktober 2026",
  },

  // === FEATURE I: LITTLE CELEBRATION ===
  celebration: {
    badge: "Rayakan Kemenanganmu",
    title: "Setiap Detik Perjuanganmu Layak Dirayakan",
    subtitle:
      "Tekan tombol di bawah ini dan saksikan hujan konfeti serta bunga untuk hari bahagiamu!",
    buttonText: "🎉 Rayakan Momen Spesial Ini! 🎓",
    congratulationToast:
      "Kamu luar biasa! Selamat atas kelulusanmu, Sayangg! ❤️🎓",
    extraMessage: "Semoga langkahmu ke depan selalu dinaungi keberkahan dan kebahagiaan.",
  },

  // === FEATURE J: WISHES FOR THE NEXT CHAPTER ===
  futureWishes: {
    badge: "Buat Semua Hal Baik yang Menantimu",
    title: "A Little Wish for My Favorite Girl ♡",
    subtitle:
      "Wisuda ini bukan akhir perjalanan kamu, sayang. Masih banyak hal baik yang menunggu buat kamu temui, dan aku punya banyak doa untuk semua langkahmu setelah ini.",
    wishes: [
      {
        id: "wish-1",
        title: "Semoga Banyak Hal Baik Menemukanmu",
        description:
          "Semoga kamu segera mendapat pekerjaan yang terbaik, bertemu orang-orang tulus, dan makin dekat dengan semua impianmu. Aamiin paling serius! 🤍",
        iconName: "Briefcase",
      },
      {
        id: "wish-2",
        title: "Jangan Lupa Bahagia, Yaa, Cantikk!",
        description:
          "Sesibuk apa pun nanti, jangan lupa makan, istirahat, dan bahagia selaluu yaaa. Kamu nggak harus selalu kuat setiap saat kok, sayangg, ingat masih ada aku disini yang selalu siap sedia membantumu kapanpun sajaa",
        iconName: "HeartPulse",
      },
      {
        id: "wish-3",
        title: "Aku Selalu Percaya Sama Kamu",
        description:
          "Kalau nanti kamu mulai ragu, ingat lagi sejauh apa kamu sudah melangkah. Kamu hebat, kamu kuat, dan aku percaya kamu pasti bisaa melewati hal-hal baru setelah ini.",
        iconName: "ShieldCheck",
      },
      {
        id: "wish-4",
        title: "Kalau Capek, Sini ke Aku ♡",
        description:
          "Aku mungkin nggak selalu punya solusi, kita mungkin juga ngga bisa setiap hari ketemu, tapi aku mau selalu jadi tempat kamu cerita, mengeluh, dan berbagi bahagia.",
        iconName: "Compass",
      },
    ],
    closingNote:
      "Mimpilah setinggi yang kamu mau, sayang. Aku akan selalu bangga melihatmu tumbuh dan meraih hal-hal baik dalam hidupmu💗.",
  },

  // === FEATURE K: FINAL SURPRISE ===
  finalSurprise: {
    badge: "Satu Hal Terakhir...",
    title: "One Last Thing, My Graduate... ♡",
    messageParagraphs: [
      "Jika suatu saat nanti di masa depan kamu merasa lelah, ragu, atau lupa seberapa jauh kamu telah melangkah...",
      "Bukalah kembali website kecil ini.",
      "Biarkan halaman ini menjadi pengingat abadi bahwa kamu pernah berjuang begitu hebat, dan kamu berhasil melewatinya dengan penuh kehormatan.",
    ],
    highlightMessage:
      "Selamat wisuda, sayanggkuu! Aku banggaa bangett sama kamuuu. ❤️",
    favoritePhoto: "/images/hero/hero-portrait.jpg",
    favoritePhotoCaption: "Perempuan terhebat yang hari ini resmi menyandang gelar S.H. ♡",
    ctaRestart: "Kembali ke Awal Cerita",
    ctaGallery: "Buka Kembali Galeri Foto",
  },
};
