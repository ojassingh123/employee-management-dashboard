import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcBusinessman, FcManager } from "react-icons/fc";
import { applists } from "./controls/Applist";
import LoginPage from "./app_modules/auth/LoginPage";
import RegisterPage from "./app_modules/auth/RegisterPage";
import "./WelcomeApp.css";

function Navbar({ onLoginClick, onRegisterClick }) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light shadow-sm px-4"
      style={{
        background: "linear-gradient(90deg, #007bff, #00b4ff)",
      }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand fw-bold text-white"
          to="/"
          style={{ letterSpacing: "0.5px", fontSize: "1.3rem" }}
        >
          Employee Dashboard
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {[
              { name: "Sales", path: "/sales" },
              { name: "Invoice", path: "/invoice" },
              { name: "Purchase", path: "/purchase" },
            ].map((item) => (
              <li className="nav-item mx-2" key={item.name}>
                <Link
                  className="nav-link text-white fw-semibold"
                  to={item.path}
                  style={{ fontSize: "0.95rem" }}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li className="nav-item ms-3">
              <button
                className="btn btn-light fw-bold px-4 py-2 shadow-sm"
                style={{
                  color: "#007bff",
                  borderRadius: "25px",
                  transition: "all 0.3s ease",
                }}
                onClick={onLoginClick}
              >
                Login
              </button>
            </li>

            <li className="nav-item ms-2">
              <button
                className="btn btn-outline-light fw-bold px-4 py-2 shadow-sm"
                style={{
                  borderRadius: "25px",
                  transition: "all 0.3s ease",
                }}
                onClick={onRegisterClick}
              >
                Register
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#212529",
        color: "white",
        padding: "15px 0",
        textAlign: "center",
        fontSize: "0.95rem",
      }}
    >
      <div className="container">
        <ul
          className="list-inline mb-0"
          style={{ display: "flex", justifyContent: "center", gap: "25px" }}
        >
          {["Home", "Features", "Pricing", "FAQs", "About"].map((item) => (
            <li className="list-inline-item" key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                style={{
                  color: "white",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

function WelcomeApp() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const dashboardApps = applists.filter((app) =>
    ["register", "sales", "invoice", "purchase"].includes(
      app.applink.toLowerCase()
    )
  );

  return (
    <>
      <Navbar
        onLoginClick={() => {
          setShowLogin(true);
          setShowRegister(false);
        }}
        onRegisterClick={() => {
          setShowRegister(true);
          setShowLogin(false);
        }}
      />

      <div
        className="welcome-container container-fluid d-flex align-items-center justify-content-center min-vh-100"
        style={{
          background: "linear-gradient(180deg, #f8faff 0%, #eef4ff 100%)",
        }}
      >
        <div className="row w-100 mx-0 align-items-center justify-content-center">
          {/* LEFT SECTION */}
          <div className="col-md-6 p-5 text-start">
            <h1
              className="fw-bold mb-4"
              style={{
                background: "linear-gradient(90deg, #007bff, #00b4ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "2.3rem",
              }}
            >
              Employee Management Dashboard
            </h1>
            <ul className="feature-list list-unstyled fs-5">
              <li>⚛️ Built with React</li>
              <li>🎨 Sleek, Responsive Design</li>
              <li>🧭 Streamlined Navigation</li>
              <li>📊 Data-driven Insights</li>
            </ul>
          </div>

          {/* RIGHT SECTION */}
          <div className="col-md-5 p-4 text-center">
            {!showLogin && !showRegister && (
              <>
                <h4 className="fw-bold text-dark mb-4">🚀 Let’s Get Started</h4>

                {/* ✅ Removed Enter Dashboard section */}

                <div className="d-flex justify-content-center flex-wrap gap-3">
                  {dashboardApps.map((apps) => (
                    <div
                      key={apps.applink}
                      className="d-flex flex-column align-items-center justify-content-center rounded-4"
                      style={{
                        height: "80px",
                        width: "100px",
                        background: "white",
                        color: "#007bff",
                        textDecoration: "none",
                        boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                        transition: "all 0.25s ease",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate(`/${apps.applink}`)}
                    >
                      {apps.applink === "register" ? (
                        <FcManager size={26} />
                      ) : (
                        <FcBusinessman size={26} />
                      )}
                      <p className="mt-1 mb-0 text-capitalize">
                        {apps.appname}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* INLINE LOGIN FORM */}
            {showLogin && (
              <div className="welcome-card">
                <LoginPage />
                <div className="text-center mt-3">
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => setShowLogin(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {/* INLINE REGISTER FORM */}
            {showRegister && (
              <div className="welcome-card">
                <RegisterPage />
                <div className="text-center mt-3">
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => setShowRegister(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default WelcomeApp;
