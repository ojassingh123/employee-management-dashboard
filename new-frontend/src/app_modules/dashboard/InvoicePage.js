import React from "react";
import { FaFileInvoiceDollar, FaUserTie, FaCalendarAlt } from "react-icons/fa";

function InvoicePage() {
  const invoices = [
    { id: "INV-1001", client: "Tech Corp", amount: "$2,400", date: "2025-11-01", status: "Paid" },
    { id: "INV-1002", client: "BlueSky Ltd", amount: "$3,150", date: "2025-11-03", status: "Pending" },
    { id: "INV-1003", client: "NextGen", amount: "$1,875", date: "2025-11-05", status: "Paid" },
  ];

  return (
    <div
      className="container py-4"
      style={{
        background: "linear-gradient(180deg, #f8faff 0%, #eef4ff 100%)",
        minHeight: "100vh",
      }}
    >
      <h2 className="fw-bold text-primary mb-4 text-center">🧾 Invoice Management</h2>

      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white fw-semibold">
          Recent Invoices
        </div>
        <div className="card-body">
          <table className="table table-hover text-center align-middle">
            <thead className="table-light">
              <tr>
                <th>Invoice ID</th>
                <th>Client</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv, i) => (
                <tr key={inv.id}>
                  <td>{inv.id}</td>
                  <td>
                    <FaUserTie className="me-2 text-primary" />
                    {inv.client}
                  </td>
                  <td>{inv.amount}</td>
                  <td>
                    <FaCalendarAlt className="me-2 text-secondary" />
                    {inv.date}
                  </td>
                  <td>
                    <span
                      className={`badge bg-${
                        inv.status === "Paid" ? "success" : "warning"
                      }`}
                    >
                      {inv.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-muted text-center mt-4">
        * Dummy data for display purposes only.
      </p>
    </div>
  );
}

export default InvoicePage;
