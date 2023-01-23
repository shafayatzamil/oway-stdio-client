import React from "react";
import { Link, Outlet } from "react-router-dom";
import companyLogo from "../../assets/images/oway stdio logo.png";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile ">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <h1 className="font-bold  text-3xl">
            {" "}
            Welcome to oway stdio dashboard
          </h1>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>

          <ul className="menu p-4 overflow-y-auto w-44 bg-gray-100 mr-6  font-semibold relative">
            <li>
              {" "}
              <Link to="/">
                <div className="flex">
                  <img src={companyLogo} className="w-6 -mr-2" alt="" />
                  <h2 className="w-32"> Oway Studio</h2>
                </div>
              </Link>
            </li>
            <li>
              <Link to="achivement">Achievements</Link>
            </li>

            <li>
              <Link to="/Presence">Presence</Link>
            </li>
            <li>
              <Link to="Services">Services</Link>
            </li>
            <li>
              <Link to="Projects">Projects</Link>
            </li>
            <li>
              <Link to="Clients">Clients</Link>
            </li>
            <li>
              <Link to="Blog">Blog</Link>
            </li>
            <li>
              <Link to="Teammates">Teammates</Link>
            </li>

            <div className="absolute  bottom-4 ">
              <button className="btn bg-[#2152D9] btn-sm w-36 lowercase">
                Log out{" "}
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
