
import React, { useState } from "react";
import "./PageStyles.css";

const PeminjamanPage = () => {
  const DUMMY_DATA = [
  { id: 1, nama: "Andi", deskripsi: "Pinjam Buku Matematika", tanggal: "2025-08-01", status: "Dipinjam" },
  { id: 2, nama: "Budi", deskripsi: "Pinjam Buku Fisika", tanggal: "2025-08-02", status: "Dikembalikan" },
  { id: 3, nama: "Citra", deskripsi: "Pinjam Buku Biologi", tanggal: "2025-08-03", status: "Dipinjam" }
];

  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const filteredData = DUMMY_DATA.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <h2 className="page-title">📚 Peminjaman Buku</h2>

      <div className="filter-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Cari siswa..."
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
              {item.status && <p>📌 Status: {item.status}</p>}
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
              {DUMMY_DATA[0].status && <th>Status</th>}
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
                {item.status && <td>{item.status}</td>}
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

export default PeminjamanPage;
