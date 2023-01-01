import React from "react";
import "../Style/DailyReport.scss";
import RmlFrom from "./RmlForm/RmlFrom";
import { Link } from "react-router-dom";
import FristFormBack from "./FristFormBack/BackFristForm";
import PurchaseOutSideFrom from "./PurchaseOutSideForm/PurchaseOutSideFrom";
import CommissionForm from "./CommissonForm/CommissionForm";
import CashReciveForm from "./CashReciveForm/CashReciveForm";
import ShippingForm from "./InflowBorrowingBack/ShippingForm/ShippingForm";
import InflowBorrowingRML from "./InflowBorrowingBack/InflowBorrowingRML/InflowBorrowingRML";
import CreditDabitForm from "./InflowBorrowingBack/CraditDabitForm.jsx/CreditDabitForm";
import FinalReport from "./FinalReport/FinalReport";
import Comment from "./Comment/Comment";

const BackDailyReport = () => {
  return (
    <>
      <section className="mx-2">
        <div className="my-4 flex gap-4 items-center">
          <h1 className="font-bold text-2xl">Daily Report / दैनिक रिपोर्ट </h1>

          <div className="my-4">
            <Link
              to="/forntDailyReport"
              className="btn btn-error text-white font-bold"
            >
              Front
            </Link>
          </div>
        </div>

        <div className="flex gap-4 ">
          <h1 className="font-bold ">सेल्समेन का नाम </h1>
          <h1 className="font-bold ">12/12/2022 </h1>
        </div>

        <div className="py-6">
          <form action="">
            <FristFormBack></FristFormBack>
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

        <div className="py-6">
          <form action="">
            <h1 className="my-4">
              <span className="font-bold titleText">
                अंग्रेजी/बीयर/देशी/RML की आमद (खरीद बाहर से)
              </span>
            </h1>
            <PurchaseOutSideFrom></PurchaseOutSideFrom>
            <div className="mt-4 flex gap-4 mx-4">
              <button className="dailyReportBtn">ADD 5</button>
              <button className="dailyReportBtn">ADD 1</button>
            </div>
          </form>
        </div>

        <div className="py-6">
          <form action="">
            <h1 className="my-4">
              <span className="font-bold titleText">
                कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि
              </span>
            </h1>
            <CommissionForm></CommissionForm>
            <div className="mt-4 flex gap-4 mx-4">
              <button className="dailyReportBtn">ADD 5</button>
              <button className="dailyReportBtn">ADD 1</button>
            </div>
          </form>
        </div>

        <div className="py-6">
          <form action="">
            <h1 className="my-4">
              <span className="font-bold titleText">
                पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति
              </span>
            </h1>
            <CashReciveForm></CashReciveForm>
            <div className="mt-4 flex gap-4 mx-4">
              <button className="dailyReportBtn">ADD 5</button>
              <button className="dailyReportBtn">ADD 1</button>
            </div>
          </form>
        </div>

        <div className="py-6">
          <form action="">
            <h1 className="my-4">
              <span className="font-bold titleText">
                अंग्रेजी/बीयर/देशी/RML का भेजान
              </span>
            </h1>
            <ShippingForm></ShippingForm>
            <div className="mt-4 flex gap-4 mx-4">
              <button className="dailyReportBtn">ADD 5</button>
              <button className="dailyReportBtn">ADD 1</button>
            </div>
          </form>
        </div>

        <div className="py-6">
          <form action="">
            <h1 className="my-4">
              <span className="font-bold titleText">
                अंग्रेजी/बीयर/देशी/RML की आमद (उधारी)
              </span>
            </h1>
            <InflowBorrowingRML></InflowBorrowingRML>
            <div className="mt-4 flex gap-4 mx-4">
              <button className="dailyReportBtn">ADD 5</button>
              <button className="dailyReportBtn">ADD 1</button>
            </div>
          </form>
        </div>

        <div className="py-6">
          <form action="">
            <h1 className="my-4">
              <span className="font-bold titleText">उधारी/नामे</span>
            </h1>
            <CreditDabitForm></CreditDabitForm>
            <div className="mt-4 flex gap-4 mx-4">
              <button className="dailyReportBtn">ADD 5</button>
              <button className="dailyReportBtn">ADD 1</button>
            </div>
          </form>
        </div>
        <div className="py-6">
          <form action="">
            <h1 className="my-4">
              <span className="font-bold titleText">फाईनल रिपोर्ट</span>
            </h1>
            <FinalReport></FinalReport>
          </form>
        </div>

        <div className="py-6">
          <form action="">
            <h1 className="my-4">
              <span className="font-bold titleText">रफ जगह</span>
            </h1>
            <Comment></Comment>
            <div className="mt-4 flex gap-4 mx-4">
              <button className="dailyReportBtn" type="submit">
                Submit
              </button>
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
