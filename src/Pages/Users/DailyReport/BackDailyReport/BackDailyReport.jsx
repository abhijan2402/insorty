import React, { useContext, useState } from "react";
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
import { DataContextApi } from "../../../../Context/DataContext";
// import Swal from "sweetalert2";
import useHandelSubmitBackAPI from "../../../../Hooks/useHandelSubmitBackAPI/useHandelSubmitBackAPI";
import AddOneSecondFormBack from "./FristFormBack/AddOneFristFromBack/AddOneSecondFormBack";
import moment from "moment/moment";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";

const BackDailyReport = () => {
  const { handleSubmit, isLoadingSubmit } = useHandelSubmitBackAPI();
  const [StartDate, setStartDate] = useState();

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
    addOneSecondFormState,
    addOneSecondFormHandler,
    handelSeconFormOnChange,
    handleRemoveFieldsBack,
    handleRemoveFieldsBeer,
  } = useFristFormAdd();

  // ================== Rml Form============
  const {
    addRmlState,
    handelAddFiveInRml,
    handelAddOneInRml,
    onChangeRmlHandler,
    setAddRmlState,
    handleRemoveFieldsBackRml,
  } = useRmlAdd();

  // ================== Purchase OutSide Form============
  const {
    purchesOutSideState,
    handelAddFivePurchesOutSide,
    handelAddOnePurchesOutSide,
    onChangePurchesOutSide,
    handleRemoveFieldsPurchaseOut,
  } = usePurchesOutSideAdd();

  // ================== Commission Form============
  const {
    commissonState,
    handelAddFiveCommison,
    handelAddOneCommison,
    onChangeCommison,
    handleRemoveFieldsCommission,
  } = useCommissonAdd();

  // ================== Cash Recive Form============
  const {
    cashReciveState,
    handelAddFiveCashRecive,
    handelAddOneCashRecive,
    onChangeCashRecive,
    handleRemoveFieldsCashBack,
  } = useCashReciveAdd();

  // ================== Shipping Form============
  const {
    addShippingState,
    handleRemoveFieldsShipping,
    onChangeShipping,
    handelAddFiveShipping,
    handelAddOneShipping,
  } = useShippingAdd();

  // ================== Inflow Borrowing RML Form============
  const {
    infolwBorrwingFormState,
    onChangeBorrowingRml,
    // handelSubmitBorrowingRml,
    handleRemoveFieldsInflow,
    handelAddFiveBorrowingRml,
    handelAddOneBorrowingRml,
  } = useInfolwBorrowingRml();

  // ================== Credit Dabit Form============
  const {
    craditDabitState,
    onChangeCarditDabit,
    handleRemoveFieldsCredit,
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

  const { salesMan, setSalesMan, drDate, setDrDate } = useContext(
    DataContextApi
  );
  // ********************************* submit mulitple api in handelSubmit  *********************************

  // console.log(fristFormState);

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
          <h1 className="font-bold ">सेल्समेन का नाम:- </h1>
          <input
            type="text"
            value={salesMan}
            onChange={(e) => {
              setSalesMan(e.target.value);
              localStorage.setItem("salesMan", e.target.value);
            }}
            className="semiSmallInput"
          />

          {/* <input
            type="date"
            value={drDate}
            onChange={(e) => {
              setDrDate(e.target.value);
              localStorage.setItem("drDate", e.target.value);
            }}
            name=""
            id=""
            className="semiSmallInput"
          /> */}
          {/* <h1 className="font-bold ">12/12/2022 </h1> */}
        </div>

        <div className="flex gap-2 items-center">
          <FaCalendarAlt></FaCalendarAlt>
          <DatePicker
            selected={new Date(drDate)}
            name="year"
            onChange={(data) => {setDrDate(new Date(data)); console.log(data)}}
            dateFormat="dd/MM/yyyy"
            className="inputBox"
            placeholderText={"dd/mm/yyyy"}
          />
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
                        <th></th>
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
                            handleRemoveFieldsBack={handleRemoveFieldsBack}
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
                        <td></td>
                        <td>Total</td>
                        {/* ======== MRP Input ========= */}
                        <td>
                          <div className="flex gap-2">
                            <div className="form-control">
                              <input
                                disabled
                                type="number"
                                className="smallinput"
                                name="averageRate"
                              />
                            </div>

                            <div className="form-control">
                              <input
                                disabled
                                type="number"
                                className="smallinput"
                                name="averageRate"
                              />
                            </div>

                            <div className="form-control">
                              <input
                                disabled
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
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.startingStock650)),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                className="smallinput"
                                disabled
                                type="number"
                                name="startingStock"
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.startingStock550)),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                type="number"
                                className="smallinput"
                                disabled
                                name="startingStock"
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.startingStock330)),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                type="number"
                                className="smallinput"
                                disabled
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
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.incomingPurchase650)),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                type="number"
                                disabled
                                className="smallinput"
                                name="incomingPurchase"
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.incomingPurchase550)),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                type="number"
                                className="smallinput"
                                disabled
                                name="incomingPurchase"
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.incomingPurchase330)),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                type="number"
                                className="smallinput"
                                disabled
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
                                disabled
                                className="smallinput"
                                name="buyRate"
                              />
                            </div>

                            <div className="form-control">
                              <input
                                type="number"
                                disabled
                                className="smallinput"
                                name="buyRate"
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
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.incomePurchase650)),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                type="number"
                                className="smallinput"
                                name="incomePurchase"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.incomePurchase550)),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                type="number"
                                className="smallinput"
                                disabled
                                name="incomePurchase"
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.incomePurchase330)),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                type="number"
                                className="smallinput"
                                name="incomePurchase"
                                disabled
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
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.inflowCredit650)),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                type="number"
                                className="smallinput"
                                name="inflowCredit"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.inflowCredit550)),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                type="number"
                                className="smallinput"
                                name="inflowCredit"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.inflowCredit330)),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                type="number"
                                className="smallinput"
                                name="inflowCredit"
                                disabled
                              />
                            </div>
                          </div>
                        </td>
                        {/* ======== भेजान ========= */}
                        <td>
                          <div className="flex gap-2">
                            <div className="form-control">
                              <input
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total + Number(currentItem.sending650)),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                type="number"
                                className="smallinput"
                                name="sending"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total + Number(currentItem.sending550)),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                type="number"
                                className="smallinput"
                                name="sending"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total + Number(currentItem.sending330)),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                type="number"
                                disabled
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
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total + currentItem.sumRemainder650),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                type="number"
                                className="smallinput"
                                name="sumRemainder"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total + currentItem.sumRemainder550),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                type="number"
                                className="smallinput"
                                name="sumRemainder"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total + currentItem.sumRemainder330),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                type="number"
                                className="smallinput"
                                name="sumRemainder"
                                disabled
                              />
                            </div>
                          </div>
                        </td>
                        {/* ======== अन्तिम स्टॉक ========= */}
                        <td>
                          <div className="flex gap-2">
                            <div className="form-control">
                              <input
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.closingStock650)),
                                  0
                                )}
                                type="number"
                                className="smallinput"
                                name="closingStock"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.closingStock550)),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                type="number"
                                className="smallinput"
                                name="closingStock"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.closingStock330)),
                                  0
                                )}
                                type="number"
                                className="smallinput"
                                name="closingStock"
                                disabled
                              />
                            </div>
                          </div>
                        </td>
                        {/* ============= बिक्री ================ */}
                        <td>
                          <div className="flex gap-2">
                            <div className="form-control">
                              <input
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total = total + currentItem.sales650),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                type="number"
                                className="smallinput"
                                name="sales"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total = total + currentItem.sales550),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                type="number"
                                className="smallinput"
                                name="sales"
                                disabled
                              />
                            </div>

                            <div className="form-control">
                              <input
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total = total + currentItem.sales330),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                                type="number"
                                className="smallinput"
                                name="sales"
                                disabled
                              />
                            </div>
                          </div>
                        </td>
                        {/* ============= रेट ================ */}
                        <td>
                          <div className="flex gap-2">
                            <div className="form-control">
                              <input
                                disabled
                                type="number"
                                className="smallinput"
                                name="mainRate"
                              />
                            </div>

                            <div className="form-control">
                              <input
                                disabled
                                type="number"
                                className="smallinput"
                                name="mainRate"
                              />
                            </div>

                            <div className="form-control">
                              <input
                                disabled
                                type="number"
                                className="smallinput"
                                name="mainRate"
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
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.sales650) *
                                        Number(currentItem.mainRate650)),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="total330"
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.sales550) *
                                        Number(currentItem.mainRate550)),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="total330"
                                value={fristFormState.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(currentItem.sales330) *
                                        Number(currentItem.mainRate330)),
                                  0
                                )}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                              />
                            </div>
                          </div>
                        </td>
                        {/* ============= कुल योग ================ */}
                        <td>
                          <div className="form-control">
                            <input
                              type="number"
                              disabled
                              className="semiSmallInput"
                              name="grandTotal"
                              value={fristFormState.reduce(
                                (total, currentItem) =>
                                  (total =
                                    total +
                                    Number(currentItem.sales650) *
                                      Number(currentItem.mainRate650) +
                                    Number(currentItem.sales550) *
                                      Number(currentItem.mainRate550) +
                                    Number(currentItem.sales330) *
                                      Number(currentItem.mainRate330)),
                                0
                              )}
                              onChange={(event) =>
                                onChangeFristBackFormHandler(event)
                              }
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
                  onClick={() => addOneInFristFormHandler()}
                >
                  ADD 1
                </button>
                <button
                  className="dailyReportBtn"
                  onClick={() => addFiveInFristFormHandler()}
                >
                  ADD 5
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
                          strokeWidth="4"
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

              <div className="overflow-x-auto">
                <div className="mt-6">
                  <div className="overflow-x-auto">
                    <form>
                      <table className="table w-full">
                        <thead>
                          <tr>
                            <th>S.no</th>
                            <th></th>
                            <th>Brand Name/ ब्राण्ड</th>
                            <th>Total ml</th>
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
                            {/* <th>कुल योग</th> */}
                          </tr>
                        </thead>

                        <tbody>
                          {addOneSecondFormState.map((item, index) => {
                            return (
                              <AddOneSecondFormBack
                                handelSeconFormOnChange={
                                  handelSeconFormOnChange
                                }
                                handleRemoveFieldsBeer={handleRemoveFieldsBeer}
                                addOneSecondFormState={addOneSecondFormState}
                                key={index}
                                index={index}
                                item={item}
                              ></AddOneSecondFormBack>
                            );
                          })}
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-4">
                <button
                  className="dailyReportBtn mx-4"
                  onClick={() => addOneSecondFormHandler()}
                >
                  ADD 1
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* *********************************************************BREAK*********************************************************  */}
        <div className="flex overflow-x-auto">
          <div className="py-6">
            <h1 className="my-4">
              <span className="font-bold titleText">RML / आर.एम.एल</span>
            </h1>

            <form action="">
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>S.no</th>
                      <th></th>
                      <th>Brand Name/ ब्राण्ड</th>
                      <th>ml</th>
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
                          handleRemoveFieldsBackRml={handleRemoveFieldsBackRml}
                          onChangeRmlHandler={onChangeRmlHandler}
                          addRmlState={addRmlState}
                          setAddRmlState={setAddRmlState}
                        ></RmlFrom>
                      );
                    })}

                    <tr>
                      <th></th>
                      <th></th>
                      <td>
                        <div className="form-control">Total</div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="smallInput"
                            name="averageRate"
                            // value={item.averageRate}
                            // onChange={(e) => onChangeRmlHandler(e, index)}
                            disabled
                          />
                        </div>
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
                  onClick={() => addOneBtnHandler()}
                >
                  ADD 1
                </button>
                <button
                  className="dailyReportBtn"
                  onClick={() => addFiveBtnHandler()}
                >
                  ADD 5
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
                      <th></th>
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
                          handleRemoveFieldsPurchaseOut={
                            handleRemoveFieldsPurchaseOut
                          }
                          item={item}
                          key={index}
                          index={index}
                          purchesOutSideState={purchesOutSideState}
                        ></PurchaseOutSideFrom>
                      );
                    })}

                    <tr>
                      <td>Total</td>
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
                      <th></th>
                      <th>Reason / विवरण</th>
                      <th>रकम</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commissonState.map((item, index) => {
                      return (
                        <CommissonFrom
                          key={index}
                          index={index}
                          item={item}
                          handleRemoveFieldsCommission={
                            handleRemoveFieldsCommission
                          }
                          commissonState={commissonState}
                          onChangeCommison={onChangeCommison}
                        ></CommissonFrom>
                      );
                    })}

                    <tr>
                      <td>Total</td>
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
                      <td>
                        <input
                          type="number"
                          className="semiSmallInput"
                          name="amount"
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
                      <th></th>
                      <th>Name</th>
                      <th>Type</th>
                      <th>रकम</th>
                      <th>comment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cashReciveState?.map((item, index) => {
                      return (
                        <CashReciveFrom
                          key={index}
                          item={item}
                          handleRemoveFieldsCashBack={
                            handleRemoveFieldsCashBack
                          }
                          index={index}
                          onChangeCashRecive={onChangeCashRecive}
                          cashReciveState={cashReciveState}
                        ></CashReciveFrom>
                      );
                    })}

                    <tr>
                      <td>Total</td>
                      <td>
                        <div className="form-control">
                          <input
                            type="text"
                            className="semiSmallInput"
                            name="reson"
                            disabled
                          />
                        </div>
                      </td>
                      <td>
                        <div className="form-control">
                          <input
                            type="text"
                            className="semiSmallInput"
                            name="reson"
                            disabled
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
                        />
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
                      <th></th>
                      <th>Party Name/ पार्टी का नाम</th>
                      <th>Brand Name/ ब्राण्ड</th>
                      <th>Size</th>
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
                          handleRemoveFieldsShipping={
                            handleRemoveFieldsShipping
                          }
                          addShippingState={addShippingState}
                          onChangeShipping={onChangeShipping}
                        ></ShippingForm>
                      );
                    })}

                    <tr>
                      <th>Total</th>
                      <th></th>
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
                onClick={() => addOneShippingBtnHandler()}
              >
                ADD 1
              </button>
              <button
                className="dailyReportBtn"
                onClick={() => addFiveShippingBtnHandler()}
              >
                ADD 5
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
                      <th></th>
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
                          handleRemoveFieldsInflow={handleRemoveFieldsInflow}
                          onChangeBorrowingRml={onChangeBorrowingRml}
                          key={index}
                          item={item}
                          index={index}
                        ></InflowBorrowingRML>
                      );
                    })}

                    <tr>
                      <th>Total</th>
                      <th></th>
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
                      <th></th>
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
                          handleRemoveFieldsCredit={handleRemoveFieldsCredit}
                          craditDabitState={craditDabitState}
                          onChangeCarditDabit={onChangeCarditDabit}
                          index={index}
                        ></CraditDabitForm>
                      );
                    })}

                    <tr>
                      <th>Total</th>
                      <th></th>

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
                    strokeWidth="4"
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
