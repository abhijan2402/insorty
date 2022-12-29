import React from "react";
import SideNav from "../Dashoard/SideNav/SideNav";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";

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

      <div className="flex">
        <div className={side ? "lg:w-[340px] md:w-48 w-full" : "hidden"}>
          <SideNav></SideNav>
        </div>
        <div className="w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
