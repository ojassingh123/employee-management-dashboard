import React from "react";
import { FaCogs, FaChartPie, FaLaptopCode, FaUserTie } from "react-icons/fa";

function ServicePage() {
  const services = [
    {
      icon: <FaCogs />,
      title: "Employee Management",
      desc: "Easily add, edit, and monitor all employee details from one place.",
    },
    {
      icon: <FaChartPie />,
      title: "Performance Analytics",
      desc: "Visualize data trends and measure performance metrics across teams.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Automation Tools",
      desc: "Automate repetitive HR and payroll tasks with smart workflows.",
    },
    {
      icon: <FaUserTie />,
      title: "Support & Consulting",
      desc: "Our support team ensures your dashboard runs seamlessly 24/7.",
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
      <h2 className="fw-bold text-primary text-center mb-4">Our Services</h2>
      <p className="text-muted text-center mb-5 fs-5">
        Explore how we help you manage employees, performance, and insights.
      </p>

      <div className="row justify-content-center">
        {services.map((service, index) => (
          <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <div
              className="card text-center shadow-sm border-0 h-100"
              style={{
                borderTop: "4px solid #0d6efd",
                borderRadius: "12px",
              }}
            >
              <div
                className="card-body"
                style={{
                  backgroundColor: "white",
                  color: "#004085",
                }}
              >
                <div style={{ fontSize: "2rem", color: "#0d6efd" }}>
                  {service.icon}
                </div>
                <h5 className="fw-bold mt-3">{service.title}</h5>
                <p className="text-muted small">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicePage;
