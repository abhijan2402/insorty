import React, { useContext } from "react";
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
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";

const BackDailyReport = () => {
  const { handleSubmit, isLoadingSubmit } = useHandelSubmitBackAPI();

  // ================== Frist Form============
  const {
   
    addOneInFristFormHandler,
    fristFormState,
   
    onChangeFristBackFormHandler,
    totalState,
   
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
   
    handelAddOneInRml,
    onChangeRmlHandler,
    setAddRmlState,
    handleRemoveFieldsBackRml,
  } = useRmlAdd();

  // ================== Purchase OutSide Form============
  const {
    purchesOutSideState,
   
    handelAddOnePurchesOutSide,
    onChangePurchesOutSide,
    handleRemoveFieldsPurchaseOut,
  } = usePurchesOutSideAdd();

  // ================== Commission Form============
  const {
    commissonState,
   
    handelAddOneCommison,
    onChangeCommison,
    handleRemoveFieldsCommission,
  } = useCommissonAdd();

  // ================== Cash Recive Form============
  const {
    cashReciveState,
   
    handelAddOneCashRecive,
    onChangeCashRecive,
    handleRemoveFieldsCashBack,
  } = useCashReciveAdd();

  // ================== Shipping Form============
  const {
    addShippingState,
    handleRemoveFieldsShipping,
    onChangeShipping,
    
    handelAddOneShipping,
  } = useShippingAdd();

  // ================== Inflow Borrowing RML Form============
  const {
    infolwBorrwingFormState,
    onChangeBorrowingRml,
    // handelSubmitBorrowingRml,
    handleRemoveFieldsInflow,
   
    handelAddOneBorrowingRml,
  } = useInfolwBorrowingRml();

  // ================== Credit Dabit Form============
  const {
    craditDabitState,
    onChangeCarditDabit,
    handleRemoveFieldsCredit,
    // handelSubmitCarditDabit,
   
    handelAddOneCarditDabit,
  } = useCarditDabit();

  // ********************************* add five button handler *********************************


  const addOneBtnHandler = () => {
    handelAddOneInRml();
    handelAddOnePurchesOutSide();
    handelAddOneCommison();
    handelAddOneCashRecive();
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

  const { salesMan, setSalesMan, drDate, setDrDate } =
    useContext(DataContextApi);
  // ********************************* submit mulitple api in handelSubmit  *********************************

  // console.log(fristFormState);

  return (
    <>
      <section className="mx-2">
      <form onSubmit={handleSubmit}>

        <div className="my-4 flex gap-4 items-center justify-center">
          <h1 className="font-bold md:text-2xl sm:text-sm text-center">
          बीयर
          </h1>

          <div className="my-4">
            <Link
              to="/user/dailyreport/front"
              className="commonBtn "
            >
                अंग्रेजी
            </Link>
            <Link
              to="/user/frontdailyreport/details"
              className="commonBtn  mx-4"
            >
              परचा
            </Link>
          </div>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <h1 className="font-bold ">सेल्समेन का नाम:- </h1>
          <input
            type="text"
            value={salesMan}
            onChange={(e) => {
              setSalesMan(e.target.value);
              localStorage.setItem("salesMan", e.target.value);
            }}
            className="smallinput wd-30"
          />

          <div className="flex  items-center">
            <DatePicker
              selected={new Date(drDate)}
              name="year"
              onChange={(data) => {
                setDrDate(new Date(data));
                console.log(data);
              }}
              dateFormat="dd/MM/yyyy"
              className="inputBox date"
              placeholderText={"dd/mm/yyyy"}
            />
          </div>
        </div>

        {/* *********************************************************BREAK*********************************************************  */}
        <div>
          <div className="py-6">
            <div>
              <>
                <div className="overflow-x-auto">
                  <table className="table commonTable">
                    <thead>
                      <tr>
                        <th> क्र. सं.</th>
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
                       <td ></td>
                        {/* ======== प्रारम्भिक स्टॉक ========= */}
                        <td>
                          <div className="flex justify-evenly">
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
                          <div className="flex ">
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
                          <div className="flex ">
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
                          <div className="flex justify-evenly">
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
                          <div className="flex ">
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
                          <div className="flex justify-evenly">
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
                          <div className="flex ">
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
                          <div className="flex ">
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
                          <div className="flex ">
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
                          <div className="flex ">
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
                          <div className="flex ">
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
                          <div className="flex ">
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
                          <div className="flex justify-evenly ">
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
                        <th>
                          <button
                            className="btn bg-[#AA237A] btn-sm"
                            onClick={() => addOneInFristFormHandler()}
                          >
                            ADD
                          </button>
                        </th>
                        <td></td>
                        <td>Total</td>
                        {/* ======== MRP Input ========= */}
                        <td>
                          <div className="flex ">
                            <div className="form-control"></div>

                            <div className="form-control"></div>

                            <div className="form-control"></div>
                          </div>
                        </td>
                        {/* ======== प्रारम्भिक स्टॉक ========= */}
                        <td>
                          <div className="flex ">
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
                          <div className="flex ">
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
                          <div className="flex ">
                            <div className="form-control"></div>

                            <div className="form-control"></div>

                            <div className="form-control"></div>
                          </div>
                        </td>

                        {/* ======== आमद (खरीद)-बा. ========= */}

                        <td>
                          <div className="flex ">
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
                          <div className="flex ">
                            <div className="form-control"></div>

                            <div className="form-control"></div>

                            <div className="form-control"></div>
                          </div>
                        </td>

                        {/* ======== आमद (उधारी) ========= */}

                        <td>
                          <div className="flex ">
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
                          <div className="flex ">
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
                          <div className="flex ">
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
                          <div className="flex ">
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
                          <div className="flex ">
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
                          <div className="flex ">
                            <div className="form-control"></div>

                            <div className="form-control"></div>

                            <div className="form-control"></div>
                          </div>
                        </td>
                        {/* ============= योग ================ */}
                        <td>
                          <div className="flex ">
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput wd-6"
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
                                className="smallinput wd-6"
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
                                className="smallinput wd-6"
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
                              className="smallinput wd-7"
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
              </>

              <div className="overflow-x-auto">
                <div className="mt-6">
                  <div className="overflow-x-auto">
                    <>
                      <table className="table commonTable">
                        <thead>
                          <tr>
                            <th> क्र. सं.</th>
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

                          <tr>
                            <th className="sticky">
                              <button
                                className="btn bg-[#AA237A] btn-sm"
                                onClick={() => addOneSecondFormHandler()}
                              >
                                ADD
                              </button>
                            </th>
                            <td></td>
                            <td>TOTAL</td>
                            <td>
                              <div className="form-control">
                              
                              </div>
                            </td>
                            {/* ======== MRP Input ========= */}
                            <td>
                              
                            </td>
                            <td>
                              <div className="form-control">
                                <input
                                  type="number"
                                  className="smallinput"
                            disabled
                                  name="startingStock"
                                  value={addOneSecondFormState.reduce(
                                    (total, currentItem) =>
                                      (total =
                                        total +
                                        Number(currentItem.startingStock)),
                                    0
                                  )}
                                  onChange={(e) => handelSeconFormOnChange(e)}
                                />
                              </div>
                            </td>
                            <td>
                              <div className="form-control">
                                <input
                                  type="number"
                                  className="smallinput"
                            disabled
                                  name="incomingPurchase"
                                  value={addOneSecondFormState.reduce(
                                    (total, currentItem) =>
                                      (total =
                                        total +
                                        Number(currentItem.incomingPurchase)),
                                    0
                                  )}
                                  onChange={(e) => handelSeconFormOnChange(e)}
                                />
                              </div>
                            </td>
                            {/* ======== प्रारम्भिक स्टॉक ========= */}
                            <td>
                              
                            </td>

                            {/* ======== आमद (खरीद)-दु. ========= */}

                            <td>
                              <div className="form-control">
                                <input
                                  type="number"
                                  className="smallinput"
                                  name="incomePurchase"
                            disabled
                                  value={addOneSecondFormState.reduce(
                                    (total, currentItem) =>
                                      (total =
                                        total +
                                        Number(currentItem.incomePurchase)),
                                    0
                                  )}
                                  onChange={(e) => handelSeconFormOnChange(e)}
                                />
                              </div>
                            </td>
                            {/* ======== आमद (खरीद)-बा. ========= */}

                            <td>
                              
                            </td>
                            {/* ======== आमद (उधारी) ========= */}

                            <td>
                              <div className="form-control">
                                <input
                                  type="number"
                                  className="smallinput"
                            disabled
                                  name="inflowCredit"
                                  value={addOneSecondFormState.reduce(
                                    (total, currentItem) =>
                                      (total =
                                        total +
                                        Number(currentItem.inflowCredit)),
                                    0
                                  )}
                                  onChange={(e) => handelSeconFormOnChange(e)}
                                />
                              </div>
                            </td>
                            {/* ======== भेजान ========= */}
                            <td>
                              <div className="form-control">
                                <input
                                  type="number"
                                  className="smallinput"
                            disabled
                                  name="sending"
                                  value={addOneSecondFormState.reduce(
                                    (total, currentItem) =>
                                      (total =
                                        total + Number(currentItem.sending)),
                                    0
                                  )}
                                  onChange={(e) => handelSeconFormOnChange(e)}
                                />
                              </div>
                            </td>
                            {/* ======== योग/शेष ========= */}
                            <td>
                              <div className="form-control">
                                <input
                                  type="number"
                                  className="smallinput"
                                  name="sumRemainder"
                                  value={addOneSecondFormState.reduce(
                                    (total, currentItem) =>
                                      (total =
                                        total +
                                        Number(currentItem.sumRemainder)),
                                    0
                                  )}
                                  onChange={(e) => handelSeconFormOnChange(e)}
                                  disabled
                                />
                              </div>
                            </td>
                            {/* ======== अन्तिम स्टॉक ========= */}
                            <td>
                              <div className="form-control">
                                <input
                                  type="number"
                                  className="smallinput"
                            disabled
                                  name="closingStock"
                                  value={addOneSecondFormState.reduce(
                                    (total, currentItem) =>
                                      (total =
                                        total +
                                        Number(currentItem.closingStock)),
                                    0
                                  )}
                                  onChange={(e) => handelSeconFormOnChange(e)}
                                />
                              </div>
                            </td>
                            {/* ============= बिक्री ================ */}
                            <td>
                              <div className="form-control">
                                <input
                                  type="number"
                                  className="smallinput"
                            disabled
                                  name="sales"
                                  value={addOneSecondFormState.reduce(
                                    (total, currentItem) =>
                                      (total =
                                        total + Number(currentItem.sales)),
                                    0
                                  )}
                                  onChange={(e) => handelSeconFormOnChange(e)}
                                  
                                />
                              </div>
                            </td>
                            {/* ============= रेट ================ */}
                            <td>
                              
                            </td>
                            {/* ============= योग ================ */}
                            <td>
                              <div className="form-control">
                                <input
                                  type="number"
                                  className="smallinput wd-5"
                                  name="total"
                                  value={addOneSecondFormState.reduce(
                                    (total, currentItem) =>
                                      (total =
                                        total + Number(currentItem.total)),
                                    0
                                  )}
                                  onChange={(e) => handelSeconFormOnChange(e)}
                                  disabled
                                />
                              </div>
                            </td>
                            {/* ============= कुल योग ================ */}
                          </tr>
                        </tbody>
                      </table>
                        <div className="my-8  leading-6">
                          <h4 className="text-[#AA237A] font-bold ">
                            Beer Total: {Number(JSON.parse(localStorage.getItem('totalFirstBack'))) + Number(localStorage.getItem('beerFormTotal'))}
                          </h4>
                        </div>
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* *********************************************************BREAK*********************************************************  */}
        <div className="flex  overflow-x-auto">
          <div className="py-6">
            <h1 className="my-4">
              <span className="font-bold titleText">RML / आर.एम.एल</span>
            </h1>

            <>
              <div >
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
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
                      <th>
                        <button
                          className="btn bg-[#AA237A] btn-sm"
                          onClick={() => addOneBtnHandler()}
                        >
                          ADD
                        </button>
                      </th>
                      <th></th>
                      <td>
                        <div className="form-control">Total</div>
                      </td>

                      <td>
                        <div className="form-control"></div>
                      </td>

                      <td>
                        <div className="form-control"></div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            // type="number"
                            className="smallinput"
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
                            className="smallinput"
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
                        <div className="form-control"></div>
                      </td>
                      {/* ======== आमद (उधारी) ========= */}

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput"
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
                        <div className="form-control"></div>
                      </td>
                      {/* ======== भेजान ========= */}
                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput"
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
                            className="smallinput"
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
                            className="smallinput"
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
                            className="smallinput"
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
                            className="smallinput"
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
                        <div className="form-control"></div>
                      </td>
                      {/* ============= योग ================ */}
                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput"
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
            </>
            {/******************** Add Button   ********************/}

            {/******************** Add Button   ********************/}
          </div>

          <div className="py-6">
            <h1 className="my-4">
              <span className="font-bold titleText">
                अंग्रेजी/बीयर/देशी/RML की आमद (खरीद बाहर से)
              </span>
            </h1>
              <div >
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <td></td>
                      <th>Party Name/ पार्टी का नाम</th>
                      <th>Brand Name/ ब्राण्ड</th>
                      <th>ML</th>
                      <th>संख्या</th>
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
                      <th className="sticky"> <button
                        className="sticky btn bg-[#AA237A] btn-sm"
                        onClick={() => addOneBtnHandler()}
                      >
                        ADD
                      </button></th>
                      <td>
                        <div className="form-control">Total</div>
                      </td>
                      <td>   

                        <div className="form-control"></div>
                      </td>
                      {/* ======== प्रारम्भिक स्टॉक ========= */}
                      <td>
                        <div className="form-control"></div>
                      </td>

                      {/* ======== आमद (खरीद)-दु. ========= */}

                      {/* ======== आमद (खरीद)-बा. ========= */}

                      <td>
                        <div className="form-control "></div>
                      </td>

                      <td>
                        <div className="form-control ">
                          <input
                            type="number"
                            className="smallinput"
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

                      <td>
                        <div className="form-control"></div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput wd-7"
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
                        <div className="form-control"></div>
                      </td>
                      {/* ======== आमद (उधारी) ========= */}
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>

          <div className="py-6">
            <h1 className="my-4 specialwidth">
              <span className="font-bold titleText ">
                कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि
              </span>
            </h1>
              <div >
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <td></td>
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
                      <th className="sticky"> <button
                        className="sticky btn bg-[#AA237A] btn-sm"
                        onClick={() => addOneBtnHandler()}
                      >
                        ADD
                      </button></th>
                      <td>
                        <div className="form-control">Total</div>
                      </td>
                      <td>
                        <div className="form-control"></div>
                      </td>

                      <td>
                        <input
                          type="number"
                          className="smallinput wd-6"
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
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>

          <div className="py-6">
            <h1 className="my-4 specialwidth">
              <span className="font-bold titleText ">
                पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति
              </span>
            </h1>
           
              <div >
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <td></td>
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
                      <th className="sticky"> <button
                        className="sticky btn bg-[#AA237A] btn-sm"
                        onClick={() => addOneBtnHandler()}
                      >
                        ADD
                      </button></th>
                      <td>
                        <div className="form-control">Total</div>
                      </td>
                      <td>
                        <div className="form-control"></div>
                      </td>
                      <td>
                        <div className="form-control"></div>
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
                          className="smallinput wd-7"
                        />
                      </td>
                      <td>
                        <div className="form-control"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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

            <>
              <div >
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <th></th>
                      <th>Party Name/ पार्टी का नाम</th>
                      <th>Brand Name/ ब्राण्ड</th>
                      <th>ML</th>
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
                      <th>
                        <button
                          className="btn bg-[#AA237A] btn-sm"
                          onClick={() => addOneShippingBtnHandler()}
                        >
                          ADD
                        </button>
                      </th>
                      <th>Total</th>
                      <td>
                        <div className="form-control"></div>
                      </td>

                      <td>
                        <div className="form-control"></div>
                      </td>

                      <td>
                        <div className="form-control"></div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput"
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
                        <div className="form-control"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          </div>

          <div className="py-6">
            <h1 className="my-4">
              <span className="font-bold titleText">
                अंग्रेजी/बीयर/देशी/RML का भेजान
              </span>
            </h1>
          
              <div >
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <th></th>
                      <th>Party Name/ पार्टी का नाम</th>
                      <th>Brand Name/ ब्राण्ड</th>
                      <th>संख्या</th>
                      <th>Quantity</th>
                      {/* <th>रेट</th>
                      <th>योग</th> */}
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
                      <th className="sticky">   <button
                        className="btn bg-[#AA237A] btn-sm"
                        onClick={() => addOneShippingBtnHandler()}
                      >
                        ADD
                      </button></th>
                      <td>
                        <div className="form-control">Total</div>
                      </td>
                      <td>
                        <div className="form-control"></div>
                      </td>

                      <td>
                        <div className="form-control"></div>
                      </td>
                      <td>
                        <div className="form-control "></div>
                      </td>
                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput"
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

                      {/* <td>
                        <div className="form-control"></div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput"
                            name="total"
                            value={infolwBorrwingFormState.reduce(
                              (total, currentItem) =>
                                (total = total + Number(currentItem.total)),
                              0
                            )}
                            disabled
                          />
                        </div>
                      </td> */}

                      <td>
                        <div className="form-control"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>

          <div className="py-6">
            <h1 className="my-4">
              <span className="font-bold titleText">उधारी/नामे</span>
            </h1>

         
              <div >
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
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
                      <th className="sticky">    <button
                        className="btn bg-[#AA237A] btn-sm"
                        onClick={() => addOneShippingBtnHandler()}
                      >
                        ADD
                      </button></th>
                      <td>
                        <div className="form-control">Total</div>
                      </td>

                      <td>
                        <div className="form-control"></div>
                      </td>

                      <td>
                        <div className="form-control"></div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput wd-9"
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
                        <div className="form-control"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
        </div>
        {/* *********************************************************BREAK*********************************************************  */}

        <div className="py-6">
        
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
        </div>

        <div className="py-6 ">
         
            <h1 className="my-4">
              <span className="font-bold titleText">रफ जगह</span>
            </h1>
            <Comment
              commentState={commentState}
              handleCommentChange={handleChangeComment}
            ></Comment>
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
              {/* <button className="dailyReportBtn" onClick={() => handleSubmit()}>
                Submit
              </button> */}
                <input type="submit" className="dailyReportBtn" />
            </>
          )}
        </div>
        </form>
      </section>
    </>
  );
};

export default BackDailyReport;
