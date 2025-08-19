import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainLayout from "./MainLayout"; // tambahkan layout
import DashboardPage from "./pages/DashboardPage";
import BookDetailPage from "./pages/BookDetailPage";
import CBTPage from "./pages/CBTPage";
import KehadiranPage from "./pages/KehadiranPage";
import QuizPage from "./pages/QuizPage";
import RaporPage from "./pages/RaporPage";
import MateriPage from "./pages/MateriPage";
import BerandaPage from "./pages/BerandaPage";
import JurnalPage from "./pages/JurnalPage";
import ModulAjarPage from "./pages/ModulAjarPage";
import VideoBelajarPage from "./pages/VideoBelajarPage";
import TugasIndividuPage from "./pages/TugasIndividuPage";
import TugasKelompokPage from "./pages/TugasKelompokPage";
import GuruKehadiranPage from "./pages/GuruKehadiranPage";
import BahanXPage from "./pages/BahanXPage";
import BahanXIPage from "./pages/BahanXIPage";
import BahanXIIPage from "./pages/BahanXIIPage";
import ProgramSemesterPage from "./pages/ProgramSemesterPage";
import ProgramTahunanPage from "./pages/ProgramTahunanPage";
import MateriDigitalPage from "./pages/MateriDigitalPage";
import MediaBelajarPage from "./pages/MediaBelajarPage";
import LatihanIndividuPage from "./pages/LatihanIndividuPage";
import LatihanKelompokPage from "./pages/LatihanKelompokPage";
import AnalisaPage from "./pages/AnalisaPage";
import JadwalXPage from "./pages/JadwalXPage";
import JadwalXIPage from "./pages/JadwalXIPage";
import JadwalXIIPage from "./pages/JadwalXIIPage";
import MajalahDigitalPage from "./pages/MajalahDigitalPage";
import RaporXPage from "./pages/RaporXPage";
import RaporXIPage from "./pages/RaporXIPage";
import RaporXIIPage from "./pages/RaporXIIPage";
import AlumniPage from "./pages/AlumniPage";
import EdutaimentPage from "./pages/EdutaimentPage";
import PengumumanPage from "./pages/PengumumanPage";
import AdministrasiPage from "./pages/AdministrasiPage";
import KeuanganPage from "./pages/KeuanganPage";
import KepalaSekolahPage from "./pages/KepalaSekolahPage";
import YayasanPage from "./pages/YayasanPage";
import AkreditasiPage from "./pages/AkreditasiPage";
import LibraryPage from "./pages/LibraryPage";
import SarpaPage from "./pages/SarpaPage";
import IdentitasPage from "./pages/IdentitasPage";
import PresensiPage from "./pages/PresensiPage";
import PeminjamanPage from "./pages/PeminjamanPage";
import RaporAnalyticsPage from "./pages/RaporAnalyticsPage";
import KepalaDashboard from './pages/KepalaDashboard';
import GuruDashboard from './pages/GuruDashboard';
import MuridDashboard from './pages/MuridDashboard';

import "./App.css";

const App = () => {
  const isAuthenticated = localStorage.getItem("auth") === "true";
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/lms/rapor/analytics" element={<RaporAnalyticsPage />} />

        {/* Protected Routes with Sidebar */}
        <Route element={<MainLayout />}>
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />
            }
          />
          <Route path="/dashboard/kepala" element={<KepalaDashboard />} />
          <Route path="/dashboard/guru" element={<GuruDashboard />} />
          <Route path="/dashboard/murid" element={<MuridDashboard />} />
          <Route path="/beranda" element={<BerandaPage />} />
          <Route path="/cbt" element={<CBTPage />} />
          <Route path="/kehadiran" element={<KehadiranPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/rapor" element={<RaporPage />} />
          <Route path="/materi" element={<MateriPage />} />
          <Route path="/book/:id" element={<BookDetailPage />} />
          <Route path="/murid/kehadiran" element={<KehadiranPage />} />
          <Route path="/murid/materi/jurnal" element={<JurnalPage />} />
          <Route path="/murid/materi/modul" element={<ModulAjarPage />} />
          <Route path="/murid/materi/video" element={<VideoBelajarPage />} />
          <Route path="/murid/quiz" element={<QuizPage />} />
          <Route path="/murid/cbt" element={<CBTPage />} />
          <Route path="/murid/tugas-individu" element={<TugasIndividuPage />} />
          <Route path="/murid/tugas-kelompok" element={<TugasKelompokPage />} />
          <Route path="/guru/kehadiran" element={<GuruKehadiranPage />} />
          <Route path="/guru/bahan/x" element={<BahanXPage />} />
          <Route path="/guru/bahan/xi" element={<BahanXIPage />} />
          <Route path="/guru/bahan/xii" element={<BahanXIIPage />} />
          <Route
            path="/guru/program-semester"
            element={<ProgramSemesterPage />}
          />
          <Route
            path="/guru/program-tahunan"
            element={<ProgramTahunanPage />}
          />
          <Route path="/guru/materi-digital" element={<MateriDigitalPage />} />
          <Route path="/guru/media-belajar" element={<MediaBelajarPage />} />
          <Route path="/guru/latihan/quiz" element={<QuizPage />} />
          <Route path="/guru/latihan/cbt" element={<CBTPage />} />
          <Route
            path="/guru/latihan/individu"
            element={<LatihanIndividuPage />}
          />
          <Route
            path="/guru/latihan/kelompok"
            element={<LatihanKelompokPage />}
          />
          <Route path="/guru/analisa" element={<AnalisaPage />} />
          <Route path="/lms/jadwal/x" element={<JadwalXPage />} />
          <Route path="/lms/jadwal/xi" element={<JadwalXIPage />} />
          <Route path="/lms/jadwal/xii" element={<JadwalXIIPage />} />
          <Route path="/lms/majalah" element={<MajalahDigitalPage />} />
          <Route path="/lms/rapor/x" element={<RaporXPage />} />
          <Route path="/lms/rapor/xi" element={<RaporXIPage />} />
          <Route path="/lms/rapor/xii" element={<RaporXIIPage />} />
          <Route path="/lms/alumni" element={<AlumniPage />} />
          <Route path="/lms/edutaiment" element={<EdutaimentPage />} />
          <Route path="/lms/pengumuman" element={<PengumumanPage />} />
          <Route path="/sms/administrasi" element={<AdministrasiPage />} />
          <Route path="/sms/keuangan" element={<KeuanganPage />} />
          <Route path="/sms/kepala" element={<KepalaSekolahPage />} />
          <Route path="/sms/yayasan" element={<YayasanPage />} />
          <Route path="/sms/akreditasi" element={<AkreditasiPage />} />
          <Route path="/sms/library" element={<LibraryPage />} />
          <Route path="/sms/sarpa" element={<SarpaPage />} />
          <Route path="/smart/identitas" element={<IdentitasPage />} />
          <Route path="/smart/presensi" element={<PresensiPage />} />
          <Route path="/smart/peminjaman" element={<PeminjamanPage />} />
          <Route path="/lms/rapor/analytics" element={<RaporAnalyticsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
