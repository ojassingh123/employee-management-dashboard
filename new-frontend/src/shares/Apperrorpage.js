import React from "react";
import { useNavigate } from "react-router-dom";

function Apperrorpage() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 text-center"
      style={{
        backgroundColor: "#b02a37",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h1 style={{ fontSize: "7rem", fontWeight: 700 }}>404</h1>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600 }}>Page Not Found</h2>
      <p style={{ color: "#f8d7da", marginTop: "10px" }}>
        The page you are looking for might have been moved or deleted.
      </p>
      <button
        onClick={() => navigate("/userportal")}
        style={{
          marginTop: "25px",
          backgroundColor: "#fff",
          color: "#b02a37",
          border: "none",
          borderRadius: "25px",
          padding: "10px 26px",
          fontWeight: "600",
          cursor: "pointer",
          transition: "0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#f8d7da")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
      >
        Back to Login
      </button>
    </div>
  );
}

export default Apperrorpage;
