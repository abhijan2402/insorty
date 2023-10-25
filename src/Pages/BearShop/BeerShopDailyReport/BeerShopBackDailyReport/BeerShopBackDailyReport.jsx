import React, { useContext, useState, useEffect,useRef } from "react";
import "../Style/DailyReport.scss";
import { Link } from "react-router-dom";
import PurchaseOutSideFrom from "../../../Users/DailyReport/BackDailyReport/PurchaseOutSideForm/PurchaseOutSideFrom";
import usePurchesOutSideAdd from "../../../../Hooks/usePurchesOutSideAdd";
import ShippingForm from "../../../Users/DailyReport/BackDailyReport/InflowBorrowingBack/ShippingForm/ShippingForm";
import CommissionForm from "../../../Users/DailyReport/BackDailyReport/CommissonForm/CommissionForm";
import CreditDabitForm from "../../../Users/DailyReport/BackDailyReport/InflowBorrowingBack/CraditDabitForm.jsx/CreditDabitForm";
import CashReciveForm from "../../../Users/DailyReport/BackDailyReport/CashReciveForm/CashReciveForm";
import useShippingAdd from "../../../../Hooks/useShippingAdd";
import useCommissonAdd from "../../../../Hooks/useCommissonAdd";
import useCarditDabit from "../../../../Hooks/useCarditDabit";
import useCashReciveAdd from "../../../../Hooks/useCashReciveAdd";
import useBeerShopBackSubmit from "../../../../Hooks/useBeerShopBackSubmit/useBeerShopBackSubmit";
import { DataContextApi } from "../../../../Context/DataContext";
import DatePicker from "react-datepicker";
import { Autocomplete, TextField } from "@mui/material";
import FinalReport from "../../../Users/DailyReport/BackDailyReport/FinalReport/FinalReport";
import useGetDailyReport from "../../../../Hooks/useGetDailyReport";
import axios from "axios";
import swal from "sweetalert";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader"; 

const BackDailyReport = () => {
  const token = localStorage.getItem('token')
  const sixthFomeDataTemp = {
    theDate: "",
    price: 0,
    details: "",
  };
  const [options, setOptions] = useState([]);

  const purchaseBorrowRef = useRef(null)
  const commissionRef = useRef(null)
  const cashReturnRef = useRef(null)
  const extraRef = useRef(null)

  const scrollToComponent = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth',block:"center",inline:"start" });
  };

  const fetchOptions = async (query) => {
    await axios({
      url: `${process.env.REACT_APP_API_URL}/shop/getAllParentLiquors?q=${query}&page=0&pagesize=30`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },
    })
      .then((response) => {
        setOptions(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (event, value) => {
    fetchOptions(value);
  };


  const [sixthFormState, setSixthFormState] = useState([sixthFomeDataTemp]);

  const sixthFormOnchange = (e, index) => {
    const sixthFormHandler = sixthFormState.map((sixth, i) => {
      if (index === i) {
        return Object.assign(sixth, { [e.target.name]: e.target.value });
      } else {
        return sixth;
      }
    });
    setSixthFormState(sixthFormHandler);
    localStorage.setItem("vegitableAndOther", JSON.stringify(sixthFormState));
    localStorage.setItem(
      "vegitableAndOtherTotal",
      JSON.stringify(
        sixthFormState.reduce(
          (total, curr) => (total = total + Number(curr.price)),
          0
        )
      )
    );
  };

  const addOneSixthForm = (e) => {
    e.preventDefault()
    setSixthFormState([...sixthFormState, sixthFomeDataTemp]);
  };

  const handleRemoveSixthForm = index => {
    const values = [...sixthFormState];
    values.splice(index, 1);
    setSixthFormState(values);
    localStorage.setItem("vegitableAndOther", JSON.stringify(values))
    localStorage.setItem(
      "vegitableAndOther",
      JSON.stringify(
        values.reduce(
          (total, currentItem) => (total = total + Number(currentItem.price)),
          0
        )
      )
    );
  };

  const { salesMan, setSalesMan, drDate, setDrDate } =
    useContext(DataContextApi);

    

  // ================== Purchase OutSide Form============
  const {
    purchesOutSideState,
    handelAddOnePurchesOutSide,
    onChangePurchesOutSide,
    handleRemoveFieldsPurchaseOut,
  } = usePurchesOutSideAdd();

  // ================== Shipping Form============
  const {
    addShippingState,
    handleRemoveFieldsShipping,
    onChangeShipping,
    handelAddOneShipping,
  } = useShippingAdd();
  // ================== Commission Form============
  const {
    commissonState,
    handelAddOneCommison,
    onChangeCommison,
    handleRemoveFieldsCommission,
  } = useCommissonAdd();

  // ================== Credit Dabit Form============
  const {
    craditDabitState,
    onChangeCarditDabit,
    handleRemoveFieldsCredit,
    // handelSubmitCarditDabit,
    handelAddOneCarditDabit,
  } = useCarditDabit();

  // ================== Cash Recive Form============
  const {
    cashReciveState,

    handelAddOneCashRecive,
    onChangeCashRecive,
    handleRemoveFieldsCashBack,
  } = useCashReciveAdd();

  const addOneBtnHandler = () => {
    handelAddOnePurchesOutSide();
    handelAddOneShipping();
    handelAddOneCommison();
  };

  const addOneShippingBtnHandler = () => {
    handelAddOneCarditDabit();
    addOneSixthForm();

    handelAddOneCashRecive();
  };

  const { handleSubmit, isLoadingSubmit } = useBeerShopBackSubmit();

  const addBarCommissionDataTamp = {
    barandName: "",
    size: {
      sizes: [
        {
          _id: null,
          currentStock: 0,
          quantityInML: 750,
        },
        {
          _id: null,
          currentStock: 0,
          quantityInML: 375,
        },
        {
          _id: null,
          currentStock: 0,
          quantityInML: 180,
        },
      ],
    },
    ml: 750,
    quantity: 0,
    amount: 0,
    comment: "",
  };

  const [addBarCommissionData, setAddBarCommissionData] = useState([
    addBarCommissionDataTamp,
  ]);

  const onChangeBarCommission = (e, index) => {
    const barCommissionHandler = addBarCommissionData.map((bar, i) => {
      if (index === i) {
        return Object.assign(bar, { [e.target.name]: e.target.value });
      } else {
        return bar;
      }
    });
    setAddBarCommissionData(barCommissionHandler);
    localStorage.setItem("barCommission", JSON.stringify(addBarCommissionData));
    localStorage.setItem(
      "barCommissionTotal",
      JSON.stringify(
        addBarCommissionData.reduce(
          (total, curr) => (total = total + Number(curr.amount))
        ),
        0
      )
    );
  };

  const addOneBarCommisonData = (e) => {
    e.preventDefault()
    setAddBarCommissionData([
      ...addBarCommissionData,
      addBarCommissionDataTamp,
    ]);
  };

  const removeOneBarCommisonData = (index) => {
    const barCommissionHandler = addBarCommissionData.filter(
      (item, i) => index !== i
    );
    setAddBarCommissionData(barCommissionHandler);
  }

  useEffect(() => {
    const barCommissionPrev = JSON.parse(localStorage.getItem("barCommission"));
    const foodVegetablePrev = JSON.parse(
      localStorage.getItem("vegitableAndOther")
    );
    if (barCommissionPrev) {
      setAddBarCommissionData(barCommissionPrev);
    }
    if (foodVegetablePrev) {
      setSixthFormState(foodVegetablePrev);
    }

  }, []);

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
          headers: { "Content-Type": "application/json", cookie_token: localStorage.getItem('token') },
        }
      );
      const data = await res.json();
      console.log(data.data);
      return data.data;
    },
  });

  if(isLoading){
    return <Loader/>
  }

  return (
    <>
      <section className="mx-2">
        <div className="flex justify-center items-center gap-4 ">
          <div className="my-4 flex  items-center">
            <h1 className="font-bold text-2xl">
              बीयर
            </h1>

              <Link to="/user/bearshop/dailyreport/front" className="commonBtn">
                अंग्रेजी
              </Link>

              <Link to="/user/bearshop/details/back" className="commonBtn">
                पर्चा
              </Link>
            </div>
          </div>
        <div className="flex gap-4 justify-center items-center">
          <h1 className="font-bold ">सेल्समेन का नाम:- </h1>
          <Autocomplete
          size="small"
          style={{
            width: "20rem",
            border:"1px solid black",
              borderRadius:"5px"
          }}
            options={salaryData.length > 0 ? salaryData.filter((prev)=>prev.isActive===true) : ['no options']}
            getOptionLabel={(option) => option ? option.name : ""}
            
            onChange={(event, value) => {
              if (value) {
                setSalesMan(value.name)
              } else {
                setSalesMan("")
              }

            }}
            renderInput={(params) => (
              <TextField
                required
                {...params}
                className="dailyReportInput"
                inputProps={{ ...params.inputProps, value: salesMan }}

                onChange={(event) => {
                  setSalesMan(event.target.value)
                  
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
              }}
              dateFormat="dd/MM/yyyy"
              className="inputBox date"
              placeholderText={"dd/mm/yyyy"}
            />
          </div>
        </div>

        {/* *********************************************************BREAK*********************************************************  */}
        <form onSubmit={handleSubmit}>
          <div className="flex  overflow-x-auto">
            <div className="py-6">
              <h1 className="my-4">
                <span className="font-bold titleText">
                  अंग्रेजी/बीयर की आमद (खरीद बाहर से)
                </span>
              </h1>
              <div>
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <td></td>
                      <th> पार्टी का नाम</th>
                      <th> ब्राण्ड</th>
                      <th>ML</th>
                      <th>संख्या</th>
                      <th>रेट</th>
                      <th>रकम</th>
                    
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
                      <th className="sticky">
                        {" "}
                        <button
                          className="sticky btn bg-[#AA237A] btn-sm"
                          onClick={(e) => handelAddOnePurchesOutSide(e)}
                        >
                          ADD
                        </button>
                      </th>
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
                            type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
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
                       
                      </td>
                      <td>
                        <div className="form-control ">
                          <input
                            type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                            className="smallinput"
                            name="theNumber"
                            value={purchesOutSideState.reduce(
                              (total, currentItem) =>
                                (total = total + Number(currentItem?.total)),
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
              <h1 className="my-4">
                <span className="font-bold titleText">
                  अंग्रेजी/बीयर की आमद (उधारी)
                </span>
              </h1>

              <>
                <div>
                  <table className="table commonTable" ref={purchaseBorrowRef} onFocus={()=>scrollToComponent(purchaseBorrowRef)}>
                    <thead>
                      <tr>
                        <th> क्र. सं.</th>
                        <th></th>
                        <th> पार्टी का नाम</th>
                        <th> ब्राण्ड</th>
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
                            onClick={(e) => handelAddOneShipping(e)}
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
                              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
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
              <h1 className="my-4 specialwidth">
                <span className="font-bold titleText ">
                  कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि
                </span>
              </h1>
              <div>
                <table className="table commonTable" ref={commissionRef} onFocus={()=>scrollToComponent(commissionRef)}>
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <td></td>
                      <th> विवरण</th>
                      <th>रकम</th>
                      <th>टिप्पणी</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commissonState.map((item, index) => {
                      return (
                        <CommissionForm
                          key={index}
                          index={index}
                          item={item}
                          handleRemoveFieldsCommission={
                            handleRemoveFieldsCommission
                          }
                          commissonState={commissonState}
                          onChangeCommison={onChangeCommison}
                        ></CommissionForm>
                      );
                    })}

                    <tr>
                      <th className="sticky">
                        {" "}
                        <button
                          className="sticky btn bg-[#AA237A] btn-sm"
                          onClick={(e) => handelAddOneCommison(e)}
                        >
                          ADD
                        </button>
                      </th>
                      <td>
                        <div className="form-control">Total</div>
                      </td>
                      <td>
                        <div className="form-control"></div>
                      </td>

                      <td>
                        <input
                          type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
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
          </div>
          {/* *********************************************************BREAK*********************************************************  */}

          {/* *********************************************************BREAK*********************************************************  */}
          <div className="flex  overflow-x-auto">
            <div className="py-6">
              <h1 className="my-4">
                <span className="font-bold titleText">उधारी/नामे</span>
              </h1>

              <div>
                <table className="table commonTable" >
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <th></th>
                      <th>पार्टी/पार्टनर</th>
                      <th>पार्टी का नाम</th>
                      <th>रकम</th>
                      <th>टिप्पणी</th>
                    </tr>
                  </thead>

                  <tbody>
                    {craditDabitState.map((item, index) => {
                      return (
                        <CreditDabitForm
                          key={index}
                          item={item}
                          handleRemoveFieldsCredit={handleRemoveFieldsCredit}
                          craditDabitState={craditDabitState}
                          onChangeCarditDabit={onChangeCarditDabit}
                          index={index}
                        ></CreditDabitForm>
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
                            type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
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

            <div className="py-6">
              <h1 className="my-4 specialwidth">
                <span className="font-bold titleText ">
                  पीछे की उधारी में से व अन्य से नकद प्राप्ति
                </span>
              </h1>

              <div>
                <table className="table commonTable"  ref={cashReturnRef} onFocus={()=>scrollToComponent(cashReturnRef)}>
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <td></td>
                      <th>पार्टी/पार्टनर</th>
                      <th>पार्टी का नाम</th>
                      <th>रकम</th>
                      <th> टिप्पणी</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cashReciveState?.map((item, index) => {
                      return (
                        <CashReciveForm
                          key={index}
                          item={item}
                          handleRemoveFieldsCashBack={
                            handleRemoveFieldsCashBack
                          }
                          index={index}
                          onChangeCashRecive={onChangeCashRecive}
                          cashReciveState={cashReciveState}
                        ></CashReciveForm>
                      );
                    })}

                    <tr>
                      <th className="sticky">
                        {" "}
                        <button
                          className="sticky btn bg-[#AA237A] btn-sm"
                          onClick={(e) => handelAddOneCashRecive(e)}
                        >
                          ADD
                        </button>
                      </th>
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
                          type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
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

            <div className="py-6">
              <h1 className="my-4 mx-6">
                <span className="font-bold titleText ">
                राशन/सब्जी आदि खरीद
                </span>
              </h1>

              <div className="overflow-x-auto">
                <table className="table commonTable" ref={extraRef} onFocus={()=>scrollToComponent(extraRef)}>
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <th></th>
                      <th>विवरण</th>
                      <th>रकम</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sixthFormState.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>

                          <th
          className="cross"
          onClick={() => {
            swal({
              title: "Are you sure?",
              text: `Once deleted, you will not be able to recover row ${
                index + 1
              }`,
              icon: "warning",
              buttons: true,
              dangerMode: true,
            }).then((willDelete) => {
              if (willDelete) {
                handleRemoveSixthForm(index);
                swal(`row ${index + 1}  has been deleted!`, {
                  icon: "success",
                });
              } else {
                swal("Your row is safe!");
              }
            });
          }}
        >
          X
        </th>

                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="semiSmallInput"
                                name="details"
                                onChange={(e) => sixthFormOnchange(e, index)}
                                value={data.details}
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-control">
                              <input
                                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                                className="semiSmallInput"
                                name="price"
                                onChange={(e) => sixthFormOnchange(e, index)}
                                value={data.price}
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })}

                    <tr>
                      <th className="sticky">
                        {" "}
                        <button
                          className="sticky btn bg-[#AA237A] btn-sm"
                          onClick={(e) => addOneSixthForm(e)}
                        >
                          ADD
                        </button>
                      </th>
                      <td>
                        <div className="form-control">Total</div>
                      </td>
                      <td>
                       
                      </td>
                      <td>
                        <div className="form-control">
                          <input
                            type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                            name="amount"
                            value={sixthFormState.reduce(
                              (total, currentItem) =>
                                (total = total + Number(currentItem.price)),
                              0
                            )}
                            disabled
                            className="semiSmallInput"
                          />
                        </div>
                      </td>
                      
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* *********************************************************BREAK*********************************************************  */}

          <div className="py-6">
            <h1 className="my-4 specialwidth">
              <span className="font-bold titleText ">बार कमीशन डेटा</span>
            </h1>

            <div>
              <table className="table commonTable">
                <thead>
                  <tr>
                    <th> क्र. सं.</th>
                    <th></th>
                    <th> ब्राण्ड</th>
                    <th>ML</th>
                    <th>मात्रा</th>
                    <th>रकम</th>
                    <th>टिप्पणी</th>
                  </tr>
                </thead>
                <tbody>
                  {addBarCommissionData?.map((item, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <th
                          className="cross"
                          onClick={() => {
                            swal({
                              title: "Are you sure?",
                              text: `Once deleted, you will not be able to recover row ${index + 1
                                }`,
                              icon: "warning",
                              buttons: true,
                              dangerMode: true,
                            }).then((willDelete) => {
                              if (willDelete) {
                                removeOneBarCommisonData(index);
                                swal(`row ${index + 1}  has been deleted!`, {
                                  icon: "success",
                                });
                              } else {
                                swal("Your row is safe!");
                              }
                            });
                          }}
                        >
                          X
                          <input type="button" value="" autoFocus />
                        </th>
                        <td>
                          <div className="form-control">
                            <Autocomplete
                              id="autocomplete"
                              size="small"
                              style={{
                                width: "20rem",
                                border:"1px solid black",
              borderRadius:"5px"
                              }}
                              options={options}
                              getOptionLabel={(option) => (option ? option.brandName : "")}
                              onChange={(event, value) => {
                                if (value) {
                                  item.brandName = value.brandName;
                                  item.liquorID = value._id;
                                  item.size = value
                                } else {
                                  item.brandName = "";
                                  item.liquorID = "";
                                }
                                onChangeShipping(event, index);
                              }}
                              renderInput={(params) => (
                                <TextField
                                  required
                                  size="small"
                                  {...params}
                                  // value={item.brandName}
                                  inputProps={{
                                    ...params.inputProps,
                                    value: item.brandName,
                                  }}
                                  onChange={(e) => {
                                    handleInputChange(e, e.target.value);
                                    item.brandName = e.target.value;
                                  }}
                                />
                              )}
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-control">
                            <select
                              name="ml"
                              className="smallinput wd-9"
                              required
                              value={item.ml}
                              onChange={(e) => onChangeBarCommission(e, index)}
                            >

                              <option selected value={750}>
                                750ml
                              </option>
                              <option value={700}>700ml</option>
                              <option value={650}>650ml</option>
                              <option value={550}>550ml</option>
                              <option value={500}>500ml</option>
                              <option value={375}>375ml</option>
                              <option value={330}>330ml</option>
                              <option value={275}>275ml</option>
                              <option value={250}>250ml</option>
                              <option value={200}>200ml</option>
                              <option value={180}>180ml</option>
                              <option value={90}>90ml</option>
                              <option value={60}>60ml</option>
                              <option value={50}>50ml</option>
                            </select>
                          </div>
                        </td>

                        <td>
                          <div className="form-control">
                            <input
                              type="text"
                              className="semiSmallInput"
                              name="quantity"
                              onChange={(e) => onChangeBarCommission(e, index)}
                              value={item.quantity}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-control">
                            <input
                              type="text"
                              className="semiSmallInput"
                              name="amount"
                              onChange={(e) => onChangeBarCommission(e, index)}
                              value={item.amount}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-control">
                            <input
                              type="text"
                              className="semiSmallInput"
                              name="comment"
                              onChange={(e) => onChangeBarCommission(e, index)}
                              value={item.comment}
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  })}

                  <tr>
                    <th className="sticky">
                      {" "}
                      <button
                        className="sticky btn bg-[#AA237A] btn-sm"
                        onClick={(e) => addOneBarCommisonData(e)}
                      >
                        ADD
                      </button>
                    </th>
                    <td>
                      <div className="form-control">Total</div>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="form-control">
                        <input
                          type="text"
                          className="semiSmallInput"
                          name="amount"
                          disabled
                          value={addBarCommissionData.reduce(
                            (total, curr) =>
                              (total = total + Number(curr.quantity)),
                            0
                          )}
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-control">
                        {" "}
                        <input
                          type="text"
                          className="semiSmallInput"
                          name="amount"
                          disabled
                          value={addBarCommissionData.reduce(
                            (total, curr) =>
                              (total = total + Number(curr.amount)),
                            0
                          )}
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
            <h1 className="my-4 mx-4">
              <span className="font-bold titleText ">फाईनल रिपोर्ट</span>
            </h1>
            <form action="">
              <div className="overflow-x-auto">
                <FinalReport udhaariTotal={craditDabitState.reduce(
                  (total, currentItem) =>
                    (total = total + Number(currentItem.amount)),
                  0
                )}
                  commisionTotal={commissonState.reduce(
                    (total, currentItem) =>
                      (total = total + Number(currentItem.amount)),
                    0
                  )} />
              </div>
            </form>
          </div>

          <div className="py-6">
            <h1 className="my-4 specialwidth">
              <span className="font-bold titleText ">रफ जगह
</span>
            </h1>
            <div>
              <textarea
                className="textarea textarea-bordered"
                placeholder="रफ जगह
                "
                rows="3"
                cols="50"
                name="comment"
                form="usrform"
                height="100px"
                width="100px"
              ></textarea>
            </div>
          </div>
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
