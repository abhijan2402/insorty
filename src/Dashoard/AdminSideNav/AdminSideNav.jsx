import React from "react";
import Logo from "../../images/insorty.png";
import { Link, NavLink } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";

const AdminSideNav = () => {

  let activeStyle = {
    background: "gray",
    color: "white",
    padding: "6px",
    borderRadius: "6px",
  };

  return (
    <>
      <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r sidenav">
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: " 1000",
          }}
          className="flex flex-col w-64  px-4 mb-10  bg-white border-r "
        >

          <div className="text-3xl flex justify-center items-center font-semibold  text-white">
            <img src={Logo} alt="Instory Logo" style={{ width: "40%" }} />
          </div>
          <Link>
            <div>
              <h1 className="font-bold text-red-400">Jai Wine Shop</h1>
              <p>A4 ss colony Merta city Raj. </p>
            </div>
          </Link>
          <hr className="mt-4 mb-2" />
        </div>


        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <li className="my-4">
              <NavLink
                to="/admin"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Subadmin
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/admin/userList"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Users
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/admin/shopList"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Shop
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/admin/userList"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Users
              </NavLink>
            </li>

            <hr className="mt-4 mb-2" />

            <Link>
              <div>
                <h1 className="font-bold text-red-400">Jai Wine Shop</h1>
                <p>A4 ss colony Merta city Raj. </p>
              </div>
            </Link>

            <Link
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
              to="/"
            >
              <FaPowerOff />
              <span className="mx-4 font-medium">Logout</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default AdminSideNav;
