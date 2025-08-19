
import React, { useState } from 'react';
import './PageStyles.css';

const DUMMY_JURNAL = [
  { id: 1, judul: 'Jurnal Matematika', penulis: 'Budi Santoso', tanggal: '2025-07-01' },
  { id: 2, judul: 'Jurnal Fisika', penulis: 'Ani Lestari', tanggal: '2025-07-02' },
  { id: 3, judul: 'Jurnal Biologi', penulis: 'Citra Dewi', tanggal: '2025-07-03' },
  { id: 4, judul: 'Jurnal Kimia', penulis: 'Dedi Prasetyo', tanggal: '2025-07-04' },
  { id: 5, judul: 'Jurnal Sejarah', penulis: 'Eka Saputra', tanggal: '2025-07-05' },
];

const JurnalPage = () => {
  const [search, setSearch] = useState('');

  const filteredData = DUMMY_JURNAL.filter((item) =>
    item.judul.toLowerCase().includes(search.toLowerCase()) ||
    item.penulis.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-container">
      <h2 className="page-title">📚 Daftar Jurnal</h2>

      <input
        type="text"
        className="search-input"
        placeholder="Cari judul atau penulis..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid-container">
        {filteredData.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.judul}</h3>
            <p><strong>Penulis:</strong> {item.penulis}</p>
            <p><strong>Tanggal:</strong> {item.tanggal}</p>
            <button className="akses-btn">📖 Baca Jurnal</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JurnalPage;
