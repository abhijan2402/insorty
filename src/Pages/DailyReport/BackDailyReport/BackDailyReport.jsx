import React, { useState } from "react";
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
import AddOneFristFromBack from "./FristFormBack/AddOneFristFromBack/AddOneFristFromBack";

const BackDailyReport = () => {
  // ======================== add five in frist form ========================
  const addFiveInFristFormObj = {
    brandName: "",
    averageRate: "",
    startingStock: "",
    incomingPurchase: "",
    buyRate: "",
    incomePurchase: "",
    purchaseRate: "",
    inflowCredit: "",
    sending: "",
    sumRemainder: "",
    closingStock: "",
    sales: "",
    mainRate: "",
    total: "",
    grandTotal: "",
  };

  const [addFiveInFristForm, setAddFiveInFristForm] = useState([
    addFiveInFristFormObj,
  ]);

  const addFiveInFristFormHandler = () => {
    setAddFiveInFristForm([...addFiveInFristForm, addFiveInFristFormObj]);
  };
  // ======================== add five in frist form ========================

  // ======================== add One in frist form ========================
  const addOneInFristFormObj = {
    brandName: "",
    averageRate: "",
    startingStock: "",
    incomingPurchase: "",
    buyRate: "",
    incomePurchase: "",
    purchaseRate: "",
    inflowCredit: "",
    sending: "",
    sumRemainder: "",
    closingStock: "",
    sales: "",
    mainRate: "",
    total: "",
    grandTotal: "",
  };

  const [addOneInFristForm, setAddOneInFristForm] = useState([
    addOneInFristFormObj,
  ]);

  const addOneInFristFormHandler = () => {
    setAddOneInFristForm([...addOneInFristForm, addOneInFristFormObj]);
  };

  // ======================== add One in frist form ========================

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
          <div>
            <form>
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>S.no</th>
                      <th>Brand Name/ ब्राण्ड</th>
                      <th>Average Rate</th>
                      <th>प्रारम्भिक स्टॉक</th>
                      <th>आमद (खरीद)-दु.</th>
                      <th>खरीद रेट - दु</th>
                      <th>आमद (खरीद)-बा.</th>
                      <th>खरीद रेट - बा.</th>
                      <th>आमद (उधारी)</th>
                      <th>भेजान</th>
                      <th>योग/शेष</th>
                      <th>अन्तिम स्टॉक</th>
                      <th>बिक्री</th>
                      <th>रेट</th>
                      <th>योग</th>
                      <th>कुल योग</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>
                        <div className="form-control">
                          <input
                            type="text"
                            name="brandName"
                            className="dailyReportInput "
                            style={{
                              marginTop: "2rem",
                            }}
                          />
                        </div>
                      </td>
                      {/* ======== MRP Input ========= */}
                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">750ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="averageRate"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">330ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="averageRate"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">180ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="averageRate"
                            />
                          </div>
                        </div>
                      </td>
                      {/* ======== प्रारम्भिक स्टॉक ========= */}
                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">750ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="startingStock"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">330ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="startingStock"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">180ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="startingStock"
                            />
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">750ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="incomingPurchase"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">330ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="incomingPurchase"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">180ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="incomingPurchase"
                            />
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">750ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="buyRate"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">330ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="buyRate"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">180ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="buyRate"
                            />
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">750ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="incomePurchase"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">330ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="incomePurchase"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">180ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="incomePurchase"
                            />
                          </div>
                        </div>
                      </td>

                      {/* ============खरीद रेट - बा. =============  */}
                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">750ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="purchaseRate"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">330ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="purchaseRate"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">180ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="purchaseRate"
                            />
                          </div>
                        </div>
                      </td>

                      {/* ======== आमद (उधारी) ========= */}

                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">750ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="inflowCredit"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">330ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="inflowCredit"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">180ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="inflowCredit"
                            />
                          </div>
                        </div>
                      </td>
                      {/* ======== भेजान ========= */}

                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">750ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="sending"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">330ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="sending"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">180ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="sending"
                            />
                          </div>
                        </div>
                      </td>
                      {/* ======== योग/शेष ========= */}
                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">750ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="sumRemainder"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">330ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="sumRemainder"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">180ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="sumRemainder"
                            />
                          </div>
                        </div>
                      </td>
                      {/* ======== अन्तिम स्टॉक ========= */}
                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">750ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="closingStock"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">330ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="closingStock"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">180ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="closingStock"
                            />
                          </div>
                        </div>
                      </td>
                      {/* ============= बिक्री ================ */}
                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">750ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="sales"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">330ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="sales"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">180ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="sales"
                            />
                          </div>
                        </div>
                      </td>
                      {/* ============= रेट ================ */}
                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">750ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="mainRate"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">330ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="mainRate"
                            />
                          </div>

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">180ml</span>
                            </label>
                            <input
                              type="number"
                              className="smallinput"
                              name="mainRate"
                            />
                          </div>
                        </div>
                      </td>
                      {/* ============= योग ================ */}
                      <td>
                        <div className="form-control">
                          <input
                            type="text"
                            className="semiSmallInput"
                            name="total"
                            style={{
                              marginTop: "2rem",
                            }}
                          />
                        </div>
                      </td>
                      {/* ============= कुल योग ================ */}
                      <td>
                        <div className="form-control">
                          <input
                            type="text"
                            className="semiSmallInput"
                            name="grandTotal"
                            style={{
                              marginTop: "2rem",
                            }}
                          />
                        </div>
                      </td>
                    </tr>

                    {addFiveInFristForm.map((item, index) => {
                      return (
                        <FristFormBack key={index} item={item} index={index} />
                      );
                    })}

                    {addOneInFristForm.map((item, index) => {
                      return (
                        <AddOneFristFromBack
                          key={index}
                          item={item}
                          index={index}
                        ></AddOneFristFromBack>
                      );
                    })}

                    <tr>
                      <th></th>
                      <td>
                        {/* <div className="form-control">
                  <input
                    type="text"
                    className="dailyReportInput "
                    name="brandName"
                  />
                </div> */}
                        Total
                      </td>
                      {/* ======== MRP Input ========= */}
                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="averageRate"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="averageRate"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="averageRate"
                            />
                          </div>
                        </div>
                      </td>
                      {/* ======== प्रारम्भिक स्टॉक ========= */}
                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="startingStock"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="startingStock"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="startingStock"
                            />
                          </div>
                        </div>
                      </td>

                      {/* ======== आमद (खरीद)-दु. ========= */}

                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="incomingPurchase"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="incomingPurchase"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="incomingPurchase"
                            />
                          </div>
                        </div>
                      </td>

                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="buyRate"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="buyRate"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="buyRate"
                            />
                          </div>
                        </div>
                      </td>

                      {/* ======== आमद (खरीद)-बा. ========= */}

                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="incomePurchase"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="incomePurchase"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="incomePurchase"
                            />
                          </div>
                        </div>
                      </td>

                      {/*================ खरीद रेट - बा. ==================  */}
                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="purchaseRate"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="purchaseRate"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="purchaseRate"
                            />
                          </div>
                        </div>
                      </td>

                      {/* ======== आमद (उधारी) ========= */}

                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="inflowCredit"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="inflowCredit"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="inflowCredit"
                            />
                          </div>
                        </div>
                      </td>
                      {/* ======== भेजान ========= */}
                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="sending"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="sending"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="sending"
                            />
                          </div>
                        </div>
                      </td>
                      {/* ======== योग/शेष ========= */}
                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="sumRemainder"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="sumRemainder"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="sumRemainder"
                            />
                          </div>
                        </div>
                      </td>
                      {/* ======== अन्तिम स्टॉक ========= */}
                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="closingStock"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="closingStock"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="closingStock"
                            />
                          </div>
                        </div>
                      </td>
                      {/* ============= बिक्री ================ */}
                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="sales"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="sales"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="sales"
                            />
                          </div>
                        </div>
                      </td>
                      {/* ============= रेट ================ */}
                      <td>
                        <div className="flex gap-2">
                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="mainRate"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="mainRate"
                            />
                          </div>

                          <div className="form-control">
                            <input
                              type="number"
                              className="smallinput"
                              name="mainRate"
                            />
                          </div>
                        </div>
                      </td>
                      {/* ============= योग ================ */}
                      <td>
                        <div className="form-control">
                          <input
                            type="text"
                            className="semiSmallInput"
                            name="total"
                          />
                        </div>
                      </td>
                      {/* ============= कुल योग ================ */}
                      <td>
                        <div className="form-control">
                          <input
                            type="text"
                            className="semiSmallInput"
                            name="grandTotal"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>

            <div className="mt-4 flex gap-4">
              <button
                className="dailyReportBtn"
                onClick={() => addFiveInFristFormHandler()}
              >
                ADD 5
              </button>
              <button
                className="dailyReportBtn"
                onClick={() => addOneInFristFormHandler()}
              >
                ADD 1
              </button>
            </div>
          </div>
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
