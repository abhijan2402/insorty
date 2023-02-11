import React from "react";
import { Link } from "react-router-dom";
import FristFormBack from "../FirstFormBack/FristFormBack";

const BackDetailReport = () => {
  return (
    <section className="my-4">
      <div className="flex gap-6 items-center ">
        <h1>Back Details Report</h1>
        <Link
          to="/user/frontdailyreport/details"
          className="btn btn-error text-white font-bold"
        >
          Front Details Report
        </Link>
      </div>
      <div className="divider"></div>

      <div
        className="overflow-x-auto m-4 p-4 "
      >
        <FristFormBack></FristFormBack>
      </div>
    </section>
  );
};

export default BackDetailReport;
