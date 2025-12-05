import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      toast.warn("Email and password cannot be blank", { position: "top-center" });
      return;
    }

    try {
      const res = await axios.post("http://localhost:7800/userlogin", {
        email,
        pass: password,
      });
      const status = res.data.status;

      if (status === 440) toast.error("Invalid password", { position: "top-center" });
      else if (status === 421) toast.warning("User not found", { position: "top-center" });
      else if (status === 221 || status === 200) {
        toast.success("Login successful!", { position: "top-center" });
        setTimeout(() => navigate("/dashboard"), 1200);
      } else toast.info("Unexpected server response", { position: "top-center" });
    } catch {
      toast.error("Server error! Please try again later.", { position: "top-center" });
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h4 className="fw-bold text-primary text-center mb-3">Welcome Back 👋</h4>
      <p className="text-muted text-center mb-4">Please login to access your dashboard</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            type="email"
            className="form-control rounded-3 shadow-sm"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Password</label>
          <input
            type="password"
            className="form-control rounded-3 shadow-sm"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 fw-semibold py-2 rounded-3">
          Login
        </button>

        <div className="text-center mt-3">
          <Link to="/userportal/register" className="text-decoration-none">
            Register Now
          </Link>
        </div>
      </form>

      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default LoginPage;
