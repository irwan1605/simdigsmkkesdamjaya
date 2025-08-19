
import React, { useState } from "react";
import "./PageStyles.css";

const JadwalXIIPage = () => {
  const DUMMY_DATA = [
    { id: 1, mapel: "Matematika", guru: "Pak Budi", hari: "Senin", jam: "07:00 - 08:30" },
    { id: 2, mapel: "Fisika", guru: "Bu Siti", hari: "Selasa", jam: "09:00 - 10:30" },
    { id: 3, mapel: "Biologi", guru: "Pak Andi", hari: "Rabu", jam: "10:30 - 12:00" },
    { id: 4, mapel: "Kimia", guru: "Bu Rina", hari: "Kamis", jam: "07:00 - 08:30" },
    { id: 5, mapel: "Bahasa Inggris", guru: "Pak Dedi", hari: "Jumat", jam: "08:30 - 10:00" }
  ];

  const [search, setSearch] = useState("");
  const [filterHari, setFilterHari] = useState("Semua");
  const [viewMode, setViewMode] = useState("grid");

  const filteredData = DUMMY_DATA.filter((item) => {
    const matchSearch = item.mapel.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filterHari === "Semua" || item.hari === filterHari;
    return matchSearch && matchFilter;
  });

  const hariOptions = ["Semua", ...new Set(DUMMY_DATA.map((d) => d.hari))];

  return (
    <div className="page-container">
      <h2 className="page-title">📅 Jadwal Pelajaran Kelas XII</h2>

      <div className="filter-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Cari mata pelajaran..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="filter-select"
          value={filterHari}
          onChange={(e) => setFilterHari(e.target.value)}
        >
          {hariOptions.map((opt) => (
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
              <h3>{item.mapel}</h3>
              <p>👨‍🏫 Guru: {item.guru}</p>
              <p>📅 Hari: {item.hari}</p>
              <p>⏰ Jam: {item.jam}</p>
            </div>
          ))}
        </div>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Mata Pelajaran</th>
              <th>Guru</th>
              <th>Hari</th>
              <th>Jam</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.mapel}</td>
                <td>{item.guru}</td>
                <td>{item.hari}</td>
                <td>{item.jam}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default JadwalXIIPage;
