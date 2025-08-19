import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPages.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const role = email === "user@siswa.com" ? "murid" : "guru";
localStorage.setItem("userRole", role);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "user@siswa.com" && password === "123456") {
      localStorage.setItem("auth", "true");
      localStorage.setItem("userRole", "murid");
      localStorage.setItem("username", "Siswa Dummy");
      navigate("/dashboard");
    } else if (email === "guru@sekolah.com" && password === "123456") {
      localStorage.setItem("auth", "true");
      localStorage.setItem("userRole", "guru");
      localStorage.setItem("username", "Guru Dummy");
      navigate("/dashboard");
    } else {
      alert("Email atau password salah!");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login SIMDIG_SMK KESDAM JAYA</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email..."
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
        <button type="submit">Masuk</button>
      </form>
      <p>
        Belum punya akun? <a href="/register">Daftar di sini</a>
      </p>
    </div>
  );
};

export default LoginPage;
