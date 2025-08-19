
import React, { useState } from "react";
import "./PageStyles.css";

const DUMMY_DATA = [
  { id: 1, nama: "Materi 1", deskripsi: "Deskripsi materi 1" },
  { id: 2, nama: "Materi 2", deskripsi: "Deskripsi materi 2" },
  { id: 3, nama: "Materi 3", deskripsi: "Deskripsi materi 3" },
  { id: 4, nama: "Materi 4", deskripsi: "Deskripsi materi 4" },
  { id: 5, nama: "Materi 5", deskripsi: "Deskripsi materi 5" }
];

const BahanXIIPage = () => {
  const [search, setSearch] = useState("");

  const filteredData = DUMMY_DATA.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <h2 className="page-title">Bahan Pembelajaran Kelas XII</h2>

      <input
        type="text"
        className="search-input"
        placeholder="Cari data..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid-container">
        {filteredData.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.nama}</h3>
            <p>{item.deskripsi}</p>
            <button className="akses-btn">📄 Lihat Detail</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BahanXIIPage;
