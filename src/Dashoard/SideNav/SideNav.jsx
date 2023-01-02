import React from "react";
import Logo from "../../images/insorty.png";
import { Link } from "react-router-dom";
import { FaChartLine, FaFileInvoiceDollar, FaPowerOff } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { TbParking } from "react-icons/tb";
import { AiOutlineStock } from "react-icons/ai";

const SideNav = () => {
  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r ">
      <div className="text-3xl flex justify-center items-center font-semibold  text-white">
        <img src={Logo} alt="Instory Logo" style={{ width: "60%" }} />
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <Link
            className="flex items-center px-4 py-2  bg-gray-100 rounded-md "
            to="/dailyReport"
          >
            <FaChartLine />
            <span className="mx-4 font-medium">
              Daily Report / दैनिक रिपोर्ट
            </span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 hover:text-gray-700"
            to="/"
          >
            <FaFileInvoiceDollar />
            <span className="mx-4 font-medium">Investments</span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 hover:text-gray-700"
            to="/"
          >
            <TbParking />
            <span className="mx-4 font-medium">Parterns</span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 hover:text-gray-700"
            to="/"
          >
            <AiOutlineStock />
            <span className="mx-4 font-medium">Stock / स्टॉक</span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 hover:text-gray-700"
            to="/"
          >
            <MdPayment />
            <span className="mx-4 font-medium">Party Payment</span>
          </Link>

          <hr className="mt-4 mb-2" />

          <Link>
            <div>
              <h1 className="font-bold text-red-400">Jai Wine Shop</h1>
              <p>A4 ss colony Merta city Raj. </p>
            </div>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 hover:text-gray-700"
            to="/"
          >
            <FaPowerOff />
            <span className="mx-4 font-medium">Logout</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
