/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import SelfBillList from "../SelfBillList/SelfBillList";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";

const SelfBill = () => {
  const token = localStorage.getItem("token");
  // const [liquorsParentData, setLiquorsParentData] = React.useState([]);
  const [refundDataList, setRefundDataList] = React.useState(0);

  // useEffect(() => {
  //   fetch("https://insorty-api.onrender.com/shop/getAllParentLiquors", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       cookie_token: localStorage.getItem("token"),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setLiquorsParentData(data.data));
  // }, []);

  const { data: SelfBillData, isLoading } = useQuery({
    queryKey: ["SelfBillData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getSelfBill",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      // console.log(data.data);
      return data.data;
    },
  });

  const totalAmountData = SelfBillData?.map((item) => {
    return item.total;
  });
  // const refundData = 2000;
  const totalAmount = totalAmountData?.reduce((a, b) => a + b, 0);
  const netPaidAmount = totalAmount - refundDataList;

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <section>
      <div className="title">
        <h2 className="font-bold text-[1.5rem]">दुकान बिल का फोर्मेट</h2>
        <div className="flex gap-4 items-center my-4">
          <h2 className="font-bold text-[1.5rem]">From</h2>

          <div className="flex gap-2 items-center">
            <FaCalendarAlt></FaCalendarAlt>
            <input
              type="date"
              value="12 Dec 2022 "
              name="year"
              className="semiSmallInput"
            />
          </div>
        </div>
        <div className="divider my-2"></div>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>S.No</th>
                <th>ब्राण्ड/ Brand Name </th>
                <th>साईज / ml</th>
                <th>Number / संख्या</th>
                <th>Rate / रेट</th>
                <th>Amount / रकम</th>
              </tr>
            </thead>
            <tbody>
              {SelfBillData?.map((billsData, index) => {
                return (
                  <SelfBillList
                    key={index}
                    index={index}
                    billsData={billsData}
                    isLoading={isLoading}
                  ></SelfBillList>
                );
              })}

              <tr>
                <th></th>
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
                <td className="commonText">Refund/रिफंड</td>
                <td className="price">
                  <input
                    type="number"
                    className="semiSmallInput"
                    value={refundDataList}
                    onChange={(e) => setRefundDataList(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <th></th>
                <td></td>
                <td></td>
                <td></td>
                <td className="commonText">Net Paid Amount</td>
                <td className="price">{netPaidAmount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SelfBill;
