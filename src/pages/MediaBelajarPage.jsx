
import React, { useState } from "react";
import { DUMMY_MEDIA_BELAJAR } from "../data/DummyGuruData";
import "./PageStyles.css";

const categories = {
  STEM: ["Matematika", "Fisika", "Biologi", "Kimia"],
  Teknologi: ["Coding", "Teknologi", "Internet"],
  Bahasa: ["Bahasa Inggris"],
};

const getCategory = (nama) => {
  for (const [cat, keywords] of Object.entries(categories)) {
    if (keywords.some((kw) => nama.toLowerCase().includes(kw.toLowerCase()))) {
      return cat;
    }
  }
  return "Lainnya";
};

const MediaBelajarPage = () => {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("Semua");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredData = DUMMY_MEDIA_BELAJAR.filter((item) => {
    const matchSearch = item.nama.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      filterCategory === "Semua" || getCategory(item.nama) === filterCategory;
    return matchSearch && matchCategory;
  });

  const getYoutubeEmbed = (title) => {
    const query = title.replace(/\s+/g, "+");
    return `https://www.youtube.com/embed?listType=search&list=${query}`;
  };

  return (
    <div className="page-container">
      <h2 className="page-title">🎥 Media Belajar</h2>

      <div className="filter-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Cari media belajar..."
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

      {selectedVideo && (
        <div className="video-popup">
          <div className="video-content">
            <iframe
              width="560"
              height="315"
              src={getYoutubeEmbed(selectedVideo)}
              title={selectedVideo}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <button
              className="akses-btn"
              onClick={() => setSelectedVideo(null)}
              style={{ marginTop: 10 }}
            >
              ❌ Tutup
            </button>
          </div>
        </div>
      )}

      {viewMode === "grid" ? (
        <div className="grid-container">
          {filteredData.map((item) => (
            <div key={item.id} className="card">
              <h3>{item.nama}</h3>
              <p>{item.deskripsi}</p>
              <button className="akses-btn" onClick={() => setSelectedVideo(item.nama)}>
                ▶️ Putar Video
              </button>
            </div>
          ))}
        </div>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Media</th>
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
                  <button className="akses-btn" onClick={() => setSelectedVideo(item.nama)}>
                    ▶️ Putar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MediaBelajarPage;
