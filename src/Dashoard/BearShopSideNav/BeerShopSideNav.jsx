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
    localStorage.clear();
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
          className="flex-col w-64 fixed px-4 md:mb-14 top-0 md:top-0 bg-white border-r flex "
        >
          <div className="text-3xl flex justify-center items-center font-semibold  text-white">
            <img src={Logo} alt="Instory Logo" style={{ width: "40%" }} />
          </div>
          <Link>
            <div>
              <h1 className="font-bold text-red-400 text-center uppercase">
                Name: {jwtDecode(localStorage.getItem("token")).role === "admin" ?  jwtDecode(localStorage.getItem("token")).shopName : jwtDecode(localStorage.getItem("token")).role ==='subadmin' ? jwtDecode(localStorage.getItem("token")).shopName : jwtDecode(localStorage.getItem("token")).name }
              </h1>
              <h1 className="font-bold text-center uppercase mt-2"> Type:- BAR</h1>
              <div>
                <h1 className="font-bold text-center uppercase mt-2">
                  {jwtDecode(localStorage.getItem("token")).role}
                </h1>
              </div>
            </div>
          </Link>
          <hr className="mt-4 mb-2" />
        </div>

        <div className="flex flex-col justify-between flex-1 mt-[12rem] md:mt-[9rem]">
          <nav>
            <li className="my-4">
              <NavLink
                to="/user/bearshop/dailyreport"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                 दैनिक रिपोर्ट
              </NavLink>
            </li>


           <li className="my-4">
              <NavLink
                to="/user/bearshop/partnersMarge"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                पार्टनर
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/maininvestment"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                मुख्य इन्वेस्ट
              </NavLink>
            </li>

            {/* <li className="my-4">
              <NavLink
                to="/user/bearshop/branch"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                ब्रांच
              </NavLink>
            </li> */}

            <li className="my-4">
              <NavLink
                to="/user/bearshop/borrow"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                पार्टी
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/salary"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                वेतन
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/stock"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                स्टॉक
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/stocklanding"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                स्टॉक जमा नामे

              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/winebill"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                शराब  बिल
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/commisionroute"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                कमीशन आदि
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/phonePay"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                फोन पे और आज भुगतान
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/cashReceive"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                अन्य से नकद प्राप्ति
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/finalreport"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                अंतिम रिपोर्ट
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/payments"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                बार पेमेंट
              </NavLink>
            </li>
            <li className="my-4">
              <NavLink
                to="/user/bearshop/allItems"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
               ब्रांच/पार्टी जोड़ें
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/bearshop/previousloan"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
               पिछले ऋण
              </NavLink>
            </li>


            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="commonBtn flex justify-center items-center"
            >
              <FaPowerOff />
              <span className="mx-4 font-medium">Logout</span>
            </button>

            <button
              className={
                jwtDecode(localStorage.getItem("token")).role === "admin"
                  ? "commonBtn flex justify-center items-center"
                  : "hidden"
              }
            >
              <NavLink onClick={()=>{
                
              }} to="/admin">To Admin</NavLink>
            </button>
            <button
              className={
                jwtDecode(localStorage.getItem("token")).role === "subadmin"
                  ? "commonBtn flex justify-center items-center"
                  : "hidden"
              }
            >
              <NavLink onClick={()=>{
                
              }} to="/subadmin">To Subadmin</NavLink>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideNav;
