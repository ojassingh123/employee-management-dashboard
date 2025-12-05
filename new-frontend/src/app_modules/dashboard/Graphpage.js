import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

// #region Sample data
const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];
// #endregion

function Graphpage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1f2937, #111827)",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "70%",
          background: "#1e293b",
          borderRadius: "20px",
          boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
          padding: "20px",
        }}
      >
        <h2
          style={{
            color: "#f9fafb",
            textAlign: "center",
            marginBottom: "20px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            letterSpacing: "0.5px",
          }}
        >
          📊 Data Overview
        </h2>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="name" stroke="#cbd5e1" />
            <YAxis stroke="#cbd5e1" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "10px",
                color: "#f8fafc",
              }}
            />
            <Legend wrapperStyle={{ color: "#e2e8f0" }} />
            <Bar
              dataKey="pv"
              fill="#60a5fa"
              activeBar={<Rectangle fill="#3b82f6" stroke="blue" />}
            />
            <Bar
              dataKey="uv"
              fill="#f472b6"
              activeBar={<Rectangle fill="#ec4899" stroke="pink" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Graphpage;
