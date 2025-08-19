
import React, { useState } from "react";
import { DUMMY_MATERI_DIGITAL } from "../data/DummyMateriDigital";
import "./PageStyles.css";

const categories = {
  STEM: ["Matematika", "Fisika", "Biologi", "Kimia", "Data Science", "AI"],
  Teknologi: ["Coding", "Teknologi", "Internet"],
  Bahasa: ["Bahasa Inggris"],
  Kewirausahaan: ["Kewirausahaan"],
};

const getCategory = (nama) => {
  for (const [cat, keywords] of Object.entries(categories)) {
    if (keywords.some((kw) => nama.toLowerCase().includes(kw.toLowerCase()))) {
      return cat;
    }
  }
  return "Lainnya";
};

const MateriDigitalPage = () => {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("Semua");
  const [viewMode, setViewMode] = useState("grid"); // grid or table

  const filteredData = DUMMY_MATERI_DIGITAL.filter((item) => {
    const matchSearch = item.nama.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      filterCategory === "Semua" || getCategory(item.nama) === filterCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="page-container">
      <h2 className="page-title">📚 Materi Digital</h2>

      <div className="filter-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Cari materi digital..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="filter-select"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="Semua">Semua</option>
          {Object.keys(categories).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
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
              <p>{item.deskripsi}</p>
              <button className="akses-btn">📥 Unduh</button>
            </div>
          ))}
        </div>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Materi</th>
              <th>Deskripsi</th>
              <th>Kategori</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.nama}</td>
                <td>{item.deskripsi}</td>
                <td>{getCategory(item.nama)}</td>
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

export default MateriDigitalPage;
