import React from "react";
import SideNav from "../Dashoard/SideNav/SideNav";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import "./LayoutStyle.scss"

const DashboardLayout = () => {
  const [side, setSide] = useState(true);

  return (
    <>
      <div className="md:hidden block">
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
          <SideNav></SideNav>
        </div>
        <div className="md:w-[calc(100%-300px)] w-full DashboardLayoutOutlate ">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;