import React, { useContext, useState, useRef } from "react";
import "../Style/DailyReport.scss";
import RmlFrom from "./RmlForm/RmlFrom";
import { Link } from "react-router-dom";
import PurchaseOutSideFrom from "./PurchaseOutSideForm/PurchaseOutSideFrom";
import ShippingForm from "./InflowBorrowingBack/ShippingForm/ShippingForm";
import InflowBorrowingRML from "./InflowBorrowingBack/InflowBorrowingRML/InflowBorrowingRML";
import FinalReport from "./FinalReport/FinalReport";
import Comment from "./Comment/Comment";
import AddOneFristFromBack from "./FristFormBack/AddOneFristFromBack/AddOneFristFromBack";
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
import useHandelSubmitBackAPI from "../../../../Hooks/useHandelSubmitBackAPI/useHandelSubmitBackAPI";
import AddOneSecondFormBack from "./FristFormBack/AddOneFristFromBack/AddOneSecondFormBack";
import DatePicker from "react-datepicker";
import { useQuery } from "@tanstack/react-query";
import { TextField } from "@mui/material";
import { Autocomplete } from "@mui/material";
import Loader from "../../../../Components/Loader/Loader";

const BackDailyReport = () => {
  const { handleSubmit, isLoadingSubmit } = useHandelSubmitBackAPI();
  const purchaseOutsideRef = useRef(null);
  const commissionRef = useRef(null);
  const cashReturnRef = useRef(null);
  const purchaseBorrowRef = useRef(null);
  const sendingRef = useRef(null);
  const BorrowingRef = useRef(null);
  const tableContainer = useRef(null);
  const containerBottom = useRef(null);

  const scrollToComponent = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start",
    });
  };

  console.log(
    Number(JSON.parse(localStorage.getItem("totalFirstBack"))) +
      Number(localStorage.getItem("beerFormTotal")).toFixed(2),
    "I_AM_FINALLLLLLLL"
  );
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
    hasMoreBeer,
    hasMoreBeerSmall,
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
    handleRemoveFieldsInflow,
    handelAddOneBorrowingRml,
  } = useInfolwBorrowingRml();

  // ================== Credit Dabit Form============
  const {
    craditDabitState,
    onChangeCarditDabit,
    handleRemoveFieldsCredit,
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

  const { commentState, handleChangeComment } = useComment();

  const { salesMan, setSalesMan, drDate, setDrDate } =
    useContext(DataContextApi);

  const {
    data: salaryData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["salaryData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getAllEmployees",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            cookie_token: localStorage.getItem("token"),
          },
        }
      );
      const data = await res.json();
      console.log(data.data);
      return data.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  const scrollToTable = (e, tableId, tablesContainer) => {
    e.preventDefault();
    if (tablesContainer.current) {
      const container = tablesContainer.current;

      // Get the target table based on the provided tableId
      const targetTable = document.getElementById(tableId);

      if (container && targetTable) {
        // Calculate the scroll position to center the target table
        const containerWidth = container.clientWidth;
        const tableWidth = targetTable.clientWidth;
        const scrollPosition = (tableWidth - containerWidth) / 2;

        // Scroll the container to the target table
        container.scrollLeft =
          targetTable.offsetLeft - container.offsetLeft - scrollPosition;
      }
    }
  };
  // ********************************* submit mulitple api in handelSubmit  *********************************

  return (
    <>
      <div
        className="py-0 sticky top-0 bg-white z-5000"
        style={{ zIndex: 1000 }}
      >
        <div className="flex gap-4 items-center justify-center border-black">
          <h1 className="font-bold md:text-2xl sm:text-sm text-center">
            बीयर ओर अन्य
          </h1>

          <Link to="/user/dailyreport/front" className="commonBtn ">
            अंग्रेजी
          </Link>
          <Link to="/user/frontdailyreport/details" className="commonBtn  mx-4">
            पर्चा
          </Link>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <h1 className="font-bold ">सेल्समेन :- </h1>

          <Autocomplete
            size="small"
            style={{
              width: "20rem",
              border: "1px solid black",
              borderRadius: "5px",
            }}
            options={
              salaryData.length > 0
                ? salaryData.filter((prev) => prev.isActive === true)
                : ["no options"]
            }
            getOptionLabel={(option) => (option ? option.name : "")}
            onChange={(event, value) => {
              if (value) {
                setSalesMan(value.name);
              } else {
                setSalesMan("");
              }
            }}
            renderInput={(params) => (
              <TextField
                required
                {...params}
                className="dailyReportInput"
                inputProps={{ ...params.inputProps, value: salesMan }}
                onChange={(event) => {
                  setSalesMan(event.target.value);
                }}
              />
            )}
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
        <div className="divider my-2"></div>
      </div>
      <section className="mx-2">
        <form onSubmit={handleSubmit}>
          {/* *********************************************************BREAK*********************************************************  */}
          <div>
            <div className="py-6">
              <div>
                <>
                  <div className="overflow-x-auto">
                    <table className="table commonTable">
                      <tbody>
                        <tr>
                          <th className="text-xs" rowSpan={2}>
                            {" "}
                            क्र. सं.
                          </th>
                          <th className="text-xs" rowSpan={2}></th>
                          <th className="text-xs" rowSpan={2}>
                            {" "}
                            ब्राण्ड
                          </th>
                          <th className="text-xs">औसत रेट</th>
                          <th className="text-xs">प्रारम्भिक स्टॉक</th>
                          <th className="text-xs">आमद (खरीद) - दु.</th>
                          <th className="text-xs">खरीद रेट - दु.</th>
                          <th className="text-xs">आमद (खरीद) - बा.</th>
                          <th className="text-xs">खरीद रेट - बा.</th>
                          <th className="text-xs">आमद (उधारी)</th>
                          <th className="text-xs">भेजान</th>
                          <th className="text-xs">योग/शेष</th>
                          <th className="text-xs">अन्तिम स्टॉक</th>
                          <th className="text-xs">बिक्री</th>
                          <th className="text-xs">रेट</th>
                          <th className="text-xs">योग</th>
                          <th className="text-xs" rowSpan={2}>
                            कुल योग
                          </th>
                        </tr>

                        <tr>
                          {/* ======== प्रारम्भिक स्टॉक ========= */}
                          <td>
                            <div className="flex justify-evenly">
                              <div>
                                <label className="label">
                                  <span className="label-text">650ml</span>
                                </label>
                              </div>

                              <div>
                                <label className="label">
                                  <span className="label-text">500ml</span>
                                </label>
                              </div>

                              <div>
                                <label className="label">
                                  <span className="label-text">330ml</span>
                                </label>
                              </div>
                            </div>
                          </td>

                          <td>
                            <div className="flex justify-around	">
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">650ml</span>
                                </label>
                              </div>

                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">500ml</span>
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
                            <div className="flex justify-around	">
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">650ml</span>
                                </label>
                              </div>

                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">500ml</span>
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
                                  <span className="label-text">500ml</span>
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
                            <div className="flex justify-around	">
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">650ml</span>
                                </label>
                              </div>

                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">500ml</span>
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
                                  <span className="label-text">500ml</span>
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
                            <div className="flex justify-around	">
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">650ml</span>
                                </label>
                              </div>

                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">500ml</span>
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
                            <div className="flex justify-around	">
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">650ml</span>
                                </label>
                              </div>

                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">500ml</span>
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
                            <div className="flex justify-around	">
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">650ml</span>
                                </label>
                              </div>

                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">500ml</span>
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
                            <div className="flex justify-around	">
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">650ml</span>
                                </label>
                              </div>

                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">500ml</span>
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
                            <div className="flex justify-around	">
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">650ml</span>
                                </label>
                              </div>

                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">500ml</span>
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
                            <div className="flex justify-around	">
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">650ml</span>
                                </label>
                              </div>

                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">500ml</span>
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
                                  <span className="label-text">500ml</span>
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
                              onClick={(e) => addOneInFristFormHandler(e)}
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
                                        Number(
                                          currentItem.incomingPurchase650
                                        )),
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
                                        Number(
                                          currentItem.incomingPurchase550
                                        )),
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
                                        Number(
                                          currentItem.incomingPurchase330
                                        )),
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
                                  disabled
                                  value={fristFormState
                                    .reduce(
                                      (total, currentItem) =>
                                        (total =
                                          total +
                                          Number(currentItem.sales650) *
                                            Number(currentItem.mainRate650)),
                                      0
                                    )
                                    .toFixed(2)}
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
                                  disabled
                                  value={fristFormState
                                    .reduce(
                                      (total, currentItem) =>
                                        (total =
                                          total +
                                          Number(currentItem.sales550) *
                                            Number(currentItem.mainRate550)),
                                      0
                                    )
                                    .toFixed(2)}
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
                                  disabled
                                  value={fristFormState
                                    .reduce(
                                      (total, currentItem) =>
                                        (total =
                                          total +
                                          Number(currentItem.sales330) *
                                            Number(currentItem.mainRate330)),
                                      0
                                    )
                                    .toFixed(2)}
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
                                value={fristFormState
                                  .reduce(
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
                                  )
                                  .toFixed(2)}
                                onChange={(event) =>
                                  onChangeFristBackFormHandler(event)
                                }
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div
                      className={hasMoreBeer === true ? "" : "displayHidden"}
                    >
                      Loading data...
                    </div>
                  </div>
                </>

                <div>
                  <>
                    <div className="mt-6 ">
                      <div className="overflow-x-auto">
                        <table className="table commonTable ">
                          <thead>
                            <tr>
                              <th className="text-xs"> क्र. सं.</th>
                              <th className="text-xs"></th>
                              <th className=" text-xs"> ब्राण्ड</th>
                              <th className="text-xs">ml</th>
                              <th className="text-xs">औसत रेट</th>
                              <th className="whitespace-pre-wrap text-xs">
                                प्रारम्भिक स्टॉक
                              </th>
                              <th className="whitespace-pre-wrap  text-xs">
                                आमद (खरीद) - दु.
                              </th>
                              <th className="whitespace-pre-wrap  text-xs">
                                खरीद रेट - दु.
                              </th>
                              <th className="whitespace-pre-wrap  text-xs">
                                आमद (खरीद) - बा.
                              </th>
                              <th className="whitespace-pre-wrap  text-xs">
                                खरीद रेट - बा.
                              </th>
                              <th className="whitespace-pre-wrap  text-xs">
                                आमद (उधारी)
                              </th>
                              <th className="text-xs">भेजान</th>
                              <th className=" text-xs">योग/शेष</th>
                              <th className="whitespace-pre-wrap text-xs">
                                अन्तिम स्टॉक
                              </th>
                              <th className="text-xs">बिक्री</th>
                              <th className="text-xs">रेट</th>
                              <th className="text-xs">योग</th>
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
                                  handleRemoveFieldsBeer={
                                    handleRemoveFieldsBeer
                                  }
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
                                  onClick={(e) => addOneSecondFormHandler(e)}
                                >
                                  ADD
                                </button>
                              </th>
                              <td></td>
                              <td>Total</td>
                              <td>
                                <div className="form-control"></div>
                              </td>
                              {/* ======== MRP Input ========= */}
                              <td></td>
                              <td>
                                <div className="form-control items-center">
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
                                <div className="form-control items-center">
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
                              <td></td>

                              {/* ======== आमद (खरीद)-दु. ========= */}

                              <td>
                                <div className="form-control items-center">
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

                              <td></td>

                              <td>
                                <div className="form-control items-center">
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
                                <div className="form-control items-center">
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
                                <div className="form-control items-center">
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
                                <div className="form-control items-center">
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
                                <div className="form-control items-center">
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
                              <td></td>
                              {/* ============= योग ================ */}
                              <td>
                                <div className="form-control items-center">
                                  <input
                                    type="number"
                                    className="smallinput wd-7"
                                    name="total"
                                    value={addOneSecondFormState
                                      .reduce(
                                        (total, currentItem) =>
                                          (total =
                                            total + Number(currentItem.total)),
                                        0
                                      )
                                      .toFixed(2)}
                                    onChange={(e) => handelSeconFormOnChange(e)}
                                    disabled
                                  />
                                </div>
                              </td>
                              {/* ============= कुल योग ================ */}
                            </tr>
                          </tbody>
                        </table>
                        <div
                          className={
                            hasMoreBeerSmall === true ? "" : "displayHidden"
                          }
                        >
                          Loading data...
                        </div>
                      </div>
                    </div>
                  </>
                </div>
                <div className="mt-3 leading-6">
                  <h4 className="text-[#AA237A] font-bold ">
                    Total:{" "}
                    {Number(
                      JSON.parse(localStorage.getItem("totalFirstBack"))
                    ) + Number(localStorage.getItem("beerFormTotal"))}
                    .00
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* *********************************************************BREAK*********************************************************  */}
          <div className="flex  overflow-x-auto" ref={tableContainer}>
            <div className="py-6">
              <h1 className="my-4">
                <span className="font-bold titleText">देशी / RML</span>
              </h1>

              <>
                <div>
                  <table className="table commonTable" id="rmlTable">
                    <thead>
                      <tr>
                        <th className="text-xs"> क्र. सं.</th>
                        <th className="text-xs h-14"></th>
                        <th className="text-xs"> ब्राण्ड</th>
                        <th className="text-xs">ml</th>
                        <th className="text-xs">औसत रेट</th>
                        <th className="whitespace-pre-wrap text-xs">
                          प्रारम्भिक स्टॉक
                        </th>
                        <th className="whitespace-pre-wrap text-xs">
                          आमद (खरीद) - दु.
                        </th>
                        <th className="whitespace-pre-wrap text-xs">
                          खरीद रेट - दु.
                        </th>
                        <th className="whitespace-pre-wrap text-xs">
                          आमद (खरीद) - बा.
                        </th>
                        <th className="whitespace-pre-wrap text-xs">
                          खरीद रेट - बा.
                        </th>
                        <th className="whitespace-pre-wrap text-xs">
                          आमद (उधारी)
                        </th>
                        <th className="text-xs">भेजान</th>
                        <th className="text-xs">योग/शेष</th>
                        <th className="whitespace-pre-wrap text-xs">
                          अन्तिम स्टॉक{" "}
                        </th>
                        <th className="text-xs">बिक्री</th>
                        <th className="text-xs">रेट</th>
                        <th className="text-xs">रकम</th>
                      </tr>
                    </thead>

                    <tbody>
                      {addRmlState.map((item, index) => {
                        return (
                          <RmlFrom
                            key={index}
                            item={item}
                            index={index}
                            handleRemoveFieldsBackRml={
                              handleRemoveFieldsBackRml
                            }
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
                            onClick={(e) => {
                              scrollToTable(e, "rmlTable", tableContainer);
                              handelAddOneInRml(e);
                            }}
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
                          <div className="form-control items-center">
                            <input
                              // type="number"
                              className="smallinput wd-5"
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
                          <div className="form-control items-center">
                            <input
                              type="number"
                              className="smallinput wd-5"
                              name="incomingPurchase"
                              value={addRmlState.reduce(
                                (total, currentItem) =>
                                  (total =
                                    total +
                                    Number(currentItem.incomingPurchase)),
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
                          <div className="form-control items-center">
                            <input
                              type="number"
                              className="smallinput wd-5"
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
                          <div className="form-control items-center">
                            <input
                              type="number"
                              className="smallinput wd-5"
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
                          <div className="form-control items-center">
                            <input
                              type="number"
                              className="smallinput wd-5"
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
                          <div className="form-control items-center">
                            <input
                              type="number"
                              className="smallinput wd-5"
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
                          <div className="form-control items-center">
                            <input
                              type="number"
                              className="smallinput wd-5"
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
                          <div className="form-control items-center">
                            <input
                              type="number"
                              className="smallinput wd-5"
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
                          <div className="form-control items-center">
                            <input
                              type="number"
                              className="smallinput wd-11"
                              name="cost"
                              value={addRmlState
                                .reduce(
                                  (total, currentItem) =>
                                    (total = total + Number(currentItem.cost)),
                                  0
                                )
                                .toFixed(2)}
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
              <div id="purchaseOutsideTable">
                <table
                  className="table commonTable"
                  ref={purchaseOutsideRef}
                  onFocus={() => scrollToComponent(purchaseOutsideRef)}
                >
                  <thead>
                    <tr>
                      <th className="text-s" style={{}}>
                        {" "}
                        क्र. सं.
                      </th>

                      <td></td>
                      <th className="text-xs h-14"> पार्टी का नाम</th>
                      <th className="text-xs p-4">ब्राण्ड</th>
                      <th className="text-xs">ML</th>
                      <th className="text-xs">संख्या</th>
                      <th className="text-xs">रेट</th>
                      <th className="text-xs">रकम</th>

                      <th className="text-xs">टिप्पणी</th>
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
                      <th className="sticky border-2 border-black">
                        {" "}
                        <button
                          className="sticky btn bg-[#AA237A] btn-sm"
                          onClick={(e) => {
                            scrollToTable(
                              e,
                              "purchaseOutsideTable",
                              tableContainer
                            );
                            handelAddOnePurchesOutSide(e);
                          }}
                        >
                          ADD
                        </button>
                      </th>
                      <td>
                        <div className="form-control"></div>
                      </td>
                      <td>
                        <div className="form-control">Total</div>
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

                      <td></td>

                      <td>
                        <div className="form-control ">
                          <input
                            type="number"
                            className="smallinput"
                            name="total"
                            value={purchesOutSideState
                              .reduce(
                                (total, currentItem) =>
                                  (total = total + Number(currentItem.total)),
                                0
                              )
                              .toFixed(2)}
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
              <h1 className="my-4">
                <span className="font-bold titleText ">
                  कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि
                </span>
              </h1>
              <div>
                <table
                  className="table commonTable"
                  ref={commissionRef}
                  onFocus={() => scrollToComponent(commissionRef)}
                >
                  <thead>
                    <tr>
                      <th className="text-xs h-14"> क्र. सं.</th>
                      <td className="text-xs"></td>
                      <th className="text-xs"> विवरण</th>
                      <th className="text-xs">रकम</th>
                      <th className="text-xs">विवरण</th>
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
                      <th className="sticky border-2 border-black">
                        {" "}
                        <button
                          className="sticky btn bg-[#AA237A] btn-sm"
                          onClick={(e) => handelAddOneCommison(e)}
                        >
                          ADD
                        </button>
                      </th>
                      <td>
                        <div className="form-control"></div>
                      </td>
                      <td>
                        <div className="form-control">Total</div>
                      </td>

                      <td>
                        <input
                          type="number"
                          className="smallinput wd-6"
                          name="amount"
                          value={commissonState
                            .reduce(
                              (total, currentItem) =>
                                (total = total + Number(currentItem.amount)),
                              0
                            )
                            .toFixed(2)}
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

              <div>
                <table
                  className="table commonTable"
                  ref={cashReturnRef}
                  onFocus={() => scrollToComponent(cashReturnRef)}
                >
                  <thead>
                    <tr>
                      <th className="text-xs"> क्र. सं.</th>
                      <td className="text-xs"></td>
                      <th className="text-xs h-14">प्रकार</th>
                      <th className="text-xs">पार्टी का नाम</th>
                      <th className="text-xs">रकम</th>
                      <th className="text-xs">विवरण</th>
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
                      <th className="sticky border-2 border-black">
                        {" "}
                        <button
                          className="sticky btn bg-[#AA237A] btn-sm "
                          onClick={(e) => handelAddOneCashRecive(e)}
                        >
                          ADD
                        </button>
                      </th>
                      <td>
                        <div className="form-control"></div>
                      </td>
                      <td>
                        <div className="form-control">Total</div>
                      </td>
                      <td>
                        <div className="form-control"></div>
                      </td>

                      <td>
                        <input
                          type="number"
                          name="amount"
                          value={cashReciveState
                            .reduce(
                              (total, currentItem) =>
                                (total = total + Number(currentItem.amount)),
                              0
                            )
                            .toFixed(2)}
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

          <div className="flex overflow-x-auto " ref={containerBottom}>
            <div className="py-6">
              <h1 className="my-4">
                <span className="font-bold titleText">
                  अंग्रेजी/बीयर/देशी/RML की आमद (उधारी)
                </span>
              </h1>

              <>
                <div>
                  <table
                    id="borrowedStock"
                    className="table commonTable"
                    ref={purchaseBorrowRef}
                    onFocus={() => scrollToComponent(purchaseBorrowRef)}
                  >
                    <thead>
                      <tr>
                        <th className="text-xs border-2 border-black">
                          {" "}
                          क्र. सं.
                        </th>
                        <th className="text-xs"></th>
                        <th className="text-xs">पार्टी का नाम</th>
                        <th className="text-xs"> ब्राण्ड</th>
                        <th className="text-xs">ML</th>
                        <th className="text-xs">संख्या</th>
                        <th className="text-xs">टिप्पणी</th>
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
                            onClick={(e) => {
                              handelAddOneShipping(e);
                            }}
                          >
                            ADD
                          </button>
                        </th>
                        <td></td>
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
                              className="smallinput"
                              name="theNumber"
                              value={addShippingState.reduce(
                                (total, currentItem) =>
                                  (total =
                                    total + Number(currentItem.theNumber)),
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

              <div>
                <table
                  id="sending"
                  className="table commonTable"
                  ref={sendingRef}
                  onFocus={() => scrollToComponent(sendingRef)}
                >
                  <thead>
                    <tr>
                      <th className="text-xs"> क्र. सं.</th>
                      <th></th>
                      <th className="text-xs"> पार्टी का नाम</th>
                      <th className="text-xs"> ब्राण्ड</th>
                      <th className="text-xs">ML</th>
                      <th className="text-xs">संख्या</th>
                      <th className="text-xs">टिप्पणी</th>
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
                      <th className="sticky">
                        {" "}
                        <button
                          className="btn bg-[#AA237A] btn-sm"
                          onClick={(e) => {
                            handelAddOneBorrowingRml(e);
                          }}
                        >
                          ADD
                        </button>
                      </th>
                      <td>
                        <div className="form-control"></div>
                      </td>
                      <td>
                        <div className="form-control">Total</div>
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

              <div>
                <table
                  className="table commonTable"
                  ref={BorrowingRef}
                  onFocus={() => scrollToComponent(BorrowingRef)}
                >
                  <thead>
                    <tr>
                      <th className="text-xs"> क्र. सं.</th>
                      <th></th>
                      <th className="text-xs">प्रकार</th>
                      <th className="text-xs">पार्टी का नाम</th>
                      <th className="text-xs">रकम</th>
                      <th className="text-xs">टिप्पणी</th>
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
                      <th className="sticky">
                        {" "}
                        <button
                          className="btn bg-[#AA237A] btn-sm"
                          onClick={(e) => handelAddOneCarditDabit(e)}
                        >
                          ADD
                        </button>
                      </th>
                      <td>
                        <div className="form-control"></div>
                      </td>

                      <td>
                        <div className="form-control">Total</div>
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
                            value={craditDabitState
                              .reduce(
                                (total, currentItem) =>
                                  (total = total + Number(currentItem.amount)),
                                0
                              )
                              .toFixed(2)}
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
            {isLoadingSubmit === true ? (
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
                <input type="submit" className="btn commonBtn" />
              </>
            )}
          </div>
        </form>
      </section>
    </>
  );
};

export default BackDailyReport;
