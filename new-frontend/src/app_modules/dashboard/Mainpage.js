import React, { Fragment } from "react";
import Appheaderpage from "../../shares/Appheaderpage";
import Appsidenavbar from "../../shares/Appsidenavbar";
import Appfooterpage from "../../shares/Appfooterpage";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";

function Mainpage() {
  return (
    <Fragment>
      <Appheaderpage />
      <div className="dashboard-layout">
        <aside className="sidebar-modern">
          <Appsidenavbar />
        </aside>
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
      <Appfooterpage />
    </Fragment>
  );
}

export default Mainpage;
