import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import Loader from "../../../../../../../Components/Loader/Loader";
import FristFormDetails from "../FristFormDetails/FristFormDetails";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import useFrontDetailHooks from "../FrontDetailsHooks/useFrontDetailHooks";
import RegularData from "../RegularData/RegularData";
import jwtDecode from "jwt-decode";
import useGetDailyReport from "../../../../../../../Hooks/useGetDailyReport";

const FrontDetailsReport = () => {
  const front = useRef(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [pageId, setPageId] = useState();

  const {
    FrontPageRegularData,
    isLoading,
    isLoading2,
    FrontPageExceptionalData,
  } = useFrontDetailHooks();


  const { FrontPageData, FrontPageDataLoaded } = useGetDailyReport();
  let count = 0


  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  console.log(FrontPageExceptionalData)

  const token = localStorage.getItem("token");

  if (isLoading || FrontPageDataLoaded) {
    return <Loader></Loader>;
  }

  if (isLoading2) {
    return <Loader></Loader>;
  }

  const filteredRegularData = selectedDate
    ? FrontPageRegularData.filter((item) => {
        const itemDate = new Date(moment(item.date).format());
        const selected = selectedDate ? new Date(selectedDate) : null;
        if (selected) {
          return itemDate.toDateString() === selected.toDateString();
        } else {
          return true;
        }
      })
    : FrontPageRegularData;

  let frontSet = new Set([]);

  filteredRegularData.map((item) => {
    item.pages.map((pg) => {
      frontSet.add(pg.page);
      // setPage(pg.page)
      return 0;
    });
    return 0;
  });


  let quan750 = [];
  let quan375 = [];
  let quan180 = [];

  filteredRegularData.map((item) => {
    item.pages.map((page) => {
      const pg = pageId ? pageId : Array.from(frontSet)[0];
      if (page.page === pg) {
        page.entries.map((entry) => {
          if (entry.quantityInML === 750) {
            quan750.push(entry);
          } else if (entry.quantityInML === 375) {
            quan375.push(entry);
          } else if (entry.quantityInML === 180) {
            quan180.push(entry);
          }
        });
      }
    });
  });

  const filteredExceptionalData = selectedDate
    ? FrontPageExceptionalData.filter((item) => {
        const itemDate = new Date(moment(item.date).format());
        const selected = selectedDate ? new Date(selectedDate) : null;
        if (selected) {
          return itemDate.toDateString() === selected.toDateString();
        } else {
          return true;
        }
      })
    : FrontPageExceptionalData;

  const frontPage =
    selectedDate && FrontPageData.length && FrontPageData.length > 0
      ? FrontPageData?.filter((item) => {
          const itemDate = new Date(moment(item.date).format());
          const selected = selectedDate ? new Date(selectedDate) : null;
          if (selected) {
            return itemDate.toDateString() === selected.toDateString();
          } else {
            return true;
          }
        })
      : FrontPageData;

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
      <div className="flex gap-6 items-center my-4">
        <h2 className="font-bold text-xl text-gray-800">
          अंग्रेजी
        </h2>

        <Link
          to="/user/dailyreport/details"
          className="commonBtn"
        >
          बीयर
        </Link>

        <button className="commonBtn " onClick={handlePrint}>
          PRINT
        </button>
      </div>

      <div className="flex gap-4 items-center my-4">
        <div className="flex gap-2 items-center">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText={"dd/mm/yyyy"}
            className="inputBox date"
          />
        </div>
        {Array.from(frontSet).map((item, index) => {
          return (
            <button
              className="commonBtn "
              onClick={() => {
                setPageId(item);
              }}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <div className="divider"></div>

      <div ref={front}>
        <div className="overflow-x-auto m-4 p-4 flex ">
          <table className="table w-full">
            <thead>
              <tr>
                <td className="tg-baqh" colSpan={42}>
                  <span
                    style={{ fontWeight: "bold", textDecoration: "underline" }}
                  >
                    अंग्रेजी शराब
                  </span>
                </td>
              </tr>
              <tr>
                <td className="tg-baqh" colSpan={42}>
                  दुकान का नाम:- &nbsp;&nbsp;
                  {jwtDecode(localStorage.getItem("token")).name}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;सेल्समेन
                  का नाम :-{" "}
                  {
                    frontPage.length && frontPage.find((entry) => {
                      const pg = pageId ? pageId : Array.from(frontSet)[0];
                      return entry._id === pg;
                    }).salesmen
                  }
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;दिनांक
                  :-
                  {moment(selectedDate).format("DD/MM/YYYY")}
                </td>
              </tr>
            </thead>
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

              { filteredRegularData.map((regularData, index) => {
                return (
                  <RegularData
                    key={index}
                    regularData={regularData}
                    index={index}
                    quan1={750}
                    quan2={375}
                    quan3={180}
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
                <td className="tg-0lax"> </td>
                <td className="tg-0lax"> </td>
                <td className="tg-0lax"> </td>

                <td className="tg-0lax">
                  {quan750.reduce(
                    (total, regularData) =>
                      total + Number(regularData.openingStock),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan375.reduce(
                    (total, regularData) =>
                      total + Number(regularData.openingStock),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan180.reduce(
                    (total, regularData) =>
                      total + Number(regularData.openingStock),
                    0
                  )}
                </td>

                <td className="tg-0lax">
                  {quan750.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseShop),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan375.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseShop),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan180.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseShop),
                    0
                  )}
                </td>

                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>

                <td className="tg-0lax">
                  {quan750.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseOutSide),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan375.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseOutSide),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan180.reduce(
                    (total, regularData) =>
                      total + Number(regularData.purchaseOutSide),
                    0
                  )}
                </td>

                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>

                <td className="tg-0lax">
                  {quan750.reduce(
                    (total, regularData) => total + Number(regularData.credits),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan375.reduce(
                    (total, regularData) => total + Number(regularData.credits),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan180.reduce(
                    (total, regularData) => total + Number(regularData.credits),
                    0
                  )}
                </td>

                <td className="tg-0lax">
                  {quan750.reduce(
                    (total, regularData) => total + Number(regularData.send),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan375.reduce(
                    (total, regularData) => total + Number(regularData.send),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan180.reduce(
                    (total, regularData) => total + Number(regularData.send),
                    0
                  )}
                </td>

                <td className="tg-0lax">
                  {quan750.reduce(
                    (total, regularData) =>
                      total + Number(regularData.remaining),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan375.reduce(
                    (total, regularData) =>
                      total + Number(regularData.remaining),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan180.reduce(
                    (total, regularData) =>
                      total + Number(regularData.remaining),
                    0
                  )}
                </td>

                <td className="tg-0lax">
                  {quan750.reduce(
                    (total, regularData) =>
                      total + Number(regularData.closingStock),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan375.reduce(
                    (total, regularData) =>
                      total + Number(regularData.closingStock),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan180.reduce(
                    (total, regularData) =>
                      total + Number(regularData.closingStock),
                    0
                  )}
                </td>

                <td className="tg-0lax">
                  {quan750.reduce(
                    (total, regularData) => total + Number(regularData.sales),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan375.reduce(
                    (total, regularData) => total + Number(regularData.sales),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan180.reduce(
                    (total, regularData) => total + Number(regularData.sales),
                    0
                  )}
                </td>

                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>

                <td className="tg-0lax">
                  {quan750.reduce(
                    (total, regularData) =>
                      total +
                      Number(regularData.sales) *
                        Number(regularData.sellingRate?.$numberDecimal),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan375.reduce(
                    (total, regularData) =>
                      total +
                      Number(regularData.sales) *
                        Number(regularData.sellingRate?.$numberDecimal),
                    0
                  )}
                </td>
                <td className="tg-0lax">
                  {quan180.reduce(
                    (total, regularData) =>
                      total +
                      Number(regularData.sales) *
                        Number(regularData.sellingRate?.$numberDecimal),
                    0
                  )}
                </td>

                <td>
                  {quan180.reduce(
                    (total, regularData) =>
                      total +
                      Number(regularData.sales) *
                        Number(regularData.sellingRate?.$numberDecimal),
                    0
                  ) +
                    quan375.reduce(
                      (total, regularData) =>
                        total +
                        Number(regularData.sales) *
                          Number(regularData.sellingRate?.$numberDecimal),
                      0
                    ) +
                    quan750.reduce(
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
                  <span style={{ fontWeight: "bold" }}>English</span>
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
                filteredExceptionalData.length > 0 &&
                filteredExceptionalData.map((exceptionalData, index) => {
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
                  {filteredExceptionalData &&
                    filteredExceptionalData.length > 0 &&
                    openingStock.reduce((acc, item) => {
                      const total = Number(acc) + Number(item);
                      return total;
                    }, 0)}
                </td>
                <td className="tg-0lax">
                  {filteredExceptionalData &&
                    filteredExceptionalData.length > 0 &&
                    purchaseShop.reduce((acc, item) => {
                      const total = Number(acc) + Number(item);
                      return total;
                    }, 0)}
                </td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax">
                  {filteredExceptionalData &&
                    filteredExceptionalData.length > 0 &&
                    purchaseOutSide.reduce((acc, item) => {
                      const total = Number(acc) + Number(item);
                      return total;
                    }, 0)}
                </td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax">
                  {filteredExceptionalData &&
                    filteredExceptionalData.length > 0 &&
                    credits.reduce((acc, item) => {
                      const total = Number(acc) + Number(item);
                      return total;
                    }, 0)}
                </td>
                <td className="tg-0lax">
                  {filteredExceptionalData &&
                    filteredExceptionalData.length > 0 &&
                    send.reduce((acc, item) => {
                      const total = Number(acc) + Number(item);
                      return total;
                    }, 0)}
                </td>
                <td className="tg-0lax">
                  {filteredExceptionalData &&
                    filteredExceptionalData.length > 0 &&
                    remaining.reduce((acc, item) => {
                      const total = Number(acc) + Number(item);
                      return total;
                    }, 0)}
                </td>
                <td className="tg-0lax">
                  {filteredExceptionalData &&
                    filteredExceptionalData.length > 0 &&
                    closingStock.reduce((acc, item) => {
                      const total = Number(acc) + Number(item);
                      return total;
                    }, 0)}
                </td>

                <td className="tg-0lax">
                  {filteredExceptionalData &&
                    filteredExceptionalData.length > 0 &&
                    sales.reduce((acc, item) => {
                      const total = Number(acc) + Number(item);
                      return total;
                    }, 0)}
                </td>

                <td className="tg-0lax"></td>

                <td className="tg-0lax">
                  {filteredExceptionalData &&
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
                      )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-8 mx-8 leading-6">
          <h4 className="text-[#AA237A] font-bold ">
            Total: {filteredExceptionalData &&
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
            ) + quan180.reduce(
              (total, regularData) =>
                total +
                Number(regularData.sales) *
                Number(regularData.sellingRate?.$numberDecimal),
              0
            ) +
            quan375.reduce(
              (total, regularData) =>
                total +
                Number(regularData.sales) *
                Number(regularData.sellingRate?.$numberDecimal),
              0
            ) +
            quan750.reduce(
              (total, regularData) =>
                total +
                Number(regularData.sales) *
                Number(regularData.sellingRate?.$numberDecimal),
              0
            ) }
          </h4>
        </div>
      </div>
    </section>
  );
};

export default FrontDetailsReport;
