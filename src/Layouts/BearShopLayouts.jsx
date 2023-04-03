import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import "./LayoutStyle.scss";
import jwtDecode from "jwt-decode";
import BearShopSideNav from "../Dashoard/BearShopSideNav/BeerShopSideNav";

const BearShopLayout = () => {
  const [side, setSide] = useState(true);
  const token = localStorage.getItem("token");

  // if (!token) {
  //   return <Navigate to="/login" replace />;
  // }

  // if (token) {
  //   const decode = jwtDecode(token);
  //   if (decode.role !== "shop") {
  //     return <Navigate to="/login" replace />;
  //   }
  // }

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

      <div className="flex gap-2">
        <div className={side ? "lg:w-[300px] md:w-48 w-full" : "hidden"}>
          <BearShopSideNav></BearShopSideNav>
        </div>
        <div className="md:w-[calc(100%-300px)] w-full DashboardLayoutOutlate ">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default BearShopLayout;
