import React from "react";
import BackFristFrom from "./BackFristForm";
import "../Style/DailyReport.scss";
import RmlFrom from "./RmlFrom";

const BackDailyReport = () => {
  return (
    <>
      <section className="mx-2">
        <div className="my-4">
          <h1 className="font-bold text-2xl">Daily Report / दैनिक रिपोर्ट </h1>
        </div>
        <div className="flex gap-4 ">
          <h1 className="font-bold ">सेल्समेन का नाम </h1>
          <h1 className="font-bold ">12/12/2022 </h1>
        </div>

        <div className="py-6">
          <form action="">
            <BackFristFrom></BackFristFrom>
            <div className="mt-4 flex gap-4">
              <button className="dailyReportBtn">ADD 5</button>
              <button className="dailyReportBtn">ADD 1</button>
            </div>
          </form>
        </div>

        <div className="py-6">
          <form action="">
            <h1 className="my-4">
              <span className="font-bold titleText">RML / आरएमएल</span>
            </h1>
            <RmlFrom></RmlFrom>
            <div className="mt-4 flex gap-4">
              <button className="dailyReportBtn">ADD 5</button>
              <button className="dailyReportBtn">ADD 1</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default BackDailyReport;
