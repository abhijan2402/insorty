import React from "react";
import "../Style/DailyReport.scss";
import { Link } from "react-router-dom";
const BackDailyReport = () => {
  return (
    <>
      <section className="mx-2">
        <div className="my-4 flex gap-4 items-center">
          <h1 className="font-bold text-2xl">Daily Report / दैनिक रिपोर्ट </h1>

          <div className="my-4">
            <Link
              to="/user/bearshop/dailyreport/front"
              className="btn btn-error text-white font-bold"
            >
              Front
            </Link>
          </div>
        </div>

        <div className="flex gap-4 ">
          <h1 className="font-bold ">सेल्समेन का नाम:- </h1>
          <input type="text" value="0" className="semiSmallInput" />
          <input type="date" name="" id="" className="semiSmallInput" />
          {/* <h1 className="font-bold ">12/12/2022 </h1> */}
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

                      {/* {fristFormState.map((item, index) => {
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
                      })} */}

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
                                name="total650"
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
                                name="total330"
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
                <button
                  className="dailyReportBtn"
                  // onClick={() => addFiveInFristFormHandler()}
                >
                  ADD 5
                </button>
                <button
                  className="dailyReportBtn"
                  // onClick={() => addOneInFristFormHandler()}
                >
                  ADD 1
                </button>

                {/* {isLoading ? (
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
                  </>
                )} */}
                <button className="dailyReportBtn">Submit</button>
              </div>

              <div className="overflow-x-auto">
                <div className="mt-6">
                  <div className="overflow-x-auto">
                    <form>
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
                              <AddOneSecondFormBack
                                handelSeconFormOnChange={
                                  handelSeconFormOnChange
                                }
                                addOneSecondFormState={addOneSecondFormState}
                                key={index}
                                index={index}
                                item={item}
                              ></AddOneSecondFormBack>
                            );
                          })} */}
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-4">
                <button
                  className="dailyReportBtn mx-4"
                  // onClick={() => addOneSecondFormHandler()}
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
              <span className="font-bold titleText">RML / आरएमएल</span>
            </h1>

            <form action="">
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>S.no</th>
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
                    {/* {addRmlState.map((item, index) => {
                      return (
                        <RmlFrom
                          key={index}
                          item={item}
                          index={index}
                          onChangeRmlHandler={onChangeRmlHandler}
                          addRmlState={addRmlState}
                          setAddRmlState={setAddRmlState}
                        ></RmlFrom>
                      );
                    })} */}

                    <tr>
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
                  // onClick={() => addFiveBtnHandler()}
                >
                  ADD 5
                </button>
                <button
                  className="dailyReportBtn"
                  // onClick={() => addOneBtnHandler()}
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
                    {/* {purchesOutSideState.map((item, index) => {
                      return (
                        <PurchaseOutSideFrom
                          onChangePurchesOutSide={onChangePurchesOutSide}
                          item={item}
                          key={index}
                          index={index}
                          purchesOutSideState={purchesOutSideState}
                        ></PurchaseOutSideFrom>
                      );
                    })} */}

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
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {commissonState.map((item, index) => {
                      return (
                        <CommissonFrom
                          key={index}
                          index={index}
                          item={item}
                          commissonState={commissonState}
                          onChangeCommison={onChangeCommison}
                        ></CommissonFrom>
                      );
                    })} */}

                    <tr>
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
                      <th>Name</th>
                      <th>Type</th>
                      <th>रकम</th>
                      <th>comment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
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
                      <th>Party Name/ पार्टी का नाम</th>
                      <th>Brand Name/ ब्राण्ड</th>
                      <th>Size</th>
                      <th>संख्या</th>
                      <th>टिप्पणी</th>
                    </tr>
                  </thead>
                  <tbody>
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
                // onClick={() => addFiveShippingBtnHandler()}
              >
                ADD 5
              </button>
              <button
                className="dailyReportBtn"
                // onClick={() => addOneShippingBtnHandler()}
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

            {/* <FinalReport></FinalReport> */}
          </form>
        </div>

        <div className="py-6 ">
          <form action="">
            <h1 className="my-4">
              <span className="font-bold titleText">रफ जगह</span>
            </h1>
         
          </form>
        </div>

        {/* *********************************************************BREAK*********************************************************  */}

        {/* ************ Submit button ***************** */}
        <div className="flex my-6 mx-4">
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
            </>
          )} */}
        </div>
        <button className="dailyReportBtn">Submit</button>
      </section>
    </>
  );
};

export default BackDailyReport;
