// ✅ Aboutpage.js — polished version with interactive dashboard info
import React, { useState } from "react";
import {
  FaReact,
  FaGithub,
  FaLinkedin,
  FaRegSmileBeam,
  FaCodeBranch,
} from "react-icons/fa";

function Aboutpage() {
  const [followers, setFollowers] = useState(800);
  const [projects, setProjects] = useState(12);
  const [likes, setLikes] = useState(250);

  const updateStats = () => {
    // Randomly increase numbers just for effect
    setFollowers((f) => f + Math.floor(Math.random() * 100));
    setProjects((p) => p + 1);
    setLikes((l) => l + Math.floor(Math.random() * 50));
  };

  return (
    <div
      className="container py-5 fade-in"
      style={{
        fontFamily: "'Poppins', sans-serif",
        color: "#004d40",
        animation: "fadeIn 0.5s ease-in-out",
      }}
    >
      <h2 className="text-center fw-bold mb-4" style={{ color: "#00796b" }}>
        👋 About This Dashboard
      </h2>

      {/* 💡 Intro Section */}
      <p className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
        Welcome to the <strong>Employee Dashboard</strong> — a React-powered
        admin panel built for modern teams. This is the demo <b>About</b> page
        where you can showcase team details, project stats, or company goals.
      </p>

      {/* 🧠 Stats Cards */}
      <div className="row g-4 justify-content-center">
        <div className="col-md-3">
          <div
            className="card shadow-sm text-center p-4 border-0"
            style={{
              background: "#b2ebf2",
              borderRadius: "15px",
            }}
          >
            <FaRegSmileBeam size={50} color="#00796b" className="mb-3" />
            <h5 className="fw-semibold">Followers</h5>
            <h3 className="fw-bold">{followers}</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card shadow-sm text-center p-4 border-0"
            style={{
              background: "#80deea",
              borderRadius: "15px",
            }}
          >
            <FaCodeBranch size={50} color="#006064" className="mb-3" />
            <h5 className="fw-semibold">Projects</h5>
            <h3 className="fw-bold">{projects}</h3>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className="card shadow-sm text-center p-4 border-0"
            style={{
              background: "#4dd0e1",
              borderRadius: "15px",
            }}
          >
            <FaReact size={50} color="#004d40" className="mb-3" />
            <h5 className="fw-semibold">Likes</h5>
            <h3 className="fw-bold">{likes}</h3>
          </div>
        </div>
      </div>

      {/* ⚡ Update Button */}
      <div className="text-center mt-4">
        <button
          className="btn btn-primary px-4 py-2 fw-semibold rounded-pill shadow-sm"
          style={{
            background: "#00796b",
            border: "none",
            fontSize: "1.1rem",
          }}
          onClick={updateStats}
        >
          🔁 Refresh Stats
        </button>
      </div>

      <hr className="my-5" />

      {/* 👨‍💻 Developer Section */}
      <div className="text-center">
        <h4 className="fw-bold mb-3" style={{ color: "#004d40" }}>
          Developed by <span style={{ color: "#00796b" }}>Ojas Singh</span>
        </h4>
        <p>Full Stack Developer • React Enthusiast • UI/UX Lover</p>
        <div className="d-flex justify-content-center gap-4 mt-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-dark"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-primary"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="#"
            className="text-info"
            onClick={(e) => {
              e.preventDefault();
              alert("Thanks for visiting! 😊");
            }}
          >
            <FaRegSmileBeam size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
