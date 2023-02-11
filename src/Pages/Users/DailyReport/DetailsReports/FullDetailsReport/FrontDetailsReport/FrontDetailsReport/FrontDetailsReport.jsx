import React from "react";
import { Link } from "react-router-dom";

const FrontDetailsReport = () => {
  return (
    <section className="my-4">
      <div className="flex gap-6 items-center my-4">
        <h2 className="font-bold text-xl text-gray-800">
          Front Details Report
        </h2>

        <Link
          to="/user/dailyreport/details"
          className="btn btn-error text-white font-bold"
        >
          Back Details Report
        </Link>
      </div>
      <div className="divider"></div>
    </section>
  );
};

export default FrontDetailsReport;
