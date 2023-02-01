import React from "react";
import Logo from "../../images/insorty.png";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaCodeBranch,
  FaDonate,
  FaFileContract,
  FaHandHoldingUsd,
  FaHandsHelping,
  FaPowerOff,
  FaRupeeSign,
} from "react-icons/fa";

const WineShopSideNav = () => {
  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r sticky  left-0 ">
      <div className="text-3xl flex justify-center items-center font-semibold  text-white">
        <img src={Logo} alt="Instory Logo" style={{ width: "60%" }} />
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/bearshop/partners"
          >
            <FaHandsHelping />
            <span className="mx-4 font-medium">Partners / पार्टनर</span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/bearshop/branch"
          >
            <FaCodeBranch />
            <span className="mx-4 font-medium">Branch / ब्रांच</span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/bearshop/salary"
          >
            <FaRupeeSign />
            <span className="mx-4 font-medium">Salary / वेतन</span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/bearshop/payments"
          >
            <FaCalendarAlt />
            <span className="mx-4 font-medium">Payments दुकान/बार पेमेंट </span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/bearshop/commision"
          >
            <FaDonate />
            <span className="mx-4 font-medium">Commision / कमीशन </span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/bearshop/borrow"
          >
            <FaHandHoldingUsd />
            <span className="mx-4 font-medium">Borrow / उधारी </span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/bearshop/finalreport"
          >
            <FaFileContract />
            <span className="mx-4 font-medium">Final report / हिसाब</span>
          </Link>

          {/* ============= */}

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/bearshop/selfbill"
          >
            <FaFileContract />
            <span className="mx-4 font-medium">
              Self Bill / दुकान बिल का फोर्मेट
            </span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/bearshop/outbill"
          >
            <FaFileContract />
            <span className="mx-4 font-medium">
              Out Bill / बाहर के बिल का फोर्मेट
            </span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/bearshop/extra"
          >
            <FaFileContract />
            <span className="mx-4 font-medium">Extra /राशन सब्जी आदि खरीद</span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/bearshop/englishbear"
          >
            <FaFileContract />
            <span className="mx-4 font-medium">English Beer अंग्रेजी शराब</span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/bearshop/maininvestment"
          >
            <FaFileContract />
            <span className="mx-4 font-medium">
              Main Investment / मुख्य इन्वेस्ट
            </span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md   hover:bg-gray-800 hover:text-gray-200 "
            to="/user/bearshop/stocklanding"
          >
            <FaFileContract />
            <span className="mx-4 font-medium">Stock Lending</span>
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

export default WineShopSideNav;
