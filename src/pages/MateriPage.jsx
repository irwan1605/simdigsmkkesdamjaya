import React, { useState } from "react";
import { MATERI_DATA } from "../data/DummyData";
import "./PageStyles.css";

const MateriPage = () => {
  const [search, setSearch] = useState("");
  const [kelasFilter, setKelasFilter] = useState("Semua");
  const [tipeFilter, setTipeFilter] = useState("Semua");

  const filtered = MATERI_DATA.filter((materi) => {
    const matchSearch = materi.judul.toLowerCase().includes(search.toLowerCase());
    const matchKelas = kelasFilter === "Semua" || materi.kelas === kelasFilter;
    const matchTipe = tipeFilter === "Semua" || materi.tipe === tipeFilter;
    return matchSearch && matchKelas && matchTipe;
  });

  const uniqueKelas = ["Semua", ...new Set(MATERI_DATA.map((m) => m.kelas))];
  const uniqueTipe = ["Semua", ...new Set(MATERI_DATA.map((m) => m.tipe))];

  return (
    <div className="page-container">
      <h2 className="page-title">📚 Materi Pembelajaran</h2>

      <div className="filter-row">
        <input
          type="text"
          placeholder="Cari materi..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className="dropdown" value={kelasFilter} onChange={(e) => setKelasFilter(e.target.value)}>
          {uniqueKelas.map((kelas, i) => (
            <option key={i} value={kelas}>{kelas}</option>
          ))}
        </select>

        <select className="dropdown" value={tipeFilter} onChange={(e) => setTipeFilter(e.target.value)}>
          {uniqueTipe.map((tipe, i) => (
            <option key={i} value={tipe}>{tipe}</option>
          ))}
        </select>
      </div>

      <div className="grid-container">
        {filtered.map((materi, index) => (
          <div key={index} className="card">
            <h3>{materi.judul}</h3>
            <p><strong>Kelas:</strong> {materi.kelas}</p>
            <p><strong>Tipe:</strong> {materi.tipe}</p>
            <a href={materi.link} className="akses-btn" target="_blank" rel="noreferrer">🔗 Akses</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MateriPage;
