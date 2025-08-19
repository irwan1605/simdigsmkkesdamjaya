
import React, { useState } from "react";
import "./PageStyles.css";

const IdentitasPage = () => {
  const DUMMY_DATA = [
  { id: 1, nama: "Andi", deskripsi: "Siswa Kelas X IPA 1", tanggal: "2025-08-01" },
  { id: 2, nama: "Budi", deskripsi: "Siswa Kelas XI IPS 1", tanggal: "2025-08-01" },
  { id: 3, nama: "Citra", deskripsi: "Siswa Kelas XII IPA 2", tanggal: "2025-08-01" }
];

  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const filteredData = DUMMY_DATA.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <h2 className="page-title">🧑‍🎓 Identitas Siswa</h2>

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

export default IdentitasPage;
