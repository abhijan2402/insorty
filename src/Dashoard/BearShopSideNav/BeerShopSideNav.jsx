import React from "react";
import Logo from "../../images/insorty.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { FaPowerOff } from "react-icons/fa";
import Swal from "sweetalert2";

const SideNav = () => {
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
    <>
      <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r sticky  left-0 sidenav">
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
        <div className="flex flex-col justify-between flex-1 mt-[12rem] md:mt-28">
          <nav>
            <li className="my-4">
              <NavLink
                to="/user/bearshop/dailyreport"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Daily Report / दैनिक रिपोर्ट
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/partners"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Partners / पार्टनर
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/branch"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Branch / ब्रांच
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/salary"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Salary / वेतन
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/payments"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Payments दुकान/बार पेमेंट
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/commision"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Commision / कमीशन
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/borrow"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Borrow / उधारी
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/finalreport"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Final report / हिसाब
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/selfbill"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Self Bill / दुकान बिल का फोर्मेट
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/outbill"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Out Bill / बाहर के बिल का फोर्मेट
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/extra"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Extra /राशन सब्जी आदि खरीद
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/maininvestment"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Main Investment / मुख्य इन्वेस्ट
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/stocklanding"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Stock Lending
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/allItems"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Stock and Add
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/sendFormat"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                All Partners
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
    </>
  );
};

export default SideNav;
