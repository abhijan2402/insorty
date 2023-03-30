import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import InfolwRml from "../InflowRml/InfolwRml";
import CommisonExpence from "../CommisonExpence/CommisonExpence";
import CashReciveData from "../CashReciveData/CashReciveData";
import Loader from "../../../../../../../Components/Loader/Loader";
import { useReactToPrint } from "react-to-print";
import InflowBorrow from "../InflowBorrow/InflowBorrow";
import ShippingEnglishBear from "../ShippingEnglishBear/ShippingEnglishBear";
import FinalReport from "../FinalReport/FinalReport";
import Borrowed from "../Borrrowed/Borrowed";
import useGetDailyReport from "../../../../../../../Hooks/useGetDailyReport";
import BackRmlDetailsData from "../BackRmlDetails/BackRmlDetailsData";
import moment from "moment/moment";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RegularData from "../../FrontDetailsReport/RegularData/RegularData";
import FristFormDetails from "../../FrontDetailsReport/FristFormDetails/FristFormDetails";

const BackDetailReport = () => {
  // const [selectedDate, setSelectedDate] = useState();

  const {
    RMLData,
    RMLLoaded,
    PurchaseOutsideData,
    PurchaseOutsideLoaded,
    TotalExpensesData,
    TotalExpensesLoaded,
    BorrowedCashReturnData,
    BorrowedCashReturnLoaded,
    PurchaseBorrowData,
    PurchaseBorrowLoaded,
    SendData,
    SendLoaded,
    BorrowedData,
    BorrowedDataLoaded,
    FinalReportData,
    FinalReportDataLoaded,
    BackPageReportExceptionalSize,
    BackPageReportRegularSize,
    ExceptionalLoading,
    RegularLoading,
  } = useGetDailyReport();

  const container = useRef(null);
  const [pageId, setPageId] = useState();
  const [pgNo, setPgNo] = useState(0);
  let frontSet = new Set([]);

  const [filterDate, setFilterData] = useState(new Date());

  const handlePrint = useReactToPrint({
    content: () => container.current,
  });

  if (
    RMLLoaded ||
    PurchaseOutsideLoaded ||
    TotalExpensesLoaded ||
    BorrowedCashReturnLoaded ||
    PurchaseBorrowLoaded ||
    SendLoaded ||
    BorrowedDataLoaded ||
    FinalReportDataLoaded ||
    ExceptionalLoading ||
    RegularLoading
  ) {
    return <Loader></Loader>;
  }

  

  //

  const filteredExceptionalData = filterDate
    ? BackPageReportExceptionalSize.filter((item) => {
        const itemDate = new Date(moment(item.date).format());
        const selected = filterDate ? new Date(filterDate) : null;
        if (selected) {
          return itemDate.toDateString() === selected.toDateString();
        } else {
          return true;
        }
      })
    : BackPageReportExceptionalSize;

  const filteredRegularData = filterDate
    ? BackPageReportRegularSize.filter((item) => {
        const itemDate = new Date(moment(item.date).format());
        const selected = filterDate ? new Date(filterDate) : null;
        if (selected) {
          return itemDate.toDateString() === selected.toDateString();
        } else {
          return true;
        }
      })
    : BackPageReportRegularSize;

  filteredRegularData.map((item) => {
    item.pages.map((pg) => {
      frontSet.add(pg.page);
      // setPage(pg.page)
      return 0;
    });
    return 0;
  });

  let quan650 = [];
  let quan550 = [];
  let quan330 = [];

  filteredRegularData.map((item) => {
    item.pages.map((page) => {
      console.log(page)
      const pg = pageId ? pageId : Array.from(frontSet)[0];
      console.log(frontSet)
      if (page.page === pg) {
        page.entries.map((entry) => {
          console.log(entry)
          if (entry.quantityInML === 650) {
            quan650.push(entry);
          } else if (entry.quantityInML === 550) {
            quan550.push(entry);
          } else if (entry.quantityInML === 330) {
            quan330.push(entry);
          }
        });
      }
    });
  });

  

  const openingStock = filteredExceptionalData
    .filter((page) => {
      const pg = pageId ? pageId : Array.from(frontSet)[0];
      if (page.page === pg) {
        return page;
      } else return 0;
    })
    .map((item) => {
      const { openingStock } = item;
      return openingStock;
    });

  const purchaseShop = filteredExceptionalData
    .filter((page) => {
      const pg = pageId ? pageId : Array.from(frontSet)[0];
      if (page.page === pg) {
        return page;
      } else return 0;
    })
    .map((item) => {
      const { purchaseShop } = item;
      return purchaseShop;
    });

  const purchaseOutSide = filteredExceptionalData
    .filter((page) => {
      const pg = pageId ? pageId : Array.from(frontSet)[0];
      if (page.page === pg) {
        return page;
      } else return 0;
    })
    .map((item) => {
      const { purchaseOutSide } = item;
      return purchaseOutSide;
    });

  const credits = filteredExceptionalData
    .filter((page) => {
      const pg = pageId ? pageId : Array.from(frontSet)[0];
      if (page.page === pg) {
        return page;
      } else return 0;
    })
    .map((item) => {
      const { credits } = item;
      return credits;
    });

  const send = filteredExceptionalData
    .filter((page) => {
      const pg = pageId ? pageId : Array.from(frontSet)[0];
      if (page.page === pg) {
        return page;
      } else return 0;
    })
    .map((item) => {
      const { send } = item;
      return send;
    });

  const remaining = filteredExceptionalData
    .filter((page) => {
      const pg = pageId ? pageId : Array.from(frontSet)[0];
      if (page.page === pg) {
        return page;
      } else return 0;
    })
    .map((item) => {
      const { remaining } = item;
      return remaining;
    });

  const closingStock = filteredExceptionalData
    .filter((page) => {
      const pg = pageId ? pageId : Array.from(frontSet)[0];
      if (page.page === pg) {
        return page;
      } else return 0;
    })
    .map((item) => {
      const { closingStock } = item;
      return closingStock;
    });

  const sales = filteredExceptionalData
    .filter((page) => {
      const pg = pageId ? pageId : Array.from(frontSet)[0];
      if (page.page === pg) {
        return page;
      } else return 0;
    })
    .map((item) => {
      const { sales } = item;
      return sales;
    });

  return (
    <section className="my-4">
      <div className="flex gap-6 items-center ">
        <h2 className="font-bold text-xl text-gray-800">
          बीयर
        </h2>
        <Link to="/user/frontdailyreport/details" className="commonBtn">
          अंग्रेजी
        </Link>

        <button className="commonBtn " onClick={handlePrint}>
          PRINT
        </button>
      </div>

      <div className="flex gap-4 items-center my-4">
        <div className="flex gap-2 items-center">
          <DatePicker
            selected={filterDate}
            onChange={(date) => {
              setFilterData(date);
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText={"dd/mm/yyyy"}
            className="inputBox date"
          />
        </div>
        {Array.from(frontSet)
          .sort((a, b) => a - b)
          .map((item, index) => {
            return (
              <button
                className="commonBtn "
                onClick={() => {
                  setPageId(item);
                  setPgNo(index);
                }}
              >
                {index + 1}
              </button>
            );
          })}
      </div>

      <div className="divider"></div>

      <div ref={container}>
        {/* ====================1==================== */}

        <div className="overflow-x-auto m-4 p-4">
          <table>
            <tbody>
              <tr>
                <td rowSpan={2}> क्र. सं.</td>
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
                <th rowSpan={2}>कुल योग</th>
              </tr>

              <tr>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>650ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>550ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>330ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>650ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>550ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>330ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>650ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>550ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>330ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>650ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>550ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>330ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>650ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>550ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>330ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>650ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>550ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>330ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>650ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>550ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>330ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>650ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>550ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>330ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>650ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>550ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>330ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>650ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>550ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>330ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>650ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>550ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>330ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>650ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>550ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>330ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>650ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>550ml</span>
                </td>
                <td className="tg-0lax">
                  <span style={{ fontWeight: "bold" }}>330ml</span>
                </td>
              </tr>

              {/* ========================== */}

              {filteredRegularData.map((regularData, index) => {
                return (
                  <RegularData
                    key={index}
                    regularData={regularData}
                    index={index}
                    quan1={650}
                    quan2={550}
                    quan3={330}
                    pageId={pageId}
                    frontSet={frontSet}
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

                <td className="tg-0lax">
                  {quan650.reduce(
                    (total, regularData) =>
                      total + Number(regularData.openingStock),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan550.reduce(
                    (total, regularData) =>
                      total + Number(regularData.openingStock),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan330.reduce(
                    (total, regularData) =>
                      total + Number(regularData.openingStock),
                    0
                  )}
                </td>

                <td className="tg-0lax">
                  {quan650.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseShop),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan550.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseShop),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan330.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseShop),
                    0
                  )}
                </td>

                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>

                <td className="tg-0lax">
                  {quan650.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseOutSide),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan550.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseOutSide),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan330.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseOutSide),
                    0
                  )}
                </td>

                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>

                <td className="tg-0lax">
                  {quan650.reduce(
                    (total, regularData) => total + Number(regularData.credits),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan550.reduce(
                    (total, regularData) => total + Number(regularData.credits),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan330.reduce(
                    (total, regularData) => total + Number(regularData.credits),
                    0
                  )}
                </td>

                <td className="tg-0lax">
                  {quan650.reduce(
                    (total, regularData) => total + Number(regularData.send),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan550.reduce(
                    (total, regularData) => total + Number(regularData.send),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan330.reduce(
                    (total, regularData) => total + Number(regularData.send),
                    0
                  )}
                </td>

                <td className="tg-0lax">
                  {quan650.reduce(
                    (total, regularData) =>
                      total + Number(regularData.remaining),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan550.reduce(
                    (total, regularData) =>
                      total + Number(regularData.remaining),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan330.reduce(
                    (total, regularData) =>
                      total + Number(regularData.remaining),
                    0
                  )}
                </td>

                <td className="tg-0lax">
                  {quan650.reduce(
                    (total, regularData) =>
                      total + Number(regularData.closingStock),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan550.reduce(
                    (total, regularData) =>
                      total + Number(regularData.closingStock),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan330.reduce(
                    (total, regularData) =>
                      total + Number(regularData.closingStock),
                    0
                  )}
                </td>

                <td className="tg-0lax">
                  {quan650.reduce(
                    (total, regularData) => total + Number(regularData.sales),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan550.reduce(
                    (total, regularData) => total + Number(regularData.sales),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan330.reduce(
                    (total, regularData) => total + Number(regularData.sales),
                    0
                  )}
                </td>

                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>

                <td className="tg-0lax">
                  {quan650.reduce(
                    (total, regularData) =>
                      total +
                      Number(regularData.sales) *
                        Number(regularData.sellingRate?.$numberDecimal),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan550.reduce(
                    (total, regularData) =>
                      total +
                      Number(regularData.sales) *
                        Number(regularData.sellingRate?.$numberDecimal),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan330.reduce(
                    (total, regularData) =>
                      total +
                      Number(regularData.sales) *
                        Number(regularData.sellingRate?.$numberDecimal),
                    0
                  )}
                </td>

                <td>
                  {quan650.reduce(
                    (total, regularData) =>
                      total +
                      Number(regularData.sales) *
                        Number(regularData.sellingRate?.$numberDecimal),
                    0
                  ) +
                    quan550.reduce(
                      (total, regularData) =>
                        total +
                        Number(regularData.sales) *
                          Number(regularData.sellingRate?.$numberDecimal),
                      0
                    ) +
                    quan330.reduce(
                      (total, regularData) =>
                        total +
                        Number(regularData.sales) *
                          Number(regularData.sellingRate?.$numberDecimal),
                      0
                    )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto m-4 p-4 flex ">
          <table className="table w-full">
            <thead>
              <tr>
                <td className="tg-0lax " colSpan={50}>
                  <span style={{ fontWeight: "bold" }}></span>
                </td>
              </tr>

              <tr>
                <td> क्र. सं.</td>
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
              {filteredExceptionalData &&
                filteredExceptionalData.map((exceptionalData, index) => {
                  let count = 0
                  const pg = pageId ? pageId : Array.from(frontSet)[0];
                  if (exceptionalData.page === pg) {
                    count++
                    return (
                      <FristFormDetails
                        key={index}
                        index={count}
                        exceptionalData={exceptionalData}
                        pageId={pageId}
                        frontSet={frontSet}
                      ></FristFormDetails>
                    );
                  }
                })}

              {/* <BackRmlDetailsData></BackRmlDetailsData> */}

              <tr>
                <td className="tg-0lax" colSpan={2}>
                  Total
                </td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax">
                  {openingStock.reduce((acc, item) => {
                    const total = Number(acc) + Number(item);
                    return total;
                  }, 0)}
                </td>
                <td className="tg-0lax">
                  {purchaseShop.reduce((acc, item) => {
                    const total = Number(acc) + Number(item);
                    return total;
                  }, 0)}
                </td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax">
                  {purchaseOutSide.reduce((acc, item) => {
                    const total = Number(acc) + Number(item);
                    return total;
                  }, 0)}
                </td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax">
                  {credits.reduce((acc, item) => {
                    const total = Number(acc) + Number(item);
                    return total;
                  }, 0)}
                </td>
                <td className="tg-0lax">
                  {send.reduce((acc, item) => {
                    const total = Number(acc) + Number(item);
                    return total;
                  }, 0)}
                </td>
                <td className="tg-0lax">
                  {remaining.reduce((acc, item) => {
                    const total = Number(acc) + Number(item);
                    return total;
                  }, 0)}
                </td>
                <td className="tg-0lax">
                  {closingStock.reduce((acc, item) => {
                    const total = Number(acc) + Number(item);
                    return total;
                  }, 0)}
                </td>

                <td className="tg-0lax">
                  {sales.reduce((acc, item) => {
                    const total = Number(acc) + Number(item);
                    return total;
                  }, 0)}
                </td>

                <td className="tg-0lax"></td>

                <td className="tg-0lax"> {filteredExceptionalData &&
                  filteredExceptionalData.length > 0 &&
                  filteredExceptionalData
                    .filter((page) => {
                      const pg = pageId ? pageId : Array.from(frontSet)[0];
                      if (page.page === pg) {
                        return page;
                      } else return 0;
                    })
                    .reduce(
                      (total, currentItem) =>
                      (total =
                        total +
                        Number(currentItem.sales) *
                        Number(currentItem.sellingRate.$numberDecimal)),
                      0
                    )}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto m-4 p-4 flex ">
          <table className="table w-full">
            <thead>
              <tr>
                <td className="tg-0lax " colSpan={50}>
                  <span style={{ fontWeight: "bold" }}>देशी/RML </span>
                </td>
              </tr>

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
                <th>अन्तिम स्टॉक </th>
                <th>बिक्री</th>
                <th>रेट</th>
                <th>रकम</th>
              </tr>
            </thead>

            <tbody>
              {RMLData &&
              RMLData.length &&
              RMLData.filter((item) => {
                const itemDate = new Date(moment(item.date).format());
                const selected = filterDate ? new Date(filterDate) : null;
                if (itemDate.toDateString() === selected.toDateString()) {
                  return item;
                } else if (filterDate === "") {
                  return item;
                } else if (RMLData === undefined) {
                  return item;
                }
                return false;
              }).length === 0 ? (
                <>
                  <p>No Data Found</p>
                </>
              ) : (
                RMLData &&
                RMLData.length &&
                RMLData.filter((item) => {
                  const itemDate = new Date(moment(item.date).format());
                  const selected = filterDate ? new Date(filterDate) : null;
                  if (itemDate.toDateString() === selected.toDateString()) {
                    return item;
                  } else if (filterDate === "") {
                    return item;
                  }
                  return false;
                })
                  .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                  .map((RmlData, index) => {
                    if (index === pgNo) {
                      return (
                        <BackRmlDetailsData
                          key={index}
                          index={index}
                          RmlData={RmlData}
                        ></BackRmlDetailsData>
                      );
                    } else return false;
                  })
              )}

              <tr>
                <td className="tg-0lax" colSpan={2}>
                  Total
                </td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax">
                  {RMLData &&
                    RMLData.length &&
                    RMLData.filter((item) => {
                      const itemDate = new Date(moment(item.date).format());
                      const selected = filterDate ? new Date(filterDate) : null;
                      if (itemDate.toDateString() === selected.toDateString()) {
                        return item;
                      } else if (filterDate === "") {
                        return item;
                      }
                      return false;
                    })
                      .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                      .slice(pgNo, pgNo + 1)
                      .reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem.entries.reduce(
                              (total, currentItem) =>
                                (total = total + currentItem.openingStock),
                              0
                            )),
                        0
                      )}
                </td>
                <td className="tg-0lax">
                  {RMLData &&
                    RMLData.length &&
                    RMLData.filter((item) => {
                      const itemDate = new Date(moment(item.date).format());
                      const selected = filterDate ? new Date(filterDate) : null;
                      if (itemDate.toDateString() === selected.toDateString()) {
                        return item;
                      } else if (filterDate === "") {
                        return item;
                      }
                      return false;
                    })
                      .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                      .slice(pgNo, pgNo + 1)
                      .reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem.entries.reduce(
                              (total, currentItem) =>
                                (total = total + currentItem.purchaseShop),
                              0
                            )),
                        0
                      )}
                </td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax">
                  {RMLData &&
                    RMLData.length &&
                    RMLData.filter((item) => {
                      const itemDate = new Date(moment(item.date).format());
                      const selected = filterDate ? new Date(filterDate) : null;
                      if (itemDate.toDateString() === selected.toDateString()) {
                        return item;
                      } else if (filterDate === "") {
                        return item;
                      }
                      return false;
                    })
                      .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                      .slice(pgNo, pgNo + 1)
                      .reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem.entries.reduce(
                              (total, currentItem) =>
                                (total = total + currentItem.purchaseOutSide),
                              0
                            )),
                        0
                      )}
                </td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax">
                  {RMLData &&
                    RMLData.length &&
                    RMLData.filter((item) => {
                      const itemDate = new Date(moment(item.date).format());
                      const selected = filterDate ? new Date(filterDate) : null;
                      if (itemDate.toDateString() === selected.toDateString()) {
                        return item;
                      } else if (filterDate === "") {
                        return item;
                      }
                      return false;
                    })
                      .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                      .slice(pgNo, pgNo + 1)
                      .reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem.entries.reduce(
                              (total, currentItem) =>
                                (total = total + currentItem.credits),
                              0
                            )),
                        0
                      )}
                </td>
                <td className="tg-0lax">
                  {RMLData &&
                    RMLData.length &&
                    RMLData.filter((item) => {
                      const itemDate = new Date(moment(item.date).format());
                      const selected = filterDate ? new Date(filterDate) : null;
                      if (itemDate.toDateString() === selected.toDateString()) {
                        return item;
                      } else if (filterDate === "") {
                        return item;
                      }
                      return false;
                    })
                      .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                      .slice(pgNo, pgNo + 1)
                      .reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem.entries.reduce(
                              (total, currentItem) =>
                                (total = total + currentItem.send),
                              0
                            )),
                        0
                      )}
                </td>
                <td className="tg-0lax">
                  {RMLData &&
                    RMLData.length &&
                    RMLData.filter((item) => {
                      const itemDate = new Date(moment(item.date).format());
                      const selected = filterDate ? new Date(filterDate) : null;
                      if (itemDate.toDateString() === selected.toDateString()) {
                        return item;
                      } else if (filterDate === "") {
                        return item;
                      }
                      return false;
                    })
                      .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                      .slice(pgNo, pgNo + 1)
                      .reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem.entries.reduce(
                              (total, currentItem) =>
                                (total = total + currentItem.remaining),
                              0
                            )),
                        0
                      )}
                </td>
                <td className="tg-0lax">
                  {RMLData &&
                    RMLData.length &&
                    RMLData.filter((item) => {
                      const itemDate = new Date(moment(item.date).format());
                      const selected = filterDate ? new Date(filterDate) : null;
                      if (itemDate.toDateString() === selected.toDateString()) {
                        return item;
                      } else if (filterDate === "") {
                        return item;
                      }
                      return false;
                    })
                      .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                      .slice(pgNo, pgNo + 1)
                      .reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem.entries.reduce(
                              (total, currentItem) =>
                                (total = total + currentItem.closingStock),
                              0
                            )),
                        0
                      )}
                </td>

                <td className="tg-0lax">
                  {RMLData &&
                    RMLData.length &&
                    RMLData.filter((item) => {
                      const itemDate = new Date(moment(item.date).format());
                      const selected = filterDate ? new Date(filterDate) : null;
                      if (itemDate.toDateString() === selected.toDateString()) {
                        return item;
                      } else if (filterDate === "") {
                        return item;
                      }
                      return false;
                    })
                      .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                      .slice(pgNo, pgNo + 1)
                      .reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem.entries.reduce(
                              (total, currentItem) =>
                                (total = total + currentItem.sales),
                              0
                            )),
                        0
                      )}
                </td>

                <td className="tg-0lax"></td>

                <td className="tg-0lax">
                  {RMLData &&
                    RMLData.length &&
                    RMLData.filter((item) => {
                      const itemDate = new Date(moment(item.date).format());
                      const selected = filterDate ? new Date(filterDate) : null;
                      if (itemDate.toDateString() === selected.toDateString()) {
                        return item;
                      } else if (filterDate === "") {
                        return item;
                      }
                    })
                      .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                      .slice(pgNo, pgNo + 1)
                      .reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem.entries.reduce(
                              (total, currentItem) =>
                                (total =
                                  total +
                                  Number(currentItem?.amount?.$numberDecimal)),
                              0
                            )),
                        0
                      )}
                </td>
              </tr>
            </tbody>
          </table>

          <table className="table w-full">
            <thead>
              <tr>
                <td className="tg-0lax" colSpan={40}>
                  <span style={{ fontWeight: "bold" }}>
                    अंग्रेजी/बीयर/देशी/RML की आमद (खरीद बाहर से){" "}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="tg-0lax" colSpan={4}>
                  क्र.सं.
                </td>
                <td className="tg-0lax" colSpan={4}>
                  पार्टी का नाम
                </td>
                <td className="tg-0lax" colSpan={4}>
                  ब्राण्ड
                </td>
                <td className="tg-0lax" colSpan={4}>
                  संख्या
                </td>
                <td className="tg-0lax" colSpan={4}>
                  Size
                </td>
                <td className="tg-0lax" colSpan={4}>
                  Rate
                </td>
                <td className="tg-0lax" colSpan={4}>
                  Total
                </td>
                <td className="tg-0lax" colSpan={4}>
                  टिप्पणी
                </td>
              </tr>
            </thead>
            <tbody>
              {PurchaseOutsideData &&
              PurchaseOutsideData.length &&
              PurchaseOutsideData.filter((item) => {
                const itemDate = new Date(moment(item.date).format());
                const selected = filterDate ? new Date(filterDate) : null;
                if (itemDate.toDateString() === selected.toDateString()) {
                  return item;
                } else if (filterDate === "") {
                  return item;
                }
                return false;
              }).length === 0 ? (
                <>
                  <p>No Data Found</p>
                </>
              ) : (
                PurchaseOutsideData &&
                PurchaseOutsideData.length &&
                PurchaseOutsideData.filter((item) => {
                  const itemDate = new Date(moment(item.date).format());
                  const selected = filterDate ? new Date(filterDate) : null;
                  if (itemDate.toDateString() === selected.toDateString()) {
                    return item;
                  } else if (filterDate === "") {
                    return item;
                  }
                  return false;
                })
                  .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                  .map((outSideData, index) => {
                    if (index === pgNo) {
                      return (
                        <InfolwRml
                          key={index}
                          outSideData={outSideData}
                          index={index}
                        ></InfolwRml>
                      );
                    }
                  })
              )}

              <tr>
                <td className="tg-0lax">Total</td>
                <td className="tg-0lax" colSpan={4} />
                <td className="tg-0lax" colSpan={4} />
                <td className="tg-0lax" colSpan={4}>
                  {PurchaseOutsideData &&
                    PurchaseOutsideData.length &&
                    PurchaseOutsideData.filter((item) => {
                      const itemDate = new Date(moment(item.date).format());
                      const selected = filterDate ? new Date(filterDate) : null;
                      if (itemDate.toDateString() === selected.toDateString()) {
                        return item;
                      } else if (filterDate === "") {
                        return item;
                      }
                    })
                      .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                      .slice(pgNo, pgNo + 1)
                      .reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem.entries.reduce(
                              (total, currentItem) =>
                                (total = total + currentItem.number),
                              0
                            )),
                        0
                      )}
                </td>
                <td className="tg-0lax" colSpan={4}></td>
                <td className="tg-0lax" colSpan={4} />
                <td className="tg-0lax" colSpan={4}>
                  {PurchaseOutsideData &&
                    PurchaseOutsideData.length &&
                    PurchaseOutsideData.filter((item) => {
                      const itemDate = new Date(moment(item.date).format());
                      const selected = filterDate ? new Date(filterDate) : null;
                      if (itemDate.toDateString() === selected.toDateString()) {
                        return item;
                      } else if (filterDate === "") {
                        return item;
                      }
                    })
                      .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                      .slice(pgNo, pgNo + 1)
                      .reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem.entries.reduce(
                              (total, currentItem) =>
                                (total = total + currentItem.total),
                              0
                            )),
                        0
                      )}
                </td>
              </tr>
            </tbody>
          </table>

          <table className="table w-full">
            <thead>
              <tr>
                <td className="tg-0lax" colSpan={40}>
                  <span style={{ fontWeight: "bold" }}>
                    कमीशन/खर्चा/फूट/बेगार/मंथली/पेनल्टी आदि
                  </span>
                </td>
              </tr>
              <tr>
                <td className="tg-0lax">क्र.सं.</td>
                <td className="tg-0lax" colSpan={4}>
                  type
                </td>
                <td className="tg-0lax" colSpan={4}>
                  विवरण
                </td>
                <td className="tg-0lax" colSpan={4}>
                  रकम
                </td>
              </tr>
            </thead>
            <tbody>
              {TotalExpensesData &&
              TotalExpensesData.length &&
              TotalExpensesData.filter((item) => {
                const itemDate = new Date(moment(item.date).format());
                const selected = filterDate ? new Date(filterDate) : null;
                if (itemDate.toDateString() === selected.toDateString()) {
                  return item;
                } else if (filterDate === "") {
                  return item;
                }
                return false;
              }).length === 0 ? (
                <>
                  <p>No Data Found</p>
                </>
              ) : (
                TotalExpensesData &&
                TotalExpensesData.length &&
                TotalExpensesData.filter((item) => {
                  const itemDate = new Date(moment(item.date).format());
                  const selected = filterDate ? new Date(filterDate) : null;
                  if (itemDate.toDateString() === selected.toDateString()) {
                    return item;
                  } else if (filterDate === "") {
                    return item;
                  }
                  return false;
                })
                  .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                  .map((expences, index) => {
                    const { entries } = expences;
                    if (index === pgNo) {
                      return (
                        <CommisonExpence
                          key={index}
                          entries={entries}
                          index={index}
                          expences={expences}
                        ></CommisonExpence>
                      );
                    }
                  })
              )}

              <tr>
                <td className="tg-0lax">Total</td>
                <td className="tg-0lax" colSpan={4}></td>
                <td className="tg-0lax" colSpan={4}></td>
                <td className="tg-0lax">
                  {TotalExpensesData &&
                    TotalExpensesData.length &&
                    TotalExpensesData.filter((item) => {
                      const itemDate = new Date(moment(item.date).format());
                      const selected = filterDate ? new Date(filterDate) : null;
                      if (itemDate.toDateString() === selected.toDateString()) {
                        return item;
                      } else if (filterDate === "") {
                        return item;
                      }
                      return false;
                    })
                      .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                      .slice(pgNo, pgNo + 1)
                      .reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem.entries.reduce(
                              (total, currentItem) =>
                                (total =
                                  total +
                                  Number(currentItem.amount.$numberDecimal)),
                              0
                            )),
                        0
                      )}
                </td>
              </tr>
            </tbody>
          </table>

          <table className="table w-full">
            <thead>
              <tr>
                <td className="tg-0lax" colSpan={40}>
                  <span style={{ fontWeight: "bold" }}>
                    पीछे की उधारी में से, ब्रांचों से व अन्य से नकद प्राप्ति
                  </span>
                </td>
              </tr>
              <tr>
                <td className="tg-0lax">क्र.सं.</td>
                <td className="tg-0lax" colSpan={4}>
                  Name
                </td>
                <td className="tg-0lax" colSpan={4}>
                  Type
                </td>
                <td className="tg-0lax" colSpan={4}>
                  रकम
                </td>
                <td className="tg-0lax" colSpan={4}>
                  विवरण
                </td>
              </tr>
            </thead>
            <tbody>
              {!BorrowedCashReturnData ||
              BorrowedCashReturnData.length === 0 ? (
                <>
                  <p>No Data Found</p>
                </>
              ) : (
                <>
                  {BorrowedCashReturnData &&
                    BorrowedCashReturnData.length &&
                    BorrowedCashReturnData.filter((item) => {
                      const itemDate = new Date(moment(item.date).format());
                      const selected = filterDate ? new Date(filterDate) : null;
                      if (itemDate.toDateString() === selected.toDateString()) {
                        return item;
                      } else if (filterDate === "") {
                        return item;
                      }
                      return false;
                    })
                      .sort((a, b) => a._id - b._id)
                      .map((borrwedCashReturn, index) => {
                        const { entries } = borrwedCashReturn;
                        if (index === pgNo) {
                          return (
                            <CashReciveData
                              key={index}
                              index={index}
                              borrwedCashReturn={borrwedCashReturn}
                              entries={entries}
                            ></CashReciveData>
                          );
                        }
                      })}
                </>
              )}

              <tr>
                <td className="tg-0lax">Total</td>
                <td className="tg-0lax" colSpan={4} />
                <td className="tg-0lax" colSpan={4} />
                <td className="tg-0lax">
                  {BorrowedCashReturnData &&
                    BorrowedCashReturnData.length &&
                    BorrowedCashReturnData.filter((item) => {
                      const itemDate = new Date(moment(item.date).format());
                      const selected = filterDate ? new Date(filterDate) : null;
                      if (itemDate.toDateString() === selected.toDateString()) {
                        return item;
                      } else if (filterDate === "") {
                        return item;
                      }
                      return false;
                    })
                      .sort((a, b) => a._id - b._id)
                      .slice(pgNo, pgNo + 1)
                      .reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem.entries.reduce(
                              (total, currentItem) =>
                                (total = total + currentItem.cash),
                              0
                            )),
                        0
                      )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto m-4 p-4 flex ">
          <table className="table w-full">
            <thead>
              <tr>
                <td className="tg-0lax " colSpan={40}>
                  <span style={{ fontWeight: "bold" }}>
                    अंग्रेजी/बीयर/देशी/RML की आमद (उधारी)
                  </span>
                </td>
              </tr>

              <tr>
                <td className="tg-baqh">क्र.सं.</td>
                <th>Party Name/ पार्टी का नाम</th>
                <th>Brand Name/ ब्राण्ड</th>
                <th>Size</th>
                <th>संख्या</th>
                <th>टिप्पणी</th>
              </tr>
            </thead>
            <tbody>
              {!PurchaseBorrowData && PurchaseBorrowData.length === 0 ? (
                <>
                  <p>No Data Found</p>
                </>
              ) : (
                <>
                  {PurchaseBorrowData &&
                    PurchaseBorrowData.length &&
                    PurchaseBorrowData.filter((item) => {
                      const itemDate = new Date(moment(item.date).format());
                      const selected = filterDate ? new Date(filterDate) : null;
                      if (itemDate.toDateString() === selected.toDateString()) {
                        return item;
                      } else if (filterDate === "") {
                        return item;
                      }
                      return false;
                    })
                      .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                      .map((item, index) => {
                        const { entries } = item;
                        if (index === pgNo) {
                          return (
                            <InflowBorrow
                              key={index}
                              index={index}
                              PurchaseBorrow={item}
                              entries={entries}
                            ></InflowBorrow>
                          );
                        }
                      })}
                </>
              )}

              <tr>
                <td className="tg-0lax" colSpan={2}>
                  Total
                </td>
                <td className="tg-0lax" />
                <td className="tg-0lax" />
                <td className="tg-0lax">
                  {PurchaseBorrowData &&
                    PurchaseBorrowData.length &&
                    PurchaseBorrowData.filter((item) => {
                      const itemDate = new Date(moment(item.date).format());
                      const selected = filterDate ? new Date(filterDate) : null;
                      if (itemDate.toDateString() === selected.toDateString()) {
                        return item;
                      } else if (filterDate === "") {
                        return item;
                      }
                      return false;
                    })
                      .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                      .slice(pgNo, pgNo + 1)
                      .reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem.entries.reduce(
                              (total, currentItem) =>
                                (total = total + currentItem.number),
                              0
                            )),
                        0
                      )}
                </td>
                <td className="tg-0lax" />
              </tr>
            </tbody>
          </table>

          <table className="table w-full">
            <thead>
              <tr>
                <td className="tg-0lax " colSpan={40}>
                  <span style={{ fontWeight: "bold" }}>
                    अंग्रेजी/बीयर/देशी/RML का भेजान
                  </span>
                </td>
              </tr>

              <tr>
                <td className="tg-baqh">क्र.सं.</td>
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
              {!SendData || SendData.length === 0 ? (
                <>
                  <p>No Data Found</p>
                </>
              ) : (
                <>
                  {SendData &&
                    SendData.length &&
                    SendData.filter((item) => {
                      const itemDate = new Date(moment(item.date).format());
                      const selected = filterDate ? new Date(filterDate) : null;
                      if (itemDate.toDateString() === selected.toDateString()) {
                        return item;
                      } else if (filterDate === "") {
                        return item;
                      }
                      return false;
                    })
                      .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                      .map((item, index) => {
                        const { entries } = item;
                        if (index === pgNo) {
                          return (
                            <ShippingEnglishBear
                              key={index}
                              index={index}
                              item={item}
                              entries={entries}
                            ></ShippingEnglishBear>
                          );
                        }
                      })}
                </>
              )}

              <tr>
                <td className="tg-0lax" colSpan={2}>
                  Total
                </td>
                <td className="tg-0lax" />
                <td className="tg-0lax">
                  {SendData &&
                    SendData.length &&
                    SendData.filter((item) => {
                      const itemDate = new Date(moment(item.date).format());
                      const selected = filterDate ? new Date(filterDate) : null;
                      if (itemDate.toDateString() === selected.toDateString()) {
                        return item;
                      } else if (filterDate === "") {
                        return item;
                      }
                      return false;
                    })
                      .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                      .slice(pgNo, pgNo + 1)
                      .reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem.entries.reduce(
                              (total, currentItem) =>
                                (total = total + currentItem.number),
                              0
                            )),
                        0
                      )}
                </td>
                <td className="tg-0lax" />
                <td className="tg-0lax" />
                <td className="tg-0lax">
                  {SendData &&
                    SendData.length &&
                    SendData.filter((item) => {
                      const itemDate = new Date(moment(item.date).format());
                      const selected = filterDate ? new Date(filterDate) : null;
                      if (itemDate.toDateString() === selected.toDateString()) {
                        return item;
                      } else if (filterDate === "") {
                        return item;
                      }
                      return false;
                    }).reduce(
                      (total, currentItem) =>
                        (total =
                          total +
                          currentItem.entries.reduce(
                            (total, currentItem) =>
                              (total = total + currentItem.total),
                            0
                          )),
                      0
                    )}
                </td>
                <td className="tg-0lax" />
              </tr>
            </tbody>
          </table>

          <table className="table w-full">
            <thead>
              <tr>
                <td className="tg-0lax " colSpan={40}>
                  <span style={{ fontWeight: "bold" }}>उधारी/नामे</span>
                </td>
              </tr>
              <tr>
                <th> क्र. सं.</th>
                <th>पार्टी का नाम</th>
                <th>पार्टी/पार्टनर</th>
                <th>रकम</th>
                <th>टिप्पणी</th>
              </tr>
            </thead>
            <tbody>
              {BorrowedData &&
                BorrowedData.length > 0 &&
                BorrowedData.filter((item) => {
                  const itemDate = new Date(moment(item.date).format());
                  const selected = filterDate ? new Date(filterDate) : null;
                  if (itemDate.toDateString() === selected.toDateString()) {
                    return item;
                  } else if (filterDate === "") {
                    return item;
                  }
                  return false;
                })
                  .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                  .map((item, index) => {
                    const { entries } = item;
                    if (index === pgNo) {
                      return (
                        <Borrowed
                          key={index}
                          index={index}
                          item={item}
                          entries={entries}
                        ></Borrowed>
                      );
                    }
                  })}

              <tr>
                <td className="tg-0lax" colSpan={2}>
                  Total
                </td>
                <td className="tg-0lax" />
                <td className="tg-0lax">
                  {!BorrowedData ||
                  !BorrowedData.length ||
                  BorrowedData.length === 0 ? (
                    <>
                      <p>No Data Found</p>
                    </>
                  ) : (
                    <>
                      {BorrowedData &&
                        BorrowedData.length > 0 &&
                        BorrowedData.filter((item) => {
                          const itemDate = new Date(moment(item.date).format());
                          const selected = filterDate
                            ? new Date(filterDate)
                            : null;
                          if (
                            itemDate.toDateString() === selected.toDateString()
                          ) {
                            return item;
                          } else if (filterDate === "") {
                            return item;
                          }
                          return false;
                        })
                          .sort((a, b) =>
                            a.createdAt.localeCompare(b.createdAt)
                          )
                          .slice(pgNo, pgNo + 1)
                          .reduce(
                            (total, currentItem) =>
                              (total =
                                total +
                                currentItem.entries.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      Number(
                                        currentItem.amount.$numberDecimal
                                      )),
                                  0
                                )),
                            0
                          )}
                    </>
                  )}
                </td>
                <td className="tg-0lax" />
              </tr>
            </tbody>
          </table>

          <table className="table w-full">
            <thead>
              <tr>
                <td className="tg-0lax " colSpan={40}>
                  <span style={{ fontWeight: "bold" }}>फाईनल रिपोर्ट</span>
                </td>
              </tr>

              <tr>
                <td className="tg-baqh">क्र.सं.</td>
                <td className="tg-baqh" colSpan={4}>
                  विवरण
                </td>
                <td className="tg-baqh" colSpan={4}>
                  रकम
                </td>
              </tr>
            </thead>
            <tbody>
              {!FinalReportData || !FinalReportData.length ? (
                <>
                  <p>No Data Found</p>
                </>
              ) : FinalReportData &&
                FinalReportData.length &&
                FinalReportData.filter((item) => {
                  const itemDate = new Date(moment(item.date).format());
                  const selected = filterDate ? new Date(filterDate) : null;
                  if (itemDate.toDateString() === selected.toDateString()) {
                    return item;
                  } else if (filterDate === "") {
                    return item;
                  }
                  return false;
                }).length === 0 ? (
                <>
                  <p>No Data Found</p>
                </>
              ) : (
                <FinalReport
                  data={FinalReportData.filter((item) => {
                    const itemDate = new Date(moment(item.date).format());
                    const selected = filterDate ? new Date(filterDate) : null;
                    if (itemDate.toDateString() === selected.toDateString()) {
                      return item;
                    } else if (filterDate === "") {
                      return item;
                    }
                    return false;
                  })
                    .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                    .slice(pgNo, pgNo + 1)}
                ></FinalReport>
              )}
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <td className="tg-0lax " colSpan={40}>
                  <span style={{ fontWeight: "bold" }}>रफ जगह</span>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tg-0lax" colSpan={4}>
                  Comments Data
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BackDetailReport;
