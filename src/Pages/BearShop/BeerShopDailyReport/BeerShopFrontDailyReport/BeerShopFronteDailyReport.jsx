import React from "react";
import { Link } from "react-router-dom";

const FronteDailyReport = () => {
  //=============== add One second form ================

  //=============== add One second form =================

  return (
    <section className="mx-2">
      <div className="my-4 flex gap-4 items-center">
        <h1 className="font-bold text-2xl">Daily Report / दैनिक रिपोर्ट </h1>
        <Link
          to="/user/bearshop/dailyreport/back"
          className="btn btn-error text-white font-bold"
        >
          Back
        </Link>
      </div>
      <div className="flex gap-4 ">
        <h1 className="font-bold ">सेल्समेन का नाम:- </h1>
        <input type="text" className="semiSmallInput" />
        <input type="date" name="" id="" className="semiSmallInput" />
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
                            className="smallinput"
                            disabled
                            type="number"
                            name="startingStock"
                          />
                        </div>

                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput"
                            disabled
                            name="startingStock"
                          />
                        </div>

                        <div className="form-control">
                          <input
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
                            type="number"
                            disabled
                            className="smallinput"
                            name="incomingPurchase"
                          />
                        </div>

                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput"
                            disabled
                            name="incomingPurchase"
                          />
                        </div>

                        <div className="form-control">
                          <input
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
                            type="number"
                            className="smallinput"
                            name="incomePurchase"
                            disabled
                          />
                        </div>

                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput"
                            disabled
                            name="incomePurchase"
                          />
                        </div>

                        <div className="form-control">
                          <input
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
                            type="number"
                            className="smallinput"
                            name="inflowCredit"
                            disabled
                          />
                        </div>

                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput"
                            name="inflowCredit"
                            disabled
                          />
                        </div>

                        <div className="form-control">
                          <input
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
                            type="number"
                            className="smallinput"
                            name="sending"
                            disabled
                          />
                        </div>

                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput"
                            name="sending"
                            disabled
                          />
                        </div>

                        <div className="form-control">
                          <input
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
                            type="number"
                            className="smallinput"
                            name="sumRemainder"
                            disabled
                          />
                        </div>

                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput"
                            name="sumRemainder"
                            disabled
                          />
                        </div>

                        <div className="form-control">
                          <input
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
                            type="number"
                            className="smallinput"
                            name="closingStock"
                            disabled
                          />
                        </div>

                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput"
                            name="closingStock"
                            disabled
                          />
                        </div>

                        <div className="form-control">
                          <input
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
                            type="number"
                            className="smallinput"
                            name="sales"
                            disabled
                          />
                        </div>

                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput"
                            name="sales"
                            disabled
                          />
                        </div>

                        <div className="form-control">
                          <input
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
                          />
                        </div>
                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput"
                            name="total330"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput"
                            name="total180"
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
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>

          <div className="mt-4 flex gap-4">
            <button className="dailyReportBtn">ADD 5</button>
            <button
              className="dailyReportBtn"
              // onClick={() => addOneFristFormHandler()}
            >
              ADD 1
            </button>
            <button
              className="dailyReportBtn"
              // onClick={() => submitFristFormHandler()}
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
                    {/* {addOneSecondFormState.map((item, index) => {
                      return (
                        <AddOneSecondForm
                          handelSeconFormOnChange={handelSeconFormOnChange}
                          addOneSecondFormState={addOneSecondFormState}
                          key={index}
                          index={index}
                          item={item}
                        ></AddOneSecondForm>
                      );
                    })} */}
                  </tbody>
                </table>
              </div>
            </div>
          </form>
        </div>

        <div className="flex my-6 ">
          {/* {isLoadingSubmit ? (
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
                // onClick={() => submitFristFormHandler()}
              >
                Submit
              </button>
            </>
          )} */}
          <button
            className="dailyReportBtn mx-4"
            // onClick={() => addOneSecondFormHandler()}
          >
            ADD 1
          </button>
        </div>
      </div>
    </section>
  );
};

export default FronteDailyReport;