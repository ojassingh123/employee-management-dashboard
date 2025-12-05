// src/App.js
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./app_modules/auth/LoginPage";
import RegisterPage from "./app_modules/auth/RegisterPage";
import Employeepage from "./app_modules/dashboard/Employeepage";
import EmployeeDetailspage from "./app_modules/dashboard/Employeedetailspage";
import HomePage from "./app_modules/dashboard/HomePage";
import Contactpage from "./app_modules/dashboard/Contactpage";
import Landingpage from "./app_modules/dashboard/Landingpage";
import Dashboard from "./app_modules/dashboard/Dashboard";
import Aboutpage from "./app_modules/dashboard/Aboutpage";
import Servicepage from "./app_modules/dashboard/Servicepage";
import Apperrorpage from "./app_modules/shares/Apperrorpage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Landingpage />}>
          <Route index element={<Dashboard />} />
          <Route path="employeepage" element={<Employeepage />} />
          <Route path="singleuserdata/:id" element={<EmployeeDetailspage />} />
          <Route path="contact" element={<Contactpage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="service" element={<Servicepage />} />
        </Route>

        {/* 404 fallback */}
        <Route path="*" element={<Apperrorpage />} />
      </Routes>
    </Router>
  );
}

export default App;
