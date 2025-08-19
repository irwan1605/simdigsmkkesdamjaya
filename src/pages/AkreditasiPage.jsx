
import React, { useState } from "react";
import "./PageStyles.css";

const AkreditasiPage = () => {
  const DUMMY_DATA = [
    { id: 1, nama: "Akreditasi Dokumen 1", deskripsi: "Deskripsi Akreditasi 1", tanggal: "2025-08-01" },
    { id: 2, nama: "Akreditasi Dokumen 2", deskripsi: "Deskripsi Akreditasi 2", tanggal: "2025-08-02" },
    { id: 3, nama: "Akreditasi Dokumen 3", deskripsi: "Deskripsi Akreditasi 3", tanggal: "2025-08-03" },
    { id: 4, nama: "Akreditasi Dokumen 4", deskripsi: "Deskripsi Akreditasi 4", tanggal: "2025-08-04" },
    { id: 5, nama: "Akreditasi Dokumen 5", deskripsi: "Deskripsi Akreditasi 5", tanggal: "2025-08-05" }
  ];

  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const filteredData = DUMMY_DATA.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <h2 className="page-title">📜 E-Akreditasi</h2>

      <div className="filter-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Cari dokumen..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

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
              <p>📅 {item.tanggal}</p>
              <button className="akses-btn">📥 Unduh</button>
            </div>
          ))}
        </div>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Dokumen</th>
              <th>Deskripsi</th>
              <th>Tanggal</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.nama}</td>
                <td>{item.deskripsi}</td>
                <td>{item.tanggal}</td>
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

export default AkreditasiPage;
