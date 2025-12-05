// ✅ Fixed Appsidenavbar.js
import React from "react";
import { TiHome } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./Appsidenavbar.css";

function Appsidenavbar() {
  return (
    <div className="appsidenavbar d-flex flex-column flex-shrink-0 p-3">
      <Link
        to="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none sidebar-title"
      >
        <span className="fs-4 fw-semibold">Sidebar</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto mysidebar">
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">
            <TiHome className="me-2" style={{ fontSize: "24px" }} />
            Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link to="employeelist" className="nav-link">
            <TiHome className="me-2" style={{ fontSize: "24px" }} />
            Employee List
          </Link>
        </li>

        <li className="nav-item">
          <Link to="mygraph" className="nav-link">
            <TiHome className="me-2" style={{ fontSize: "24px" }} />
            Chart
          </Link>
        </li>

        <li className="nav-item">
          <Link to="service" className="nav-link">
            <TiHome className="me-2" style={{ fontSize: "24px" }} />
            Service
          </Link>
        </li>

        <li className="nav-item">
          <Link to="contact" className="nav-link">
            <TiHome className="me-2" style={{ fontSize: "24px" }} />
            Contact
          </Link>
        </li>

        <li className="nav-item">
          <Link to="about" className="nav-link">
            <TiHome className="me-2" style={{ fontSize: "24px" }} />
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Appsidenavbar;
