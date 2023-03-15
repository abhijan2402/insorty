import React from "react";
import Logo from "../../images/insorty.png";
import { Link, NavLink } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import jwtDecode from "jwt-decode";
import Swal from "sweetalert2";

const SubAdminSideNav = () => {
  let activeStyle = {
    background: "gray",
    color: "white",
    padding: "6px",
    borderRadius: "6px",
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location = "/";
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logout Successfully",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };


  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r sidenav">
      <div
        style={{
          left: "0",
          zIndex: " 1000",
        }}
        className="flex-col w-64 fixed px-4 md:mb-10 top-0 md:top-0 bg-white border-r flex "
      >
        <div className="text-3xl flex justify-center items-center font-semibold  text-white">
          <img src={Logo} alt="Instory Logo" style={{ width: "40%" }} />
        </div>
        <Link>
          <div>
            <h1 className="font-bold text-red-400 text-center uppercase">
              Name: {jwtDecode(localStorage.getItem("token")).name}
            </h1>
            <div>
              <h1 className="font-bold text-center uppercase mt-2">
                {jwtDecode(localStorage.getItem("token")).role}
              </h1>
            </div>
          </div>
        </Link>
        <hr className="mt-4 mb-2" />
      </div>

      <div className="flex flex-col justify-between mt-[12rem] flex-1 md:mt-28">
        <nav>
          <li className="my-4">
            <NavLink
              to="/subadmin/createuser"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Create User
            </NavLink>
          </li>

          <li className="my-4">
            <NavLink
              to="/subadmin/maneguser"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Manage User
            </NavLink>
          </li>

          <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            >
              <FaPowerOff />
              <span className="mx-4 font-medium">Logout</span>
            </button>
        </nav>
      </div>
    </div>
  );
};

export default SubAdminSideNav;
