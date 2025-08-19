import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPages.css";

const RegisterPage = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Akun baru:", { nama, email, password });
    alert("Registrasi berhasil! Silakan login.");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <h2>Registrasi Akun</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nama lengkap..."
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email aktif..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Daftar</button>
      </form>
      <p>
        Sudah punya akun? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default RegisterPage;
