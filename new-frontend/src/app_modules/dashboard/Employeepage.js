import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Employeepage() {
  const [user, updateuser] = useState([]);

  const getallusers = async () => {
    try {
      const res = await axios.get("http://localhost:7800/allusers");
      updateuser(res.data?.alluser || []);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    getallusers();
  }, []);

  const userdelete = async (id) => {
    try {
      await axios.delete(`http://localhost:7800/userdelete/${id}`);
      getallusers();
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  return (
    <div className="container-fluid py-4" style={{ backgroundColor: "#f8f9fa" }}>
      <style>
        {`
          .table-container {
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0,0,0,0.05);
            padding: 20px;
          }

          .employee-table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.95rem;
          }

          .employee-table thead {
            background-color: #212529;
            color: white;
          }

          .employee-table th, .employee-table td {
            padding: 12px 14px;
            text-align: center;
            border-bottom: 1px solid #dee2e6;
          }

          .employee-table tr:hover {
            background-color: #f1f3f5;
          }

          .avatar {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            object-fit: cover;
          }

          .action-buttons {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 6px;
          }

          .btn-action {
            border: none;
            color: white;
            padding: 6px 10px;
            border-radius: 5px;
            font-size: 0.85rem;
            cursor: pointer;
            transition: background-color 0.2s ease-in-out;
          }

          .btn-view { background-color: #0d6efd; }
          .btn-edit { background-color: #ffc107; color: #212529; }
          .btn-delete { background-color: #dc3545; }

          .btn-view:hover { background-color: #0b5ed7; }
          .btn-edit:hover { background-color: #e0a800; }
          .btn-delete:hover { background-color: #bb2d3b; }

          h2 {
            font-weight: 600;
            color: #212529;
            margin-bottom: 25px;
          }
        `}
      </style>

      <div className="table-container">
        <h2 className="text-center mb-4">Employee Management</h2>
        {user.length === 0 ? (
          <p className="text-center text-muted">No employee records found.</p>
        ) : (
          <div className="table-responsive">
            <table className="employee-table">
              <thead>
                <tr>
                  <th>Avatar</th>
                  <th>Full Name</th>
                  <th>Emp ID</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>DOB</th>
                  <th>Password</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {user.map((u, index) => (
                  <tr key={u._id || index}>
                    <td>
                      <img
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${u.fullname}`}
                        alt="avatar"
                        className="avatar"
                      />
                    </td>
                    <td>{u.fullname}</td>
                    <td className="text-muted small">{u._id}</td>
                    <td>{u.email}</td>
                    <td>{u.gender}</td>
                    <td>{u.dob}</td>
                    <td>{u.pass}</td>
                    <td>
                      <div className="action-buttons">
                        <Link to={`singleuserdata/${u._id}`}>
                          <button className="btn-action btn-view">View</button>
                        </Link>
                        <button className="btn-action btn-edit">Edit</button>
                        <button
                          className="btn-action btn-delete"
                          onClick={() => userdelete(u._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Employeepage;
