/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import OutBillList from "../OutBillList/OutBillList";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";
import useLiquors from "../../../../Hooks/useLiquors";

const OutBill = () => {
  const token = localStorage.getItem("token");
  // const [liquorsParentData, setLiquorsParentData] = React.useState([]);
  const { brandsLoaded, loading } = useLiquors();
  const [selectedDate, setSelectedDate] = useState("");

  const { data: OutBill, isLoading } = useQuery({
    queryKey: ["OutBill"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getOutBill",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  const totalAmountData = OutBill?.map((item) => {
    return item.total;
  });
  const totalAmount = totalAmountData?.reduce((a, b) => a + b, 0);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const filteredData = selectedDate
    ? OutBill.filter((item) => {
        const itemDate = new Date(item.date);
        const selected = selectedDate ? new Date(selectedDate) : null;
        if (selected) {
          return itemDate.toDateString() === selected.toDateString();
        } else {
          return true;
        }
      })
    : OutBill;

  if (isLoading || brandsLoaded || loading) {
    return <Loader></Loader>;
  }

  return (
    <section>
      <div className="title">
        <h2 className="font-bold text-[1.5rem]">बाहर के बिल का फोर्मेट</h2>
        <div className="flex gap-4 items-center my-4">
          <h2 className="font-bold text-[1.5rem]">From</h2>

          <div className="flex gap-2 items-center">
            <FaCalendarAlt></FaCalendarAlt>
            <input
              type="date"
              dateFormat="yyyy-MM-dd"
              value={selectedDate}
              onChange={handleDateChange}
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
              {(filteredData &&
                filteredData?.map((outBill, index) => {
                  return (
                    <OutBillList
                      key={index}
                      outBill={outBill}
                      index={index}
                    ></OutBillList>
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
                <td className="commonText">Total</td>
                <td className="price">{totalAmount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default OutBill;
