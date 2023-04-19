import React from "react";
import { Link } from "react-router-dom";
import AddOneFristForm from "./BeerShopFirstForm/AddOneFristForm/AddOneFristForm";
import UseBeerShopFront from "../../BeerHooks/DailyReportHooks/UseBeerShopFront/UseBeerShopFront";

const FronteDailyReport = () => {
  const {
    handelFristFormSubmit,
    fristFormAddOne,
    fristFormOnChange,
    beerShopFrontFrist,
    beerShopFrontSecond,
    beerShopFrontThird,
    addOne,
    beerShopMid,
    midFormOnChange,
    midFormAddOne,
  } = UseBeerShopFront();



  return (
    <section className="mx-2">
      <div className="flex justify-center items-center flex-col">
        <div className="my-4 flex gap-4 items-center">
          <h1 className="font-bold text-2xl">Daily Report / दैनिक रिपोर्ट </h1>
          <Link to="/user/bearshop/dailyreport/back" className="commonBtn">
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
          <>
            <div className="overflow-x-auto">
              <table className="table commonTable">
                <thead>
                  <tr>
                    <th> क्र. सं.</th>
                    <th>ब्राण्ड</th>
                    <th>एवरेज रेट</th>
                    <th>प्रारम्भिक स्टॉक</th>
                    <th>आमद(खरीद)-दु</th>
                    <th>खरीद रेट - दुु</th>
                    <th>/आमद(खरीद)बा</th>
                    <th>खरीद रेट - बा.</th>
                    <th>आमद (उधारी)</th>
                    <th>भेजान</th>
                    <th>योग - शेष</th>
                    <th>अन्तिम स्टॉक</th>
                    <th>बिक्री</th>
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
                      <div className="flex ">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">750ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">375ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
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
                            <span className="label-text">375ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
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
                            <span className="label-text">375ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
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
                            <span className="label-text">375ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
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
                            <span className="label-text">375ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
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
                            <span className="label-text">375ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
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
                            <span className="label-text">375ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
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
                            <span className="label-text">375ml</span>
                          </label>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">180ml</span>
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
                  {beerShopFrontFrist.map((beerFront, index) => {
                    return (
                      <AddOneFristForm
                        key={index}
                        index={index}
                        beerFront={beerFront}
                        fristFormOnChange={fristFormOnChange}
                      ></AddOneFristForm>
                    );
                  })}

                  {/* ============ =========== */}

                  <tr>
                    <th>
                      <button
                        className="btn bg-[#AA237A] btn-sm"
                        onClick={() => fristFormAddOne()}
                      >
                        ADD
                      </button>
                    </th>
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
                      </div>
                    </td>
                    {/* ======== प्रारम्भिक स्टॉक ========= */}
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
                      </div>
                    </td>

                    {/* ======== आमद (खरीद)-दु. ========= */}

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
                      </div>
                    </td>

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
                      </div>
                    </td>

                    {/* ======== आमद (खरीद)-बा. ========= */}

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
                      </div>
                    </td>

                    {/*================ खरीद रेट - बा. ==================  */}
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
                      </div>
                    </td>

                    {/* ======== आमद (उधारी) ========= */}

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
                      </div>
                    </td>
                    {/* ======== भेजान ========= */}
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
                      </div>
                    </td>
                    {/* ======== योग/शेष ========= */}
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
                      </div>
                    </td>
                    {/* ======== अन्तिम स्टॉक ========= */}
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
                      </div>
                    </td>
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
                      </div>
                    </td>

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
          </>
        </div>

        <div>
          <div className="overflow-x-auto my-6">
            <table className="table commonTable">
              <thead>
                <tr>
                  <th>क्र. सं.</th>
                  <th>ब्राण्ड</th>
                  <th>एवरेज रेट </th>
                  <th>प्रारम्भिक स्टॉक </th>
                  <th>आमद (खरीद)-बार </th>
                  <th>खरीद रेट-बार </th>
                  <th>आमद (खरीद)-बाहर से </th>
                  <th>खरीद रेट बाहर </th>
                  <th>आमद (उधारी) </th>
                  <th> भेजान </th>
                  <th> योग/शेष</th>
                  <th> अन्तिम स्टॉक</th>
                  <th> बिक्री</th>
                  <th> रेट</th>
                  <th>योग</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <div className="form-control"></div>
                  </th>
                  <td>
                    <div className="form-control"></div>
                  </td>
                  {/* ======== MRP Input ========= */}
                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Other ML</span>
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
                          <span className="label-text">Other ML</span>
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
                          <span className="label-text">Other ML</span>
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
                          <span className="label-text">Other ML</span>
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
                          <span className="label-text">Other ML</span>
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
                          <span className="label-text">Other ML</span>
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
                          <span className="label-text">Other ML</span>
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
                          <span className="label-text">30ml</span>
                        </label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex ">
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
                          <span className="label-text">30ml</span>
                        </label>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="form-control"></div>
                  </td>
                </tr>
                {beerShopMid.map((item, index) => {
                  return (
                    <>
                      <tr key={index}>
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
                                name="averageRateOtherMl"
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="averageRate30"
                              />
                            </div>
                          </div>
                        </td>
                        {/* ======== प्रारम्भिक स्टॉक ========= */}
                        <td>
                          <div className="flex ">
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="openingStockOtherMl"
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="openingStock30"
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
                                name="inflowPurchaseOtherMl"
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="inflowPurchase30"
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
                                name="purchaseRateBarOtherMl"
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="purchaseRateBar30"
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
                                name="inflowPurchaseFromOutsideOtherMl"
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="inflowPurchaseFromOutside30"
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
                                name="purchaseRateOutOtherMl"
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="purchaseRateOut30"
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
                                name="inflowCreditOtherMl"
                              />
                            </div>
                            <div className="form-control">
                              <input
                                type="number"
                                className="smallinput"
                                name="inflowCredit30"
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
                                name="sending30"
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
                                name="sumRemainder30"
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
                                name="closingStock30"
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
                                name="sale30"
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
                                name="rate30"
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
                              name="Yoga"
                            />
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
                <tr>
                  <th>
                    <button
                      className="btn bg-[#AA237A] btn-sm"
                      onClick={() => midFormAddOne()}
                    >
                      ADD
                    </button>
                  </th>
                  <td></td>
                  {/* ======== MRP Input ========= */}
                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="averageRateOtherMl"
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="averageRate30"
                        />
                      </div>
                    </div>
                  </td>
                  {/* ======== प्रारम्भिक स्टॉक ========= */}
                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="openingStockOtherMl"
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="openingStock30"
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
                          name="inflowPurchaseOtherMl"
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="inflowPurchase30"
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
                          name="purchaseRateBarOtherMl"
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="purchaseRateBar30"
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
                          name="inflowPurchaseFromOutsideOtherMl"
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="inflowPurchaseFromOutside30"
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
                          name="purchaseRateOutOtherMl"
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="purchaseRateOut30"
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
                          name="inflowCreditOtherMl"
                        />
                      </div>
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="inflowCredit30"
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
                          name="sending30"
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
                          name="sumRemainder30"
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
                          name="closingStock30"
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
                          name="sale30"
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
                          name="rate30"
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
                        name="Yoga"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div>
            <>
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
                        <th>
                          <button
                            onClick={addOne}
                            className="btn bg-[#AA237A] btn-sm"
                          >
                            ADD
                          </button>
                        </th>
                        <td>
                          <div className="form-control"></div>
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
                      {beerShopFrontSecond.map((item, index) => {
                        return (
                          <>
                            <tr key={index}>
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
                                      name="openingStock550"
                                    />
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
                        );
                      })}
                    </tbody>
                  </table>

                  <table className="table commonTable">
                    <thead>
                      <tr>
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
                      {beerShopFrontThird.map((beerBarthird, index) => {
                        return (
                          <tr key={index}>
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
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          </div>
        </div>
        {/* <div className="flex my-6 ">
          <button onClick={addOne} className="dailyReportBtn mx-4">
            ADD 1
          </button>
        </div> */}
      </div>
      <div className="mt-4 flex gap-4">
        <button
          className="dailyReportBtn"
          onClick={() => handelFristFormSubmit()}
          type="submit"
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default FronteDailyReport;
