import React from "react";
import { Link } from "react-router-dom";
import AddOneFristForm from "./BeerShopFirstForm/AddOneFristForm/AddOneFristForm";
import UseBeerShopFront from "../../BeerHooks/DailyReportHooks/UseBeerShopFront/UseBeerShopFront";

const FronteDailyReport = () => {
  const {
    handelFristFormSubmit,
    fristFormAddOne,
    fristFormAddFive,
    beerShopFrontFrist,
    beerShopFrontSecond,
    beerShopFrontThird,
    addOne,
  } = UseBeerShopFront();


  return (
    <section className="mx-2">
      <div className="flex justify-center items-center flex-col">
      <div className="my-4 flex gap-4 items-center">
        <h1 className="font-bold text-2xl">Daily Report / दैनिक रिपोर्ट </h1>
        <Link
          to="/user/bearshop/dailyreport/back"
          className="commonBtn"
        >
          Back
        </Link>
      </div>
      <div className="flex gap-4 ">
        <h1 className="font-bold ">सेल्समेन का नाम</h1>
        <input type="text" className="semiSmallInput" />
        <input type="date" name="" id="" className="semiSmallInput" />
      </div>
      </div>

      <div className="py-6">
        <div>
          <form>
            <div className="overflow-x-auto">
              <table className="table commonTable">
                <thead>
                  <tr>
                    <th> क्र. सं.</th>
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
                      <div className="flex ">
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
                      <div className="flex ">
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
                      <div className="flex ">
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
                      <div className="flex ">
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
                      <div className="flex ">
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
                      <div className="flex ">
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
                      <div className="flex ">
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
                      <div className="flex ">
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
                      <div className="flex ">
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
                      <div className="flex ">
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
                  {
                    beerShopFrontFrist.map((beerFront, index) => {
                      return (
                        <AddOneFristForm
                          key={index}
                          index={index}
                          beerFront={beerFront}
                        ></AddOneFristForm>
                      )
                    })
                  }

                  {/* ============ =========== */}

                  <tr>
                    <th></th>
                    <td>Total</td>
                    {/* ======== MRP Input ========= */}
                    <td>
                      <div className="flex ">
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
                      <div className="flex ">
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
                      <div className="flex ">
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
                      <div className="flex ">
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
                      <div className="flex ">
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
                      <div className="flex ">
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
                      <div className="flex ">
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
                      <div className="flex ">
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
                      <div className="flex ">
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
                      <div className="flex ">
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
            <button className="dailyReportBtn"
              onClick={() => fristFormAddFive()}
            >ADD 5</button>
            <button
              className="dailyReportBtn"
              onClick={() => fristFormAddOne()}
            >
              ADD 1
            </button>
            <button
              className="dailyReportBtn"
              onClick={() => handelFristFormSubmit()}
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>

        <div>
          <div>
            <form>
              <div className="mt-6 ">
                <div className="overflow-x-auto flex ">
                  <table className="table commonTable">
                    <thead>
                      <tr>
                        <th> क्र. सं.</th>
                        <th> ब्राण्ड</th>
                        <th> प्रारम्भिक स्टॉक</th>
                        <th>आमद(खरीद)-दु</th>
                        <th>खरीद रेट - दुु</th>
                        <th>आमद(खरीद)बा</th>
                        <th>खरीद रेट - बा.</th>
                        <th>आमद (उधारी)</th>
                        <th> भेजान.</th>
                        <th> योग - शेष</th>
                        <th> अन्तिम स्टॉक</th>
                        <th> बिक्री</th>
                        <th> योग</th>
                        <th> योग</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <th></th>
                        <td>
                          <div className="form-control">

                          </div>
                        </td>
                        {/* ======== MRP Input ========= */}
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
                        {/* ======== प्रारम्भिक स्टॉक ========= */}
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
                          <div className="form-control"></div>
                        </td>
                      </tr>
                      {
                        beerShopFrontSecond.map((item, index) => {
                          return (
                            <>
                              <tr
                                key={index}
                              >
                                <th>{index + 1}</th>
                                <td>
                                  <input
                                    type="text"
                                    className="dailyReportInput"
                                    name="BrandName"
                                  />
                                </td>
                                {/* ======== MRP Input ========= */}
                                <td>
                                  <div className="flex ">
                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="openingStock650"
                                      />
                                    </div>
                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="openingStock550" />
                                    </div>
                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="openingStock330"
                                      />
                                    </div>

                                  </div>
                                </td>
                                {/* ======== प्रारम्भिक स्टॉक ========= */}
                                <td>
                                  <div className="flex ">
                                    <div className="form-control">
                                      <input
                                        className="smallinput"
                                        type="number"
                                        name="infllowPuchase650"
                                      />
                                    </div>

                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="infllowPuchase550"
                                      />
                                    </div>

                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="infllowPuchase330"
                                      />
                                    </div>
                                  </div>
                                </td>

                                {/* ======== आमद (खरीद)-दु. ========= */}

                                <td>
                                  <div className="flex ">
                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="buyeShop650"
                                      />
                                    </div>

                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="buyeShop550"
                                      />
                                    </div>

                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="buyeShop330"
                                      />
                                    </div>
                                  </div>
                                </td>

                                <td>
                                  <div className="flex ">
                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="incomePurchesOut650"
                                      />
                                    </div>

                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="incomePurchesOut550"
                                      />
                                    </div>

                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="incomePurchesOut330"
                                      />
                                    </div>
                                  </div>
                                </td>

                                {/* ======== आमद (खरीद)-बा. ========= */}

                                <td>
                                  <div className="flex ">
                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="buyeRateOut650"
                                      />
                                    </div>

                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="buyeRateOut650"
                                      />
                                    </div>

                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="buyeRateOut330"
                                      />
                                    </div>
                                  </div>
                                </td>

                                {/*================ खरीद रेट - बा. ==================  */}
                                <td>
                                  <div className="flex ">
                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="infllowCradit750"

                                      />
                                    </div>

                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="infllowCradit650"

                                      />
                                    </div>

                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="infllowCradit330"
                                      />
                                    </div>
                                  </div>
                                </td>

                                <td>
                                  <div className="flex ">
                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="send650"
                                      />
                                    </div>

                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="send550"
                                      />
                                    </div>

                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="send330"
                                      />
                                    </div>
                                  </div>
                                </td>
                                {/* ======== भेजान ========= */}
                                <td>
                                  <div className="flex ">
                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="sumRemainder650"
                                      />
                                    </div>

                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="sumRemainder550"
                                      />
                                    </div>

                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="sumRemainder330"
                                      />
                                    </div>
                                  </div>
                                </td>
                                {/* ======== योग/शेष ========= */}
                                <td>
                                  <div className="flex ">
                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="closingStock650"
                                      />
                                    </div>

                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="closingStock550"
                                      />
                                    </div>

                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="closingStock330"
                                      />
                                    </div>
                                  </div>
                                </td>
                                {/* ======== अन्तिम स्टॉक ========= */}
                                <td>
                                  <div className="flex ">
                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="sals650"
                                      />
                                    </div>

                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="sals550"
                                      />
                                    </div>

                                    <div className="form-control">
                                      <input
                                        type="number"
                                        className="smallinput"
                                        name="sals330"
                                      />
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="flex ">
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
                                        name="total550"

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
                                      className="semiSmallInput"
                                      name="Amount"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </>
                          )
                        })
                      }
                    </tbody>
                  </table>

                  <table className="table commonTable">
                    <thead>
                      <tr >
                        <th>पानी, नमकीन, सिगरेट, पुड़िया आदि</th>
                      </tr>
                      <tr>
                        <th> क्र. सं.</th>
                        <th>Description/ सामान का विवरण</th>
                        <th>Buying price/ खरीद रेट</th>
                        <th>प्राम्भिक स्टॉक</th>
                        <th>आमद</th>
                        <th>योग</th>
                        <th>अंतिम स्टॉक</th>
                        <th>बिक्री</th>
                        <th>रेट</th>
                        <th>योग</th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        beerShopFrontThird.map((beerBarthird, index) => {
                          return (
                            <tr
                              key={index}
                            >
                              <th>{index + 1}</th>
                              <td>
                                <input
                                  type="text"
                                  className="dailyReportInput"
                                  name="description"
                                />
                              </td>
                              <td>
                                <div className="flex ">
                                  <div className="form-control">
                                    <input
                                      type="number"
                                      className="dailyReportInput"
                                      name="buyingPrice"
                                    />
                                  </div>
                                </div>
                              </td>

                              {/*================ खरीद रेट - बा. ==================  */}
                              <td>
                                <div className="flex ">
                                  <div className="form-control">
                                    <input
                                      type="text"
                                      className="dailyReportInput"
                                      name="OpeningStock"
                                    />
                                  </div>
                                </div>
                              </td>

                              <td>
                                <div className="flex ">
                                  <div className="form-control">
                                    <input
                                      type="number"
                                      className="dailyReportInput"
                                      name="infllow"
                                    />
                                  </div>
                                </div>
                              </td>
                              {/* ======== भेजान ========= */}
                              <td>
                                <div className="flex ">
                                  <div className="form-control">
                                    <input
                                      type="number"
                                      className="dailyReportInput"
                                      name="sum"
                                    />
                                  </div>
                                </div>
                              </td>
                              {/* ======== योग/शेष ========= */}
                              <td>
                                <div className="flex ">
                                  <div className="form-control">
                                    <input
                                      type="number"
                                      className="dailyReportInput"
                                      name="closingStock"
                                    />
                                  </div>
                                </div>
                              </td>
                              {/* ======== अन्तिम स्टॉक ========= */}
                              <td>
                                <div className="flex ">
                                  <div className="form-control">
                                    <input
                                      type="number"
                                      className="dailyReportInput"
                                      name="sales"
                                    />
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className="flex ">
                                  <div className="form-control">
                                    <input
                                      type="number"
                                      className="dailyReportInput"
                                      name="rates"
                                    />
                                  </div>
                                </div>
                              </td>
                              {/* ============= कुल योग ================ */}
                              <td>
                                <div className="flex ">
                                  <div className="form-control">
                                    <input
                                      type="number"
                                      className="dailyReportInput"
                                      name="sumreminder"
                                    />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )
                        })
                      }

                    </tbody>
                  </table>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex my-6 ">
          <button
            onClick={addOne}

            className="dailyReportBtn mx-4">
            ADD 1
          </button>
        </div>
      </div>
    </section>
  );
};

export default FronteDailyReport;
