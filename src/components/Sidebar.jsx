
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  FileText,
  FilePlus,
  ChevronDown,
  ChevronRight,
  LogOut,
  Menu
} from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = (key) =>
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));

  const renderSubMenu = (items, parentKey) =>
    openMenus[parentKey] && !collapsed && (
      <ul className="submenu">
        {items.map((item, idx) => (
          <li key={idx}>
            <NavLink to={item.path} className="nav-link">
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    );

    const handleLogout = () => {
      localStorage.removeItem("auth");
      navigate("/login");
    };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        {!collapsed && (
          <>
            <img src="/logosmkkesdamjaya.png" alt="Logo" style={{ width: 50 }} />
            <h3>SIMDIG_SMK KESDAM JAYA</h3>
          </>
        )}
        <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
          <Menu size={22} />
        </button>
      </div>

      <NavLink to="/dashboard" className="nav-link">
        <LayoutDashboard size={20} /> {!collapsed && "Dashboard"}
      </NavLink>

      <div className="nav-group">
        <div className="nav-link" onClick={() => toggleMenu("murid")}>
          <Users size={20} /> {!collapsed && "Aplikasi Murid"}{" "}
          {!collapsed && (openMenus["murid"] ? <ChevronDown /> : <ChevronRight />)}
        </div>
        {renderSubMenu(
          [
            { label: "Kehadiran", path: "/murid/kehadiran" },
            { label: "Jurnal", path: "/murid/materi/jurnal" },
            { label: "Modul Ajar", path: "/murid/materi/modul" },
            { label: "Video Belajar", path: "/murid/materi/video" },
            { label: "Quiz", path: "/murid/quiz" },
            { label: "CBT + Sertifikat", path: "/murid/cbt" },
            { label: "Tugas Individu", path: "/murid/tugas-individu" },
            { label: "Tugas Kelompok", path: "/murid/tugas-kelompok" }
          ],
          "murid"
        )}
      </div>

      <div className="nav-group">
        <div className="nav-link" onClick={() => toggleMenu("guru")}>
          <Users size={20} /> {!collapsed && "Aplikasi Guru"}{" "}
          {!collapsed && (openMenus["guru"] ? <ChevronDown /> : <ChevronRight />)}
        </div>
        {renderSubMenu(
          [
            { label: "Kehadiran", path: "/guru/kehadiran" },
            { label: "Bahan Kelas X", path: "/guru/bahan/x" },
            { label: "Bahan Kelas XI", path: "/guru/bahan/xi" },
            { label: "Bahan Kelas XII", path: "/guru/bahan/xii" },
            { label: "Program Semester", path: "/guru/program-semester" },
            { label: "Program Tahunan", path: "/guru/program-tahunan" },
            { label: "Materi Digital", path: "/guru/materi-digital" },
            { label: "Media Belajar", path: "/guru/media-belajar" },
            { label: "Quiz", path: "/guru/latihan/quiz" },
            { label: "CBT + Sertifikat", path: "/guru/latihan/cbt" },
            { label: "Tugas Individu", path: "/guru/latihan/individu" },
            { label: "Tugas Kelompok", path: "/guru/latihan/kelompok" },
            { label: "Analisa Nilai & Soal", path: "/guru/analisa" }
          ],
          "guru"
        )}
      </div>

      <div className="nav-group">
        <div className="nav-link" onClick={() => toggleMenu("lms")}>
          <BookOpen size={20} /> {!collapsed && "Aplikasi LMS"}{" "}
          {!collapsed && (openMenus["lms"] ? <ChevronDown /> : <ChevronRight />)}
        </div>
        {renderSubMenu(
          [
            { label: "Jadwal Kelas X", path: "/lms/jadwal/x" },
            { label: "Jadwal Kelas XI", path: "/lms/jadwal/xi" },
            { label: "Jadwal Kelas XII", path: "/lms/jadwal/xii" },
            { label: "Majalah Digital", path: "/lms/majalah" },
            { label: "Rapor Kelas X", path: "/lms/rapor/x" },
            { label: "Rapor Kelas XI", path: "/lms/rapor/xi" },
            { label: "Rapor Kelas XII", path: "/lms/rapor/xii" },
            { label: "📊 Analisis Rapor", path: "/lms/rapor/analytics" },
            { label: "Alumni", path: "/lms/alumni" },
            { label: "Edutaiment", path: "/lms/edutaiment" },
            { label: "Pengumuman", path: "/lms/pengumuman" }
          ],
          "lms"
        )}
      </div>

      <div className="nav-group">
        <div className="nav-link" onClick={() => toggleMenu("sms")}>
          <FileText size={20} /> {!collapsed && "Aplikasi SMS"}{" "}
          {!collapsed && (openMenus["sms"] ? <ChevronDown /> : <ChevronRight />)}
        </div>
        {renderSubMenu(
          [
            { label: "Administrasi Sekolah", path: "/sms/administrasi" },
            { label: "Keuangan", path: "/sms/keuangan" },
            { label: "Kepala Sekolah", path: "/sms/kepala" },
            { label: "Yayasan", path: "/sms/yayasan" },
            { label: "E-Akreditasi", path: "/sms/akreditasi" },
            { label: "E-Library", path: "/sms/library" },
            { label: "E-Sarpa", path: "/sms/sarpa" }
          ],
          "sms"
        )}
      </div>

      <div className="nav-group">
        <div className="nav-link" onClick={() => toggleMenu("smart")}>
          <FilePlus size={20} /> {!collapsed && "Smart Digital"}{" "}
          {!collapsed && (openMenus["smart"] ? <ChevronDown /> : <ChevronRight />)}
        </div>
        {renderSubMenu(
          [
            { label: "Identitas Siswa", path: "/smart/identitas" },
            { label: "Presensi Masuk & Keluar", path: "/smart/presensi" },
            { label: "Peminjaman Buku", path: "/smart/peminjaman" }
          ],
          "smart"
        )}
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        <LogOut size={20} /> <span>Keluar</span>
      </button>
    </div>
  );
};

export default Sidebar;
