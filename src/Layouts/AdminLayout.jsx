import React from "react";
import AdminSideNav from "../Dashoard/AdminSideNav/AdminSideNav";
import { Navigate, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import "./LayoutStyle.scss";

const AdminLayout = () => {
  const [side, setSide] = useState(true);
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (token) {
    const decode = jwtDecode(token);
    if (decode.role !== "admin") {
      return <Navigate to="/login" replace />;
    }
  }

  return (
    <>
      <div className="md:hidden block"
        style={{
          position: "fixed",
          zIndex: "99999999999999999999",
        }}
      >
        {!side ? (
          <button className="text-2xl p-4 " onClick={() => setSide(true)}>
            <FaBars></FaBars>
          </button>
        ) : (
          <button className=" text-2xl p-4 " onClick={() => setSide(false)}>
            <ImCross></ImCross>
          </button>
        )}
      </div>

      <div className="md:flex gap-2">
        <div className={side ? "lg:w-[300px] md:w-48 w-full md:block hidden" : "hidden"}>
          <AdminSideNav></AdminSideNav>
        </div>
        <div className="md:w-[calc(100%-300px)] w-full DashboardLayoutOutlate ">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
