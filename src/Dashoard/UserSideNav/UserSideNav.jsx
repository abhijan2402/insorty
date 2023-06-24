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
      <div className="flex flex-col w-56 h-screen px-4 py-8 bg-white border-r sticky  left-0 sidenav">
        <div
          style={{
            left: "0",
            zIndex: " 1000",
          }}
          className="flex-col w-56 fixed px-4 md:mb-14 top-0 md:top-0 bg-white border-r flex "
        >
          <div className="text-3xl flex justify-center items-center font-semibold  text-white">
            <img src={Logo} alt="Instory Logo" style={{ width: "40%" }} />
          </div>
          <Link>
            <div>
              <h1 className="font-bold text-red-400 text-center uppercase">
                Name: {jwtDecode(localStorage.getItem("token")).role === "admin" ?  jwtDecode(localStorage.getItem("token")).shopName : jwtDecode(localStorage.getItem("token")).role ==='subadmin' ? jwtDecode(localStorage.getItem("token")).shopName : jwtDecode(localStorage.getItem("token")).name }
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

        <div className="flex flex-col justify-between flex-1 mt-[12rem] md:mt-[9rem] ">
          <nav>
            <li className="my-4">
              <NavLink
                to="/user/dailyreport"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                दैनिक रिपोर्ट
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/partnersMarge"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                पार्टनर
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/maininvestment"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                मुख्य इन्वेस्ट
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/branch"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                ब्रांच
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/borrow"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                पार्टी
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/salary"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                वेतन
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/stock"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                स्टॉक
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/stocklanding"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                स्टॉक जमा नामे
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/winebill"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                शराब बिल
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/commisionroute"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                कमीशन आदि
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

            <li className="my-4">
              <NavLink
                to="/user/finalreport"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                अंतिम रिपोर्ट
              </NavLink>
            </li>

            <li className="my-4">
              <NavLink
                to="/user/payments"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                दुकान पेमेंट
              </NavLink>
            </li>
            <li className="my-4">
              <NavLink
                to="/user/allItems"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                ब्रांच/पार्टी जोड़ें
              </NavLink>
            </li>
            <li className="my-4">
              <NavLink
                to="/user/previousloan"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
              पिछले ऋण
              </NavLink>
            </li>

            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
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
                localStorage.removeItem("firstFront");
                localStorage.removeItem("firstBack");
                localStorage.removeItem("purchases");
                localStorage.removeItem("mlForm");
                localStorage.removeItem("credit");
                localStorage.removeItem("expenses");
                localStorage.removeItem("paymentRecieved");
                localStorage.removeItem("borrow");
                localStorage.removeItem("rml");
                localStorage.removeItem("BeerForm");
                localStorage.removeItem("bhejan");
                localStorage.removeItem("drDate");
                localStorage.removeItem("creditTotal");
                localStorage.removeItem("salesMan");
                localStorage.removeItem("totalExpenses");
                localStorage.removeItem("totalFirstBack");
                localStorage.removeItem("totalPaymentsRecieved");
                localStorage.removeItem("rmlTotal");
                localStorage.removeItem("purchasesTotal");
                localStorage.removeItem("beerTotal");
                localStorage.removeItem("pichlaBakaya");
                localStorage.removeItem("commisionTotal");
                localStorage.removeItem("totalBorrow");
                localStorage.removeItem("beerFormTotal");
                localStorage.removeItem("udhaariTotal");
                localStorage.removeItem("mlFormTotal");
              }} to="/admin">To Admin</NavLink>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SideNav;
