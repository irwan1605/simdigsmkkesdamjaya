
import React, { useState } from "react";
import "./PageStyles.css";

const CBTPage = () => {
  const DUMMY_DATA = [
    { id: 1, judul: "CBT Matematika", kelas: "X IPA 1", durasi: "30 menit", sertifikat: true },
    { id: 2, judul: "CBT Fisika", kelas: "X IPA 2", durasi: "40 menit", sertifikat: false },
    { id: 3, judul: "CBT Biologi", kelas: "XI IPA 1", durasi: "35 menit", sertifikat: true },
    { id: 4, judul: "CBT Kimia", kelas: "XI IPA 2", durasi: "25 menit", sertifikat: false },
    { id: 5, judul: "CBT Bahasa Inggris", kelas: "XII IPS 1", durasi: "30 menit", sertifikat: true }
  ];

  const [search, setSearch] = useState("");
  const [filterKelas, setFilterKelas] = useState("Semua");
  const [viewMode, setViewMode] = useState("grid");

  const filteredData = DUMMY_DATA.filter((item) => {
    const matchSearch = item.judul.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filterKelas === "Semua" || item.kelas === filterKelas;
    return matchSearch && matchFilter;
  });

  const kelasOptions = ["Semua", ...new Set(DUMMY_DATA.map((d) => d.kelas))];

  return (
    <div className="page-container">
      <h2 className="page-title">🖥️ CBT + Sertifikat</h2>

      <div className="filter-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Cari CBT..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="filter-select"
          value={filterKelas}
          onChange={(e) => setFilterKelas(e.target.value)}
        >
          {kelasOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        <button
          className="akses-btn"
          onClick={() => setViewMode(viewMode === "grid" ? "table" : "grid")}
        >
          {viewMode === "grid" ? "📋 Tabel View" : "🔲 Grid View"}
        </button>
      </div>

      {viewMode === "grid" ? (
        <div className="grid-container">
          {filteredData.map((item) => (
            <div key={item.id} className="card">
              <h3>{item.judul}</h3>
              <p>📚 Kelas: {item.kelas}</p>
              <p>⏳ Durasi: {item.durasi}</p>
              {item.sertifikat && <p>🏅 Sertifikat: Tersedia</p>}
              <button className="akses-btn">▶️ Mulai</button>
            </div>
          ))}
        </div>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Judul</th>
              <th>Kelas</th>
              <th>Durasi</th>
              <th>Sertifikat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.judul}</td>
                <td>{item.kelas}</td>
                <td>{item.durasi}</td>
                <td>{item.sertifikat ? "✅ Ada" : "❌ Tidak Ada"}</td>
                <td>
                  <button className="akses-btn">▶️ Mulai</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CBTPage;
