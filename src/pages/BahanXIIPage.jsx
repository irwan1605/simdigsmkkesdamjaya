
import React, { useState } from "react";
import { DUMMY_BAHAN_XII } from "../data/DummyGuruData";
import "./PageStyles.css";

const BahanPage = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Semua");
  const [viewMode, setViewMode] = useState("grid");

  const filteredData = DUMMY_BAHAN_XII.filter((item) => {
    const matchSearch = item.nama.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "Semua" || item.kategori === filter;
    return matchSearch && matchFilter;
  });

  const filterOptions = ["Semua", ...new Set(DUMMY_BAHAN_XII.map((d) => d.kategori))];

  return (
    <div className="page-container">
      <h2 className="page-title">📙 Bahan Pembelajaran Kelas XII</h2>

      <div className="filter-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Cari bahan ajar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="filter-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {filterOptions.map((opt) => (
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
              <h3>{item.nama}</h3>
              <p>📅 Update: {item.update}</p>
              <button className="akses-btn">📥 Unduh</button>
            </div>
          ))}
        </div>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Bahan</th>
              <th>Kategori</th>
              <th>Update</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.nama}</td>
                <td>{item.kategori}</td>
                <td>{item.update}</td>
                <td>
                  <button className="akses-btn">📥 Unduh</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BahanPage;
