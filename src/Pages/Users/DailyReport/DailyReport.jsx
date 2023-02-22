import React from "react";
import "./Style/DailyReport.scss";
import { Link } from "react-router-dom";

const DailyReport = () => {
  return (
    <section className="mx-2">
      <div className="my-4">
        <h1 className="font-bold text-2xl">Daily Report / दैनिक रिपोर्ट </h1>
      </div>

      

      <div className="divider"></div>

      <div className="flex gap-4">
        <Link
          to="/user/dailyreport/front"
          className="btn btn-error text-white font-bold"
        >
          Front
        </Link>
        <Link
          to="/user/dailyreport/back"
          className="btn btn-error text-white font-bold"
        >
          Back
        </Link>

        <Link
          to="/user/frontdailyreport/details"
          className="btn btn-error text-white font-bold"
        >
          All Details
        </Link>
      </div>
    </section>
  );
};

export default DailyReport;
