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
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [quan750, setQuan750] = useState([]);
  const [quan375, setQuan375] = useState([]);
  const [quan180, setQuan180] = useState([]);

  const {
    FrontPageRegularData,
    isLoading,
    isLoading2,
    FrontPageExceptionalData,
  } = useFrontDetailHooks();

  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  if (isLoading) {
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

  const openingStock = filteredExceptionalData.map((item) => {
    const { openingStock } = item;
    return openingStock;
  });

  const purchaseShop = filteredExceptionalData.map((item) => {
    const { purchaseShop } = item;
    return purchaseShop;
  });

  const purchaseOutSide = filteredExceptionalData.map((item) => {
    const { purchaseOutSide } = item;
    return purchaseOutSide;
  });

  const credits = filteredExceptionalData.map((item) => {
    const { credits } = item;
    return credits;
  });

  const send = filteredExceptionalData.map((item) => {
    const { send } = item;
    return send;
  });

  const remaining = filteredExceptionalData.map((item) => {
    const { remaining } = item;
    return remaining;
  });

  const closingStock = filteredExceptionalData.map((item) => {
    const { closingStock } = item;
    return closingStock;
  });

  const sales = filteredExceptionalData.map((item) => {
    console.log(item, "item+++++");
    const { sales } = item;
    return sales;
  });

  if (!filteredRegularData.length) {
    return (
      <>
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
          <div className="flex gap-2 items-center">
            <FaCalendarAlt></FaCalendarAlt>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                console.log(moment(date).format());
              }}
              dateFormat="dd/MM/yyyy"
              placeholderText={"dd/mm/yyyy"}
              className="inputBox"
            />
          </div>
        </div>
        <h1 className="text-center text-red-500 text-2xl font-bold">
          No Data Found
        </h1>
      </>
    );
  }

  filteredRegularData.map((data) => {
    data.pages.map((page) => {
      page.entries.map((entry) => {
        if (entry.quantityInML === 750) {
          setQuan750((quan750) => [...quan750, entry]);
        } else if (entry.quantityInML === 375) {
          setQuan375((quan375) => [...quan375, entry]);
        } else if (entry.quantityInML === 180) {
          setQuan180((quan180) => [...quan180, entry]);
        }
      });
    });
  });

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
        <div className="flex gap-2 items-center">
          <FaCalendarAlt></FaCalendarAlt>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              console.log(moment(date).format());
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText={"dd/mm/yyyy"}
            className="inputBox"
          />
        </div>
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

                <td className="tg-0lax"></td>
                <td className="tg-0lax">0</td>
                <td className="tg-0lax">0</td>

                <td className="tg-0lax">0</td>
                <td className="tg-0lax">0</td>
                <td className="tg-0lax">0</td>

                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>

                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>

                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>

                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>

                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>

                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>

                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>

                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>

                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>
                <td className="tg-0lax"></td>

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
              {filteredExceptionalData &&
                filteredExceptionalData.map((exceptionalData, index) => {
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
                  {openingStock.reduce((acc, item) => {
                    const total = Number(acc) + Number(item);
                    return total;
                  })}
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
                  })}
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
                  })}
                </td>

                <td className="tg-0lax"></td>

                <td className="tg-0lax"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FrontDetailsReport;
