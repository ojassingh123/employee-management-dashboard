import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function EmployeeDetailspage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getSingleUserData = async () => {
    try {
      const res = await axios.get(`http://localhost:7800/singleuser/${id}`);
      if (res.data && res.data.alluser) {
        setUser(res.data.alluser);
      } else {
        setError('❌ User not found.');
      }
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError('❌ Failed to fetch user data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, [id]);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  if (loading) {
    return <div className="text-center mt-5 text-secondary">🔄 Loading employee profile...</div>;
  }

  if (error) {
    return <div className="text-center mt-5 text-danger">{error}</div>;
  }

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center px-3"
      style={{
        background: 'linear-gradient(135deg, #cfd8dc, #b2dfdb)',
        fontFamily: '"Poppins", sans-serif',
        animation: 'fadeIn 1.2s ease',
      }}
    >
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .glass-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            border: 1.5px solid rgba(255, 255, 255, 0.3);
          }
          .avatar-glow:hover {
            box-shadow: 0 0 15px #00796b;
            transition: 0.4s ease;
          }
          .badge-custom {
            background-color: #4db6ac;
            color: #fff;
            font-size: 0.9rem;
            border-radius: 20px;
            padding: 6px 12px;
            display: inline-block;
          }
          @media (min-width: 768px) {
            .two-column {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
            }
          }
        `}
      </style>

      <div
        className="p-4 shadow-lg rounded-4 glass-card"
        style={{
          width: '100%',
          maxWidth: '700px',
          color: '#263238',
        }}
      >
        <div className="text-center mb-4">
          <img
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.fullname}`}
            alt="avatar"
            className="rounded-circle mb-3 avatar-glow"
            width="100"
            height="100"
            style={{ border: '4px solid #00796b' }}
          />
          <h2 className="fw-semibold">{user.fullname} 👨‍💼</h2>
          <div className="text-muted small">ID: {user._id}</div>
        </div>

        <hr className="mb-4" style={{ borderTop: '2px dotted #80cbc4' }} />

        <div className="two-column">
          <div className="mb-3">
            <span className="fw-semibold">🧬 Gender</span>
            <div className="badge-custom mt-1">{user.gender}</div>
          </div>

          <div className="mb-3">
            <span className="fw-semibold">📅 Date of Birth</span>
            <div className="badge-custom mt-1">{user.dob}</div>
          </div>
        </div>

        <div className="text-end mt-4">
          <Link
            to="/employeepage"
            className="btn"
            style={{
              backgroundColor: '#00796b',
              color: '#fff',
              borderRadius: '25px',
              padding: '10px 22px',
              fontWeight: '500',
            }}
          >
            🔙 Back to List
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetailspage;
