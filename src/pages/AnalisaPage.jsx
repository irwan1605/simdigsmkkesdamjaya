
import React, { useRef } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./PageStyles.css";

const DUMMY_ANALISA = [
  { soal: "Soal 1", benar: 80, salah: 20 },
  { soal: "Soal 2", benar: 65, salah: 35 },
  { soal: "Soal 3", benar: 90, salah: 10 },
  { soal: "Soal 4", benar: 70, salah: 30 },
  { soal: "Soal 5", benar: 50, salah: 50 }
];

const AnalisaPage = () => {
  const chartRef = useRef();

  const exportPDF = () => {
    html2canvas(chartRef.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, "PNG", 10, 10, width - 20, height);
      pdf.save("analisa-nilai-soal.pdf");
    });
  };

  return (
    <div className="page-container">
      <h2 className="page-title">📊 Analisa Nilai & Butir Soal</h2>

      <div ref={chartRef}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={DUMMY_ANALISA}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="soal" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="benar" fill="#4ade80" />
            <Bar dataKey="salah" fill="#f87171" />
          </BarChart>
        </ResponsiveContainer>

        <table className="data-table" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>No</th>
              <th>Soal</th>
              <th>Jawaban Benar (%)</th>
              <th>Jawaban Salah (%)</th>
            </tr>
          </thead>
          <tbody>
            {DUMMY_ANALISA.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.soal}</td>
                <td>{item.benar}%</td>
                <td>{item.salah}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="akses-btn" style={{ marginTop: 15 }} onClick={exportPDF}>
        📄 Export ke PDF
      </button>
    </div>
  );
};

export default AnalisaPage;
