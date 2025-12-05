import React from "react";
import { FaChartLine, FaShoppingCart, FaDollarSign } from "react-icons/fa";

function SalesPage() {
  const salesStats = [
    { title: "Total Sales", value: "$54,320", icon: <FaDollarSign />, color: "#0d6efd" },
    { title: "Active Orders", value: "126", icon: <FaShoppingCart />, color: "#198754" },
    { title: "Growth", value: "+18%", icon: <FaChartLine />, color: "#ffc107" },
  ];

  return (
    <div
      className="container py-4"
      style={{
        background: "linear-gradient(180deg, #f8faff 0%, #eef4ff 100%)",
        minHeight: "100vh",
      }}
    >
      <h2 className="fw-bold text-primary mb-4 text-center">📊 Sales Overview</h2>

      <div className="row mb-4">
        {salesStats.map((stat, i) => (
          <div className="col-md-4 mb-3" key={i}>
            <div
              className="p-4 rounded shadow-sm text-center"
              style={{
                backgroundColor: "white",
                borderTop: `4px solid ${stat.color}`,
              }}
            >
              <div style={{ fontSize: "2rem", color: stat.color }}>{stat.icon}</div>
              <h5 className="fw-bold mt-2">{stat.title}</h5>
              <p className="text-muted fs-5">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white fw-semibold">
          Recent Sales
        </div>
        <div className="card-body">
          <table className="table table-striped text-center align-middle">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Client</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {["#A1032", "#A1047", "#A1053", "#A1060"].map((id, i) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{["John", "Sophia", "Liam", "Emma"][i]}</td>
                  <td>${(Math.random() * 2000 + 500).toFixed(2)}</td>
                  <td>
                    <span className={`badge bg-${i % 2 === 0 ? "success" : "warning"}`}>
                      {i % 2 === 0 ? "Completed" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SalesPage;
