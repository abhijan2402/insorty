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
import AddOneFristFromBack from "./FristFormBack/AddOneFristFromBack/AddOneFristFromBack";
import TotalRML from "./RmlForm/TotalRML";
import useRmlAdd from "../../../Hooks/useRmlAdd";
import AddOneRmlForm from "./RmlForm/AddOneRmlForm/AddOneRmlForm";
import useFristFormAdd from "../../../Hooks/useFristFormAdd";
import usePurchesOutSideAdd from "../../../Hooks/usePurchesOutSideAdd";
import AddOnePurchaseOutSideFrom from "../BackDailyReport/PurchaseOutSideForm/AddOnePurchesOutSide/AddOnePurchesOutSide";
import useCommissonAdd from "../../../Hooks/useCommissonAdd";
import AddOneCommissionForm from "../BackDailyReport/CommissonForm/AddOneCommisson/AddOneCommisson";
import useCashReciveAdd from "../../../Hooks/useCashReciveAdd";
import AddOneCashRecive from "./CashReciveForm/AddOneCashRecive/AddOneCashRecive";
import useShippingAdd from "../../../Hooks/useShippingAdd";
import AddOneShipping from "./InflowBorrowingBack/ShippingForm/AddOneShipping/AddOneShipping";
import useInfolwBorrowingRml from "../../../Hooks/useInfolwBorrowingRml";
import AddOneInflowBorrowingRml from "./InflowBorrowingBack/InflowBorrowingRML/AddOneInfolwBorrowingRml/AddOneBorrwingRml";
import useCarditDabit from "../../../Hooks/useCarditDabit";
import AddOneCreditDabitForm from "../BackDailyReport/InflowBorrowingBack/CraditDabitForm.jsx/AddOneCaraditDabite/AddOneCaraditDabite";

const BackDailyReport = () => {
  // ================== Frist Form============
  const {
    addFiveInFristForm,
    addFiveInFristFormHandler,
    addOneInFristForm,
    addOneInFristFormHandler,
  } = useFristFormAdd();

  // ================== Rml Form============
  const {
    addFiveInRmlState,
    addOneInRmlState,
    handelAddFiveInRml,
    handelAddOneInRml,
  } = useRmlAdd();

  // ================== Purchase OutSide Form============
  const {
    AddFivePurchesOutSideState,
    AddOnePurchesOutSideState,
    handelAddFivePurchesOutSide,
    handelAddOnePurchesOutSide,
  } = usePurchesOutSideAdd();

  // ================== Commission Form============
  const {
    addFiveCommissonState,
    addOneCommissonState,
    handelAddFiveCommison,
    handelAddOneCommison,
  } = useCommissonAdd();

  // ================== Cash Recive Form============
  const {
    addFiveCashReciveState,
    addOneCashReciveState,
    handelAddFiveCashRecive,
    handelAddOneCashRecive,
  } = useCashReciveAdd();

  // ================== Shipping Form============
  const {
    addFiveShippingState,
    addOneShippingState,
    handelAddFiveShipping,
    handelAddOneShipping,
  } = useShippingAdd();

  // ================== Inflow Borrowing RML Form============
  const {
    addFiveInfolwBorringState,
    addOneInfolwBorringState,
    handelAddFiveBorrowingRml,
    handelAddOneBorrowingRml,
  } = useInfolwBorrowingRml();

  // ================== Credit Dabit Form============
  const {
    addFiveCarditDabitFormState,
    addOneCraditDabitFomeState,
    handelAddFiveCarditDabit,
    handelAddOneCarditDabit,
  } = useCarditDabit();

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
          <h1 className="my-4">
            <span className="font-bold titleText">RML / आरएमएल</span>
          </h1>

          <form action="">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th>Brand Name/ ब्राण्ड</th>
                    <th>Average Rate</th>
                    <th>प्रारम्भिक स्टॉक</th>
                    <th>आमद (खरीद)-दु.</th>
                    <th>आमद (खरीद)-बा.</th>
                    <th>आमद (उधारी)</th>
                    <th>भेजान</th>
                    <th>योग/शेष</th>
                    <th>बिक्री</th>
                    <th>रेट</th>
                    <th>रकम</th>
                  </tr>
                </thead>

                <tbody>
                  {addFiveInRmlState.map((item, index) => {
                    return (
                      <RmlFrom key={index} item={item} index={index}></RmlFrom>
                    );
                  })}
                  {addOneInRmlState.map((item, index) => {
                    return (
                      <AddOneRmlForm
                        key={index}
                        item={item}
                        index={index}
                      ></AddOneRmlForm>
                    );
                  })}
                  <TotalRML></TotalRML>
                </tbody>
              </table>
            </div>
          </form>
          <div className="mt-4 flex gap-4">
            <button
              className="dailyReportBtn"
              onClick={() => handelAddFiveInRml()}
            >
              ADD 5
            </button>
            <button
              className="dailyReportBtn"
              onClick={() => handelAddOneInRml()}
            >
              ADD 1
            </button>
          </div>
        </div>

        <div className="py-6">
          <h1 className="my-4">
            <span className="font-bold titleText">
              अंग्रेजी/बीयर/देशी/RML की आमद (खरीद बाहर से)
            </span>
          </h1>
          <form action="">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Party Name/ पार्टी का नाम</th>
                    <th>Brand Name/ ब्राण्ड</th>
                    <th>संख्या</th>
                    <th>टिप्पणी</th>
                  </tr>
                </thead>

                <tbody>
                  {AddFivePurchesOutSideState.map((item, index) => {
                    return (
                      <PurchaseOutSideFrom
                        key={index}
                        item={item}
                        index={index}
                      ></PurchaseOutSideFrom>
                    );
                  })}
                  {AddOnePurchesOutSideState.map((item, index) => {
                    return (
                      <AddOnePurchaseOutSideFrom
                        key={index}
                        item={item}
                        index={index}
                      ></AddOnePurchaseOutSideFrom>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </form>
          <div className="mt-4 flex gap-4 mx-4">
            <button
              className="dailyReportBtn"
              onClick={() => handelAddFivePurchesOutSide()}
            >
              ADD 5
            </button>
            <button
              className="dailyReportBtn"
              onClick={() => handelAddOnePurchesOutSide()}
            >
              ADD 1
            </button>
          </div>
        </div>

        <div className="py-6">
          <h1 className="my-4">
            <span className="font-bold titleText">
              कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि
            </span>
          </h1>
          <form action="">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Reason / विवरण</th>
                    <th>रकम</th>
                  </tr>
                </thead>
                <tbody>
                  {addFiveCommissonState.map((item, index) => {
                    return (
                      <CommissionForm
                        key={index}
                        item={item}
                        index={index}
                      ></CommissionForm>
                    );
                  })}
                  {addOneCommissonState.map((item, index) => {
                    return <AddOneCommissionForm></AddOneCommissionForm>;
                  })}
                </tbody>
              </table>
            </div>
          </form>

          <div className="mt-4 flex gap-4 mx-4">
            <button
              className="dailyReportBtn"
              onClick={() => handelAddFiveCommison()}
            >
              ADD 5
            </button>
            <button
              className="dailyReportBtn"
              onClick={() => handelAddOneCommison()}
            >
              ADD 1
            </button>
          </div>
        </div>

        <div className="py-6">
          <h1 className="my-4">
            <span className="font-bold titleText">
              पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति
            </span>
          </h1>
          <form action="">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Reason / विवरण</th>
                    <th>रकम</th>
                  </tr>
                </thead>
                <tbody>
                  {addFiveCashReciveState.map((item, index) => {
                    return (
                      <CashReciveForm key={index} item={item}></CashReciveForm>
                    );
                  })}
                  {addOneCashReciveState.map((item, index) => {
                    return (
                      <AddOneCashRecive
                        key={index}
                        item={item}
                      ></AddOneCashRecive>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </form>
          <div className="mt-4 flex gap-4 mx-4">
            <button
              className="dailyReportBtn"
              onClick={() => handelAddFiveCashRecive()}
            >
              ADD 5
            </button>
            <button
              className="dailyReportBtn"
              onClick={() => handelAddOneCashRecive()}
            >
              ADD 1
            </button>
          </div>
        </div>

        <div className="py-6">
          <h1 className="my-4">
            <span className="font-bold titleText">
              अंग्रेजी/बीयर/देशी/RML का भेजान
            </span>
          </h1>
          <form action="">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Party Name/ पार्टी का नाम</th>
                    <th>Brand Name/ ब्राण्ड</th>
                    <th>संख्या</th>
                    <th>टिप्पणी</th>
                  </tr>
                </thead>
                <tbody>
                  {addFiveShippingState.map((item, index) => {
                    return (
                      <ShippingForm key={index} item={item}></ShippingForm>
                    );
                  })}
                  {addOneShippingState.map((item, index) => {
                    return (
                      <AddOneShipping key={index} item={item}></AddOneShipping>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </form>
          <div className="mt-4 flex gap-4 mx-4">
            <button
              className="dailyReportBtn"
              onClick={() => handelAddFiveShipping()}
            >
              ADD 5
            </button>
            <button
              className="dailyReportBtn"
              onClick={() => handelAddOneShipping()}
            >
              ADD 1
            </button>
          </div>
        </div>

        <div className="py-6">
          <h1 className="my-4">
            <span className="font-bold titleText">
              अंग्रेजी/बीयर/देशी/RML की आमद (उधारी)
            </span>
          </h1>
          <form action="">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th>Party Name/ पार्टी का नाम</th>
                    <th>Brand Name/ ब्राण्ड</th>
                    <th>संख्या</th>
                    <th>टिप्पणी</th>
                  </tr>
                </thead>

                <tbody>
                  {addFiveInfolwBorringState.map((item, index) => {
                    return (
                      <InflowBorrowingRML
                        key={index}
                        item={item}
                        index={index}
                      ></InflowBorrowingRML>
                    );
                  })}
                  {addOneInfolwBorringState.map((item, index) => {
                    return (
                      <AddOneInflowBorrowingRml
                        item={item}
                        key={index}
                        index={index}
                      ></AddOneInflowBorrowingRml>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </form>
          <div className="mt-4 flex gap-4 mx-4">
            <button
              className="dailyReportBtn"
              onClick={() => handelAddFiveBorrowingRml()}
            >
              ADD 5
            </button>
            <button
              className="dailyReportBtn"
              onClick={() => handelAddOneBorrowingRml()}
            >
              ADD 1
            </button>
          </div>
        </div>

        <div className="py-6">
          <h1 className="my-4">
            <span className="font-bold titleText">उधारी/नामे</span>
          </h1>
          <form action="">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th>Party Name/ पार्टी का नाम</th>
                    <th>Amount / रकम</th>
                    <th>टिप्पणी</th>
                  </tr>
                </thead>

                <tbody>
                  {addFiveCarditDabitFormState.map((item, index) => {
                    return (
                      <CreditDabitForm
                        key={index}
                        item={item}
                        index={index}
                      ></CreditDabitForm>
                    );
                  })}
                  {addOneCraditDabitFomeState.map((item, index) => {
                    return (
                      <AddOneCreditDabitForm
                        key={index}
                        item={item}
                        index={index}
                      ></AddOneCreditDabitForm>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </form>
          <div className="mt-4 flex gap-4 mx-4">
            <button
              className="dailyReportBtn"
              onClick={() => handelAddFiveCarditDabit()}
            >
              ADD 5
            </button>
            <button
              className="dailyReportBtn"
              onClick={() => handelAddOneCarditDabit()}
            >
              ADD 1
            </button>
          </div>
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
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default BackDailyReport;
