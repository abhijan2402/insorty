/* eslint-disable array-callback-return */
import React, { useState, useRef } from "react";
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
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState();
  const { data } = useMainInvestmentHooks();
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  const ShopToken = jwtDecode(localStorage.getItem("token"));
  const ShopType = ShopToken.shopType;

  const { data: SelfBillData, isLoading } = useQuery({
    queryKey: ["SelfBillData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getSelfBill",
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  if (isLoading || brandsLoaded || data.isLoading) {
    return <Loader></Loader>;
  }

  const filteredData = SelfBillData.filter((item) => {
    let filterPass = true;
    const date = moment(item.date).format("DD/MM/YYYY");

    if (StartDate) {
      filterPass = filterPass && moment(StartDate).format("DD/MM/YYYY") <= date;
    }
    if (EndDate) {
      filterPass = filterPass && moment(EndDate).format("DD/MM/YYYY") >= date;
    }
    //if filterPass comes back `false` the row is filtered out
    return filterPass;
  });
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

  console.log(filteredRefund);

  const totalAmountData = filteredData?.map((item) => {
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
    <section>
      <div className="title flex flex-col justify-center items-center py-2">
        <div className="flex gap-4">
          {ShopType === "BAR" ? (
            <Link className="commonBtn " to="/user/bearshop/outbill">
              बाहर का बिल
            </Link>
          ) : (
            <Link className="commonBtn " to="/user/outbill">
              बाहर का बिल
            </Link>
          )}

          <button className="commonBtn " onClick={handlePrint}>
            प्रिंट
          </button>
        </div>

        <div ref={front}>
          <div>
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

          <div>
            <div className="overflow-x-auto">
              <table className="removeCommonWSpace">
                <thead>
                  <tr>
                    <td> क्र. सं.</td>
                    <th>दिनाक</th>
                    <th>ब्राण्ड </th>
                    <th>साईज</th>
                    <th>संख्या</th>
                    <th> रेट</th>
                    <th>रकम</th>
                  </tr>
                </thead>
                <tbody>
                  {(filteredData &&
                    filteredData?.map((billsData, index) => {
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
    </section>
  );
};

export default SelfBill;
