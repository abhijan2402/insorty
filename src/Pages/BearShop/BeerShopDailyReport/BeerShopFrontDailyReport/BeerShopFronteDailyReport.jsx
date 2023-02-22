import React from "react";
import { Link } from "react-router-dom";

const FronteDailyReport = () => {

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
        <h1 className="font-bold ">सेल्समेन का नाम</h1>
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
                    <th> Opening stock / प्रारम्भिक स्टॉक</th>
                    <th>Inflow(Pur. shop)/आमद(खरीद)-दु</th>
                    <th>buy rate shop /खरीद रेट - दुु</th>
                    <th>Income (Pur. out)/आमद(खरीद)बा</th>
                    <th>buy  rate out /खरीद रेट - बा.</th>
                    <th>send / भेजान</th>
                    <th>sum -remaining / योग - शेष</th>
                    <th>closing stock / अन्तिम स्टॉक</th>
                    <th>sales /  बिक्री</th>
                    <th>total / योग</th>
                    <th>Grand total/ कुल योग</th>
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
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">60ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">30ml</span>
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
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">60ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">30ml</span>
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
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">60ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">30ml</span>
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
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">60ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">30ml</span>
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
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">60ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">30ml</span>
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
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">60ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">30ml</span>
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
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">60ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">30ml</span>
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
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">60ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">30ml</span>
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
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">60ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">30ml</span>
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
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">60ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">30ml</span>
                          </label>
                        </div>
                      </div>
                    </td>

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
                        <div className="form-control">
                          <input
                            type="number"
                            disabled
                            className="smallinput"
                            name="sending"
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
                      <th> Opening stock / प्रारम्भिक स्टॉक</th>
                      <th>Inflow(Pur. shop)/आमद(खरीद)-दु</th>
                      <th>Buy rate shop /खरीद रेट - दुु</th>
                      <th>Income (Pur. out)/आमद(खरीद)बा</th>
                      <th>buy  rate out /खरीद रेट - बा.</th>
                      <th>inflow (credit) / आमद (उधारी)</th>
                      <th>send / भेजान.</th>
                      <th>sum -remaining / योग - शेष</th>
                      <th>closing stock / अन्तिम स्टॉक</th>
                      <th>sales /  बिक्री</th>
                      <th>total / योग</th>
                      <th>Amount/ योग</th>
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
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">60ml</span>
                            </label>
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">30ml</span>
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
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">60ml</span>
                            </label>
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">30ml</span>
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
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">60ml</span>
                            </label>
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">30ml</span>
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
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">60ml</span>
                            </label>
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">30ml</span>
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
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">60ml</span>
                            </label>
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">30ml</span>
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
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">60ml</span>
                            </label>
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">30ml</span>
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
                              <span className="label-text">750ml</span>
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
                        <div className="form-control"></div>
                      </td>
                    </tr>


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
          <button
            className="dailyReportBtn mx-4"
          >
            ADD 1
          </button>
        </div>
      </div>
    </section>
  );
};

export default FronteDailyReport;
