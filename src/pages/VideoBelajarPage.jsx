
import React, { useState } from "react";
import "./PageStyles.css";

const DUMMY_VIDEO_BELAJAR = [
  { id: 1, judul: "Belajar AI untuk Pemula", kategori: "AI", link: "https://www.youtube.com/embed?v=ai101" },
  { id: 2, judul: "Dasar Data Science", kategori: "Data Science", link: "https://www.youtube.com/embed?v=datasci101" },
  { id: 3, judul: "Belajar Coding dengan Python", kategori: "Coding", link: "https://www.youtube.com/embed?v=python101" },
  { id: 4, judul: "Matematika Dasar SMA", kategori: "STEM", link: "https://www.youtube.com/embed?v=math101" },
  { id: 5, judul: "Fisika Gerak Lurus", kategori: "STEM", link: "https://www.youtube.com/embed?v=physics101" },
  { id: 6, judul: "Bahasa Inggris Conversation", kategori: "Bahasa Inggris", link: "https://www.youtube.com/embed?v=english101" },
  { id: 7, judul: "Algoritma Dasar untuk Pemula", kategori: "Coding", link: "https://www.youtube.com/embed?v=algo101" },
  { id: 8, judul: "Pengenalan Machine Learning", kategori: "AI", link: "https://www.youtube.com/embed?v=ml101" },
  { id: 9, judul: "Trigonometri untuk SMA", kategori: "STEM", link: "https://www.youtube.com/embed?v=trigo101" },
  { id: 10, judul: "Tips Speaking Bahasa Inggris", kategori: "Bahasa Inggris", link: "https://www.youtube.com/embed?v=speaking101" }
];

const categories = ["Semua", ...new Set(DUMMY_VIDEO_BELAJAR.map((v) => v.kategori))];

const VideoBelajarPage = () => {
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("Semua");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredData = DUMMY_VIDEO_BELAJAR.filter((item) => {
    const matchSearch = item.judul.toLowerCase().includes(search.toLowerCase());
    const matchCategory = filterCategory === "Semua" || item.kategori === filterCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="page-container">
      <h2 className="page-title">🎥 Video Belajar</h2>

      <div className="filter-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Cari video..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="filter-select"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          {categories.map((cat) => (
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
              src={selectedVideo}
              title="Video Belajar"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <button
              className="akses-btn"
              style={{ marginTop: "10px" }}
              onClick={() => setSelectedVideo(null)}
            >
              ❌ Tutup
            </button>
          </div>
        </div>
      )}

      {viewMode === "grid" ? (
        <div className="grid-container">
          {filteredData.map((video) => (
            <div key={video.id} className="card">
              <h3>{video.judul}</h3>
              <p>Kategori: {video.kategori}</p>
              <button className="akses-btn" onClick={() => setSelectedVideo(video.link)}>
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
              <th>Judul Video</th>
              <th>Kategori</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((video, index) => (
              <tr key={video.id}>
                <td>{index + 1}</td>
                <td>{video.judul}</td>
                <td>{video.kategori}</td>
                <td>
                  <button className="akses-btn" onClick={() => setSelectedVideo(video.link)}>
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

export default VideoBelajarPage;
