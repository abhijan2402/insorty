import React from "react";
import MainInvestmentList from "../MainInvestmentList/MainInvestmentList";
import Refund from "../Refund/Refund";
import Reserve from "../Reserve/Reserve";

const MainInvestment = () => {
  return (
    <section className="my-2">
      <div className="title">
        <h2 className="font-bold text-[1.5rem]">मुख्य इन्वेस्ट</h2>
        <div className="divider my-2"></div>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>S.No</th>
                <th>ब्राण्ड/ Brand Name </th>
                <th>दिनांक / Date</th>
                <th>रकम/ price</th>
              </tr>
            </thead>
            <tbody>
              <MainInvestmentList></MainInvestmentList>
              <tr>
                <td></td>
                <td></td>
                <td className="commonText">Total</td>
                <td className="price">162,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <div>
          <h2 className="font-bold text-[1.5rem] my-2">
            रिफंड/रिकवरी विवरण/ Refund/Recovery Details
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>S.No</th>
                <th>रिफंड/रिकवरी विवरण/ Refund/Recovery Details </th>
                <th>दिनांक / Date</th>
                <th>रकम/ price</th>
              </tr>
            </thead>
            <tbody>
              <Refund></Refund>
              <tr>
                <td></td>
                <td></td>
                <td className="commonText">Total</td>
                <td className="price">162,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <div>
          <h2 className="font-bold text-[1.5rem] my-2">
            लाभ में से रिजर्व रकम /reserve amount out of profit
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>S.No</th>
                <th>विवरण/ Details</th>
                <th>माह / Month</th>
                <th>रकम/ price</th>
              </tr>
            </thead>
            <tbody>
              <Reserve></Reserve>
              <tr>
                <td></td>
                <td></td>
                <td className="commonText">Total</td>
                <td className="price">162,000</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td className="commonText">शेष इन्वेस्ट</td>
                <td className="price">662,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MainInvestment;
