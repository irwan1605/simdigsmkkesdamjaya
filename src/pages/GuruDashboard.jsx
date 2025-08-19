import React, { useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { saveAs } from "file-saver";
import { Bar } from "react-chartjs-2";
import "../styles/DashboardStyle.css";

const GuruDashboard = () => {
  const user = "Guru Matematika";
  const [search, setSearch] = useState("");

  const materiList = [
    { judul: "Persamaan Linear", kelas: "X", status: "Dibagikan" },
    { judul: "Integral Tak Tentu", kelas: "XII", status: "Dibagikan" },
    { judul: "Limit Fungsi", kelas: "XI", status: "Belum Dibagikan" },
  ];

  const filteredMateri = materiList.filter((m) =>
    m.judul.toLowerCase().includes(search.toLowerCase())
  );

  const barData = {
    labels: ["X", "XI", "XII"],
    datasets: [
      {
        label: "Kehadiran Hari Ini (%)",
        data: [88, 92, 90],
        backgroundColor: "#4f46e5",
      },
    ],
  };

  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text("Dashboard Guru", 14, 10);
    autoTable(doc, {
      head: [["Judul Materi", "Kelas", "Status"]],
      body: filteredMateri.map((m) => [m.judul, m.kelas, m.status]),
    });
    doc.save("dashboard-guru.pdf");
  };

  const handleExportWord = () => {
    const content = filteredMateri
      .map((m) => `${m.judul} - Kelas ${m.kelas} (${m.status})`)
      .join("\n");
    const blob = new Blob([`Materi Dibagikan:\n\n${content}`], {
      type: "application/msword",
    });
    saveAs(blob, "dashboard-guru.doc");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <div className="dashboard-header">
          <h1 className="text-xl font-bold">📚 Dashboard Guru</h1>
          <p className="text-sm">
            👋 Selamat datang, <strong>{user}</strong>
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold">📘 Materi Terkini</h2>
          <input
            type="text"
            placeholder="Cari materi..."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="dashboard-actions">
            <table className="table-section">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">Judul</th>
                  <th className="p-2 border">Kelas</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredMateri.map((m, i) => (
                  <tr key={i}>
                    <td className="p-2 border">{m.judul}</td>
                    <td className="p-2 border">{m.kelas}</td>
                    <td className="p-2 border">{m.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="dashboard-export" style={{ marginBottom: "20px" }}>
              <button
                onClick={handleExportPDF}
                className="bg-indigo-600 text-white px-4 py-2 rounded"
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
          </div>
        </div>

        <div className="dashboard-cards">
          <div className="card">
            <h2 className="text-lg font-semibold">Kehadiran Siswa</h2>
            <p className="text-2xl">91%</p>
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold">Tugas Masuk</h2>
            <p className="text-2xl">36</p>
          </div>
          <div className="card">
            <h2 className="text-lg font-semibold">Materi Dibagikan</h2>
            <p className="text-2xl">12</p>
          </div>
        </div>

        <div className="bg-white rounded shadow p-4 mb-4">
          <h2 className="font-semibold mb-2">Grafik Kehadiran per Kelas</h2>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
};

export default GuruDashboard;
