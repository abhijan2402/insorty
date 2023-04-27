import React from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";

const BackDailyReport = () => {
  return (
    <>
      <section className="mx-2">
        <div className="flex justify-center items-center gap-4 ">
          <div className="my-4 flex  items-center">
            <h1 className="font-bold text-2xl">
              Daily Report / दैनिक रिपोर्ट{" "}
            </h1>

            <div className="my-4 mx-4">
              <Link to="/user/bearshop/dailyreport/front" className="commonBtn">
                Front
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <h1 className="font-bold ">सेल्समेन का नाम:- </h1>
          <input type="text" className="smallinput wd-30" />

          <div className="flex  items-center">
            <DatePicker
              name="year"
              dateFormat="dd/MM/yyyy"
              className="inputBox date"
              placeholderText={"dd/mm/yyyy"}
            />
          </div>
        </div>

        {/* *********************************************************BREAK*********************************************************  */}
        <form>
          <div className="flex  overflow-x-auto">
            <div className="py-6">
              <h1 className="my-4">
                <span className="font-bold titleText">
                  अंग्रेजी/बीयर/देशी/RML की आमद (खरीद बाहर से)
                </span>
              </h1>
              <div>
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <td></td>
                      <th>Party Name/ पार्टी का नाम</th>
                      <th>Brand Name/ ब्राण्ड</th>
                      <th>ML</th>
                      <th>संख्या</th>
                      <th>रेट</th>
                      <th>योग</th>
                      <th>टिप्पणी</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th className="sticky">1</th>
                      <th className="cross">X</th>

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput wd-7"
                            disabled
                          />
                        </div>
                      </td>
                      {/* ======== प्रारम्भिक स्टॉक ========= */}
                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput wd-7"
                            disabled
                          />
                        </div>
                      </td>

                      <td>
                        <div className="form-control ">
                          <select className="smallinput wd-9">
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

                      {/* ======== आमद (खरीद)-दु. ========= */}

                      <td>
                        <div className="form-control ">
                          <input
                            type="number"
                            className="smallinput wd-7"
                            disabled
                          />
                        </div>
                      </td>
                      {/* ======== आमद (खरीद)-बा. ========= */}

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput wd-7"
                            disabled
                          />
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput wd-7"
                            disabled
                          />
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input type="text" className="smallinput wd-30" />
                        </div>
                      </td>
                      {/* ======== आमद (उधारी) ========= */}
                    </tr>

                    <tr>
                      <th className="sticky">1</th>
                      <td>
                        <div className="form-control"></div>
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
                            type="number"
                            className="smallinput"
                            disabled
                          />
                        </div>
                      </td>

                      <td>
                        <div className="form-control"></div>
                      </td>

                      <td>
                        <div className="form-control">
                          <input
                            type="number"
                            className="smallinput wd-7"
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
                  अंग्रेजी/बीयर/देशी/RML की आमद (उधारी)
                </span>
              </h1>

              <>
                <div>
                  <table className="table commonTable">
                    <thead>
                      <tr>
                        <th> क्र. सं.</th>
                        <th></th>
                        <th>Party Name/ पार्टी का नाम</th>
                        <th>Brand Name/ ब्राण्ड</th>
                        <th>ML</th>
                        <th>संख्या</th>
                        <th>टिप्पणी</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>

                        <td>
                          <div className="form-control">
                            <input
                              type="number"
                              required
                              className="smallinput"
                              disabled
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-control">
                            <input
                              type="number"
                              required
                              className="smallinput"
                              disabled
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-control">
                            <input
                              type="number"
                              required
                              className="smallinput"
                              disabled
                            />
                          </div>
                        </td>

                        <td>
                          <div className="form-control">
                            <input
                              type="number"
                              required
                              className="smallinput"
                              disabled
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-control">
                            <input
                              type="text"
                              disabled
                              className="smallinput wd-30"
                            />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>1</th>
                        <th>Branad Name</th>
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
                              type="number"
                              className="smallinput"
                              name="theNumber"
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
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <td></td>
                      <th>Reason / विवरण</th>
                      <th>रकम</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <th className="cross">X</th>
                      <td>
                        <div className="form-control">
                          <input
                            type="text"
                            required
                            className="smallinput wd-30"
                            name="desc"
                            disabled
                          />
                        </div>
                      </td>

                      <td>
                        <input
                          type="number"
                          required
                          className="smallinput wd-6"
                          name="amount"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          required
                          className="smallinput wd-30"
                          name="desc"
                          disabled
                        />
                      </td>
                    </tr>

                    <tr>
                      <th className="sticky">1</th>
                      <td>
                        <div className="form-control">Total</div>
                      </td>
                      <td>
                        <div className="form-control"></div>
                      </td>

                      <td>
                        <input
                          type="number"
                          className="smallinput wd-6"
                          name="amount"
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
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <th></th>
                      <th>पार्टी का नाम</th>
                      <th>पार्टी/पार्टनर</th>
                      <th>रकम</th>
                      <th>टिप्पणी</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th>1</th>

                      <td>
                        <div className="form-control">
                        <div className="smallinput wd-7"></div>
                         
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                        <div  className="smallinput wd-9"></div>
                          
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                        <div  className="smallinput wd-9"></div>
                        
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                        <div  className="smallinput wd-30"></div>
                          
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>1</th>

                      <td>
                        <div className="form-control">
                        <div className="smallinput wd-7"></div>
                         
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                        <div  className="smallinput wd-9"></div>
                          
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                        <div  className="smallinput wd-9"></div>
                        
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                        <div  className="smallinput wd-30"></div>
                          
                        </div>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>

            <div className="py-6">
              <h1 className="my-4 specialwidth">
                <span className="font-bold titleText text-[1rem]">
                  पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति
                </span>
              </h1>

              <div>
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <td></td>
                      <th>Name</th>
                      <th>Type</th>
                      <th>रकम</th>
                      <th>comment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>1</th>
                      <td>
                        <div className="form-control">
                          <div className="smallinput wd-7"></div>
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                          <div className="smallinput wd-7"></div>
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                          <div className="smallinput wd-7"></div>
                        </div>
                      </td>
                      <td>
                        <div
                          className="smallinput wd-7"
                          style={{
                            width: "240px",
                          }}
                        ></div>
                      </td>
                    </tr>
                    <tr>
                      <th>1</th>
                      <td>
                        <div className="form-control">
                          <div className="smallinput wd-7"></div>
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                          <div className="smallinput wd-7"></div>
                        </div>
                      </td>

                      <td>
                        <div className="form-control">
                          <div className="smallinput wd-7"></div>
                        </div>
                      </td>
                      <td>
                        <div
                          className="smallinput wd-7"
                          style={{
                            width: "240px",
                          }}
                        ></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="py-6">
              <h1 className="my-4">
                <span className="font-bold titleText ">
                  Food / vegatable etcc
                </span>
              </h1>

              <div className="overflow-x-auto">
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <th>रकम/ price</th>
                      <th>विवरण/ Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>

                      <td>
                        <div className="form-control">
                          <div className="semiSmallInput"></div>
                        </div>
                      </td>
                      <td>
                        <div className="form-control">
                          <div className="semiSmallInput"></div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th className="sticky">1</th>

                      <td>
                        <div className="form-control">
                          <div className="semiSmallInput"></div>
                        </div>
                      </td>
                      <td>
                        <div className="form-control">
                          <div className="semiSmallInput"></div>
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
                    <th>BRAND NAME/ ब्राण्ड</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Comment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <div className="form-control">
                        <div className="semiSmallInput"></div>
                      </div>
                    </td>
                    <td>
                      <div className="form-control">
                        <div className="semiSmallInput"></div>
                      </div>
                    </td>
                    <td>
                      <div className="form-control">
                        <div className="semiSmallInput"></div>
                      </div>
                    </td>
                    <td>
                      <div className="form-control">
                        <div className="semiSmallInput"></div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th className="sticky">1</th>
                    <td>
                      <div className="form-control">Total</div>
                    </td>
                    <td>
                      <div className="form-control">
                        <div className="semiSmallInput"></div>
                      </div>
                    </td>
                    <td>
                      <div className="form-control">
                        <div className="semiSmallInput"></div>
                      </div>
                    </td>

                    <td>
                      <div className="form-control">
                        <div className="semiSmallInput"></div>
                      </div>
                    </td>
                    <td>
                      <div className="form-control">
                        <div className="semiSmallInput"></div>
                      </div>
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
                <section>
                  <div className="overflow-x-auto">
                    {/* <------------------------BAR FINAL REPORT-----------------------> */}
                    <table className="table">
                      <thead>
                        <tr>
                          <th> क्र. सं.</th>
                          <th>Reason / विवरण</th>
                          <th>total</th>
                        </tr>
                      </thead>

                      <tbody className="finalTableBody">
                        <tr>
                          <th>1</th>
                          <td>अंग्रेजी</td>
                          <td>500</td>
                        </tr>

                        {/* 02 */}
                        <tr>
                          <th>2</th>
                          <td>बीयर</td>
                          <td>500</td>
                        </tr>

                        {/* 03 */}

                        <tr>
                          <th>3</th>
                          <td>bar suplements</td>
                          <td>500</td>
                        </tr>
                        <tr>
                          <th>4</th>
                          <td>Food/Veg etc</td>
                          <td>500</td>
                        </tr>
                        {/* 04 */}
                        <tr>
                          <th>4</th>
                          <td>कुल बिक्री</td>
                          <td>500</td>
                        </tr>
                        {/* 05 */}
                        <tr>
                          <th>5</th>
                          <td>
                            पीछे की उधारी में से, ब्रांचों से व अन्य से नकद
                            प्राप्ति
                          </td>
                          <td>
                            {Number(
                              localStorage.getItem("totalPaymentsRecieved")
                            )}
                          </td>
                        </tr>
                        {/* 06 */}
                        <tr>
                          <th>6</th>
                          <td>खाते में (फोन पे आदि)</td>
                          <td>500</td>
                        </tr>
                        {/* 07 */}
                        <tr>
                          <th>7</th>
                          <td>उधारी/नामे</td>
                          <td>500</td>
                        </tr>
                        {/* 08 */}
                        <tr>
                          <th>8</th>
                          <td>कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि</td>
                          <td>500</td>
                        </tr>
                        {/* 09 */}
                        <tr>
                          <th>9</th>
                          <td>पिछला बकाया</td>
                          <td>500</td>
                        </tr>
                        {/* 10 */}

                        <tr>
                          <th>10</th>
                          <td>total</td>
                          <td>500</td>
                        </tr>

                        <tr>
                          <th>11</th>
                          <td>आज भुगतान</td>
                          <td>500</td>
                        </tr>
                        {/* 11 */}
                        <tr>
                          <th>12</th>
                          <td>शेष रकम</td>
                          <td>500</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
            </form>
          </div>

          <div className="py-6">
            <h1 className="my-4 specialwidth">
              <span className="font-bold titleText ">फाईनल रिपोर्ट</span>
            </h1>
            <div>
              <textarea
                className="textarea textarea-bordered"
                placeholder="फाईनल रिपोर्ट"
                rows="3"
                cols="50"
                name="comment"
                form="usrform"
                height="100px"
                width="100px"
              ></textarea>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default BackDailyReport;
