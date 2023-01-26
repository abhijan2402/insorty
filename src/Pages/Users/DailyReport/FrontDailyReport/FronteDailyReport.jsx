import React from "react";
import { Link } from "react-router-dom";
import AddOneSecondForm from "./SecondForm/AddOneSecondForm/AddOneSecondForm";
import AddOneFristForm from "./FirstForm/AddOneFristForm/AddOneFristForm";
import useFormulasFristFormFront from "../../../../Hooks/useFormulas/useFormulasFristFormFront";
import useSecondFormFront from "../../../../Hooks/useSecondFormFront";
import { useQuery } from "@tanstack/react-query";
import useFristFormSubmitAPIFront from "../../../../Hooks/useFristFormSubmitAPIFront/useFristFormSubmitAPIFront";

const FronteDailyReport = () => {
  const token = localStorage.getItem("token");

  const {
    addOneFristFormState,
    addOneFristFormHandler,
    handelFristFormOnChange,
    setAddOneFristFormState,
    addFive,
    myOptions,
    totalState,
  } = useFormulasFristFormFront();

  //=============== add One second form ================

  const {
    addOneSecondFormState,
    addOneSecondFormHandler,
    handelSeconFormOnChange,
    hadelSubmitOnSecondForm,
  } = useSecondFormFront();

  const {
    submitFristFormHandler,
    isLoadingSubmit,
  } = useFristFormSubmitAPIFront();

  //=============== add One second form =================

  const hendelSubmit = (event) => {
    const addFristForm = Object.assign({}, addOneFristFormState);
    console.log(addFristForm);
    console.log(
      `total is ${addOneFristFormState.reduce(
        (total, currentItem) => (total = total + currentItem.grandTotal),
        0
      )}`
    );
  };

  const { data: sujestedData, isLoading } = useQuery({
    queryKey: ["sujestedData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getAllLiquors",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  const onSearch = (searchTerm) => {
    setAddOneFristFormState(searchTerm);
    console.log("search ", searchTerm);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
                      <div className="form-control"></div>
                    </td>
                    {/* ======== MRP Input ========= */}
                    <td>
                      <div className="flex gap-2">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">750ml</span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
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
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-2">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">750ml</span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-2">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">750ml</span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="flex gap-2">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">750ml</span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
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
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
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
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
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
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
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
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
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
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
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
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
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
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                        </div>

                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
                        </div>
                      </div>
                    </td>
                    {/* ============= योग ================ */}

                    <td>
                      <div className="flex flex-2">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">750ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">330ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
                          </label>
                        </div>
                      </div>
                    </td>

                    {/* ============= कुल योग ================ */}
                    <td>
                      <div className="form-control"></div>
                    </td>
                  </tr>

                  {/* ============ ============== */}
                  {addOneFristFormState.map((addOneFirst, index) => {
                    return (
                      <AddOneFristForm
                        key={index}
                        addOneFirst={addOneFirst}
                        index={index}
                        myOptions={myOptions}
                        onSearch={onSearch}
                        sujestedData={sujestedData}
                        setAddOneFristFormState={setAddOneFristFormState}
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
                      <div className="flex gap-2">
                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput"
                            name="total750"
                            value={totalState.total750Total}
                            onChange={(event) => handelFristFormOnChange(event)}
                          />
                        </div>
                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput"
                            name="total330"
                            value={totalState.total330Total}
                            onChange={(event) => handelFristFormOnChange(event)}
                          />
                        </div>
                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput"
                            name="total180"
                            value={totalState.total180Total}
                            onChange={(event) => handelFristFormOnChange(event)}
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
                          value={totalState.allGrandTotal}
                          onChange={(event) => handelFristFormOnChange(event)}
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
              onClick={() => submitFristFormHandler()}
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

        <div className="flex my-6 ">
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
              <button
                className="dailyReportBtn"
                onClick={() => submitFristFormHandler()}
              >
                Submit
              </button>
            </>
          )}
          <button
            className="dailyReportBtn mx-4"
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
