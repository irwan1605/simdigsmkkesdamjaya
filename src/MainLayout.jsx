import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar"; // pastikan sesuai path kamu
import "./App.css";

const MainLayout = () => {
  const isAuthenticated = localStorage.getItem("auth") === "true";

  if (!isAuthenticated) return <Navigate to="/login" />;

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
