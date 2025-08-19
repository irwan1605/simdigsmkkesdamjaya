import React from "react";
import { useNavigate } from "react-router-dom";
import { Pie, Bar } from "react-chartjs-2";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import * as HTMLDocx from "html-docx-js/dist/html-docx"; // Import plugin
import htmlDocx from "html-docx-js/dist/html-docx";
import autoTable from "jspdf-autotable"; 
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";


import "./DashboardPage.css";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);


const DashboardPage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Operator" };



  // Dummy data untuk chart
  const pieData = {
    labels: ["Guru", "Murid", "Staff"],
    datasets: [
      {
        label: "Jumlah",
        data: [15, 120, 5],
        backgroundColor: ["#3f51b5", "#ff9800", "#4caf50"],
      },
    ],
  };

  const barData = {
    labels: ["Quiz", "CBT", "Kehadiran", "Tugas"],
    datasets: [
      {
        label: "Aktivitas",
        data: [50, 40, 70, 30],
        backgroundColor: "#3f51b5",
      },
    ],
  };


  const handleExportPDF = () => {
    const doc = new jsPDF();
  
    doc.setFontSize(18);
    doc.text("Dashboard Report", 14, 22);
  
    const rows = [
      ["Total Siswa", "300"],
      ["Guru Aktif", "25"],
      ["Kehadiran Hari Ini", "278"],
      ["CBT Berlangsung", "2"],
    ];
  
    autoTable(doc, {
      head: [["Kategori", "Jumlah"]],
      body: rows,
      startY: 30,
    });
  
    doc.save("dashboard-report.pdf");
  };

  const handleExportWord = () => {
    const content = `
      <h1>Laporan Dashboard</h1>
      <p>Berikut adalah ringkasan data penting:</p>
      <table border="1">
        <thead>
          <tr><th>Kategori</th><th>Jumlah</th></tr>
        </thead>
        <tbody>
          <tr><td>Total Siswa</td><td>300</td></tr>
          <tr><td>Guru Aktif</td><td>25</td></tr>
          <tr><td>Kehadiran Hari Ini</td><td>278</td></tr>
          <tr><td>CBT Berlangsung</td><td>2</td></tr>
        </tbody>
      </table>
    `;
  
    const converted = HTMLDocx.asBlob(content);
    const blobUrl = URL.createObjectURL(converted);
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = "dashboard-report.docx";
    a.click();
  };



  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard SIMDIG SMK KESDAM JAYA</h1>
        <div className="dashboard-user-info">👋 Selamat datang, <strong>{user.name}</strong></div>
      </div>

      <div className="dashboard-actions">
        <input type="text" placeholder="🔍 Cari data..." className="dashboard-search" />
        <div  className="dashboard-export" style={{ marginBottom: "20px" }} >
          <button onClick={handleExportPDF}>Export PDF</button>
          <button onClick={handleExportWord}>Export to Word</button>
        </div>
      </div>

      <div className="dashboard-cards">
        <div className="card" onClick={() => navigate("/dashboard/kepala")}>
          <h3>📊 Dashboard Kepala Sekolah</h3>
          <p>Lihat analisis umum & laporan strategis.</p>
        </div>
        <div className="card" onClick={() => navigate("/dashboard/guru")}>
          <h3>🧑‍🏫 Dashboard Guru</h3>
          <p>Kelola materi, kehadiran & tugas siswa.</p>
        </div>
        <div className="card" onClick={() => navigate("/dashboard/murid")}>
          <h3>👩‍🎓 Dashboard Murid</h3>
          <p>Lihat materi, jadwal, nilai & tugas aktif.</p>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-card">
          <h4>Distribusi Pengguna</h4>
          <Pie data={pieData} />
        </div>
        <div className="chart-card">
          <h4>Statistik Aktivitas</h4>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
