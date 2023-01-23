import React from "react";
import "../Style/DailyReport.scss";
import RmlFrom from "./RmlForm/RmlFrom";
import { Link } from "react-router-dom";
import PurchaseOutSideFrom from "./PurchaseOutSideForm/PurchaseOutSideFrom";
import ShippingForm from "./InflowBorrowingBack/ShippingForm/ShippingForm";
import InflowBorrowingRML from "./InflowBorrowingBack/InflowBorrowingRML/InflowBorrowingRML";
import FinalReport from "./FinalReport/FinalReport";
import Comment from "./Comment/Comment";
import AddOneFristFromBack from "./FristFormBack/AddOneFristFromBack/AddOneFristFromBack";
// import TotalRML from "./RmlForm/TotalRML";
import useRmlAdd from "../../../../Hooks/useRmlAdd";
import useFristFormAdd from "../../../../Hooks/useFristFormAdd";
import usePurchesOutSideAdd from "../../../../Hooks/usePurchesOutSideAdd";
import useCommissonAdd from "../../../../Hooks/useCommissonAdd";
import useCashReciveAdd from "../../../../Hooks/useCashReciveAdd";
import CashReciveFrom from "./CashReciveForm/CashReciveForm";
import useShippingAdd from "../../../../Hooks/useShippingAdd";
import useInfolwBorrowingRml from "../../../../Hooks/useInfolwBorrowingRml";
import useCarditDabit from "../../../../Hooks/useCarditDabit";
import CraditDabitForm from "../BackDailyReport/InflowBorrowingBack/CraditDabitForm.jsx/CreditDabitForm";
import CommissonFrom from "./CommissonForm/CommissionForm";
import useComment from "../../../../Hooks/useComment";

// import Swal from "sweetalert2";
import useHandelSubmitBackAPI from "../../../../Hooks/useHandelSubmitBackAPI/useHandelSubmitBackAPI";

const BackDailyReport = () => {
  const { handleSubmit, isLoadingSubmit } = useHandelSubmitBackAPI();
  // ================== Frist Form============
  const {
    addFiveInFristFormHandler,
    addOneInFristFormHandler,
    fristFormState,
    handelSubmitFristFormBack,
    onChangeFristBackFormHandler,
    totalState,
    isLoading,
    brands,
    brandsLoaded,
    liquors,
  } = useFristFormAdd();
  console.log(liquors);

  // ================== Rml Form============
  const {
    addRmlState,
    handelAddFiveInRml,
    handelAddOneInRml,
    // handelSubmitRml,
    onChangeRmlHandler,
  } = useRmlAdd();

  // ================== Purchase OutSide Form============
  const {
    purchesOutSideState,
    handelAddFivePurchesOutSide,
    handelAddOnePurchesOutSide,
    onChangePurchesOutSide,
    // handelSubmitPurchesOutSide,
  } = usePurchesOutSideAdd();

  // ================== Commission Form============
  const {
    commissonState,
    handelAddFiveCommison,
    handelAddOneCommison,
    onChangeCommison,
    // handelSubmitCommisson,
  } = useCommissonAdd();

  // ================== Cash Recive Form============
  const {
    cashReciveState,
    handelAddFiveCashRecive,
    handelAddOneCashRecive,
    onChangeCashRecive,
    // handelSubmitCashRecive,
  } = useCashReciveAdd();

  // ================== Shipping Form============
  const {
    addShippingState,
    onChangeShipping,
    // handelSubmitShipping,
    handelAddFiveShipping,
    handelAddOneShipping,
  } = useShippingAdd();

  // ================== Inflow Borrowing RML Form============
  const {
    infolwBorrwingFormState,
    onChangeBorrowingRml,
    // handelSubmitBorrowingRml,
    handelAddFiveBorrowingRml,
    handelAddOneBorrowingRml,
  } = useInfolwBorrowingRml();

  // ================== Credit Dabit Form============
  const {
    craditDabitState,
    onChangeCarditDabit,
    // handelSubmitCarditDabit,
    handelAddFiveCarditDabit,
    handelAddOneCarditDabit,
  } = useCarditDabit();

  // ********************************* add five button handler *********************************
  const addFiveBtnHandler = () => {
    handelAddFiveInRml();
    handelAddFivePurchesOutSide();
    handelAddFiveCommison();
    handelAddFiveCashRecive();
  };

  const addOneBtnHandler = () => {
    handelAddOneInRml();
    handelAddOnePurchesOutSide();
    handelAddOneCommison();
    handelAddOneCashRecive();
  };

  const addFiveShippingBtnHandler = () => {
    handelAddFiveShipping();
    handelAddFiveBorrowingRml();
    handelAddFiveCarditDabit();
  };

  const addOneShippingBtnHandler = () => {
    handelAddOneShipping();
    handelAddOneBorrowingRml();
    handelAddOneCarditDabit();
  };

  const {
    commentState,
    // handelSubimtComment,
    handleChangeComment,
  } = useComment();
  // ********************************* submit mulitple api in handelSubmit  *********************************

  console.log(fristFormState);

  return (
    <>
      <section className="mx-2">
        <div className="my-4 flex gap-4 items-center">
          <h1 className="font-bold text-2xl">Daily Report / दैनिक रिपोर्ट </h1>

          <div className="my-4">
            <Link
              to="/user/dailyreport/front"
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

        {/* *********************************************************BREAK*********************************************************  */}
        <div>
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
                        <th></th>
                        <td>
                          <div className="form-control"></div>
                        </td>
                        {/* ======== MRP Input ========= */}
                        <td>
                          <div className="flex gap-2">
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">650ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">550ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">330ml</span>
                              </label>
                            </div>
                          </div>
                        </td>
                        {/* ======== प्रारम्भिक स्टॉक ========= */}
                        <td>
                          <div className="flex gap-2">
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">650ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">550ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">330ml</span>
                              </label>
                            </div>
                          </div>
                        </td>

                        <td>
                          <div className="flex gap-2">
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">650ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">550ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">330ml</span>
                              </label>
                            </div>
                          </div>
                        </td>

                        <td>
                          <div className="flex gap-2">
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">650ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">550ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">330ml</span>
                              </label>
                            </div>
                          </div>
                        </td>

                        <td>
                          <div className="flex gap-2">
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">650ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">550ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">330ml</span>
                              </label>
                            </div>
                          </div>
                        </td>

                        {/* ============खरीद रेट - बा. =============  */}
                        <td>
                          <div className="flex gap-2">
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">650ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">550ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">330ml</span>
                              </label>
                            </div>
                          </div>
                        </td>

                        {/* ======== आमद (उधारी) ========= */}

                        <td>
                          <div className="flex gap-2">
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">650ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">550ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">330ml</span>
                              </label>
                            </div>
                          </div>
                        </td>
                        {/* ======== भेजान ========= */}

                        <td>
                          <div className="flex gap-2">
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">650ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">550ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">330ml</span>
                              </label>
                            </div>
                          </div>
                        </td>
                        {/* ======== योग/शेष ========= */}
                        <td>
                          <div className="flex gap-2">
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">650ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">550ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">330ml</span>
                              </label>
                            </div>
                          </div>
                        </td>
                        {/* ======== अन्तिम स्टॉक ========= */}
                        <td>
                          <div className="flex gap-2">
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">650ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">550ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">330ml</span>
                              </label>
                            </div>
                          </div>
                        </td>
                        {/* ============= बिक्री ================ */}
                        <td>
                          <div className="flex gap-2">
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">650ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">550ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">330ml</span>
                              </label>
                            </div>
                          </div>
                        </td>
                        {/* ============= रेट ================ */}
                        <td>
                          <div className="flex gap-2">
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">650ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">550ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">330ml</span>
                              </label>
                            </div>
                          </div>
                        </td>
                        {/* ============= योग ================ */}
                        <td>
                          <div className="flex gap-2">
                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">650ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">550ml</span>
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">330ml</span>
                              </label>
                            </div>
                          </div>
                        </td>
                        {/* ============= कुल योग ================ */}
                        <td>
                          <div className="form-control"></div>
                        </td>
                      </tr>

                      {fristFormState.map((item, index) => {
                        return (
                          <AddOneFristFromBack
                            key={index}
                            onChangeFristBackFormHandler={
                              onChangeFristBackFormHandler
                            }
                            fristFormState={fristFormState}
                            item={item}
                            index={index}
                            brands={brands}
                            liquors={liquors}
                            brandsLoaded={brandsLoaded}
                          ></AddOneFristFromBack>
                        );
                      })}

                      <tr>
                        <th></th>
                        <td>Total</td>
                        {/* ======== MRP Input ========= */}
                        <td>
                          <div className="flex gap-2">
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="averageRate"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="averageRate"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="averageRate"
                                disabled
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
                                disabled
                                value={totalState.startingStock650Total}
                                onChange={onChangeFristBackFormHandler}
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="startingStock"
                                disabled
                                value={totalState.startingStock550Total}
                                onChange={onChangeFristBackFormHandler}
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="startingStock"
                                disabled
                                value={totalState.startingStock330Total}
                                onChange={onChangeFristBackFormHandler}
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
                                disabled
                                value={totalState.incomingPurchase650Total}
                                onChange={onChangeFristBackFormHandler}
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="incomingPurchase"
                                disabled
                                value={totalState.incomingPurchase550Total}
                                onChange={onChangeFristBackFormHandler}
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="incomingPurchase"
                                disabled
                                value={totalState.incomingPurchase330Total}
                                onChange={onChangeFristBackFormHandler}
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
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="buyRate"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="buyRate"
                                disabled
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
                                disabled
                                value={totalState.incomePurchase650Total}
                                onChange={onChangeFristBackFormHandler}
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="incomePurchase"
                                disabled
                                value={totalState.incomePurchase550Total}
                                onChange={onChangeFristBackFormHandler}
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="incomePurchase"
                                disabled
                                value={totalState.incomePurchase330Total}
                                onChange={onChangeFristBackFormHandler}
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
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="purchaseRate"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="purchaseRate"
                                disabled
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
                                disabled
                                value={totalState.inflowCredit650Total}
                                onChange={onChangeFristBackFormHandler}
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="inflowCredit"
                                disabled
                                value={totalState.inflowCredit550Total}
                                onChange={onChangeFristBackFormHandler}
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="inflowCredit"
                                disabled
                                value={totalState.inflowCredit330Total}
                                onChange={onChangeFristBackFormHandler}
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
                                disabled
                                value={totalState.sending650Total}
                                onChange={onChangeFristBackFormHandler}
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="sending"
                                disabled
                                value={totalState.sending550Total}
                                onChange={onChangeFristBackFormHandler}
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="sending"
                                disabled
                                value={totalState.sending330Total}
                                onChange={onChangeFristBackFormHandler}
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
                                disabled
                                value={totalState.sumRemainder650Total}
                                onChange={onChangeFristBackFormHandler}
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="sumRemainder"
                                disabled
                                value={totalState.sumRemainder550Total}
                                onChange={onChangeFristBackFormHandler}
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="sumRemainder"
                                disabled
                                value={totalState.sumRemainder330Total}
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
                                disabled
                                value={totalState.closingStock650Total}
                                onChange={onChangeFristBackFormHandler}
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="closingStock"
                                disabled
                                value={totalState.closingStock550Total}
                                onChange={onChangeFristBackFormHandler}
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="closingStock"
                                disabled
                                value={totalState.closingStock330Total}
                                onChange={onChangeFristBackFormHandler}
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
                                disabled
                                value={totalState.sales650Total}
                                onChange={onChangeFristBackFormHandler}
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="sales"
                                disabled
                                value={totalState.sales550Total}
                                onChange={onChangeFristBackFormHandler}
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="sales"
                                disabled
                                value={totalState.sales330Total}
                                onChange={onChangeFristBackFormHandler}
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
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="mainRate"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="mainRate"
                                disabled
                              />
                            </div>
                          </div>
                        </td>
                        {/* ============= योग ================ */}
                        <td>
                          <div className="flex gap-2">
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="total650"
                                disabled
                                value={totalState.total650Total}
                                onChange={onChangeFristBackFormHandler}
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="total550"
                                disabled
                                value={totalState.total550Total}
                                onChange={onChangeFristBackFormHandler}
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="total330"
                                disabled
                                value={totalState.total330Total}
                                onChange={onChangeFristBackFormHandler}
                              />
                            </div>
                          </div>
                        </td>
                        {/* ============= कुल योग ================ */}
                        <td>
                          <div className="form-control">
                            <input
                              type="text"
                              className="semiSmallInput"
                              name="grandTotal"
                              disabled
                              value={totalState.allGrandTotal}
                              onChange={onChangeFristBackFormHandler}
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
                {isLoading ? (
                  <>
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-[#AA237A] transition duration-150 ease-in-out border-2 border-[#AA237A] rounded-md shadow cursor-not-allowed"
                      disabled=""
                    >
                      <svg
                        className="w-5 h-5 mr-3 -ml-1 text-[#AA237A] animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Loading...
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="dailyReportBtn"
                      onClick={() => handelSubmitFristFormBack()}
                    >
                      Submit
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* *********************************************************BREAK*********************************************************  */}
        <div className="flex overflow-x-auto">
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
                      <th>खरीद रेट - दु</th>
                      <th>आमद (खरीद)-बा.</th>
                      <th>खरीद रेट - बा.</th>
                      <th>आमद (उधारी)</th>
                      <th>भेजान</th>
                      <th>योग/शेष</th>
                      <th>अन्तिम स्टॉक </th>
                      <th>बिक्री</th>
                      <th>रेट</th>
                      <th>रकम</th>
                    </tr>
                  </thead>

                  <tbody>
                    {addRmlState.map((item, index) => {
                      return (
                        <RmlFrom
                          key={index}
                          item={item}
                          index={index}
                          onChangeRmlHandler={onChangeRmlHandler}
                          addRmlState={addRmlState}
                        ></RmlFrom>
                      );
                    })}

                    <tr>
                      <th></th>
                      <td>
                        <div className="form-control">Total</div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="semiSmallInput"
                            name="averageRate"
                            disabled
                          />
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            // type="number"
                            className="semiSmallInput"
                            name="openingStock"
                            value={addRmlState.reduce(
                              (total, currentItem) =>
                                (total =
                                  total + Number(currentItem.openingStock)),
                              0
                            )}
                            onChange={(e) => onChangeRmlHandler(e)}
                            disabled
                          />
                        </div>
                      </td>
                      {/* ======== आमद (खरीद)-बा. ========= */}

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="semiSmallInput"
                            name="incomingPurchase"
                            value={addRmlState.reduce(
                              (total, currentItem) =>
                                (total =
                                  total + Number(currentItem.incomingPurchase)),
                              0
                            )}
                            disabled
                          />
                        </div>
                      </td>
                      {/* ======== आमद (खरीद)-बा. ========= */}

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="semiSmallInput"
                            name="buyRate"
                            disabled
                          />
                        </div>
                      </td>
                      {/* ======== आमद (उधारी) ========= */}

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="semiSmallInput"
                            name="incomePurchase"
                            value={addRmlState.reduce(
                              (total, currentItem) =>
                                (total =
                                  total + Number(currentItem.incomePurchase)),
                              0
                            )}
                            disabled
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="semiSmallInput"
                            name="purchaserRate"
                            disabled
                          />
                        </div>
                      </td>
                      {/* ======== भेजान ========= */}
                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="semiSmallInput"
                            name="inflowCredit"
                            value={addRmlState.reduce(
                              (total, currentItem) =>
                                (total =
                                  total + Number(currentItem.inflowCredit)),
                              0
                            )}
                            disabled
                          />
                        </div>
                      </td>
                      {/* ======== योग/शेष ========= */}
                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="semiSmallInput"
                            name="sending"
                            value={addRmlState.reduce(
                              (total, currentItem) =>
                                (total = total + Number(currentItem.sending)),
                              0
                            )}
                            disabled
                          />
                        </div>
                      </td>
                      {/* ======== अन्तिम स्टॉक ========= */}
                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="semiSmallInput"
                            name="sumRemainder"
                            value={addRmlState.reduce(
                              (total, currentItem) =>
                                (total =
                                  total + Number(currentItem.sumRemainder)),
                              0
                            )}
                            disabled
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="semiSmallInput"
                            name="closingStock"
                            value={addRmlState.reduce(
                              (total, currentItem) =>
                                (total =
                                  total + Number(currentItem.closingStock)),
                              0
                            )}
                            disabled
                          />
                        </div>
                      </td>

                      {/* ============= बिक्री ================ */}
                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="semiSmallInput"
                            name="sales"
                            value={addRmlState.reduce(
                              (total, currentItem) =>
                                (total = total + Number(currentItem.sales)),
                              0
                            )}
                            disabled
                          />
                        </div>
                      </td>
                      {/* ============= रेट ================ */}
                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="semiSmallInput"
                            name="rate"
                            disabled
                          />
                        </div>
                      </td>
                      {/* ============= योग ================ */}
                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="semiSmallInput"
                            name="cost"
                            value={addRmlState.reduce(
                              (total, currentItem) =>
                                (total = total + Number(currentItem.cost)),
                              0
                            )}
                            disabled
                          />
                        </div>
                      </td>
                      {/* ============= कुल योग ================ */}
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
            {/******************** Add Button   ********************/}
            <div>
              <div className="mt-4 flex gap-4">
                <button
                  className="dailyReportBtn"
                  onClick={() => addFiveBtnHandler()}
                >
                  ADD 5
                </button>
                <button
                  className="dailyReportBtn"
                  onClick={() => addOneBtnHandler()}
                >
                  ADD 1
                </button>

                {/* <button
                  className="dailyReportBtn"
                  onClick={() => handelSubmitCashRecive()}
                >
                  Submit
                </button> */}
              </div>
            </div>
            {/******************** Add Button   ********************/}
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
                      <th>Quantity</th>
                      <th>रेट</th>
                      <th>योग</th>
                      <th>टिप्पणी</th>
                    </tr>
                  </thead>

                  <tbody>
                    {purchesOutSideState.map((item, index) => {
                      return (
                        <PurchaseOutSideFrom
                          onChangePurchesOutSide={onChangePurchesOutSide}
                          item={item}
                          key={index}
                          index={index}
                          purchesOutSideState={purchesOutSideState}
                        ></PurchaseOutSideFrom>
                      );
                    })}

                    <tr>
                      <td>
                        <div className="form-control">
                          <input
                            type="text"
                            className="semiSmallInput"
                            name="partyName"
                            disabled
                          />
                        </div>
                      </td>
                      {/* ======== प्रारम्भिक स्टॉक ========= */}
                      <td>
                        <div className="form-control">
                          <input
                            type="text"
                            className="semiSmallInput"
                            name="brandName"
                            disabled
                          />
                        </div>
                      </td>

                      {/* ======== आमद (खरीद)-दु. ========= */}

                      <td>
                        <div className="form-control ">
                          <input
                            type="number"
                            className="semiSmallInput"
                            name="theNumber"
                            value={purchesOutSideState.reduce(
                              (total, currentItem) =>
                                (total = total + Number(currentItem.theNumber)),
                              0
                            )}
                            disabled
                          />
                        </div>
                      </td>
                      {/* ======== आमद (खरीद)-बा. ========= */}

                      <td>
                        <div className="form-control ">
                          <select
                            className="select select-bordered"
                            name="quantity"
                            disabled
                          >
                            <option value={650} selected>
                              650ml
                            </option>
                            <option value={550}>550ml</option>
                            <option value={330}>330ml</option>
                            <option value={90}>90ml</option>
                            <option value={60}>60ml</option>
                          </select>
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="semiSmallInput"
                            name="rate"
                            disabled
                          />
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="semiSmallInput"
                            name="total"
                            value={purchesOutSideState.reduce(
                              (total, currentItem) =>
                                (total = total + Number(currentItem.total)),
                              0
                            )}
                            disabled
                          />
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            type="text"
                            className="semiSmallInput"
                            name="reason"
                            disabled
                          />
                        </div>
                      </td>
                      {/* ======== आमद (उधारी) ========= */}
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          <div className="py-6">
            <h1 className="my-4 specialwidth">
              <span className="font-bold titleText ">
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
                    {commissonState.map((item, index) => {
                      return (
                        <CommissonFrom
                          key={index}
                          index={index}
                          item={item}
                          commissonState={commissonState}
                          onChangeCommison={onChangeCommison}
                        ></CommissonFrom>
                      );
                    })}

                    <tr>
                      <td>
                        <div className="form-control">
                          <input
                            type="text"
                            className="dailyReportInput"
                            name="reason"
                            disabled
                            style={{
                              width: "443px",
                            }}
                          />
                        </div>
                      </td>

                      <td>
                        <input
                          type="number"
                          className="semiSmallInput"
                          name="amount"
                          value={commissonState.reduce(
                            (total, currentItem) =>
                              (total = total + Number(currentItem.amount)),
                            0
                          )}
                          disabled
                          style={{
                            width: "100%",
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          <div className="py-6">
            <h1 className="my-4 specialwidth">
              <span className="font-bold titleText ">
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
                    {cashReciveState.map((item, index) => {
                      return (
                        <CashReciveFrom
                          key={index}
                          item={item}
                          index={index}
                          onChangeCashRecive={onChangeCashRecive}
                          cashReciveState={cashReciveState}
                        ></CashReciveFrom>
                      );
                    })}

                    <tr>
                      <td>
                        <div className="form-control">
                          <input
                            type="text"
                            className="dailyReportInput"
                            name="reson"
                            disabled
                            style={{
                              width: "443px",
                            }}
                          />
                        </div>
                      </td>

                      <td>
                        <input
                          type="number"
                          name="amount"
                          value={cashReciveState.reduce(
                            (total, currentItem) =>
                              (total = total + Number(currentItem.amount)),
                            0
                          )}
                          disabled
                          className="semiSmallInput"
                          style={{
                            width: "100%",
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
        {/* *********************************************************BREAK*********************************************************  */}

        <div className="flex overflow-x-auto ">
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
                      <th>S.No</th>
                      <th>Party Name/ पार्टी का नाम</th>
                      <th>Brand Name/ ब्राण्ड</th>
                      <th>संख्या</th>
                      <th>टिप्पणी</th>
                    </tr>
                  </thead>
                  <tbody>
                    {addShippingState.map((item, index) => {
                      return (
                        <ShippingForm
                          key={index}
                          item={item}
                          index={index}
                          addShippingState={addShippingState}
                          onChangeShipping={onChangeShipping}
                        ></ShippingForm>
                      );
                    })}

                    <tr>
                      <th>Total</th>
                      <td>
                        <div className="form-control">
                          <input
                            type="text"
                            className="semiSmallInput"
                            name="partyName"
                            disabled
                          />
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            type="text"
                            className="semiSmallInput"
                            name="brandName"
                            disabled
                          />
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="semiSmallInput"
                            name="theNumber"
                            value={addShippingState.reduce(
                              (total, currentItem) =>
                                (total = total + Number(currentItem.theNumber)),
                              0
                            )}
                            disabled
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-control">
                          <input
                            type="text"
                            className="semiSmallInput"
                            name="comment"
                            disabled
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>

            <div className="mt-4 flex gap-4 mx-4">
              <button
                className="dailyReportBtn"
                onClick={() => addFiveShippingBtnHandler()}
              >
                ADD 5
              </button>
              <button
                className="dailyReportBtn"
                onClick={() => addOneShippingBtnHandler()}
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
                      <th>S.no</th>
                      <th>Party Name/ पार्टी का नाम</th>
                      <th>Brand Name/ ब्राण्ड</th>
                      <th>संख्या</th>
                      <th>Quantity</th>
                      <th>रेट</th>
                      <th>योग</th>
                      <th>टिप्पणी</th>
                    </tr>
                  </thead>

                  <tbody>
                    {infolwBorrwingFormState.map((item, index) => {
                      return (
                        <InflowBorrowingRML
                          infolwBorrwingFormState={infolwBorrwingFormState}
                          onChangeBorrowingRml={onChangeBorrowingRml}
                          key={index}
                          item={item}
                          index={index}
                        ></InflowBorrowingRML>
                      );
                    })}

                    <tr>
                      <th>Total</th>
                      <td>
                        <div className="form-control">
                          <input
                            type="text"
                            className="semiSmallInput"
                            name="partyName"
                            disabled
                          />
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            type="text"
                            className="semiSmallInput"
                            name="brandName"
                            disabled
                          />
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="semiSmallInput"
                            name="theNumber"
                            value={infolwBorrwingFormState.reduce(
                              (total, currentItem) =>
                                (total = total + Number(currentItem.theNumber)),
                              0
                            )}
                            disabled
                          />
                        </div>
                      </td>

                      <td>
                        <div className="form-control ">
                          <select
                            className="select select-bordered"
                            name="quantity"
                            disabled
                          >
                            <option value={650} selected>
                              650ml
                            </option>
                            <option value={550}>550ml</option>
                            <option value={330}>330ml</option>
                            <option value={90}>90ml</option>
                            <option value={60}>60ml</option>
                          </select>
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="semiSmallInput"
                            name="rate"
                            disabled
                          />
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="semiSmallInput"
                            name="total"
                            value={infolwBorrwingFormState.reduce(
                              (total, currentItem) =>
                                (total = total + Number(currentItem.total)),
                              0
                            )}
                            disabled
                          />
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            type="text"
                            className="semiSmallInput"
                            name="reason"
                            disabled
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
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
                      <th>पार्टी का नाम</th>
                      <th>पार्टी/पार्टनर</th>
                      <th>रकम</th>
                      <th>टिप्पणी</th>
                    </tr>
                  </thead>

                  <tbody>
                    {craditDabitState.map((item, index) => {
                      return (
                        <CraditDabitForm
                          key={index}
                          item={item}
                          craditDabitState={craditDabitState}
                          onChangeCarditDabit={onChangeCarditDabit}
                          index={index}
                        ></CraditDabitForm>
                      );
                    })}

                    <tr>
                      <th>Total</th>

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="semiSmallInput"
                            name="amount"
                            disabled
                          />
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                          <select
                            className="select select-bordered"
                            name="partyType"
                            disabled
                          >
                            <option value="Partner" selected>
                              Partner
                            </option>
                            <option value="Party">Party</option>
                          </select>
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="semiSmallInput"
                            name="amount"
                            value={craditDabitState.reduce(
                              (total, currentItem) =>
                                (total = total + Number(currentItem.amount)),
                              0
                            )}
                            disabled
                          />
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            type="text"
                            className="semiSmallInput"
                            name="note"
                            disabled
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
        {/* *********************************************************BREAK*********************************************************  */}

        <div className="py-6">
          <form action="">
            <h1 className="my-4">
              <span className="font-bold titleText">फाईनल रिपोर्ट</span>
            </h1>

            <FinalReport
              beerTotal={totalState.allGrandTotal}
              rmlTotal={addRmlState.reduce(
                (total, currentItem) =>
                  (total = total + Number(currentItem.cost)),
                0
              )}
              cashTotal={craditDabitState.reduce(
                (total, currentItem) =>
                  (total = total + Number(currentItem.amount)),
                0
              )}
              udhaariTotal={craditDabitState.reduce(
                (total, currentItem) =>
                  (total = total + Number(currentItem.amount)),
                0
              )}
              commisionTotal={commissonState.reduce(
                (total, currentItem) =>
                  (total = total + Number(currentItem.amount)),
                0
              )}
            ></FinalReport>
          </form>
        </div>

        <div className="py-6 ">
          <form action="">
            <h1 className="my-4">
              <span className="font-bold titleText">रफ जगह</span>
            </h1>
            <Comment
              commentState={commentState}
              handleCommentChange={handleChangeComment}
            ></Comment>
          </form>
        </div>

        {/* *********************************************************BREAK*********************************************************  */}

        {/* ************ Submit button ***************** */}
        <div className="flex my-6 mx-4">
          {isLoadingSubmit ? (
            <>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-[#AA237A] transition duration-150 ease-in-out border-2 border-[#AA237A] rounded-md shadow cursor-not-allowed"
                disabled=""
              >
                <svg
                  className="w-5 h-5 mr-3 -ml-1 text-[#AA237A] animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading...
              </button>
            </>
          ) : (
            <>
              <button className="dailyReportBtn" onClick={() => handleSubmit()}>
                Submit
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default BackDailyReport;
