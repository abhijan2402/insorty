import React from "react";
import { Link } from "react-router-dom";

const FronteDailyReport = () => {
  return (
    <section className="mx-2">
      <div className="flex justify-center items-center flex-col">
        <div className="my-4 flex gap-4 items-center">
          <h1 className="font-bold text-2xl">Daily Report Details </h1>
          <Link to="/user/bearshop/details/back" className="commonBtn">
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
                    <th> रेट</th>
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
                  <tr>
                    {/* ===================== addded daynamice data ===== */}
                  </tr>
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
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                          />
                        </div>
                        <div className="form-control">
                          <input
                            disabled
                            type="number"
                            className="smallinput"
                            name="openingstock"
                          />
                        </div>
                      </div>
                    </td>
                    {/* ======== प्रारम्भिक स्टॉक ========= */}
                    <td>
                      <div className="flex ">
                        <div className="form-control smallinput"></div>
                        <div className="form-control smallinput"></div>
                        <div className="form-control smallinput"></div>
                        <div className="form-control smallinput"></div>
                      </div>
                    </td>
                    <td>
                      <div className="flex ">
                        <div className="form-control smallinput"></div>
                        <div className="form-control smallinput"></div>
                        <div className="form-control smallinput"></div>
                        <div className="form-control smallinput"></div>
                      </div>
                    </td>
                    {/* ======== आमद (खरीद)-दु. ========= */}

                    <td>
                      <div className="flex ">
                        <div className="form-control smallinput"></div>
                        <div className="form-control smallinput"></div>
                        <div className="form-control smallinput"></div>
                        <div className="form-control smallinput"></div>
                      </div>
                    </td>

                    <td>
                      <div className="flex ">
                        <div className="form-control smallinput"></div>
                        <div className="form-control smallinput"></div>
                        <div className="form-control smallinput"></div>
                        <div className="form-control smallinput"></div>
                      </div>
                    </td>

                    {/* ======== आमद (खरीद)-बा. ========= */}

                    <td>
                      <div className="flex ">
                        <div className="form-control smallinput"></div>
                        <div className="form-control smallinput"></div>
                        <div className="form-control smallinput"></div>
                        <div className="form-control smallinput"></div>
                      </div>
                    </td>
                    <td>
                      <div className="flex ">
                        <div className="form-control smallinput"></div>
                        <div className="form-control smallinput"></div>
                        <div className="form-control smallinput"></div>
                        <div className="form-control smallinput"></div>
                      </div>
                    </td>
                    {/* ======== भेजान ========= */}
                    <td>
                      <div className="flex ">
                        <div className="form-control smallinput"></div>
                        <div className="form-control smallinput"></div>
                        <div className="form-control smallinput"></div>
                        <div className="form-control smallinput"></div>
                      </div>
                    </td>
                    {/* ======== योग/शेष ========= */}

                    <td>
                      <div className="flex ">
                        <div className="form-control smallinput"></div>
                      </div>
                    </td>
                    <td>
                      <div className="flex ">
                        <div className="form-control smallinput"></div>
                      </div>
                    </td>
                    {/* ======== अन्तिम स्टॉक ========= */}
                    <td>
                      <div className="flex ">
                        <div className="form-control smallinput"></div>
                      </div>
                    </td>

                    <td>
                      <div className="flex ">
                        <div className="form-control smallinput"></div>
                      </div>
                    </td>

                    <td>
                      <div className="flex ">
                        <div className="form-control smallinput"></div>
                      </div>
                    </td>
                    {/* ============= कुल योग ================ */}
                    <td>
                      <div className="form-control semiSmallInput"></div>
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
                  <th>ml</th>
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
                  <td>
                    <div className="form-control"></div>
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

                {/* ============== daynamic ==================== */}
                <tr>
                  <th></th>
                  <td>Brand Name</td>

                  <td>
                    <div className="form-control smallinput"></div>
                  </td>
                  {/* ======== MRP Input ========= */}
                  <td>
                    <div className="flex ">
                      <div className="form-control smallinput"></div>
                      <div className="form-control smallinput"></div>
                    </div>
                  </td>
                  {/* ======== प्रारम्भिक स्टॉक ========= */}
                  <td>
                    <div className="flex ">
                      <div className="form-control smallinput"></div>
                      <div className="form-control smallinput"></div>
                    </div>
                  </td>

                  {/* ======== आमद (खरीद)-दु. ========= */}

                  <td>
                    <div className="flex ">
                      <div className="form-control smallinput"></div>
                      <div className="form-control smallinput"></div>
                    </div>
                  </td>

                  <td>
                    <div className="flex ">
                      <div className="form-control smallinput"></div>
                      <div className="form-control smallinput"></div>
                    </div>
                  </td>

                  {/* ======== आमद (खरीद)-बा. ========= */}

                  <td>
                    <div className="flex ">
                      <div className="form-control smallinput"></div>
                      <div className="form-control smallinput"></div>
                    </div>
                  </td>

                  {/*================ खरीद रेट - बा. ==================  */}
                  <td>
                    <div className="flex ">
                      <div className="form-control smallinput"></div>
                      <div className="form-control smallinput"></div>
                    </div>
                  </td>

                  <td>
                    <div className="flex ">
                      <div className="form-control smallinput"></div>
                      <div className="form-control smallinput"></div>
                    </div>
                  </td>
                  {/* ======== भेजान ========= */}
                  <td>
                    <div className="flex ">
                      <div className="form-control smallinput"></div>
                    </div>
                  </td>
                  {/* ======== योग/शेष ========= */}
                  <td>
                    <div className="flex ">
                      <div className="form-control smallinput"></div>
                    </div>
                  </td>
                  {/* ======== अन्तिम स्टॉक ========= */}
                  <td>
                    <div className="flex ">
                      <div className="form-control smallinput"></div>
                    </div>
                  </td>
                  <td>
                    <div className="flex ">
                      <div className="form-control smallinput"></div>
                    </div>
                  </td>
                  <td>
                    <div className="flex ">
                      <div className="form-control smallinput"></div>
                    </div>
                  </td>
                  {/* ============= कुल योग ================ */}

                  <td>
                    <div className="form-control semiSmallInput"></div>
                  </td>
                </tr>
                <tr>
                  <th></th>
                  <td></td>
                  {/* ======== MRP Input ========= */}
                  <td></td>
                  <td></td>
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

                  <td></td>

                  {/* ======== आमद (खरीद)-बा. ========= */}

                  <td>
                    <div className="flex ">
                      <div className="form-control">
                        <input
                          type="number"
                          className="smallinput"
                          name="inflowPurchaseFromOutsideOtherMl
                          "
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
                  <td></td>

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
                  <td></td>
                  {/* ============= कुल योग ================ */}
                  <td>
                    <div className="form-control">
                      <input
                        type="number"
                        className="semiSmallInput"
                        name="total"
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
                  <div className="py-6">
                    <h1 className="my-4">
                      <span className="font-bold titleText">
                        बिक्री रिपोर्ट
                      </span>
                    </h1>

                    <table className="table commonTable">
                      <thead>
                        <tr>
                          <th> क्र. सं.</th>
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

                          {/* ======== MRP Input ========= */}
                          <td></td>
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

                        {/* ============================Daynamice data ======================== */}
                        <tr>
                          <th>1</th>
                          <td>Brand Name</td>
                          <td>
                            <div className="flex ">
                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>
                            </div>
                          </td>
                          {/* ======== MRP Input ========= */}
                          <td>
                            <div className="flex ">
                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>
                            </div>
                          </td>
                          {/* ======== प्रारम्भिक स्टॉक ========= */}
                          <td>
                            <div className="flex ">
                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>
                            </div>
                          </td>

                          {/* ======== आमद (खरीद)-दु. ========= */}

                          <td>
                            <div className="flex ">
                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>
                            </div>
                          </td>

                          <td>
                            <div className="flex ">
                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>
                            </div>
                          </td>

                          {/* ======== आमद (खरीद)-बा. ========= */}

                          <td>
                            <div className="flex ">
                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>
                            </div>
                          </td>

                          {/*================ खरीद रेट - बा. ==================  */}
                          <td>
                            <div className="flex ">
                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>
                            </div>
                          </td>

                          {/* ======== आमद (उधारी) ========= */}

                          <td>
                            <div className="flex ">
                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>
                            </div>
                          </td>
                          {/* ======== भेजान ========= */}
                          <td>
                            <div className="flex ">
                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>
                            </div>
                          </td>
                          {/* ======== योग/शेष ========= */}
                          <td>
                            <div className="flex ">
                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>
                            </div>
                          </td>
                          {/* ======== अन्तिम स्टॉक ========= */}
                          <td>
                            <div className="flex ">
                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>
                            </div>
                          </td>
                          {/* ============= बिक्री ================ */}
                          <td>
                            <div className="flex ">
                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>
                            </div>
                          </td>
                          {/* ============= रेट ================ */}
                          <td>
                            <div className="flex ">
                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>
                            </div>
                          </td>
                          {/* ============= योग ================ */}
                          <td>
                            <div className="flex ">
                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>

                              <div className="form-control smallinput"></div>
                            </div>
                          </td>
                          {/* ============= कुल योग ================ */}
                          <td>
                            <div className="smallinput wd-7"></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="py-6">
                    <h1 className="my-4">
                      <span className="font-bold titleText">
                        पानी, नमकीन, सिगरेट, पुड़िया आदि
                      </span>
                    </h1>
                    <table className="table commonTable">
                      <thead>
                        <tr></tr>
                        <tr></tr>
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
                        <tr>
                          <th>1</th>
                          <td>
                            <input
                              type="text"
                              className="dailyReportInput"
                              required
                            />
                          </td>
                          <td>
                            <div className="flex ">
                              <div className="form-control">
                                <input
                                  type="number"
                                  className="dailyReportInput"
                                />
                              </div>
                            </div>
                          </td>

                          <td>
                            <div className="flex ">
                              <div className="form-control">
                                <input
                                  type="text"
                                  className="dailyReportInput"
                                  name="openingStock"
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

                          <td>
                            <div className="flex ">
                              <div className="form-control">
                                <input
                                  type="number"
                                  className="dailyReportInput"
                                  name="closingStock"
                                  required
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
                                  name="sales"
                                  required
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

                        <tr>
                          <th></th>
                          <td></td>
                          <td></td>

                          <td>
                            <div className="flex ">
                              <div className="form-control dailyReportInput"></div>
                            </div>
                          </td>

                          <td>
                            <div className="flex ">
                              <div className="form-control dailyReportInput"></div>
                            </div>
                          </td>

                          <td>
                            <div className="flex ">
                              <div className="form-control dailyReportInput"></div>
                            </div>
                          </td>

                          <td>
                            <div className="flex ">
                              <div className="form-control dailyReportInput"></div>
                            </div>
                          </td>

                          <td>
                            <div className="flex ">
                              <div className="form-control dailyReportInput"></div>
                            </div>
                          </td>
                          <td></td>

                          <td>
                            <div className="flex ">
                              <div className="form-control dailyReportInput"></div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>

      <div>
        <>
          <div className="mt-6">
            <div className="overflow-x-auto">
              <table className="table commonTable ">
                <thead>
                  <tr>
                    <th> क्र. सं.</th>
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
                  {/* ==================== dayamice data */}

                  <tr>
                    <th className="sticky">1</th>
                    <td>
                      <div className="form-control">Brand Name</div>
                    </td>
                    {/* ======== MRP Input ========= */}
                    <td>
                      <div className="smallinput"></div>
                    </td>
                    <td>
                      <div className="smallinput"></div>
                    </td>
                    <td>
                      <div className="smallinput"></div>
                    </td>
                    {/* ======== प्रारम्भिक स्टॉक ========= */}
                    <td>
                      <div className="smallinput"></div>
                    </td>

                    {/* ======== आमद (खरीद)-दु. ========= */}

                    <td>
                      <div className="smallinput"></div>
                    </td>

                    <td>
                      <div className="smallinput"></div>
                    </td>

                    <td>
                      <div className="smallinput"></div>
                    </td>
                    {/* ======== भेजान ========= */}
                    <td>
                      <div className="smallinput"></div>
                    </td>
                    {/* ======== योग/शेष ========= */}
                    <td>
                      <div className="smallinput"></div>
                    </td>
                    {/* ======== अन्तिम स्टॉक ========= */}
                    <td>
                      <div className="smallinput"></div>
                    </td>
                    {/* ============= बिक्री ================ */}
                    <td>
                      <div className="smallinput"></div>
                    </td>
                    {/* ============= रेट ================ */}
                    <td>
                      <div className="smallinput"></div>
                    </td>
                    {/* ============= योग ================ */}
                    <td>
                      <div className="smallinput"></div>
                    </td>
                    {/* ============= कुल योग ================ */}
                  </tr>

                  <tr>
                    <th className="sticky"></th>
                    <td></td>
                    <td>
                      <div className="smallinput"></div>
                    </td>
                    {/* ======== MRP Input ========= */}
                    <td></td>
                    <td>
                      <div className="smallinput"></div>
                    </td>
                    <td>
                      <div className="smallinput"></div>
                    </td>
                    {/* ======== प्रारम्भिक स्टॉक ========= */}
                    <td>
                      <div className="smallinput"></div>
                    </td>

                    {/* ======== आमद (खरीद)-दु. ========= */}

                    <td>
                      <div className="smallinput"></div>
                    </td>

                    <td>
                      <div className="smallinput"></div>
                    </td>

                    <td>
                      <div className="smallinput"></div>
                    </td>
                    {/* ======== भेजान ========= */}
                    <td>
                      <div className="smallinput"></div>
                    </td>
                    {/* ======== योग/शेष ========= */}
                    <td>
                      <div className="smallinput"></div>
                    </td>
                    {/* ======== अन्तिम स्टॉक ========= */}
                    <td>
                      <div className="smallinput"></div>
                    </td>
                    {/* ============= बिक्री ================ */}
                    <td>
                      <div className="smallinput"></div>
                    </td>
                    {/* ============= रेट ================ */}
                    <td>
                      <div className="smallinput"></div>
                    </td>
                    {/* ============= योग ================ */}
                    <td>
                      <div className="smallinput"></div>
                    </td>
                    {/* ============= कुल योग ================ */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      </div>
    </section>
  );
};

export default FronteDailyReport;
