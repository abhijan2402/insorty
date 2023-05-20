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
                <table className="table">
                  <tbody>
                    <tr>
                      <th colSpan={1}> क्र. सं.</th>
                      <th colSpan={1}>Party Name/ पार्टी का नाम</th>
                      <th colSpan={1}>Brand Name/ ब्राण्ड</th>
                      <th colSpan={1}>ML</th>
                      <th colSpan={1}>संख्या</th>
                      <th colSpan={1}>रेट</th>
                      <th colSpan={1}>योग</th>
                      <th colSpan={1}>टिप्पणी</th>
                    </tr>

                    <tr>
                      <td className="tg-0lax">1</td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                    </tr>

                    <tr>
                      <td className="tg-0lax">1</td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
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
                  <table className="table ">
                    <tbody>
                      <tr>
                        <th colSpan={1}> क्र. सं.</th>
                        <th colSpan={1}>Party Name/ पार्टी का नाम</th>
                        <th colSpan={1}>Brand Name/ ब्राण्ड</th>
                        <th colSpan={1}>ML</th>
                        <th colSpan={1}>संख्या</th>
                        <th colSpan={1}>टिप्पणी</th>
                      </tr>

                      <tr>
                        <td className="tg-0lax">1</td>
                        <td className="tg-0lax"></td>
                        <td className="tg-0lax"></td>
                        <td className="tg-0lax"></td>
                        <td className="tg-0lax"></td>
                        <td className="tg-0lax"></td>
                      </tr>

                      <tr>
                        <td className="tg-0lax">1</td>
                        <td className="tg-0lax"></td>
                        <td className="tg-0lax"></td>
                        <td className="tg-0lax"></td>
                        <td className="tg-0lax"></td>
                        <td className="tg-0lax"></td>
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
                <table className="table">
                  <tbody>
                    <tr>
                      <th colSpan={1}> क्र. सं.</th>
                      <th colSpan={1}></th>
                      <th colSpan={1}>Reason / विवरण</th>
                      <th colSpan={1}>रकम</th>
                      <th colSpan={1}>Description</th>
                    </tr>

                    <tr>
                      <td className="tg-0lax">1</td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                    </tr>

                    <tr>
                      <td className="tg-0lax">1</td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
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
                <table className="table ">
                  <thead></thead>

                  <tbody>
                    <tr>
                      <th colSpan={1}> क्र. सं.</th>
                      <th colSpan={1}></th>
                      <th colSpan={1}>पार्टी का नाम</th>
                      <th colSpan={1}>पार्टी/पार्टनर</th>
                      <th colSpan={1}>रकम</th>
                      <th colSpan={1}>टिप्पणी</th>
                    </tr>

                    <tr>
                      <td className="tg-0lax">1</td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                    </tr>

                    <tr>
                      <td className="tg-0lax">1</td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="py-6">
              <h1 className="my-4 ">
                <span className="font-bold titleText text-[1rem]">
                  पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति
                </span>
              </h1>

              <div>
                <table className="table ">
                  <tbody>
                    <tr>
                      <th colSpan={1}> क्र. सं.</th>
                      <td colSpan={1}></td>
                      <th colSpan={1}>Name</th>
                      <th colSpan={1}>Type</th>
                      <th colSpan={1}>रकम</th>
                      <th colSpan={1}> टिप्पणी</th>
                    </tr>
                    <tr>
                      <td className="tg-0lax">1</td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                    </tr>
                    <tr>
                      <td className="tg-0lax">1</td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
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
                <table className="table ">
                  <thead>
                    <tr>
                      <th colSpan={1}> क्र. सं.</th>
                      <th colSpan={1}>रकम/ price</th>
                      <th colSpan={1}>विवरण/ Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tg-0lax">1</td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                    </tr>

                    <tr>
                      <td className="tg-0lax">1</td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
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
              <table className="table ">
                <thead>
                  <tr>
                    <th colSpan={1}> क्र. सं.</th>
                    <th colSpan={1}>BRAND NAME/ ब्राण्ड</th>
                    <th colSpan={1}>मात्रा</th>
                    <th colSpan={1}>Amount</th>
                    <th colSpan={1}> टिप्पणी</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td className="tg-0lax">1</td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                  </tr>

                  <tr>
                  <td className="tg-0lax">1</td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax"></td>
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
