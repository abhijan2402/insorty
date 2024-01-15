import React, { useState, useRef, useEffect } from "react";
import Loader from "../../../../Components/Loader/Loader";
import DatePicker from "react-datepicker";
import moment from "moment/moment";
import { useReactToPrint } from "react-to-print";
import { useQuery } from "@tanstack/react-query";
import InfolwRml from "../../DailyReport/DetailsReports/FullDetailsReport/BackDetailReport/InflowRml/InfolwRml";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

const PartyOutBill = () => {
  const [StartDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date());

  const token = localStorage.getItem("token");
  const ShopType = jwtDecode(token).shopType;

  const {
    data: purchaseOutSide,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["phonePayData"],
    queryFn: async () => {
      const res = await fetch(
        `${
          process.env.REACT_APP_API_URL
        }/shop/getPurchaseOutsideData?from=${moment(StartDate).format(
          "DD MMMM YYYY"
        )}&to=${moment(EndDate).format("DD MMMM YYYY")}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
        }
      );
      const data = await res.json();
      return data?.data;
    },
  });

  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  useEffect(() => {
    refetch();
  }, [StartDate, EndDate]);

  if (isLoading) {
    return <Loader></Loader>;
  }

  // const filteredData =
  //   purchaseOutSide.length &&
  //   purchaseOutSide?.filter((item) => {
  //     let filterPass = true;
  //     const date = moment(item.date).format("DD/MM/YYYY");

  //     if (StartDate) {
  //       filterPass =
  //         filterPass && moment(StartDate).format("DD/MM/YYYY") <= date;
  //     }
  //     if (EndDate) {
  //       filterPass = filterPass && moment(EndDate).format("DD/MM/YYYY") >= date;
  //     }
  //     return filterPass;
  //   });

  return (
    <>
      <div className="py-0 sticky top-0 bg-white z-5000">
        <button className="commonBtn " onClick={handlePrint}>
          प्रिंट
        </button>
        <div className="flex gap-2 justify-center items-center">
          {ShopType === "BAR" && (
            <>
              <Link className="commonBtn" to="/user/bearshop/selfbill">
                दुकान बिल
              </Link>

              <Link className="commonBtn " to="/user/bearshop/outbill">
                बाहर का बिल
              </Link>
            </>
          )}{" "}
          {ShopType === "SHOP" && (
            <>
              <Link className="commonBtn" to="/user/selfbill">
                दुकान बिल
              </Link>

              <Link className="commonBtn " to="/user/outbill">
                बाहर का बिल
              </Link>
            </>
          )}
        </div>
        <div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold md:text-[1.5rem] text-center">
              पार्टी बिल
            </h2>
            <div className="flex gap-4 items-center my-4">
              <h2 className="font-bold text-[1.5rem]">From</h2>
              <div className="flex gap-2 items-center z-1000">
                <DatePicker
                  selected={StartDate}
                  onChange={(date) => {
                    setStartDate(date);
                    console.log(moment(date).format());
                  }}
                  dateFormat="dd/MM/yyyy"
                  placeholderText={"dd/mm/yyyy"}
                  className="inputBox date"
                />
              </div>

              <h2 className="font-bold text-[1.5rem]">To</h2>
              <div className="flex gap-2 items-center">
                <DatePicker
                  selected={EndDate}
                  name="year"
                  onChange={(data) => setEndDate(data)}
                  dateFormat="dd/MM/yyyy"
                  className="inputBox date"
                  placeholderText={"dd/mm/yyyy"}
                />
              </div>
            </div>
            <div className="divider my-2"></div>
          </div>
        </div>
      </div>

      <section>
        <div className="title flex flex-col justify-center items-center py-2">
          <div ref={front}>
            <div>
              <div className="flex justify-center items-center m-6">
                <table className=" removeCommonWSpace">
                  <thead>
                    <tr>
                      <th className="text-xs">क्र.सं.</th>
                      <th className="text-xs">पार्टी का नाम</th>
                      <th className="text-xs">ब्राण्ड</th>
                      <th className="text-xs">ML</th>
                      <th className="text-xs">संख्या</th>
                      <th className="text-xs">रेट</th>
                      <th className="text-xs">रकम</th>

                      <th className="text-xs">टिप्पणी</th>
                    </tr>
                  </thead>
                  <tbody>
                    {purchaseOutSide &&
                      purchaseOutSide?.length &&
                      purchaseOutSide
                        ?.sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                        .map((page, index) => {
                          return (
                            <>
                              {page?.entries?.map((entry, index2) => {
                                return (
                                  <InfolwRml
                                    key={index}
                                    outSideData={entry}
                                    index={index2 + index}
                                  ></InfolwRml>
                                );
                              })}
                            </>
                          );
                        })}

                    <tr>
                      <td className="tg-0lax">Total</td>
                      <td className="tg-0lax" />
                      <td className="tg-0lax" />
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax">
                        {purchaseOutSide &&
                          purchaseOutSide?.length &&
                          purchaseOutSide.reduce(
                            (total, currentItem) =>
                              (total =
                                total +
                                currentItem?.entries?.reduce(
                                  (total, currentItem) =>
                                    (total = total + currentItem?.number),
                                  0
                                )),
                            0
                          )}
                      </td>
                      <td className="tg-0lax"></td>
                      <td className="tg-0lax">
                        {(
                          Number(
                            purchaseOutSide &&
                              purchaseOutSide?.length &&
                              purchaseOutSide
                                .sort((a, b) =>
                                  a.createdAt.localeCompare(b.createdAt)
                                )

                                .reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      currentItem?.entries?.reduce(
                                        (total, currentItem) =>
                                          (total = total + currentItem?.total),
                                        0
                                      )),
                                  0
                                )
                          ) || 0
                        ).toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartyOutBill;
