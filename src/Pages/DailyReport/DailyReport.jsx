import React from "react";
import "./Style/DailyReport.scss";
import FristFrom from "./FrontDailyReport/FristFrom";
import SecondFrom from "./FrontDailyReport/SecondFrom";

const DailyReport = () => {
  return (
    <section>
      <div className="my-4">
        <h1 className="font-bold text-2xl">Daily Report / दैनिक रिपोर्ट </h1>
      </div>

      <div className="flex gap-4 justify-center items-center">
        <h1 className="font-bold text-2xl">सेल्समेन का नाम </h1>
        <h1 className="font-bold text-2xl">12/12/2022 </h1>
      </div>

      <div className="py-6">
        <form action="">
          <FristFrom></FristFrom>
          <div className="mt-4 flex gap-4">
            <button className="dailyReportBtn">ADD 5</button>
            <button className="dailyReportBtn">ADD 1</button>
          </div>
        </form>

        <div>
          <form action="">
            <SecondFrom></SecondFrom>
          </form>
        </div>

        <div className="mt-4">
          <button className="dailyReportBtnSubmit">Submit</button>
          <button className="dailyReportBtn">ADD 5</button>
          <button className="dailyReportBtn">फाईनल रिपोर्ट</button>
        </div>
      </div>
    </section>
  );
};

export default DailyReport;
