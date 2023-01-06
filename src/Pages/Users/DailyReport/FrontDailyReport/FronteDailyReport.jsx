import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddOneSecondForm from "./SecondForm/AddOneSecondForm/AddOneSecondForm";
import AddOneFristForm from "./FirstForm/AddOneFristForm/AddOneFristForm";
import useFormulasFristFormFront from "../../../../Hooks/useFormulas/useFormulasFristFormFront";

const FronteDailyReport = () => {
  // ================ add five first form ================

  // const addOneFristForm = {
  //   brandName: "",

  //   startingStock750: 0,
  //   startingStock330: 0,
  //   startingStock180: 0,

  //   incomingPurchase750: 0,
  //   incomingPurchase330: 0,
  //   incomingPurchase180: 0,

  //   buyRate750: 0,
  //   buyRate330: 0,
  //   buyRate180: 0,

  //   incomePurchase750: 0,
  //   incomePurchase330: 0,
  //   incomePurchase180: 0,

  //   purchaseRate750: 0,
  //   purchaseRate330: 0,
  //   purchaseRate180: 0,

  //   inflowCredit750: 0,
  //   inflowCredit330: 0,
  //   inflowCredit180: 0,

  //   sending750: 0,
  //   sending330: 0,
  //   sending180: 0,

  //   sumRemainder750: 0,
  //   sumRemainder330: 0,
  //   sumRemainder180: 0,

  //   closingStock750: 0,
  //   closingStock330: 0,
  //   closingStock180: 0,

  //   sales750: 0,
  //   sales330: 0,
  //   sales180: 0,

  //   mainRate750: 0,
  //   mainRate330: 0,
  //   mainRate180: 0,

  //   total750: 0,
  //   total330: 0,
  //   total180: 0,

  //   grandTotal: 0,

  //   averageRate750: 0,
  //   averageRate330: 0,
  //   averageRate180: 0,
  // };

  // **********************formulae******************

  // averageRate = (buyRate + purchaseRate)/2  ---> avg
  // sumRemainder = startingStock + incomingPurchase + inflowCredit +  incomePurchase - sending  ---> yog
  // sales = sumRemainder - closingStock  ---> saledone
  // total = mainRate*sales  ---> totalIndividual
  // grandTotal = total of 750 + total of 330 + total of 180  ---> allTotal

  // function updateAverageRate750(form) {
  //   form.averageRate750 = avg(form.buyRate750,form.purchaseRate750);
  // }

  // useEffect(() => {
  //   updateAverageRate750(addOneFristForm);
  // }, [addOneFristForm]);

  // add reduce method for all fild total value
  // const addReduceAllFildTotal = addOneFristFormState.reduce(function (
  //   accumulator,
  //   currentValue
  // ) {
  //   return accumulator + currentValue;
  // },
  // 0);

  // const totalStock=()=>{
  //   const totalA =
  //     addOneFristFormState.reduce(
  //       (total, currentItem) => (total = total + currentItem.startingStock[750]),
  //       0
  //     )

  //     console.log(totalA)
  // }

  // **********************formulae******************

  const {
    addOneFristFormState,
    setAddOneFristFormState,
    addOneFristFormHandler,
    handelFristFormOnChange,
    addFive,
    totalState
  } = useFormulasFristFormFront();

  const allFildTotal = () => {
    let total = 0;
    for (let i = 0; i < addOneFristFormState.length; i++) {
      total = total + addOneFristFormState.total[i];
    }
    return total;
  };

  // const [addOneFristFormState, setAddOneFristFormState] = useState([
  //   addOneFristForm,
  // ]);

  // const addOneFristFormHandler = () => {
  //   setAddOneFristFormState([...addOneFristFormState, addOneFristForm]);
  // };

  // const addFive = () => {
  //   setAddOneFristFormState([
  //     ...addOneFristFormState,
  //     addOneFristForm,
  //     addOneFristForm,
  //     addOneFristForm,
  //     addOneFristForm,
  //     addOneFristForm,
  //   ]);
  // };

  //==================== formula object ====================

  //=============== add One second form ================

  const addOneSecondForm = {
    averageRate: 0,
    startingStock: 0,
    incomingPurchase: 0,
    buyRate: 0,
    incomePurchase: 0,
    purchaseRate: 0,
    inflowCredit: 0,
    sending: 0,
    sumRemainder: 0,
    closingStock: 0,
    sales: 0,
    mainRate: 0,
    total: 0,
    grandTotal: 0,
    selectStockVarient: 90,
  };

  const [addOneSecondFormState, setAddOneSecondFormState] = useState([
    addOneSecondForm,
  ]);

  const addOneSecondFormHandler = () => {
    setAddOneSecondFormState([...addOneSecondFormState, addOneSecondForm]);
  };

  const handelSeconFormOnChange = (e, index) => {
    const secondFormHandel = addOneSecondFormState.map((returned, i) =>
      index === i
        ? Object.assign(returned, { [e.target.name]: e.target.value })
        : returned
    );
    setAddOneSecondFormState(secondFormHandel);
  };

  const hadelSubmitOnSecondForm = (e) => {
    const addFristForm = Object.assign({}, addOneSecondFormState);
    console.log(addFristForm);
  };

  //=============== add One second form ================

  // ================ handel frist form onchange ================
  // const handelFristFormOnChange = (e, index) => {
  //   const firstFormHandel = getFristFormDataState.map((returned, i) =>
  //   index === i
  //     ? Object.assign(getFristFormDataState, { [event.target.name]: event.target.value })
  //     : returned
  // );
  // setReturned(updatedProduct);
  // }

  // set formula in input field

  // const handelFristFormOnChange = (e, index) => {
  //   const firstFormHandel = addOneFristFormState.map((returned, i) =>
  //     index === i
  //       ? Object.assign(returned, { [e.target.name]: e.target.value })
  //       : returned
  //   );
  //   setAddOneFristFormState(firstFormHandel);
  //   //************* Formula **************** */

  //   const handelavg750 = addOneFristFormState.map((returned, i) => {
  //     if (index === i) {
  //       let obj = Object.assign(returned, { [e.target.name]: e.target.value });
  //       if (
  //         e.target.name === "purchaseRate750" ||
  //         e.target.name === "buyRate750"
  //       ) {
  //         console.log(obj.averageRate750);
  //         obj.averageRate750 =
  //           (Number(obj.purchaseRate750) + Number(obj.buyRate750)) / 2;
  //         console.log(obj.averageRate750);
  //       }
  //       return obj;
  //     } else return returned;
  //   });
  //   setAddOneFristFormState(handelavg750);

  //   const handelavg330 = addOneFristFormState.map((returned, i) => {
  //     if (index === i) {
  //       let obj = Object.assign(returned, { [e.target.name]: e.target.value });
  //       if (
  //         e.target.name === "purchaseRate330" ||
  //         e.target.name === "buyRate330"
  //       ) {
  //         obj.averageRate330 =
  //           (Number(obj.purchaseRate330) + Number(obj.buyRate330)) / 2;
  //       }
  //       return obj;
  //     } else return returned;
  //   });
  //   setAddOneFristFormState(handelavg330);

  //   const handelavg180 = addOneFristFormState.map((returned, i) => {
  //     if (index === i) {
  //       let obj = Object.assign(returned, { [e.target.name]: e.target.value });
  //       if (
  //         e.target.name === "purchaseRate180" ||
  //         e.target.name === "buyRate180"
  //       ) {
  //         obj.averageRate180 =
  //           (Number(obj.purchaseRate180) + Number(obj.buyRate180)) / 2;
  //       }
  //       return obj;
  //     } else return returned;
  //   });
  //   setAddOneFristFormState(handelavg180);

  //   const yog750 = addOneFristFormState.map((returned, i) => {
  //     if (index === i) {
  //       let obj = Object.assign(returned, { [e.target.name]: e.target.value });
  //       if (
  //         e.target.name === "startingStock750" ||
  //         e.target.name === "incomingPurchase750" ||
  //         e.target.name === "inflowCredit750" ||
  //         e.target.name === "incomePurchase750" ||
  //         e.target.name === "sending750"
  //       ) {
  //         obj.sumRemainder750 =
  //           Number(obj.startingStock750) +
  //           Number(obj.incomingPurchase750) +
  //           Number(obj.inflowCredit750) +
  //           Number(obj.incomePurchase750) -
  //           Number(obj.sending750);
  //       }
  //       return obj;
  //     } else return returned;
  //   });

  //   setAddOneFristFormState(yog750);

  //   const yog330 = addOneFristFormState.map((returned, i) => {
  //     if (index === i) {
  //       let obj = Object.assign(returned, { [e.target.name]: e.target.value });
  //       if (
  //         e.target.name === "startingStock330" ||
  //         e.target.name === "incomingPurchase330" ||
  //         e.target.name === "inflowCredit330" ||
  //         e.target.name === "incomePurchase330" ||
  //         e.target.name === "sending330"
  //       ) {
  //         obj.sumRemainder330 =
  //           Number(obj.startingStock330) +
  //           Number(obj.incomingPurchase330) +
  //           Number(obj.inflowCredit330) +
  //           Number(obj.incomePurchase330) -
  //           Number(obj.sending330);
  //       }
  //       return obj;
  //     } else return returned;
  //   });

  //   setAddOneFristFormState(yog330);

  //   const yog180 = addOneFristFormState.map((returned, i) => {
  //     if (index === i) {
  //       let obj = Object.assign(returned, { [e.target.name]: e.target.value });
  //       if (
  //         e.target.name === "startingStock180" ||
  //         e.target.name === "incomingPurchase180" ||
  //         e.target.name === "inflowCredit180" ||
  //         e.target.name === "incomePurchase180" ||
  //         e.target.name === "sending180"
  //       ) {
  //         obj.sumRemainder180 =
  //           Number(obj.startingStock180) +
  //           Number(obj.incomingPurchase180) +
  //           Number(obj.inflowCredit180) +
  //           Number(obj.incomePurchase180) -
  //           Number(obj.sending180);
  //       }
  //       return obj;
  //     } else return returned;
  //   });

  //   setAddOneFristFormState(yog180);
  // };

  const hendelSubmit = (event) => {
    const addFristForm = Object.assign({}, addOneFristFormState);
    console.log(addFristForm);

    // for (const elem of addOneFristFormState) {
    //   elem.averageRate750 =
    //     Number(elem.buyRate750) + Number(elem.purchaseRate750);
    // }
  };

  return (
    <section className="mx-2">
      <div className="my-4 flex gap-4 items-center">
        <h1 className="font-bold text-2xl">Daily Report / दैनिक रिपोर्ट </h1>
        <Link
          to="/user/dailyreport/back"
          className="btn btn-error text-white font-bold"
        >
          Back
        </Link>
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
                    <th></th>
                    <td>
                      <div className="form-control">
                        {/* <input
                          type="text"
                          name="brandName"
                          className="dailyReportInput "
                          style={{
                            marginTop: "2rem",
                          }}
                        /> */}
                      </div>
                    </td>
                    {/* ======== MRP Input ========= */}
                    <td>
                      <div className="flex gap-2">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">750ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="averageRate"
                          /> */}
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
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="startingStock"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="startingStock"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="startingStock"
                          /> */}
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-2">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">750ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="incomingPurchase"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="incomingPurchase"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="incomingPurchase"
                          /> */}
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-2">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">750ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="buyRate"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="buyRate"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="buyRate"
                          /> */}
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-2">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">750ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="incomePurchase"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="incomePurchase"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="incomePurchase"
                          /> */}
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
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="purchaseRate"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="purchaseRate"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="purchaseRate"
                          /> */}
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
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="inflowCredit"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="inflowCredit"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="inflowCredit"
                          /> */}
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
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="sending"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="sending"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="sending"
                          /> */}
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
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="sumRemainder"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="sumRemainder"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="sumRemainder"
                          /> */}
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
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="closingStock"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="closingStock"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="closingStock"
                          /> */}
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
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="sales"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="sales"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="sales"
                          /> */}
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
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="mainRate"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="mainRate"
                          /> */}
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
                          {/* <input
                            type="number"
                            className="smallinput"
                            name="mainRate"
                          /> */}
                        </div>
                      </div>
                    </td>
                    {/* ============= योग ================ */}
                    <td>
                      <div className="form-control">
                        {/* <input
                          type="text"
                          className="semiSmallInput"
                          name="total"
                          style={{
                            marginTop: "2rem",
                          }}
                        /> */}
                      </div>
                    </td>
                    {/* ============= कुल योग ================ */}
                    <td>
                      <div className="form-control">
                        {/* <input
                          type="text"
                          className="semiSmallInput"
                          name="grandTotal"
                          style={{
                            marginTop: "2rem",
                          }}
                        /> */}
                      </div>
                    </td>
                  </tr>

                  {/* ============ ============== */}
                  {addOneFristFormState.map((item, index) => {
                    return (
                      <AddOneFristForm
                        key={index}
                        item={item}
                        index={index}
                        addOneFristFormState={addOneFristFormState}
                        handelFristFormOnChange={handelFristFormOnChange}
                      ></AddOneFristForm>
                    );
                  })}

                  {/* ============ =========== */}

                  <tr>
                    <th></th>
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
                          value={totalState.startingStock750Total}
                            onChange={(event) => handelFristFormOnChange(event)}
                            className="smallinput"
                            disabled
                            type="number"
                            name="startingStock"
                          />
                        </div>

                        <div className="form-control">
                          <input
                            value={totalState.startingStock330Total}
                            onChange={(event) => handelFristFormOnChange(event)}
                            type="number"
                            className="smallinput"
                            disabled
                            name="startingStock"
                          />
                        </div>

                        <div className="form-control">
                          <input
                            value={totalState.startingStock180Total}
                            onChange={(event) => handelFristFormOnChange(event)}
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
                            value={totalState.incomingPurchase750Total}
                            onChange={(event) => handelFristFormOnChange(event)}
                            type="number"
                            disabled
                            className="smallinput"
                            name="incomingPurchase"
                          />
                        </div>

                        <div className="form-control">
                          <input
                            value={totalState.incomingPurchase330Total}
                            onChange={(event) => handelFristFormOnChange(event)}
                            type="number"
                            className="smallinput"
                            disabled
                            name="incomingPurchase"
                          />
                        </div>

                        <div className="form-control">
                          <input
                            value={totalState.incomingPurchase180Total}
                            onChange={(event) => handelFristFormOnChange(event)}
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
                            value={totalState.incomePurchase750Total}
                            onChange={(event) => handelFristFormOnChange(event)}
                            type="number"
                            className="smallinput"
                            name="incomePurchase"
                            disabled
                          />
                        </div>

                        <div className="form-control">
                          <input
                            value={totalState.incomePurchase330Total}
                            onChange={(event) => handelFristFormOnChange(event)}
                            type="number"
                            className="smallinput"
                            disabled
                            name="incomePurchase"
                          />
                        </div>

                        <div className="form-control">
                          <input
                            value={totalState.incomePurchase180Total}
                            onChange={(event) => handelFristFormOnChange(event)}
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
                            value={totalState.inflowCredit750Total}
                            onChange={(event) => handelFristFormOnChange(event)}
                            type="number"
                            className="smallinput"
                            name="inflowCredit"
                            disabled
                          />
                        </div>

                        <div className="form-control">
                          <input
                            value={totalState.inflowCredit330Total}
                            onChange={(event) => handelFristFormOnChange(event)}
                            type="number"
                            className="smallinput"
                            name="inflowCredit"
                            disabled
                          />
                        </div>

                        <div className="form-control">
                          <input
                            value={totalState.inflowCredit180Total}
                            onChange={(event) => handelFristFormOnChange(event)}
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
                            value={totalState.sending750Total}
                            onChange={(event) => handelFristFormOnChange(event)}
                            type="number"
                            className="smallinput"
                            name="sending"
                            disabled
                          />
                        </div>

                        <div className="form-control">
                          <input
                            value={totalState.sending330Total}
                            onChange={(event) => handelFristFormOnChange(event)}
                            type="number"
                            className="smallinput"
                            name="sending"
                            disabled
                          />
                        </div>

                        <div className="form-control">
                          <input
                            value={totalState.sending180Total}
                            onChange={(event) => handelFristFormOnChange(event)}
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
                            value={totalState.sumRemainder750Total}
                            onChange={(event) => handelFristFormOnChange(event)}
                            type="number"
                            className="smallinput"
                            name="sumRemainder"
                            disabled
                          />
                        </div>

                        <div className="form-control">
                          <input
                            value={totalState.sumRemainder330Total}
                            onChange={(event) => handelFristFormOnChange(event)}
                            type="number"
                            className="smallinput"
                            name="sumRemainder"
                            disabled
                          />
                        </div>

                        <div className="form-control">
                          <input
                            value={totalState.sumRemainder180Total}
                            onChange={(event) => handelFristFormOnChange(event)}
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
                            value={totalState.closingStock750Total}
                            onChange={(event) => handelFristFormOnChange(event)}
                            type="number"
                            className="smallinput"
                            name="closingStock"
                            disabled
                          />
                        </div>

                        <div className="form-control">
                          <input
                            value={totalState.closingStock330Total}
                            onChange={(event) => handelFristFormOnChange(event)}
                            type="number"
                            className="smallinput"
                            name="closingStock"
                            disabled
                          />
                        </div>

                        <div className="form-control">
                          <input
                            value={totalState.closingStock180Total}
                            onChange={(event) => handelFristFormOnChange(event)}
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
                            value={totalState.sales750Total}
                            onChange={(event) => handelFristFormOnChange(event)}
                            type="number"
                            className="smallinput"
                            name="sales"
                            disabled
                          />
                        </div>

                        <div className="form-control">
                          <input
                            value={totalState.sales330Total}
                            onChange={(event) => handelFristFormOnChange(event)}
                            type="number"
                            className="smallinput"
                            name="sales"
                            disabled
                          />
                        </div>

                        <div className="form-control">
                          <input
                            value={totalState.sales180Total}
                            onChange={(event) => handelFristFormOnChange(event)}
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
                      <div className="form-control">
                        <input
                          disabled
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
                          disabled
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
            <button className="dailyReportBtn" onClick={() => addFive()}>
              ADD 5
            </button>
            <button
              className="dailyReportBtn"
              onClick={() => addOneFristFormHandler()}
            >
              ADD 1
            </button>
            <button
              className="dailyReportBtn"
              onClick={() => hendelSubmit()}
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>

        <div>
          <form>
            <div className="mt-6">
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>S.no</th>
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
                      <th>कुल योग</th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* <SecondFrom
                      handelSeconFormOnChange={handelSeconFormOnChange}
                      addOneSecondFormState={addOneSecondFormState}
                    ></SecondFrom> */}

                    {addOneSecondFormState.map((item, index) => {
                      return (
                        <AddOneSecondForm
                          handelSeconFormOnChange={handelSeconFormOnChange}
                          addOneSecondFormState={addOneSecondFormState}
                          key={index}
                          index={index}
                          item={item}
                        ></AddOneSecondForm>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-4 flex gap-4">
          <button
            className="dailyReportBtnSubmit"
            onClick={() => hadelSubmitOnSecondForm()}
          >
            Submit
          </button>
          <button
            className="dailyReportBtn"
            onClick={() => addOneSecondFormHandler()}
          >
            ADD 1
          </button>
        </div>
      </div>
    </section>
  );
};

export default FronteDailyReport;
