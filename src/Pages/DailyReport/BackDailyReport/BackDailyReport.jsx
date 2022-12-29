import React from "react";
import BackFristFrom from "./BackFristForm";
import "../Style/DailyReport.scss";

const BackDailyReport = () => {
  return (
    <>
      <section>
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
          </form>
        </div>
      </section>
    </>
  );
};

export default BackDailyReport;
