import React from "react";
import FristFrom from "./FristFrom";
import SecondFrom from "./SecondFrom";

const FronteDailyReport = () => {
  return (
    <section className="mx-2">
      <div className="my-4">
        <h1 className="font-bold text-2xl">Daily Report / दैनिक रिपोर्ट </h1>
      </div>
      <div className="flex gap-4 ">
        <h1 className="font-bold ">सेल्समेन का नाम </h1>
        <h1 className="font-bold ">12/12/2022 </h1>
      </div>

      <div className="py-6">
        <form>
          <FristFrom></FristFrom>
          <div className="mt-4 flex gap-4">
            <button className="dailyReportBtn">ADD 5</button>
            <button className="dailyReportBtn">ADD 1</button>
          </div>
        </form>
        <div className="mt-6">
          <form>
            <SecondFrom></SecondFrom>
          </form>
        </div>

        <div className="mt-4 flex gap-4">
          <button className="dailyReportBtnSubmit">Submit</button>
          <button className="dailyReportBtn">ADD 1</button>
        </div>
      </div>
    </section>
  );
};

export default FronteDailyReport;
