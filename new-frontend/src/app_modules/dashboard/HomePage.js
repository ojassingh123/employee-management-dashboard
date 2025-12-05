import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../css/global.css'; // ✅ Correct path for styles

function Homepage() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div
      className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center fade-in"
      style={{
        background: 'linear-gradient(135deg, #e0f7fa, #b2ebf2)',
        fontFamily: '"Poppins", sans-serif',
        padding: '40px 20px',
      }}
    >
      {/* 🟢 Removed avatar image */}
      <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: '#00796b' }}>
        🚀 Welcome to Your Admin Portal
      </h2>

      <p className="mb-4" style={{ fontSize: '1.2rem', color: '#444' }}>
        Manage users, view insights, and take control — all from one powerful dashboard.
      </p>

      <Link to="/dashboard" className="btn btn-primary shadow-lg px-5 py-3 rounded-pill fs-5">
        Enter Dashboard
      </Link>
    </div>
  );
}

export default Homepage;
