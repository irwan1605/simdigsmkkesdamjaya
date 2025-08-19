import React, { useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { saveAs } from "file-saver";
import { Bar } from "react-chartjs-2";
import "../styles/DashboardStyle.css";
import "./DashboardPage.css";

const MuridDashboard = () => {
  const user = "Ahmad Rafi";
  const [search, setSearch] = useState("");

  const tugasAktif = [
    { nama: "Matematika - Integral", deadline: "2025-08-20" },
    { nama: "Biologi - Jaringan Tumbuhan", deadline: "2025-08-18" },
    { nama: "Sejarah - Kerajaan Islam", deadline: "2025-08-22" },
  ];

  const filteredTugas = tugasAktif.filter((t) =>
    t.nama.toLowerCase().includes(search.toLowerCase())
  );

  const nilaiChart = {
    labels: ["Matematika", "Biologi", "Bahasa", "Sejarah"],
    datasets: [
      {
        label: "Nilai Rata-Rata",
        data: [85, 88, 92, 81],
        backgroundColor: "#10b981",
      },
    ],
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text("Dashboard Murid", 14, 10);
    autoTable(doc, {
      head: [["Tugas", "Deadline"]],
      body: filteredTugas.map((t) => [t.nama, t.deadline]),
    });
    doc.save("dashboard-murid.pdf");
  };

  const handleExportWord = () => {
    const content = filteredTugas
      .map((t) => `${t.nama} - Deadline: ${t.deadline}`)
      .join("\n");
    const blob = new Blob([`Tugas Aktif:\n\n${content}`], {
      type: "application/msword",
    });
    saveAs(blob, "dashboard-murid.doc");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <div className="dashboard-header">
          <h1 className="text-xl font-bold">🎓 Dashboard Murid</h1>
          <p className="text-sm">
            👋 Selamat datang, <strong>{user}</strong>
          </p>
        </div>

        <h2 className="font-semibold mb-2">📝 Tugas Aktif</h2>
        <input
          type="text"
          placeholder="Cari tugas..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="dashboard-actions">

          <table className="table-section">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Tugas</th>
                <th className="p-2 border">Deadline</th>
              </tr>
            </thead>
            <tbody>
              {filteredTugas.map((t, i) => (
                <tr key={i}>
                  <td className="p-2 border">{t.nama}</td>
                  <td className="p-2 border">{t.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="dashboard-export" style={{ marginBottom: "20px" }}>
            <button onClick={handleExportPDF} className="export-buttons button">
              Export PDF
            </button>
            <button
              onClick={handleExportWord}
              className="export-buttons button"
            >
              Export Word
            </button>
          </div>
        </div>

        <div className="dashboard-cards">
          <div className="card">
            <h2 className="text-lg font-semibold">Kehadiran</h2>
            <p className="text-2xl">100%</p>
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold">Tugas Aktif</h2>
            <p className="text-2xl">{tugasAktif.length}</p>
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold">Jadwal Hari Ini</h2>
            <p className="text-md">Matematika, Bahasa Indonesia, Biologi</p>
          </div>
        </div>

        <div className="chart-wrapper">
          <h2 className="font-semibold mb-2">📊 Grafik Nilai Rata-Rata</h2>
          <Bar data={nilaiChart} />
        </div>
      </div>
    </div>
  );
};

export default MuridDashboard;
