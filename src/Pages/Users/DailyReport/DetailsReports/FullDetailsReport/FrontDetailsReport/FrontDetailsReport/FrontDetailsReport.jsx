import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import Loader from "../../../../../../../Components/Loader/Loader";
import FristFormDetails from "../FristFormDetails/FristFormDetails";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import { FaCalendarAlt } from "react-icons/fa";
import useFrontDetailHooks from "../FrontDetailsHooks/useFrontDetailHooks";
import RegularData from "../RegularData/RegularData";

const FrontDetailsReport = () => {
  const front = useRef(null);
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState();

  const {
    FrontPageRegularData,
    isLoading,
    FrontPageExceptionalData,
  } = useFrontDetailHooks();

  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  const filteredRegularData =
    FrontPageRegularData &&
    FrontPageRegularData?.filter((item) => {
      let filterPass = true;
      const date = moment(item.date).format("DD/MM/YYYY");

      if (StartDate) {
        filterPass =
          filterPass && moment(StartDate).format("DD/MM/YYYY") <= date;
      }
      if (EndDate) {
        filterPass = filterPass && moment(EndDate).format("DD/MM/YYYY") >= date;
      }
      return filterPass;
    });
  console.log(filteredRegularData, "+++++++++++++");

  const filteredExceptionalData = FrontPageExceptionalData?.filter((item) => {
    let filterPass = true;
    const date = moment(item.date).format("DD/MM/YYYY");

    if (StartDate) {
      filterPass = filterPass && moment(StartDate).format("DD/MM/YYYY") <= date;
    }
    if (EndDate) {
      filterPass = filterPass && moment(EndDate).format("DD/MM/YYYY") >= date;
    }
    return filterPass;
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <section className="my-4">
      <div className="flex gap-6 items-center my-4">
        <h2 className="font-bold text-xl text-gray-800">
          Front Details Report
        </h2>

        <Link
          to="/user/dailyreport/details"
          className="btn btn-error text-white font-bold"
        >
          Back Details Report
        </Link>

        <button
          className="my-4 btn btn-error text-white font-bold"
          onClick={handlePrint}
        >
          PRINT
        </button>
      </div>
      <div className="flex gap-4 items-center my-4">
        <h2 className="font-bold text-[1.5rem]">From</h2>
        <div className="flex gap-2 items-center">
          <FaCalendarAlt></FaCalendarAlt>
          <DatePicker
            selected={StartDate}
            onChange={(date) => {
              setStartDate(date);
              console.log(moment(date).format());
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText={"dd/mm/yyyy"}
            className="inputBox"
          />
        </div>

        <h2 className="font-bold text-[1.5rem]">To</h2>
        <div className="flex gap-2 items-center">
          <FaCalendarAlt></FaCalendarAlt>
          <DatePicker
            selected={EndDate}
            name="year"
            onChange={(data) => setEndDate(data)}
            dateFormat="dd/MM/yyyy"
            className="inputBox"
            placeholderText={"dd/mm/yyyy"}
          />
        </div>
      </div>
      <div className="divider"></div>

      <div ref={front}>
        <div className="overflow-x-auto m-4 p-4 flex ">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="tg-baqh" colSpan={42}>
                  <span
                    style={{ fontWeight: "bold", textDecoration: "underline" }}
                  >
                    अंग्रेजी शराब
                  </span>
                </th>
              </tr>
              <tr>
                <td className="tg-baqh" colSpan={42}>
                  दुकान का नाम
                  ............................................................................................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;सेल्समेन
                  का नाम
                  ..................................................................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;दिनांक
                  ...............................
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2}>S.no</td>
                <th rowSpan={2}>Brand Name/ ब्राण्ड</th>
                <th colSpan={3}>Average Rate</th>
                <th colSpan={3}>प्रारम्भिक स्टॉक</th>
                <th colSpan={3}>आमद (खरीद)-दु.</th>
                <th colSpan={3}>खरीद रेट - दु</th>
                <th colSpan={3}>आमद (खरीद)-बा.</th>
                <th colSpan={3}>खरीद रेट - बा.</th>
                <th colSpan={3}>आमद (उधारी)</th>
                <th colSpan={3}>भेजान</th>
                <th colSpan={3}>योग/शेष</th>
                <th colSpan={3}>अन्तिम स्टॉक</th>
                <th colSpan={3}>बिक्री</th>
                <th colSpan={3}>रेट</th>
                <th colSpan={3}>योग</th>
                <th rowSpan={3}>कुल योग</th>
              </tr>

              <tr>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>375ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>375ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>375ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>375ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>375ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>375ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>375ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>375ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>375ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>375ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>375ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>375ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>750ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>375ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>180ml</span>
                </td>
              </tr>

              {/* ========================== */}

              {filteredRegularData.map((regularData, index) => {
                return (
                  <RegularData
                    key={index}
                    regularData={regularData}
                    index={index}
                  ></RegularData>
                );
              })}

              {/* ========================== */}

              <tr>
                <td className="tg-0lax" colSpan={2}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total
                </td>
                <td className="tg-0lax"> 0</td>
                <td className="tg-0lax"> 0</td>
                <td className="tg-0lax"> 0</td>

                <td className="tg-0lax">0</td>
                <td className="tg-0lax"> 0 </td>
                <td className="tg-0lax"> 0 </td>

                <td className="tg-0lax"> 0 </td>
                <td className="tg-0lax"> 0 </td>
                <td className="tg-0lax"> 0 </td>

                <td className="tg-0lax"> 0 </td>
                <td className="tg-0lax"> 0 </td>
                <td className="tg-0lax"> 0 </td>

                <td className="tg-0lax"> 0 </td>
                <td className="tg-0lax"> 0 </td>
                <td className="tg-0lax"> 0 </td>

                <td className="tg-0lax">0 </td>
                <td className="tg-0lax">0 </td>
                <td className="tg-0lax">0 </td>

                <td className="tg-0lax">0 </td>
                <td className="tg-0lax">0 </td>
                <td className="tg-0lax">0 </td>

                <td className="tg-0lax">0 </td>
                <td className="tg-0lax">0 </td>
                <td className="tg-0lax">0 </td>

                <td className="tg-0lax"> 0 </td>
                <td className="tg-0lax"> 0 </td>
                <td className="tg-0lax"> 0 </td>

                <td className="tg-0lax"> 0 </td>
                <td className="tg-0lax"> 0 </td>
                <td className="tg-0lax"> 0 </td>

                <td className="tg-0lax">0</td>
                <td className="tg-0lax">0</td>
                <td className="tg-0lax">0</td>

                <td className="tg-0lax">0 </td>
                <td className="tg-0lax">0 </td>
                <td className="tg-0lax">0 </td>

                <td className="tg-0lax">0 </td>
                <td className="tg-0lax">0 </td>
                <td className="tg-0lax">0 </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto m-4 p-4 flex ">
          <table className="table w-full">
            <thead>
              <tr>
                <td className="tg-0lax " colSpan={50}>
                  <span style={{ fontWeight: "bold" }}>English</span>
                </td>
              </tr>

              <tr>
                <td>S.no</td>
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
              {filteredExceptionalData.map((exceptionalData, index) => {
                return (
                  <FristFormDetails
                    key={index}
                    index={index}
                    exceptionalData={exceptionalData}
                  ></FristFormDetails>
                );
              })}

              {/* <BackRmlDetailsData></BackRmlDetailsData> */}

              <tr>
                <td className="tg-0lax" colSpan={2}>
                  Total
                </td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax">
                  {FrontPageExceptionalData.filter((item) => {
                    if (
                      item.date
                        ?.toString()
                        .includes(filteredExceptionalData.toString())
                    ) {
                      return item;
                    } else if (filteredExceptionalData === "") {
                      return item;
                    }
                    return false;
                  }).reduce(
                    (total, currentItem) =>
                      (total =
                        total +
                        currentItem.reduce(
                          (total, currentItem) =>
                            (total = total + currentItem.openingStock),
                          0
                        )),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {FrontPageExceptionalData.filter((item) => {
                    if (
                      item.date
                        ?.toString()
                        .includes(filteredExceptionalData.toString())
                    ) {
                      return item;
                    } else if (filteredExceptionalData === "") {
                      return item;
                    }
                    return false;
                  }).reduce(
                    (total, currentItem) =>
                      (total =
                        total +
                        currentItem.reduce(
                          (total, currentItem) =>
                            (total = total + currentItem.purchaseShop),
                          0
                        )),
                    0
                  )}
                </td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax">
                  {FrontPageExceptionalData.filter((item) => {
                    if (
                      item.date
                        ?.toString()
                        .includes(filteredExceptionalData.toString())
                    ) {
                      return item;
                    } else if (filteredExceptionalData === "") {
                      return item;
                    }
                    return false;
                  }).reduce(
                    (total, currentItem) =>
                      (total =
                        total +
                        currentItem.reduce(
                          (total, currentItem) =>
                            (total = total + currentItem.purchaseOutSide),
                          0
                        )),
                    0
                  )}
                </td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax">
                  {FrontPageExceptionalData.filter((item) => {
                    if (
                      item.date
                        ?.toString()
                        .includes(filteredExceptionalData.toString())
                    ) {
                      return item;
                    } else if (filteredExceptionalData === "") {
                      return item;
                    }
                    return false;
                  }).reduce(
                    (total, currentItem) =>
                      (total =
                        total +
                        currentItem.reduce(
                          (total, currentItem) =>
                            (total = total + currentItem.credits),
                          0
                        )),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {FrontPageExceptionalData.filter((item) => {
                    if (
                      item.date
                        ?.toString()
                        .includes(filteredExceptionalData.toString())
                    ) {
                      return item;
                    } else if (filteredExceptionalData === "") {
                      return item;
                    }
                    return false;
                  }).reduce(
                    (total, currentItem) =>
                      (total =
                        total +
                        currentItem.reduce(
                          (total, currentItem) =>
                            (total = total + currentItem.send),
                          0
                        )),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {FrontPageExceptionalData.filter((item) => {
                    if (
                      item.date
                        ?.toString()
                        .includes(filteredExceptionalData.toString())
                    ) {
                      return item;
                    } else if (filteredExceptionalData === "") {
                      return item;
                    }
                    return false;
                  }).reduce(
                    (total, currentItem) =>
                      (total =
                        total +
                        currentItem.reduce(
                          (total, currentItem) =>
                            (total = total + currentItem.remaining),
                          0
                        )),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {FrontPageExceptionalData.filter((item) => {
                    if (
                      item.date
                        ?.toString()
                        .includes(filteredExceptionalData.toString())
                    ) {
                      return item;
                    } else if (filteredExceptionalData === "") {
                      return item;
                    }
                    return false;
                  }).reduce(
                    (total, currentItem) =>
                      (total =
                        total +
                        currentItem.reduce(
                          (total, currentItem) =>
                            (total = total + currentItem.closingStock),
                          0
                        )),
                    0
                  )}
                </td>

                <td className="tg-0lax">
                  {FrontPageExceptionalData.filter((item) => {
                    if (
                      item.date
                        ?.toString()
                        .includes(filteredExceptionalData.toString())
                    ) {
                      return item;
                    } else if (filteredExceptionalData === "") {
                      return item;
                    }
                    return false;
                  }).reduce(
                    (total, currentItem) =>
                      (total =
                        total +
                        currentItem.reduce(
                          (total, currentItem) =>
                            (total = total + currentItem.sales),
                          0
                        )),
                    0
                  )}
                </td>

                <td className="tg-0lax"></td>

                <td className="tg-0lax">
                  {/* {FrontPageData.filter((item) => {
                    if (item.date?.toString().includes(filterDate.toString())) {
                      return item;
                    } else if (filterDate === "") {
                      return item;
                    }
                  }).reduce(
                    (total, currentItem) =>
                      (total =
                        total +
                        currentItem.reduce(
                          (total, currentItem) =>
                            (total =
                              total +
                              Number(currentItem?.amount?.$numberDecimal)),
                          0
                        )),
                    0
                  )} */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FrontDetailsReport;
