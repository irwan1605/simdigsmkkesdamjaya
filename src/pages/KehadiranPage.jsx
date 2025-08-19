import React, { useState } from 'react';
import './PageStyles.css';

const DUMMY_KEHADIRAN = [
  { id: 1, nama: 'Andi Saputra', kelas: 'X IPA 1', status: 'Hadir', jam: '07:15' },
  { id: 2, nama: 'Budi Santoso', kelas: 'X IPA 1', status: 'Izin', jam: '-' },
  { id: 3, nama: 'Citra Dewi', kelas: 'X IPS 2', status: 'Hadir', jam: '07:20' },
  { id: 4, nama: 'Dewi Lestari', kelas: 'XI IPA 1', status: 'Alpa', jam: '-' },
  { id: 5, nama: 'Eko Prasetyo', kelas: 'XI IPS 1', status: 'Hadir', jam: '07:10' },
];

const KehadiranPage = () => {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredData = DUMMY_KEHADIRAN.filter((item) => {
    const matchSearch =
      item.nama.toLowerCase().includes(search.toLowerCase()) ||
      item.kelas.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === 'All' || item.status === filterStatus;
    return matchSearch && matchStatus;
  });

  return (
    <div className="page-container">
      <h2 className="page-title">📝 Kehadiran Siswa</h2>

      <div className="filter-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Cari nama atau kelas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="filter-select"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">Semua Status</option>
          <option value="Hadir">Hadir</option>
          <option value="Izin">Izin</option>
          <option value="Alpa">Alpa</option>
        </select>
      </div>

      <div className="grid-container">
        {filteredData.map((item, index) => (
          <div key={item.id} className="card">
            <h3>{item.nama}</h3>
            <p><strong>Kelas:</strong> {item.kelas}</p>
            <p><strong>Status:</strong> {item.status}</p>
            <p><strong>Jam Kehadiran:</strong> {item.jam}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KehadiranPage;