/* eslint-disable array-callback-return */
import React, { useState, useRef, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import SelfBillList from "../SelfBillList/SelfBillList";
import { useQuery } from "@tanstack/react-query";
import useLiquors from "../../../../Hooks/useLiquors";
import Loader from "../../../../Components/Loader/Loader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import useMainInvestmentHooks from "../../MainInvestment/MainInvestmentHooks/useMainInvestmentHooks";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import jwtDecode from "jwt-decode";

const SelfBill = () => {
  const token = localStorage.getItem("token");
  // const [liquorsParentData, setLiquorsParentData] = React.useState([]);
  const { brandsLoaded } = useLiquors();
  const [StartDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date());
  const { data } = useMainInvestmentHooks();
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  const ShopToken = jwtDecode(localStorage.getItem("token"));
  const ShopType = ShopToken.shopType;
  const role = ShopToken.role;

  const {
    data: SelfBillData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["SelfBillData"],
    queryFn: async () => {
      const res = await fetch(
        `https://insorty-api.onrender.com/shop/getSelfBill?from=${moment(
          StartDate
        ).format("DD MMMM YYYY")}&to=${moment(EndDate).format("DD MMMM YYYY")}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();

      return data.data;
    },
  });

  useEffect(() => {
    refetch();
  }, [StartDate, EndDate]);

  if (isLoading || brandsLoaded || data.isLoading) {
    return <Loader></Loader>;
  }

  const filteredRefund = data?.refundRecoveryDetails?.entries
    .filter((entry) => entry.type === "REFUND")
    .filter((item) => {
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

  const totalAmountData =
    ShopType === "SHOP"
      ? SelfBillData?.map((item) => {
          return item.total.$numberDecimal;
        })
      : SelfBillData?.filter((brand) => {
          if (brand.liquor.type === "WINE") {
            if (brand.liquor.quantityInML === 30) {
              return brand;
            }
          } else if (brand.liquor.type === "BEER") {
            return brand;
          } else return;
        }).map((item) => {
          return item.total.$numberDecimal;
        });

  const totalAmount = totalAmountData?.reduce(
    (a, b) => Number(a) + Number(b),
    0
  );
  const netPaidAmount =
    totalAmount -
    filteredRefund.reduce(
      (total, currentItem) => (total = total + Number(currentItem.price)),
      0
    );

  return (
    <>
      <div className="py-0 sticky top-0 bg-white z-5000">
        <button className="commonBtn " onClick={handlePrint}>
          प्रिंट
        </button>
        <div className="flex gap-2 justify-center items-center">
          {ShopType === "BAR" && (
            <Link className="commonBtn " to="/user/bearshop/outbill">
              बाहर का बिल
            </Link>
          )}
          {ShopType === "SHOP" && (
            <Link className="commonBtn " to="/user/outbill">
              बाहर का बिल
            </Link>
          )}
          {ShopType === "BAR" && (
            <Link className="commonBtn " to="/user/bearshop/partyOutBill">
              पार्टी बिल
            </Link>
          )}
          {ShopType === "SHOP" && (
            <Link className="commonBtn" to="/user/partyOutBill">
              पार्टी बिल
            </Link>
          )}
        </div>
        <div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold md:text-[1.5rem] text-center">
              दुकान बिल
            </h2>
            <div className="flex gap-4 items-center my-4">
              <h2 className="font-bold text-[1.5rem]">From</h2>
              <div className="flex gap-2 items-center">
                <DatePicker
                  selected={StartDate}
                  onChange={(date) => {
                    setStartDate(date);
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
              <div className="flex justify-center items-center">
                <div className="overflow-x-auto">
                  <table
                    className={
                      ShopType === "SHOP"
                        ? "removeCommonWSpace"
                        : "displayHidden"
                    }
                  >
                    <thead>
                      <tr>
                        <th className="text-xs"> क्र. सं.</th>
                        <th className="text-xs">दिनांक </th>
                        <th className="text-xs">ब्राण्ड </th>
                        <th className="text-xs">साईज</th>
                        <th className="text-xs">संख्या</th>
                        <th className="text-xs"> रेट</th>
                        <th className="text-xs">रकम</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(SelfBillData &&
                        SelfBillData?.sort((a, b) =>
                          a?.liquor.brandName?.localeCompare(
                            b?.liquor.brandName
                          )
                        )?.map((billsData, index) => {
                          return (
                            <SelfBillList
                              key={index}
                              index={index}
                              billsData={billsData}
                              isLoading={isLoading}
                            ></SelfBillList>
                          );
                        })) || (
                        <>
                          <p>
                            <span className="text-red-500">No Data Found</span>
                          </p>
                        </>
                      )}

                      <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="commonText">Total</td>
                        <td className="price">
                          {(Number(totalAmount) || 0).toFixed(2)}
                        </td>
                      </tr>
                      <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="commonText">रिफंड</td>
                        <td className="price">
                          {(
                            Number(
                              filteredRefund.reduce(
                                (total, currentItem) =>
                                  (total = total + Number(currentItem.price)),
                                0
                              )
                            ) || 0
                          ).toFixed(2)}
                        </td>
                      </tr>
                      <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="commonText">कुल रकम</td>
                        <td className="price">
                          {Number(netPaidAmount).toFixed(2)}
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table
                    className={
                      ShopType === "BAR"
                        ? "removeCommonWSpace"
                        : "displayHidden"
                    }
                  >
                    <thead>
                      <tr>
                        <td className="text-xs"> क्र. सं.</td>
                        <th className="text-xs">दिनांक </th>
                        <th className="text-xs">ब्राण्ड </th>
                        <th className="text-xs">साईज</th>
                        <th className="text-xs">संख्या</th>
                        <th className="text-xs"> रेट</th>
                        <th className="text-xs">रकम</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(SelfBillData &&
                        SelfBillData?.filter((brand) => {
                          if (brand.liquor.type === "WINE") {
                            if (brand.liquor.quantityInML === 30) {
                              return brand;
                            }
                          } else if (brand.liquor.type === "BEER") {
                            return brand;
                          } else return;
                        }).map((billsData, index) => {
                          return (
                            <SelfBillList
                              key={index}
                              index={index}
                              billsData={billsData}
                              isLoading={isLoading}
                            ></SelfBillList>
                          );
                        })) || (
                        <>
                          <p>
                            <span className="text-red-500">No Data Found</span>
                          </p>
                        </>
                      )}

                      <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="commonText">Total</td>
                        <td className="price">{totalAmount}</td>
                      </tr>
                      <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="commonText">रिफंड</td>
                        <td className="price">
                          {filteredRefund.reduce(
                            (total, currentItem) =>
                              (total = total + Number(currentItem.price)),
                            0
                          )}
                        </td>
                      </tr>
                      <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="commonText">कुल रकम</td>
                        <td className="price">
                          {Number(netPaidAmount).toFixed(2)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SelfBill;
