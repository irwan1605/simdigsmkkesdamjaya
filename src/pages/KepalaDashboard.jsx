import React, { useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { saveAs } from "file-saver";
import "../styles/DashboardStyle.css";

const KepalaDashboard = () => {
  const user = "Kepala Sekolah";
  const [search, setSearch] = useState("");

  const chartData = {
    labels: ["Siswa Aktif", "Siswa Tidak Aktif", "Alumni"],
    datasets: [
      {
        label: "Jumlah Siswa",
        data: [1200, 150, 600],
        backgroundColor: ["#3b82f6", "#f87171", "#10b981"],
      },
    ],
  };

  const barData = {
    labels: ["X", "XI", "XII"],
    datasets: [
      {
        label: "Kehadiran (%)",
        data: [87, 93, 89],
        backgroundColor: "#f59e0b",
      },
    ],
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text("Dashboard Kepala Sekolah", 14, 10);
    autoTable(doc, {
      head: [["Kelas", "Kehadiran"]],
      body: [
        ["X", "87%"],
        ["XI", "93%"],
        ["XII", "89%"],
      ],
    });
    doc.save("dashboard-kepala.pdf");
  };

  const handleExportWord = () => {
    const content = `
Dashboard Kepala Sekolah
=========================

Kehadiran:
- X: 87%
- XI: 93%
- XII: 89%
    `;
    const blob = new Blob([content], { type: "application/msword" });
    saveAs(blob, "dashboard-kepala.doc");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">

      <div className="dashboard-header">
        <h1 className="text-xl font-bold">📊 Dashboard Kepala Sekolah</h1>
        <p className="text-sm">
          👋 Selamat datang, <strong>{user}</strong>
        </p>
      </div>
      <input
            type="text"
            placeholder="Cari Data..."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        <div className="dashboard-export" style={{ marginBottom: "20px" }}>
        <button
          onClick={handleExportPDF}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Export PDF
        </button>
        <button
          onClick={handleExportWord}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Export Word
        </button>
      </div>

      <div className="dashboard-cards">
      <div className="card">
          <h2 className="text-lg font-semibold">Siswa Aktif</h2>
          <p className="text-2xl">1200</p>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Total Guru</h2>
          <p className="text-2xl">88</p>
        </div>
        <div className="card">
          <h2 className="text-lg font-semibold">Alumni</h2>
          <p className="text-2xl">600</p>
        </div>
        </div>

        <div className="card">
        <div className="dashboard-charts">
        <div className="chart-card">
          <h2 className="font-semibold mb-2">Grafik Siswa</h2>
          <Pie data={chartData} />
        </div>
        <div className="chart-card">
          <h2 className="font-semibold mb-2">Grafik Kehadiran per Kelas</h2>
          <Bar data={barData} />
        </div>
      </div>
      </div>
      </div>
   
    </div>
  );
};

export default KepalaDashboard;
