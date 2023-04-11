import React from "react";
import "./Style/DailyReport.scss";
import { Link } from "react-router-dom";

const DailyReport = () => {
  return (
    <section className="mx-2">
      <div className="flex flex-col justify-center items-center">
        <div className="my-4">
          <h1 className="font-bold text-2xl">Daily Report / दैनिक रिपोर्ट </h1>
        </div>
        <div className="flex gap-4">
        <h1 className="font-bold ">सेल्समेन का नाम </h1>
        <h1 className="font-bold ">12/12/2022 </h1>
        </div>
      </div>

      <div className="divider"></div>

      <div className="flex gap-4">
        <Link to="/user/bearshop/dailyreport/front" className="commonBtn">
          Front
        </Link>
        <Link to="/user/bearshop/dailyreport/back" className="commonBtn">
          Back
        </Link>

      </div>
    </section>
  );
};

export default DailyReport;
