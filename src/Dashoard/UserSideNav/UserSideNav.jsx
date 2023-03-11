import React from "react";
import Logo from "../../images/insorty.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { FaPowerOff } from "react-icons/fa";

const SideNav = () => {
  let activeStyle = {
    background: "gray",
    color: "white",
    padding: "6px",
    borderRadius: "6px",
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
                {jwtDecode(localStorage.getItem("token")).name}
              </h1>
            </div>
          </Link>
          <hr className="mt-4 mb-2" />
        </div>

        <div className="flex flex-col justify-between flex-1 mt-32 md:mt-28">
          <nav>
            <li className="my-4">
              <NavLink
                to="/user/dailyreport"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Daily Report / दैनिक रिपोर्ट
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/partners"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Partners / पार्टनर
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/branch"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Branch / ब्रांच
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/salary"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Salary / वेतन
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/payments"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Payments दुकान/बार पेमेंट
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/commisionroute"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Commision / कमीशन
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/borrow"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Borrow / उधारी
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/finalreport"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Final report / हिसाब
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/selfbill"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Self Bill / दुकान बिल का फोर्मेट
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/outbill"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Out Bill / बाहर के बिल का फोर्मेट
              </NavLink>
            </li>

            {/* <li className="my-4">
              <NavLink
                to="/user/extra"
                style={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                Extra /राशन सब्जी आदि खरीद
              </NavLink>
            </li> */}

            <li className="my-4">
              <NavLink
                to="/user/maininvestment"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Main Investment / मुख्य इन्वेस्ट
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/stocklanding"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Stock Lending
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/allItems"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Add Items
              </NavLink>
            </li>
            <li className="my-4">
              <NavLink
                to="/user/stock"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Stock
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/sendFormat"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                All Partners
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/phonePay"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                फोन पे और आज भुगतान
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/cashReceive"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                अन्य से नकद प्राप्ति
              </NavLink>
            </li>

            <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 ">
              <FaPowerOff />
              <span className="mx-4 font-medium">Logout</span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideNav;
