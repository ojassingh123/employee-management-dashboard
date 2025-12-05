import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for contacting us! (This is a demo form.)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="container py-4"
      style={{
        background: "linear-gradient(180deg, #f8faff 0%, #eef4ff 100%)",
        minHeight: "100vh",
      }}
    >
      <h2 className="fw-bold text-primary text-center mb-4">Contact Us</h2>
      <p className="text-muted text-center mb-5 fs-5">
        Have questions or feedback? We’d love to hear from you.
      </p>

      <div className="row justify-content-center align-items-start">
        {/* Contact Info */}
        <div className="col-md-4 mb-4">
          <div className="p-4 shadow-sm rounded-3 bg-white h-100">
            <h5 className="fw-bold mb-3 text-primary">Reach Us</h5>
            <p>
              <FaEnvelope className="me-2 text-primary" />
              support@employeedash.com
            </p>
            <p>
              <FaPhoneAlt className="me-2 text-primary" />
              +91 98765 43210
            </p>
            <p>
              <FaMapMarkerAlt className="me-2 text-primary" />
              2nd Floor, Tech Park, Varanasi
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-6 mb-4">
          <form
            onSubmit={handleSubmit}
            className="p-4 shadow-sm rounded-3 bg-white"
          >
            <div className="mb-3">
              <label className="form-label fw-semibold">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Message</label>
              <textarea
                name="message"
                className="form-control"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100 fw-semibold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
