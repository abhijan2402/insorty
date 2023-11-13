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
  const [EndDate, setEndDate] = useState(
    new Date());
   
  
  const token = localStorage.getItem("token");
  const ShopType =jwtDecode(token).shopType;

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
      <button className="commonBtn " onClick={handlePrint}>
        प्रिंट
      </button>

      
      <section ref={front}>
        <div className="title flex justify-center items-center flex-col">

        <div className="flex gap-4">
        { ShopType === "BAR" && (
            <>
              <Link className="commonBtn" to="/user/bearshop/selfbill">
                दुकान बिल
              </Link>

              <Link className="commonBtn " to="/user/bearshop/outbill">
                बाहर का बिल
              </Link>

              
            </>
          )}{" "}
          { ShopType === "SHOP" && (
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
          <h2 className="font-bold md:text-[1.5rem] text-center">
          पार्टी बिल
          </h2>

          

          <div className="flex gap-4 items-center my-4 z-10">
            <h2 className="font-bold text-[1.5rem]">From</h2>
            <div className="flex gap-2 items-center">
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
        </div>
        <div className="divider my-2"></div>

        {/* ************************ all sealy data************** */}

        <div>
          <div className="flex justify-center items-center m-6">
            <table className="table removeCommonWSpace">
              <thead>
               
                <tr>
                  <td className="text-xs">क्र.सं.</td>
                  <td className="text-xs" colSpan={4}>
                    पार्टी का नाम
                  </td>
                  <td className="text-xs" colSpan={4}>
                    ब्राण्ड
                  </td>
                  <td className="text-xs" colSpan={4}>
                    ML
                  </td>
                  <td className="text-xs" colSpan={4}>
                    संख्या
                  </td>
                  <td className="text-xs" colSpan={4}>
                    रेट
                  </td>
                  <td className="text-xs" colSpan={4}>
                    रकम
                  </td>

                  <td className="text-xs" colSpan={4}>
                    टिप्पणी
                  </td>
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
                  <td className="tg-0lax" colSpan={4} />
                  <td className="tg-0lax" colSpan={4} />
                  <td className="tg-0lax" colSpan={4}></td>
                  <td className="tg-0lax" colSpan={4}>
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
                  <td className="tg-0lax" colSpan={4}></td>
                  <td className="tg-0lax" colSpan={4}>
                    {purchaseOutSide &&
                      purchaseOutSide?.length &&
                      purchaseOutSide
                        .sort((a, b) => a.createdAt.localeCompare(b.createdAt))

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
                        )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartyOutBill;
