import React from "react";
import "../Style/DailyReport.scss";
import { Link } from "react-router-dom";
import UseBeerShopBack from "../../BeerHooks/DailyReportHooks/UseBeerShopBack/UseBeerShopBack";
const BackDailyReport = () => {
  const {
    comissonData,
    backLandedData,
    // addOneData,
    // addOneBackLand,
    // addFiveThirdForm,
    // addOneThirdForm,
    firstFormAddFive,
    fistFormAddOne,
    thirdFormData,
    fourthFormState,
    fivthFormState,
    sixthFormState,
    addOneSecondForm,
    addFiveSecondForm,
  } = UseBeerShopBack();

  return (
    <>
      <section className="mx-2">
        <div className="flex justify-center items-center gap-4 ">
          <div className="my-4 flex  items-center">
            <h1 className="font-bold text-2xl">
              Daily Report / दैनिक रिपोर्ट{" "}
            </h1>

            <div className="my-4 mx-4">
              <Link
                to="/user/bearshop/dailyreport/front"
                className="commonBtn"
              >
                Front
              </Link>
            </div>
          </div>
        </div>

        {/* *********************************************************BREAK*********************************************************  */}
        <div className="flex  overflow-x-auto">
          <div className="py-6">
            <h1 className="my-4">
              <span className="font-bold titleText">
              अंग्रेजी/बीयर/देशी/RML की आमद (खरीद बाहर से)
              </span>
            </h1>

            <form action="">
              <div className="overflow-x-auto">
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <th>Party Name/ पार्टी का नाम</th>
                      <th>Brand Name/ ब्राण्ड</th>
                      <th>Number / संख्या</th>
                      <th>quality (ml)</th>
                      <th>rate / रेट</th>
                      <th>total / योग</th>
                      <th>Reason / टिप्पणी</th>
                    </tr>
                  </thead>

                  <tbody>
                    {comissonData.map((commison, index) => {
                      return (
                        <tr key={index}>
                          <th>{index + 1}</th>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="dailyReportInput"
                                name="partyName"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="dailyReportInput"
                                name="brandName"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="dailyReportInput"
                                name="theNumber"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="dailyReportInput"
                                name="quantity"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="dailyReportInput"
                                name="rate"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="dailyReportInput"
                                name="totalData"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="dailyReportInput"
                                name="reason"
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </form>
            {/******************** Add Button   ********************/}
            <div>
              <div className="mt-4 flex gap-4">
                <button onClick={firstFormAddFive} className="dailyReportBtn">
                  ADD 5
                </button>
                <button onClick={fistFormAddOne} className="dailyReportBtn">
                  ADD 1
                </button>
              </div>
            </div>
            {/******************** Add Button   ********************/}
          </div>

          <div className="py-6">
            <h1 className="my-4">
              <span className="font-bold titleText">
              अंग्रेजी/बीयर/देशी/RML की आमद (उधारी)
              </span>
            </h1>
            <form action="">
              <div className="overflow-x-auto">
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <th>Party Name/ पार्टी का नाम</th>
                      <th>Brand Name/ ब्राण्ड</th>
                      <th>संख्या</th>
                      <th>SIze/ML</th>
                      <th>Comment /टिप्पणी</th>
                    </tr>
                  </thead>

                  <tbody>
                    {backLandedData.map((backLanded, index) => {
                      return (
                        <tr key={index}>
                          <th>{index + 1}</th>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="dailyReportInput"
                                name="partyName"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="dailyReportInput"
                                name="brandName"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="dailyReportInput"
                                name="rakom"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="dailyReportInput"
                                name="sizeMl"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="dailyReportInput"
                                name="comment"
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
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
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th>Reason / विवरण</th>
                      <th>रकम</th>
                      <th>Comment /टिप्पणी</th>
                    </tr>
                  </thead>
                  <tbody>
                    {thirdFormData.map((data, index) => {
                      return (
                        <tr key={index + 1}>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="semiSmallInput"
                                name="reason"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="semiSmallInput"
                                name="rakom"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="semiSmallInput"
                                name="comment"
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
        {/* *********************************************************BREAK*********************************************************  */}

        {/* *********************************************************BREAK*********************************************************  */}
        <div className="flex  overflow-x-auto">
          <div className="py-6">
            <h1 className="my-4">
              <span className="font-bold titleText">उधारी/नामे</span>
            </h1>

            <form action="">
              <div className="overflow-x-auto">
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <th>Party Name/ पार्टी का नाम</th>
                      <th>Partner Name/पार्टनर नाम</th>
                      <th>Amount / रकम</th>
                      <th>Comment /टिप्पणी</th>
                    </tr>
                  </thead>

                  <tbody>
                    {fourthFormState.map((data, index) => {
                      return (
                        <tr key={index}>
                          <th>{index + 1}</th>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="dailyReportInput"
                                name="partyName"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="dailyReportInput"
                                name="partnerName"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="dailyReportInput"
                                name="amount"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="dailyReportInput"
                                name="comment"
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </form>
            {/******************** Add Button   ********************/}
            <div>
              <div className="mt-4 flex gap-4">
                <button className="dailyReportBtn" onClick={addFiveSecondForm}>
                  ADD 5
                </button>
                <button onClick={addOneSecondForm} className="dailyReportBtn">
                  ADD 1
                </button>
              </div>
            </div>
            {/******************** Add Button   ********************/}
          </div>

          <div className="py-6">
            <h1 className="my-4">
              <span className="font-bold titleText">
              पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति
              </span>
            </h1>
            <form action="">
              <div className="overflow-x-auto">
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th>Reason / विवरण</th>
                      <th>रकम</th>
                      <th>Comment /टिप्पणी</th>
                    </tr>
                  </thead>

                  <tbody>
                    {fivthFormState.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="dailyReportInput"
                                name="resone"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="dailyReportInput"
                                name="rakam"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="dailyReportInput"
                                name="comment"
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          <div className="py-6">
            <h1 className="my-4 mx-6">
              <span className="font-bold titleText ">
                Food / vegatable etcc
              </span>
            </h1>
            <form action="">
              <div className="overflow-x-auto">
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <th>दिनांक / Date</th>
                      <th>रकम/ price</th>
                      <th>विवरण/ Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sixthFormState.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <div className="form-control">
                              <input
                                type="date"
                                className="semiSmallInput"
                                name="theDate"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-control">
                              <input
                                type="number"
                                className="semiSmallInput"
                                name="price"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="form-control">
                              <input
                                type="text"
                                className="semiSmallInput"
                                name="details"
                              />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          <div className="py-6">
            <h1 className="my-4 mx-4">
              <span className="font-bold titleText ">फाईनल रिपोर्ट</span>
            </h1>
            <form action="">
              <div className="overflow-x-auto">
                <table className="table commonTable">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
                      <th>Reason / विवरण</th>
                      <th>रकम</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>अंग्रेजी</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>बीयर</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>देशी/RML</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>कुल बिक्री</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति
                      </td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>खाते में (फोन पे आदि)</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>उधारी/नामे</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>पिछला बकाया</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>आज भुगतान</td>
                      <td>500</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>शेष रकम</td>
                      <td>500</td>
                    </tr>
                  </tbody>
                </table>
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
        </div>
        {/* *********************************************************BREAK*********************************************************  */}
      </section>
    </>
  );
};

export default BackDailyReport;
