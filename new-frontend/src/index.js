import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";


import WelcomeApp from "./WelcomeApp";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./css/global.css";

import LoginPage from "./app_modules/auth/LoginPage";
import RegisterPage from "./app_modules/auth/RegisterPage";
import Mainpage from "./app_modules/dashboard/Mainpage";
import Graphpage from "./app_modules/dashboard/Graphpage";
import Landingpage from "./app_modules/dashboard/Landingpage";
import Employeepage from "./app_modules/dashboard/Employeepage";
import Aboutpage from "./app_modules/dashboard/Aboutpage";
import Employeedetailspage from "./app_modules/dashboard/Employeedetailspage";
import Apperrorpage from "./shares/Apperrorpage";

// ✅ Dummy pages for navigation
import SalesPage from "./app_modules/dashboard/SalesPage";
import InvoicePage from "./app_modules/dashboard/InvoicePage";
import PurchasePage from "./app_modules/dashboard/PurchasePage";

// ✅ Newly added pages
import ServicePage from "./app_modules/dashboard/ServicePage";
import ContactPage from "./app_modules/dashboard/ContactPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 🌐 Public Routes */}
        <Route path="/" element={<WelcomeApp />} />
        <Route path="/userportal" element={<LoginPage />} />
        <Route path="/userportal/register" element={<RegisterPage />} />

        {/* 📊 Dashboard Routes */}
        <Route path="/dashboard" element={<Mainpage />}>
          {/* ✅ Landingpage as default dashboard content */}
          <Route index element={<Landingpage />} />
          <Route path="employeelist" element={<Employeepage />} />
          <Route
            path="employeelist/singleuserdata/:id"
            element={<Employeedetailspage />}
          />
          <Route path="about" element={<Aboutpage />} />
          <Route path="mygraph" element={<Graphpage />} />
          <Route path="service" element={<ServicePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        {/* 🧾 Dummy Pages (top navbar direct access) */}
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/invoice" element={<InvoicePage />} />
        <Route path="/purchase" element={<PurchasePage />} />

        {/* 🚫 Fallback */}
        <Route path="*" element={<Apperrorpage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
