
import React, { useState, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './PageStyles.css';

const DUMMY_RAPOR = [
  { id: 1, nama: 'Andi Saputra', kelas: 'X IPA 1', nilai: 88 },
  { id: 2, nama: 'Budi Santoso', kelas: 'X IPA 1', nilai: 92 },
  { id: 3, nama: 'Citra Dewi', kelas: 'XI IPA 2', nilai: 75 },
  { id: 4, nama: 'Dewi Lestari', kelas: 'XI IPA 1', nilai: 81 },
  { id: 5, nama: 'Eko Prasetyo', kelas: 'XII IPS 1', nilai: 90 },
  { id: 6, nama: 'Farhan Ahmad', kelas: 'XII IPS 1', nilai: 85 },
];

const getAverageByClass = (data) => {
  const grouped = {};
  data.forEach((item) => {
    if (!grouped[item.kelas]) grouped[item.kelas] = [];
    grouped[item.kelas].push(item.nilai);
  });

  return Object.keys(grouped).map((kelas) => ({
    kelas,
    rataRata: (grouped[kelas].reduce((a, b) => a + b, 0) / grouped[kelas].length).toFixed(2),
  }));
};

const RaporPage = () => {
  const chartRef = useRef();
  const [kelasData] = useState(getAverageByClass(DUMMY_RAPOR));

  const exportToPDF = () => {
    html2canvas(chartRef.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const width = pdf.internal.pageSize.getWidth();
      const height = canvas.height * (width / canvas.width);
      pdf.addImage(imgData, 'PNG', 10, 10, width - 20, height);
      pdf.save('rapor-analytics.pdf');
    });
  };

  return (
    <div className="page-container" ref={chartRef}>
      <h2 className="page-title">📊 Analisis Nilai Rapor</h2>
      <p className="dashboard-subtitle">Grafik rata-rata nilai rapor per kelas</p>

      <button className="akses-btn" onClick={exportToPDF}>⬇️ Export ke PDF</button>

      <div className="chart-box" style={{ marginTop: 20 }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={kelasData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="kelas" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="rataRata" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RaporPage;
