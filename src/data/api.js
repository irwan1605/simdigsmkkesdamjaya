
// src/data/api.js

export const getDashboardSummary = () => ({
    totalGuru: 53,
    totalSiswa: 320,
    totalBuku: 120,
    totalVideo: 25,
    totalProgramSemester: 4,
    totalProgramTahunan: 5,
    kehadiranGuru: [
      { name: "Guru Hadir", value: 45 },
      { name: "Guru Izin", value: 5 },
      { name: "Guru Sakit", value: 3 },
    ],
    aktivitasAkademik: [
      { name: "CBT", total: 10 },
      { name: "Quiz", total: 15 },
      { name: "Tugas Individu", total: 20 },
      { name: "Tugas Kelompok", total: 12 },
    ],
  });
  
  export const getGuruData = () => [
    { id: 1, nama: "Pak Budi", status: "Hadir", jam: "07:00", tanggal: "2025-08-01" },
    { id: 2, nama: "Bu Siti", status: "Izin", jam: "-", tanggal: "2025-08-01" },
    { id: 3, nama: "Pak Andi", status: "Hadir", jam: "07:15", tanggal: "2025-08-01" },
  ];
  
  export const getCBTData = () => [
    { id: 1, judul: "CBT Matematika", kelas: "X IPA 1", durasi: "30 menit", sertifikat: true },
    { id: 2, judul: "CBT Fisika", kelas: "XI IPA 1", durasi: "40 menit", sertifikat: false },
  ];
  
  export const getQuizData = () => [
    { id: 1, judul: "Quiz Biologi", kelas: "XII IPA 2", durasi: "20 menit" },
    { id: 2, judul: "Quiz Sejarah", kelas: "XI IPS 1", durasi: "25 menit" },
  ];
  
  export const getTugasData = () => [
    { id: 1, judul: "Tugas Individu Matematika", kelas: "X IPA 1", tenggat: "2025-08-05", status: "Belum Dikumpulkan" },
    { id: 2, judul: "Tugas Kelompok Fisika", kelas: "XI IPA 2", tenggat: "2025-08-06", status: "Dikumpulkan" },
  ];
  
  export const getBahanData = () => [
    { id: 1, nama: "Matematika Kelas X", kategori: "STEM", file: "matematika-x.pdf", update: "2025-07-20" },
    { id: 2, nama: "Fisika Kelas XI", kategori: "STEM", file: "fisika-xi.pdf", update: "2025-07-21" },
  ];
  
  export const getVideoBelajarData = () => [
    { id: 1, judul: "Belajar AI untuk Pemula", kategori: "AI", link: "https://www.youtube.com/embed?v=ai101" },
    { id: 2, judul: "Dasar Data Science", kategori: "Data Science", link: "https://www.youtube.com/embed?v=datasci101" },
    { id: 3, judul: "Belajar Coding dengan Python", kategori: "Coding", link: "https://www.youtube.com/embed?v=python101" },
  ];
  
  export const getJadwalData = () => [
    { id: 1, mapel: "Matematika", guru: "Pak Budi", hari: "Senin", jam: "07:00 - 08:30" },
    { id: 2, mapel: "Fisika", guru: "Bu Siti", hari: "Selasa", jam: "09:00 - 10:30" },
  ];
  