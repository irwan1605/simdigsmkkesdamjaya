
import React, { useState } from "react";
import "./PageStyles.css";

const YayasanPage = () => {
  const DUMMY_DATA = [
    { id: 1, nama: "Laporan Yayasan 1", deskripsi: "Data terkait Laporan Yayasan 1", tanggal: "2025-08-01" },
    { id: 2, nama: "Laporan Yayasan 2", deskripsi: "Data terkait Laporan Yayasan 2", tanggal: "2025-08-02" },
    { id: 3, nama: "Laporan Yayasan 3", deskripsi: "Data terkait Laporan Yayasan 3", tanggal: "2025-08-03" },
    { id: 4, nama: "Laporan Yayasan 4", deskripsi: "Data terkait Laporan Yayasan 4", tanggal: "2025-08-04" },
    { id: 5, nama: "Laporan Yayasan 5", deskripsi: "Data terkait Laporan Yayasan 5", tanggal: "2025-08-05" }
  ];

  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const filteredData = DUMMY_DATA.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <h2 className="page-title">🏢 Yayasan (Pelaporan)</h2>

      <div className="filter-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Cari data..."
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
              <button className="akses-btn">🔍 Lihat Detail</button>
            </div>
          ))}
        </div>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
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
                  <button className="akses-btn">🔍 Detail</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default YayasanPage;
