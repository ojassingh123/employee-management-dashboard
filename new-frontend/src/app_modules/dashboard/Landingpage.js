import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUsers, FaUserCheck, FaUserTimes, FaChartLine } from "react-icons/fa";

function Landingpage() {
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    inactive: 0,
  });

  useEffect(() => {
    // Fetch total employees from backend (adjust URL if needed)
    axios
      .get("http://localhost:7800/allusers")
      .then((res) => {
        const total = res.data.length;
        const active = res.data.filter((emp) => emp.status === "Active").length;
        const inactive = total - active;
        setStats({ total, active, inactive });
      })
      .catch(() => {
        console.warn("Could not fetch employee stats");
      });
  }, []);

  const cards = [
    {
      icon: <FaUsers />,
      title: "Total Employees",
      value: stats.total,
      color: "#0d6efd",
    },
    {
      icon: <FaUserCheck />,
      title: "Active Employees",
      value: stats.active,
      color: "#198754",
    },
    {
      icon: <FaUserTimes />,
      title: "Inactive Employees",
      value: stats.inactive,
      color: "#dc3545",
    },
    {
      icon: <FaChartLine />,
      title: "Performance Index",
      value: `${((stats.active / (stats.total || 1)) * 100).toFixed(1)}%`,
      color: "#ffc107",
    },
  ];

  return (
    <div
      className="container py-4"
      style={{
        background: "linear-gradient(180deg, #f8faff 0%, #eef4ff 100%)",
        minHeight: "100vh",
      }}
    >
      <h2 className="fw-bold text-primary text-center mb-4">
        📊 Employee Overview
      </h2>

      <div className="row justify-content-center mb-5">
        {cards.map((card, i) => (
          <div className="col-md-3 col-sm-6 mb-4" key={i}>
            <div
              className="shadow-sm rounded-4 text-center p-4 h-100"
              style={{
                backgroundColor: "white",
                borderTop: `4px solid ${card.color}`,
              }}
            >
              <div style={{ fontSize: "2.2rem", color: card.color }}>
                {card.icon}
              </div>
              <h5 className="fw-bold mt-3">{card.title}</h5>
              <p className="fs-5 mb-0 text-muted">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white fw-semibold">
          Recent Employee Activity
        </div>
        <div className="card-body">
          <p className="text-muted">
            👀 This section could show recently added employees, performance updates, or notices.
          </p>
          <p className="text-muted mb-0">
            (Currently using dummy data – integrate later if needed.)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
