
import React, { useState } from 'react';
import './PageStyles.css';

const DUMMY_MODUL = [
  { id: 1, judul: 'Modul Matematika Dasar', kelas: 'X IPA 1', file: 'modul-matematika.pdf' },
  { id: 2, judul: 'Modul Fisika Listrik', kelas: 'X IPA 2', file: 'modul-fisika.pdf' },
  { id: 3, judul: 'Modul Biologi Sel', kelas: 'XI IPA 1', file: 'modul-biologi.pdf' },
  { id: 4, judul: 'Modul Kimia Unsur', kelas: 'XI IPA 2', file: 'modul-kimia.pdf' },
  { id: 5, judul: 'Modul Ekonomi Mikro', kelas: 'XII IPS 1', file: 'modul-ekonomi.pdf' },
];

const ModulAjarPage = () => {
  const [search, setSearch] = useState('');

  const filteredData = DUMMY_MODUL.filter((item) =>
    item.judul.toLowerCase().includes(search.toLowerCase()) ||
    item.kelas.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <h2 className="page-title">📘 Daftar Modul Ajar</h2>

      <input
        type="text"
        className="search-input"
        placeholder="Cari judul atau kelas..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid-container">
        {filteredData.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.judul}</h3>
            <p><strong>Kelas:</strong> {item.kelas}</p>
            <button className="akses-btn">📄 Lihat Modul</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModulAjarPage;
