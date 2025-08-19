
import React, { useState } from "react";
import "./PageStyles.css";

const TugasIndividuPage = () => {
  const DUMMY_DATA = [
    { id: 1, judul: "Tugas Individu Matematika", kelas: "X IPA 1", tenggat: "2025-08-05", status: "Belum Dikumpulkan" },
    { id: 2, judul: "Tugas Individu Fisika", kelas: "X IPA 2", tenggat: "2025-08-06", status: "Dikumpulkan" },
    { id: 3, judul: "Tugas Individu Biologi", kelas: "XI IPA 1", tenggat: "2025-08-07", status: "Belum Dikumpulkan" },
    { id: 4, judul: "Tugas Individu Kimia", kelas: "XI IPA 2", tenggat: "2025-08-08", status: "Dikumpulkan" },
    { id: 5, judul: "Tugas Individu Bahasa Inggris", kelas: "XII IPS 1", tenggat: "2025-08-09", status: "Belum Dikumpulkan" }
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
      <h2 className="page-title">📄 Tugas Individu</h2>

      <div className="filter-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Cari Tugas Individu..."
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
              <p>⏳ Tenggat: {item.tenggat}</p>
              <p>📌 Status: {item.status}</p>
              <button className="akses-btn">📤 Kumpulkan</button>
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
              <th>Tenggat</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.judul}</td>
                <td>{item.kelas}</td>
                <td>{item.tenggat}</td>
                <td>{item.status}</td>
                <td>
                  <button className="akses-btn">📤 Kumpulkan</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TugasIndividuPage;
