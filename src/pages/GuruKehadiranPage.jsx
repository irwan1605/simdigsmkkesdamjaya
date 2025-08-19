
import React, { useState } from "react";
import { DUMMY_GURU_KEHADIRAN } from "../data/DummyGuruData";
import "./PageStyles.css";

const GuruKehadiranPage = () => {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("Semua");
  const [viewMode, setViewMode] = useState("grid");

  const filteredData = DUMMY_GURU_KEHADIRAN.filter((item) => {
    const matchSearch = item.nama.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filterStatus === "Semua" || item.status === filterStatus;
    return matchSearch && matchFilter;
  });

  return (
    <div className="page-container">
      <h2 className="page-title">👨‍🏫 Kehadiran Guru</h2>

      <div className="filter-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Cari nama guru..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="filter-select"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="Semua">Semua</option>
          <option value="Hadir">Hadir</option>
          <option value="Izin">Izin</option>
          <option value="Sakit">Sakit</option>
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
              <h3>{item.nama}</h3>
              <p><strong>Status:</strong> {item.status}</p>
              <p><strong>Jam Masuk:</strong> {item.jam}</p>
              <p><strong>Tanggal:</strong> {item.tanggal}</p>
            </div>
          ))}
        </div>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Status</th>
              <th>Jam Masuk</th>
              <th>Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.nama}</td>
                <td>{item.status}</td>
                <td>{item.jam}</td>
                <td>{item.tanggal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GuruKehadiranPage;
