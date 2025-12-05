import React from "react";
import { FaTruckLoading, FaReceipt, FaWarehouse } from "react-icons/fa";

function PurchasePage() {
  const purchaseList = [
    { id: "PRC-9001", supplier: "SupplyOne Ltd", items: 24, cost: "$1,200", status: "Delivered" },
    { id: "PRC-9002", supplier: "GlobalMart", items: 18, cost: "$890", status: "Processing" },
    { id: "PRC-9003", supplier: "MegaTrade Inc", items: 40, cost: "$2,340", status: "Delivered" },
  ];

  return (
    <div
      className="container py-4"
      style={{
        background: "linear-gradient(180deg, #f8faff 0%, #eef4ff 100%)",
        minHeight: "100vh",
      }}
    >
      <h2 className="fw-bold text-primary mb-4 text-center">
        🛒 Purchase & Inventory
      </h2>

      <div className="row text-center mb-4">
        {[
          { icon: <FaWarehouse />, title: "Suppliers", value: "32" },
          { icon: <FaTruckLoading />, title: "Pending Deliveries", value: "5" },
          { icon: <FaReceipt />, title: "Monthly Purchases", value: "$8,760" },
        ].map((item, i) => (
          <div className="col-md-4 mb-3" key={i}>
            <div
              className="rounded shadow-sm p-4 bg-white"
              style={{ borderTop: "4px solid #0d6efd" }}
            >
              <div className="fs-3 mb-2 text-primary">{item.icon}</div>
              <h6 className="fw-bold">{item.title}</h6>
              <p className="fs-5 text-muted">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white fw-semibold">
          Purchase Orders
        </div>
        <div className="card-body">
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light">
              <tr>
                <th>Order ID</th>
                <th>Supplier</th>
                <th>Items</th>
                <th>Total Cost</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {purchaseList.map((order, i) => (
                <tr key={i}>
                  <td>{order.id}</td>
                  <td>{order.supplier}</td>
                  <td>{order.items}</td>
                  <td>{order.cost}</td>
                  <td>
                    <span
                      className={`badge bg-${
                        order.status === "Delivered" ? "success" : "warning"
                      }`}
                    >
                      {order.status}
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

export default PurchasePage;
