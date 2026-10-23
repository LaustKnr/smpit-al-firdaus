# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Official Website & Interactive Platform SMP IT Al-Firdaus Samarinda

---

### Informasi Dokumen
| Atribut | Keterangan |
| :--- | :--- |
| **Nama Proyek** | Website Profil, Interaktif, & PPDB SMP IT Al-Firdaus Samarinda |
| **Identitas Sekolah**| SMP IT Al-Firdaus Samarinda (*The Real School for Qur'anic Generation*) |
| **Lokasi** | Samarinda, Kalimantan Timur |
| **Dokumen Versi** | 1.1 (Refined & Production-Ready) |
| **Target Pengguna** | Calon Wali Murid, Calon Siswa Baru, Siswa Aktif, Alumni, Juri Lomba/Reviewer |
| **Fokus Utama** | Edukasi Diferensiasi 2 Metode Belajar (*Boarding* vs *Pulang-Pergi*), Konversi PPDB, Showcase Prestasi, dan Integrasi AI Assistant |

---

## 1. Executive Summary & Design System

### 1.1 Nilai Utama & Diferensiasi
SMP IT Al-Firdaus Samarinda memiliki keunikan strategis dengan menawarkan **dua jalur pendidikan setara** yang tetap bermuara pada satu visi: melahirkan generasi Qur'ani yang berakhlak mulia dan berwawasan masa depan.
1. **Program Boarding**: Pembinaan 24 jam, kemandirian, kedisiplinan, dan kebersamaan intensif.
2. **Program Pulang-Pergi (Full Day)**: Pembelajaran terpadu di sekolah dengan kehangatan dan pendampingan keluarga di rumah.

### 1.2 Tone of Voice & Karakter Visual
- **Tone**: Religius, Inspiratif, Hangat, Modern, Terpercaya, dan Berorientasi Prestasi.
- **Prinsip UI/UX**:
  - *Clean, Islamic-Modern Aesthetics*: Memadukan nuansa hijau zamrud/forest green, aksen emas lembut (*gold warm*), putih bersih, serta latar netral yang elegan.
  - *Dynamic Micro-Interactions*: Transisi halus, card hover elevate, timeline interaktif, dan quick tabs.
  - *Mobile First & Fast Loading*: Responsif di semua perangkat (Desktop, Tablet, Mobile) dengan hierarki teks yang nyaman dibaca (*scannable*).

---

## 2. Struktur Navigasi Global (Global Header & Navbar)

### Spesifikasi Navbar
- **Tipe**: *Sticky Navigation* dengan efek blur kaca (*glassmorphism*) saat scroll.
- **Elemen Kiri**: Logo SMP IT Al-Firdaus Samarinda + Slogan ringkas (*The Real School for Qur'anic Generation*).
- **Menu Navigasi**:
  1. Beranda
  2. Profil (`#tentang`)
  3. Program Belajar (`#program-pilihan` - Submenu: Boarding & Pulang-Pergi)
  4. Keunggulan (`#keunggulan`)
  5. Kehidupan Siswa (`#kegiatan`)
  6. Prestasi (`#prestasi`)
  7. Fasilitas (`#fasilitas`)
  8. AI Assistant (`#ai-assistant` - Badge: *New / Interaktif*)
- **Elemen Kanan (CTA)**:
  - Tombol Sekunder: `Konsultasi WhatsApp`
  - Tombol Primer: `Daftar PPDB` (Highlight Button)

---

## 3. Spesifikasi Komprehensif Section Halaman

---

### Section 01: Hero Section

*First impression visual yang megah, menyejukkan, dan langsung menyampaikan identitas utama sekolah.*

#### A. Copywriting & Konten
- **Kicker / Badge**: `🌿 Generasi Rabbani Berwawasan Global`
- **Brand Title**: **SMP IT AL-FIRDAUS SAMARINDA**
- **Headline**: *Tumbuh Bersama Al-Qur'an. Melangkah Menuju Masa Depan.*
- **Subheadline**: Pendidikan holistik yang memadukan nilai-nilai Qur'ani, keunggulan akademik, pembentukan karakter mandiri, dan eksplorasi potensi generasi masa depan.
- **Tagline Pendukung**: *"The Real School for Qur'anic Generation"*
- **Call to Action (CTA)**:
  - Button Primer: `Kenali Al-Firdaus ↓` (Anchor ke Section About)
  - Button Sekunder: `Lihat Pilihan Program 📚` (Anchor ke Section Dua Pilihan)

#### B. Panduan UI/UX
- **Visual Hero**: Foto aktivitas siswa berkualitas tinggi (kombinasi membaca Al-Qur'an, interaksi kelas modern, dan senyum santri/siswa).
- **Fitur Khusus**: Quick stats floating banner di bagian bawah hero:
  - `100%` Kurikulum Terintegrasi (Kemenag & Kemendikbudristek)
  - `2 Opsi` Boarding & Pulang-Pergi
  - `Tahfidz Intensif` Target Hafalan Terarah
  - `Puluhan Prestasi` Tingkat Kota hingga Nasional

---

### Section 02: Intro & Filosofi Perjalanan

*Menghubungkan aspek emosional wali murid dengan esensi perjalanan pendidikan anak.*

#### A. Copywriting & Konten
- **Headline**: *Bukan Hanya Tentang Sekolah. Ini Tentang Perjalanan.*
- **Lead Text**: Setiap anak terlahir unik dengan ritme dan kesiapan tumbuh kembang yang berbeda.
- **Body Copy**:
  > Ada yang ingin belajar optimal di sekolah dan tetap menikmati kehangatan bersama keluarga setiap hari di rumah. Ada pula yang ingin melatih kemandirian, kepemimpinan, dan merasakan kedalaman persaudaraan dalam lingkungan asrama.
  >
  > Di SMP IT Al-Firdaus Samarinda, kami menghargai setiap kebutuhan tersebut. Orang tua dan siswa dapat memilih pengalaman belajar terbaik melalui dua skema pembelajaran: **Boarding School** dan **Pulang-Pergi**.

#### B. Panduan UI/UX
- Tipografi elegan dengan ruang bernapas yang cukup (*generous whitespace*).
- Ditampilkan kutipan inspiratif bernuansa Islami tentang pentingnya adab dan ilmu.

---

### Section 03: Dua Pilihan Pendidikan (Core Value Proposition)

*Section sorotan utama yang menjabarkan kedua opsi belajar secara detail dan seimbang.*

#### A. Copywriting & Konten
- **Sub-label**: `DUA JALUR, SATU TUJUAN`
- **Headline**: *Pilih Cara Belajarmu. Tetap Satu Tujuan: Menjadi Generasi Qur'ani.*

#### 1. 🏫 Program Boarding (Pesantren Modern)
- **Tagline**: *Belajar. Tinggal. Bertumbuh.*
- **Deskripsi**: Program pendidikan berasrama yang memadukan kurikulum akademik dengan pembiasaan ibadah 24 jam dalam lingkungan Islami yang terarah, aman, dan suportif.
- **Ideal untuk Siswa yang Ingin**:
  - Mengasah kemandirian hidup dan manajemen waktu sejak dini.
  - Menghafal Al-Qur'an dan mutqin dengan bimbingan musyrif/musyrifah intensif.
  - Membangun rasa persaudaraan (*ukhuwah*) dan kepemimpinan yang kokoh.
  - Memiliki lingkungan belajar kondusif bebas dari distraksi negatif gadget.
- **Tombol Aksi**: `Pelajari Program Boarding →`
- **Catatan Operasional**: *Jadwal harian, fasilitas asrama putra/putri terpisah, menu nutrisi, serta ketentuan kunjungan wali santri tersaji lengkap dalam panduan resmi.*

#### 2. 🏠 Program Pulang-Pergi (Full Day School)
- **Tagline**: *Belajar di Sekolah. Bertumbuh Bersama Keluarga.*
- **Deskripsi**: Program sekolah terpadu dengan jam belajar berkualitas dari pagi hingga sore, memberikan ruang bagi siswa untuk tetap menikmati waktu berkualitas dan pendampingan orang tua di rumah.
- **Ideal untuk Siswa yang Ingin**:
  - Menjalani pembelajaran akademik dan keagamaan unggul tanpa berpisah dari keluarga.
  - Mengembangkan potensi minat bakat melalui berbagai ekstrakurikuler sekolah.
  - Menjaga kedekatan emosional dan komunikasi harian bersama orang tua.
  - Memadukan ritme istirahat di rumah dengan pembelajaran terpadu di sekolah.
- **Tombol Aksi**: `Pelajari Program Pulang-Pergi →`

---

### Section 04: Perbandingan Interaktif (Interactive Comparison)

*Mempermudah calon wali murid membandingkan kedua program secara objektif dan jelas.*

#### A. Wireframe & Struktur Komparasi
```
┌───────────────────────────────────────┐    ┌───────────────────────────────────────┐
│           🏫 BOARDING SCHOOL          │    │         🏠 PULANG-PERGI               │
├───────────────────────────────────────┤    ├───────────────────────────────────────┤
│ Fokus: Kemandirian & Karakter 24 Jam │    │ Fokus: Sinergi Sekolah & Keluarga     │
│                                       │    │                                       │
│ ✓ Tinggal di Asrama Islami Terarah    │    │ ✓ Pembelajaran Sekolah & Pulang Sore  │
│ ✓ Tahfidz & Muroja'ah Intensif        │    │ ✓ Target Tahfidz Reguler Terstruktur  │
│ ✓ Bimbingan Ibadah Wajib & Sunnah     │    │ ✓ Pembiasaan Sholat & Adab Sekolah    │
│ ✓ Pembinaan Karakter & Kemandirian    │    │ ✓ Pendampingan Harian Orang Tua       │
│ ✓ Ekosistem Bahasa Arab & Inggris     │    │ ✓ Ekstrakurikuler & Eksplorasi Minat  │
│                                       │    │                                       │
│ [ Konsultasi Program Boarding ]       │    │ [ Konsultasi Program Pulang-Pergi ]   │
└───────────────────────────────────────┘    └───────────────────────────────────────┘
```
- **Closing Microcopy**: *"Dua pilihan metode. Satu standar mutu pendidikan. Satu cita-cita melahirkan generasi Qur'ani."*

#### B. Fitur Interaktif
- Toggle tab perbandingan cepat (Berdasarkan: *Rutinitas Harian*, *Fasilitas*, *Target Tahfidz*, *Waktu Bersama Keluarga*).

---

### Section 05: Mengenal SMP IT Al-Firdaus Samarinda (About Us)

*Membangun kepercayaan publik melalui visi, misi, dan identitas kelembagaan.*

#### A. Copywriting & Konten
- **Headline**: *Tempat Ilmu Bertemu dengan Nilai.*
- **Deskripsi**: SMP IT Al-Firdaus Samarinda hadir sebagai kawah candradimuka yang memfasilitasi anak didik untuk tidak hanya cerdas secara intelektual, namun juga matang secara spiritual dan emosional.
- **Visi Utama**: Terwujudnya sekolah Islam terpadu rujukan yang melahirkan generasi Qur'ani, berkarakter kokoh, berprestasi unggul, dan siap berkontribusi bagi umat dan bangsa.
- **Pilar Pendidikan**:
  - **Qur'anic Mindset**: Al-Qur'an sebagai pedoman berpikir, bertutur, dan bersikap.
  - **Academic Rigor**: Pembelajaran abad ke-21 yang kritis, kreatif, dan aplikatif.
  - **Noble Character**: Adab mendahului ilmu (*Al-Adab Qablal 'Ilm*).
- **CTA**: `Selengkapnya Tentang Visi & Profil Kami →`

---

### Section 06: Empat Pilar Program Unggulan

*Menggambarkan program inti yang diterapkan di kedua metode pendidikan.*

#### A. Daftar Program & Spesifikasi
1. **📖 Qur'anic Development (Tahfidz & Tahsin Bersanad)**
   - Target hafalan terukur dengan metode yang menyenangkan dan mutqin.
   - Bimbingan tahsin berstandar tartil dan pemahaman tadabbur ayat pilihan.
2. **🎓 Academic Excellence (Pembelajaran Abad-21)**
   - Pembelajaran berbasis pemecahan masalah (*Problem Based Learning*) dan STEM/STEAM.
   - Peningkatan literasi, numerasi, serta pembiasaan dwibahasa (Arab & Inggris).
3. **🌱 Character Building & Leadership**
   - Penanaman adab harian, kedisiplinan, tanggung jawab, dan kepedulian sosial.
   - Pembiasaan shalat berjamaah, shaum sunnah, dan kegiatan bakti sosial.
4. **🏆 Achievement & Potential Development**
   - Pendampingan minat dan bakat siswa secara intensif oleh guru pembina.
   - Pembinaan khusus menuju Olimpiade Sains, kejuaraan bahasa, seni Islam, dan olahraga.

---

### Section 07: Spotlight: Kehidupan Boarding (A Day in Boarding Life)

*Menjawab rasa penasaran dan keraguan orang tua terkait kenyamanan dan rutinitas asrama.*

#### A. Copywriting & Konten
- **Headline**: *Lebih dari Tempat Tinggal. Sebuah Lingkungan untuk Bertumbuh.*
- **Deskripsi**: Dalam program Boarding Al-Firdaus, keseharian santri dipenuhi dengan aktivitas bermakna dari fajar hingga malam hari. Lingkungan yang hangat menjadikan asrama serasa rumah kedua (*home away from home*).

#### B. Visual Timeline Rutinitas Santri
| Waktu / Fase | Kegiatan | Makna & Nilai |
| :--- | :--- | :--- |
| **03.30 – 05.30** | Qiyamul Lail, Shalat Subuh Berjamaah, & Tahfidz Pagi | Menanamkan keintiman spiritual sejak fajar |
| **05.30 – 07.00** | Sarapan Pagi, Perawatan Diri, & Persiapan Sekolah | Kemandirian dan kerapian pribadi |
| **07.00 – 15.30** | Pembelajaran Formal & Shalat Dzuhur Terpadu | Eksplorasi akademik dan sains modern |
| **15.30 – 17.30** | Shalat Ashar, Olahraga Sore, & Ekstrakurikuler | Kebugaran fisik dan sportivitas |
| **17.30 – 20.00** | Shalat Maghrib, Halaqah Al-Qur'an, Makan Malam, & Isya | Kebersamaan dan pemantapan hafalan |
| **20.00 – 21.30** | Belajar Mandiri Terbimbing & Evaluasi Harian | Kedisiplinan akademik malam hari |
| **21.30 – 03.30** | Istirahat Malam & Doa Bersama | Waktu tidur teratur untuk kesehatan optimal |

---

### Section 08: Dinamika Kegiatan Siswa (Student Life)

*Menampilkan keceriaan dan keberagaman aktivitas sekolah di luar jam kelas.*

#### A. Kategori Kegiatan
1. **Masa Pengenalan Lingkungan Sekolah (MPLS) Ramah Anak**
   - Transisi hangat menyambut keluarga baru dengan orientasi positif tanpa perpeloncoan.
2. **Monthly Signature Activities**
   - Market Day (kewirausahaan), Outbound Character Camp, Literacy Fest, dan Science Fair.
3. **Ajang Kejuaraan & Kompetisi**
   - Delegasi aktif dalam lomba akademik, pidato dwibahasa, kejuaraan olahraga, dan seni.
4. **Peringatan Hari Besar Islam (PHBI)**
   - Gebyar Muharram, Semarak Ramadhan, Pesantren Kilat, dan Qurban Berdaya.
5. **Kunjungan Edukatif & Field Trip**
   - Menghubungkan teori di kelas dengan dunia nyata dan industri sekitar Kalimantan Timur.

---

### Section 09: Prestasi & Rekam Jejak (Hall of Fame)

*Social proof yang membuktikan kualitas bimbingan dan potensi siswa.*

#### A. Copywriting & Konten
- **Headline**: *Mereka Tidak Hanya Belajar. Mereka Berani Berprestasi.*
- **Pesan Moral**: *"Prestasi bukan sekadar piala di etalase, melainkan bukti keberanian untuk berusaha, berdisiplin, dan memberikan versi terbaik diri."*

#### B. Format Showcase Prestasi (Card Grid)
- **Prestasi Unggulan 1**:
  - `🥈 JUARA 2` - Lomba Pidato Bahasa Arab Tingkat Propinsi
  - Siswa: **M. Luthfi Fathoni P.**
  - Ajang: Religius Fest MA Al-Uswah
- **Prestasi Unggulan 2**:
  - `🥇 JUARA 1` - Musabaqah Hifdzil Qur'an (MHQ) Tingkat Kota Samarinda
  - Kategori: 5 Juz Putra
- **Prestasi Unggulan 3**:
  - `🏅 MEDALI EMAS` - Olimpiade Sains dan Matematika Terpadu Tingkat Kaltim
- **CTA**: `Lihat Semua Galeri Prestasi Siswa →`

---

### Section 10: The Al-Firdaus Experience (Interactive Pillar)

*Section interaktif yang menonjolkan 4 langkah transformasi siswa selama belajar.*

#### A. 4 Tahapan Siklus Tumbuh Siswa
1. **LEARN (Menemukan)**: Membuka cakrawala ilmu pengetahuan umum dan pemahaman Al-Qur'an yang aplikatif.
2. **GROW (Bertumbuh)**: Mengasah akhlak, kematangan emosi, dan ketangguhan mental menghadapi tantangan.
3. **CREATE (Berkarya)**: Mendorong siswa berani mencipta proyek sains, seni, menulis, maupun karya sosial.
4. **ACHIEVE (Berprestasi)**: Menuai hasil kerja keras menjadi prestasi yang membanggakan orang tua dan sekolah.

#### B. Fitur Tampilan
Interactive Tab Card atau Horizontal Step Slider yang berubah dinamis saat pengguna mengeklik tahapan pilar.

---

### Section 11: Ekstrakurikuler & Pengembangan Minat

*Penyaluran bakat untuk menyeimbangkan kecerdasan akademis dan motorik.*

#### A. Kluster Ekstrakurikuler
- ⚽ **Cabang Olahraga**: Futsal, Basket, Bulu Tangkis, Beladiri Pencak Silat (Tapak Suci).
- 🎨 **Seni & Kreativitas**: Desain Grafis Dasar, Kaligrafi Islam, Fotografi & Jurnalistik Cilik.
- 🎤 **Public Speaking & Bahasa**: English Club, Arabic Club, Khitobah/Muhadharah (Pidato Islami).
- 📖 **Qur'anic Intensive**: Tahsin Bersanad, Tahfidz Club, Tilawah Al-Qur'an.
- 💻 **Teknologi & Sains**: Robotik Sederhana, Coding Dasar, Kelompok Ilmiah Remaja (KIR).
- ⚜️ **Kepanduan & Sosial**: Hizbul Wathan / Pramuka SIT, Palang Merah Remaja (PMR).

---

### Section 12: Fasilitas Kampus Terpadu

*Menunjukkan sarana prasarana yang representatif, bersih, aman, dan modern.*

#### A. Daftar Fasilitas & Deskripsi
1. **Fasilitas Pembelajaran Modern**: Ruang kelas ber-AC dengan multimedia smart projector, laboratorium komputer, dan perpustakaan literasi nyaman.
2. **Fasilitas Keagamaan**: Masjid utama berkapasitas besar untuk shalat berjamaah, kajian, dan halaqah Al-Qur'an.
3. **Fasilitas Boarding Eksklusif**: Asrama putra dan putri terpisah dengan ranjang bertingkat standar, loker pribadi, kamar mandi bersih, serta pengawasan musyrif 24 jam.
4. **Fasilitas Olahraga & Outdoor**: Lapangan serbaguna (futsal/basket/apel) yang bersih dan fungsional, serta halaman hijau yang asri.
5. **Fasilitas Penunjang Kesehatan & Nutrisi**: Unit Kesehatan Sekolah (UKS) siaga, kantin sehat higienis, dan aula pertemuan serbaguna.

---

### Section 13: Warta & Berita Terbaru (News & Articles)

*Kanal informasi dinamis untuk kegiatan terkini, inspirasi parenting, dan artikel edukasi.*

#### A. Contoh Judul Berita Aktif
1. *Keseruan Monthly Activity: Memupuk Jiwa Wirausaha Muda Melalui Market Day 2026*
2. *Membangun Generasi Emas: Kiat Mengoptimalkan Hafalan Qur'an di Era Digital*
3. *Siswa SMP IT Al-Firdaus Samarinda Kembali Borong Juara di Ajang Kejurda Pelajar*
4. *Mengenal Lebih Dekat Fasilitas dan Kehangatan Asrama SMP IT Al-Firdaus*

---

### Section 14: Fitur Inovasi — Al-Firdaus AI Assistant 🤖

*Fitur interaktif unggulan (cocok untuk demonstrasi lomba dan memandu calon wali murid secara realtime).*

#### A. Tujuan & Nilai Tambah
Membantu calon wali murid dan siswa yang bingung menentukan pilihan antara sistem Boarding dan Pulang-Pergi melalui konsultasi interaktif berbasis AI yang ramah, informatif, dan akurat.

#### B. Quick Prompt / Pertanyaan Cepat yang Disediakan
- 💬 *"Apa saja perbedaan utama program Boarding dan Pulang-Pergi?"*
- 💬 *"Bagaimana jadwal harian dan pembinaan santri di asrama?"*
- 💬 *"Apa syarat dan alur pendaftaran PPDB tahun ini?"*
- 💬 *"Bagaimana kurikulum tahfidz diterapkan bagi siswa pemula?"*

#### C. Skenario Percakapan Interaktif (Demo Showcase)
```
User:
"Anak saya ingin mandiri dan fokus hafalan Al-Qur'an, tapi sebelumnya belum pernah berpisah dari orang tua. Program mana yang lebih disarankan?"

Al-Firdaus AI:
"Assalamu'alaikum Ayah/Bunda! Untuk melatih kemandirian dan percepatan hafalan, program Boarding sangat ideal karena santri didampingi musyrif selama 24 jam dengan suasana kekeluargaan yang hangat. 

Namun, jika ananda masih memerlukan masa adaptasi bertahap, program Pulang-Pergi juga memiliki target tahfidz harian dengan tetap berada di bawah pendampingan keluarga setiap malam.

Bunda dapat mengunduh panduan lengkap kedua program atau berkonsultasi langsung dengan tim konselor kami melalui WhatsApp!"
```

#### D. Batasan & Safeguard Etika AI
- ⚠️ AI tidak memaksakan keputusan mutlak, melainkan berperan sebagai konsultan penjelas berdasarkan profil anak.
- Menyediakan tombol cepat: `Hubungi Konselor PPDB (WhatsApp)` untuk verifikasi data resmi.

---

### Section 15: Sentra Penerimaan Peserta Didik Baru (PPDB Hub)

*Pusat aksi pendaftaran online yang jelas, mudah diakses, dan transparan.*

#### A. Copywriting & Alur Pendaftaran
- **Headline**: *Dua Pilihan Pendidikan. Satu Langkah Menuju Masa Depan Gemilang.*
- **Subheadline**: Pintu gerbang pembentukan generasi Qur'ani telah dibuka. Daftarkan putra-putri tercinta sekarang juga.

#### B. 4 Langkah Mudah Alur Pendaftaran
1. **Registrasi Online**: Mengisi formulir data diri siswa dan memilih program (Boarding / Pulang-Pergi).
2. **Observasi & Wawancara**: Penilaian potensi akademik dasar, tes baca Al-Qur'an, dan wawancara peminatan bersama orang tua.
3. **Pengumuman Kelulusan**: Informasi penerimaan dapat diakses transparan melalui dashboard website.
4. **Daftar Ulang & Orientasi**: Konfirmasi administrasi dan persiapan menyambut tahun ajaran baru.

#### C. Primary Action Buttons
- `[ 📄 Unduh Brosur & Rincian Biaya ]`
- `[ 🚀 Daftar PPDB Online Sekarang ]`

---

### Section 16: Final Call to Action (Closing Banner)

*Penutup halaman yang kuat, menyatukan emosi, visi, dan ajakan bertindak.*

#### A. Copywriting
- **Headline**: *Dua Jalan untuk Bertumbuh. Satu Tujuan untuk Masa Depan.*
- **Pesan Inti**:
  > Apapun pilihan yang Anda ambil—Boarding ataupun Pulang-Pergi—perjalanan berharga di SMP IT Al-Firdaus Samarinda berawal dari satu komitmen: bertumbuh bersama Al-Qur'an dan menjadi insan berakhlak mulia.
- **Slogan Penutup**: **SMP IT AL-FIRDAUS SAMARINDA — The Real School for Qur'anic Generation**
- **Action Buttons**:
  - `Jadwalkan Kunjungan Sekolah (School Tour)`
  - `Daftar Sekarang ke SMP IT Al-Firdaus`

---

### Section 17: Global Footer & Informasi Resmi

*Kelengkapan informasi legalitas, kontak, dan alamat sekolah.*

#### A. Konten & Elemen Footer
- **Kolom 1: Profil Singkat**
  - Logo SMP IT Al-Firdaus Samarinda
  - Slogan resmi dan nomor izin operasional / status akreditasi sekolah.
- **Kolom 2: Tautan Cepat**
  - Profil Sekolah, Program Boarding, Program Pulang-Pergi, Prestasi, Alur PPDB, Fasilitas.
- **Kolom 3: Kontak & Lokasi**
  - Alamat: Samarinda, Kalimantan Timur
  - Telepon / Hotline: Kontak Resmi Sekolah
  - Email: info@smpit-alfirdaus-samarinda.sch.id
- **Kolom 4: Media Sosial & Ekosistem Digital**
  - Instagram, YouTube, Facebook, WhatsApp Official
- **Baris Bawah**:
  - `© 2026 SMP IT Al-Firdaus Samarinda. All Rights Reserved.`
  - Kebijakan Privasi & Syarat Ketentuan PPDB.

---

## 4. Rekomendasi Teknis & Standar Kualitas Pengujian

1. **Aksesibilitas & Semantik**: Menggunakan tag HTML5 semantik (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
2. **Optimalisasi Gambar & Aset**: Menggunakan format `.webp` dengan lazy loading untuk skor Core Web Vitals (LCP < 2.0s).
3. **Mobile Responsiveness**: Uji tampilan pada breakpoint 375px (mobile), 768px (tablet), dan 1200px+ (desktop).
4. **Keamanan & Validasi Form**: Validasi input formulir PPDB di sisi klien dan proteksi CSRF.