/* ============================================
   EDIT DI SINI SAJA
   ============================================ */
const PROFIL = {
  nama: "Fitri Ayu Sabrina",
  bio: "Siswi kelas X PPLG di SMKN 1 Bangkinang.",
  kelas: "Kelas X PPLG",
  sekolah: "SMKN 1 Bangkinang",
  fotoUtama: "foto/foto-1.jpg",   // ganti foto: timpa file ini atau ubah namanya di sini
  footer: "Fitri Ayu Sabrina",
  tentang: "Aku Fitri Ayu Sabrina, siswi kelas X jurusan PPLG di SMKN 1 Bangkinang. Perjalanan sekolahku dimulai dari SD 011 Langgini, lalu SMPN 2 Bangkinang Kota.",
  // Kolom yang dikosongkan ("") tidak akan ditampilkan.
  detail: [
    { label: "Nama lengkap", isi: "Fitri Ayu Sabrina" },
    { label: "Sekolah", isi: "SMKN 1 Bangkinang" },
    { label: "Kelas", isi: "X (sepuluh)" },
    { label: "Jurusan", isi: "PPLG (Pengembangan Perangkat Lunak dan Gim)" },
    { label: "Tempat, tanggal lahir", isi: "" },
    { label: "Hobi", isi: "" },
    { label: "Cita-cita", isi: "" },
    { label: "Instagram", isi: "" }
  ]
};

// Riwayat sekolah. ikon = emoji penanda. tahun dan ket boleh dikosongkan.
const SEKOLAH = [
  { jenjang: "SD",  ikon: "🌱", nama: "SD 011 Langgini",        tempat: "", tahun: "" },
  { jenjang: "SMP", ikon: "🎒", nama: "SMPN 2 Bangkinang Kota", tempat: "", tahun: "" },
  { jenjang: "SMK", ikon: "💻", nama: "SMKN 1 Bangkinang",      tempat: "Kelas X PPLG", tahun: "", sekarang: true, ket: "Belajar membuat aplikasi, website, dan gim." }
];
/* ============================================ */

const $ = (id) => document.getElementById(id);

document.title = `Fotofolio ${PROFIL.nama}`;
$("nama").textContent = PROFIL.nama;
$("bio").textContent = PROFIL.bio;
$("chipKelas").textContent = PROFIL.kelas;
$("chipSekolah").textContent = PROFIL.sekolah;
$("heroFoto").src = PROFIL.fotoUtama;
$("heroFoto").alt = `Foto ${PROFIL.nama}`;
$("footerText").textContent = PROFIL.footer;

// Tentang
$("tentangText").textContent = PROFIL.tentang;
$("detail").innerHTML = PROFIL.detail
  .filter((d) => d.isi)
  .map((d) => `<div class="field"><p class="field__l">${d.label}</p><p class="field__v">${d.isi}</p></div>`)
  .join("");

// Sekolah
$("timeline").innerHTML = SEKOLAH.map((s) => {
  const info = [s.tempat, s.tahun].filter(Boolean).join(" • ");
  return `
    <li class="step ${s.sekarang ? "step--now" : ""}">
      <span class="step__icon" aria-hidden="true">${s.ikon || "🎓"}</span>
      <div class="step__card">
        <span class="step__tag">${s.jenjang}</span>
        <h3>${s.nama}</h3>
        ${info ? `<p class="step__place">${info}</p>` : ""}
        ${s.ket ? `<p class="step__ket">${s.ket}</p>` : ""}
      </div>
    </li>`;
}).join("");
