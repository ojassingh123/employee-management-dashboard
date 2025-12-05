import React from "react";
import { useNavigate } from "react-router-dom";

function Appheaderpage() {
  const navigate = useNavigate();

  return (
    <header
      className="d-flex justify-content-between align-items-center px-4 py-3 shadow-sm"
      style={{
        backgroundColor: "#007bff",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Clickable title */}
      <h4
        className="m-0 fw-semibold"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        Employee Dashboard
      </h4>

      {/* You can keep other nav items here if needed */}
      <div></div>
    </header>
  );
}

export default Appheaderpage;
