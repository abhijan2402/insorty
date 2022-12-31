import React from "react";

const FristFrom = () => {
  return (
    <>
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
              <th>1</th>
              <td>
                <div className="form-control">
                  <input
                    type="text"
                    className="dailyReportInput "
                    style={{
                      marginTop: "2rem",
                    }}
                  />
                </div>
              </td>
              {/* ======== MRP Input ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">750ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">330ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">180ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== प्रारम्भिक स्टॉक ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">750ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">330ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">180ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>

              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">750ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">330ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">180ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>

              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">750ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">330ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">180ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>

              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">750ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">330ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">180ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>

              {/* ============खरीद रेट - बा. =============  */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">750ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">330ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">180ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>

              {/* ======== आमद (उधारी) ========= */}

              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">750ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">330ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">180ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== भेजान ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">750ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">330ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">180ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== योग/शेष ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">750ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">330ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">180ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== अन्तिम स्टॉक ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">750ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">330ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">180ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ============= बिक्री ================ */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">750ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">330ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">180ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ============= रेट ================ */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">750ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">330ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">180ml</span>
                    </label>
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ============= योग ================ */}
              <td>
                <div className="form-control">
                  <input
                    type="text"
                    className="semiSmallInput"
                    style={{
                      marginTop: "2rem",
                    }}
                  />
                </div>
              </td>
              {/* ============= कुल योग ================ */}
              <td>
                <div className="form-control">
                  <input
                    type="text"
                    className="semiSmallInput"
                    style={{
                      marginTop: "2rem",
                    }}
                  />
                </div>
              </td>
            </tr>

            {/* 02 */}
            <tr>
              <th>2</th>
              <td>
                <div className="form-control">
                  <input type="text" className="dailyReportInput " />
                </div>
              </td>
              {/* ======== MRP Input ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== प्रारम्भिक स्टॉक ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>

              {/* ======== आमद (खरीद)-दु. ========= */}

              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>

              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>

              {/* ======== आमद (खरीद)-बा. ========= */}

              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>

              {/*================ खरीद रेट - बा. ==================  */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>

              {/* ======== आमद (उधारी) ========= */}

              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== भेजान ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== योग/शेष ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== अन्तिम स्टॉक ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ============= बिक्री ================ */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ============= रेट ================ */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ============= योग ================ */}
              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>
              {/* ============= कुल योग ================ */}
              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>
            </tr>

            {/* 03 */}

            <tr>
              <th>3</th>
              <td>
                <div className="form-control">
                  <input type="text" className="dailyReportInput " />
                </div>
              </td>
              {/* ======== MRP Input ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== प्रारम्भिक स्टॉक ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>

              {/* ======== आमद (खरीद)-दु. ========= */}

              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>

              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== आमद (खरीद)-बा. ========= */}

              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>

              {/*================ खरीद रेट - बा. ==================  */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>

              {/* ======== आमद (उधारी) ========= */}

              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== भेजान ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== योग/शेष ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== अन्तिम स्टॉक ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ============= बिक्री ================ */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ============= रेट ================ */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ============= योग ================ */}
              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>
              {/* ============= कुल योग ================ */}
              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>
            </tr>

            {/* 04 */}

            <tr>
              <th>4</th>
              <td>
                <div className="form-control">
                  <input type="text" className="dailyReportInput " />
                </div>
              </td>
              {/* ======== MRP Input ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== प्रारम्भिक स्टॉक ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>

              {/* ======== आमद (खरीद)-दु. ========= */}

              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>

              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== आमद (खरीद)-बा. ========= */}

              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>

              {/*================ खरीद रेट - बा. ==================  */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>

              {/* ======== आमद (उधारी) ========= */}

              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== भेजान ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== योग/शेष ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== अन्तिम स्टॉक ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ============= बिक्री ================ */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ============= रेट ================ */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ============= योग ================ */}
              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>
              {/* ============= कुल योग ================ */}
              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>
            </tr>

            {/* 05 */}

            <tr>
              <th></th>
              <td>
                <div className="form-control">
                  <h1 className="font-bold">TOTAL</h1>
                </div>
              </td>

              {/* ======== MRP Input ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== प्रारम्भिक स्टॉक ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>

              {/* ======== आमद (खरीद)-दु. ========= */}

              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== आमद (खरीद)-बा. ========= */}

              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>

              {/*================ खरीद रेट - बा. ==================  */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== आमद (उधारी) ========= */}

              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== भेजान ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== योग/शेष ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ======== अन्तिम स्टॉक ========= */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ============= बिक्री ================ */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ============= रेट ================ */}
              <td>
                <div className="flex gap-2">
                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>

                  <div class="form-control">
                    <input type="number" class="smallinput" />
                  </div>
                </div>
              </td>
              {/* ============= योग ================ */}
              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>
              {/* ============= कुल योग ================ */}
              <td>
                <div className="form-control">
                  <input type="text" className="semiSmallInput" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FristFrom;
