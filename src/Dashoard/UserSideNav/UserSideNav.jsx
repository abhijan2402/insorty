import React from "react";
import Logo from "../../images/insorty.png";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaChartLine,
  FaCodeBranch,
  FaDonate,
  FaFileContract,
  FaHandHoldingUsd,
  FaHandsHelping,
  FaPowerOff,
  FaRupeeSign,
} from "react-icons/fa";

const SideNav = () => {
  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r sticky  left-0 ">
      <div className="text-3xl flex justify-center items-center font-semibold  text-white">
        <img src={Logo} alt="Instory Logo" style={{ width: "60%" }} />
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <Link
            className="flex items-center px-4 py-2  bg-gray-100 rounded-md "
            to="/user/dailyreport"
          >
            <FaChartLine />
            <span className="mx-4 font-medium">
              Daily Report / दैनिक रिपोर्ट
            </span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/partners"
          >
            <FaHandsHelping />
            <span className="mx-4 font-medium">Partners / पार्टनर</span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/branch"
          >
            <FaCodeBranch />
            <span className="mx-4 font-medium">Branch / ब्रांच</span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/salary"
          >
            <FaRupeeSign />
            <span className="mx-4 font-medium">Salary / वेतन</span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/payments"
          >
            <FaCalendarAlt />
            <span className="mx-4 font-medium">Payments दुकान/बार पेमेंट </span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/commision"
          >
            <FaDonate />
            <span className="mx-4 font-medium">Commision / कमीशन </span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/borrow"
          >
            <FaHandHoldingUsd />
            <span className="mx-4 font-medium">Borrow / उधारी </span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/finalreport"
          >
            <FaFileContract />
            <span className="mx-4 font-medium">Final report / हिसाब</span>
          </Link>

          {/* ============= */}

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/selfbill"
          >
            <FaFileContract />
            <span className="mx-4 font-medium">
              Self Bill / दुकान बिल का फोर्मेट
            </span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/outbill"
          >
            <FaFileContract />
            <span className="mx-4 font-medium">
              Out Bill / बाहर के बिल का फोर्मेट
            </span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/extra"
          >
            <FaFileContract />
            <span className="mx-4 font-medium">Extra /राशन सब्जी आदि खरीद</span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/englishbear"
          >
            <FaFileContract />
            <span className="mx-4 font-medium">English Beer अंग्रेजी शराब</span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/maininvestment"
          >
            <FaFileContract />
            <span className="mx-4 font-medium">
              Main Investment / मुख्य इन्वेस्ट
            </span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/stocklanding"
          >
            <FaFileContract />
            <span className="mx-4 font-medium">Stock Lending</span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/allItems"
          >
            <FaFileContract />
            <span className="mx-4 font-medium">All </span>
          </Link>

          {/* ============= */}

          <hr className="mt-4 mb-2" />

          <Link>
            <div>
              <h1 className="font-bold text-red-400">Jai Wine Shop</h1>
              <p>A4 ss colony Merta city Raj. </p>
            </div>
          </Link>

          <Link className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 ">
            <FaPowerOff />
            <span className="mx-4 font-medium">Logout</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
