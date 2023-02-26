/* eslint-disable array-callback-return */
import React, { useRef, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import OutBillList from "../OutBillList/OutBillList";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";
import useLiquors from "../../../../Hooks/useLiquors";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange, DateRangePicker } from "react-date-range";
import format from "date-fns/format";
import { useEffect } from "react";

const OutBill = () => {
  const token = localStorage.getItem("token");
  // const [liquorsParentData, setLiquorsParentData] = React.useState([]);
  const { brandsLoaded, loading } = useLiquors();
  const [selectedDate, setSelectedDate] = useState("");
  const [open, setOpen] = useState(false);
  const refOne = useRef(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

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

  // const handleDateChange = (event) => {
  //   setSelectedDate(event.target.value);
  // };

  // const filteredData = selectedDate
  //   ? OutBill.filter((item) => {
  //       let filterPass = true;
  //       const date = new Date(item.date);
  //       if (StartDate) {
  //         filterPass = filterPass && new Date(StartDate) <= date;
  //       }
  //       if (EndDate) {
  //         filterPass = filterPass && new Date(EndDate) >= date;
  //       }
  //       //if filterPass comes back `false` the row is filtered out
  //       return filterPass;

  //       // const itemDate = new Date(item.date);
  //       // const selected = selectedDate ? new Date(selectedDate) : null;
  //       // if (selected) {
  //       //   return itemDate.toDateString() === selected.toDateString();
  //       // } else {
  //       //   return true;
  //       // }
  //     })
  //   : OutBill;

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (data) => {
    const filteredData = OutBill.filter((item) => {
      const itemDate = new Date(item.createdAt);
      return (
        itemDate >= data.selection.startDate &&
        itemDate <= data.selection.endDate
      );
    });
    setStartDate(data.selection.startDate);
    setEndDate(data.selection.endDate);
    setFilteredData(filteredData);
  };

  console.log(filteredData , "filteredData +9++++++")

  if (isLoading || brandsLoaded) {
    return <Loader></Loader>;
  }

  const totalAmountData = filteredData?.map((item) => {
    return item.total;
  });
  const totalAmount = totalAmountData?.reduce((a, b) => a + b, 0);

  return (
    <section>
      <div className="title">
        <h2 className="font-bold text-[1.5rem]">बाहर के बिल का फोर्मेट</h2>
        <div className="flex gap-4 items-center justify-center ">
          <div className="flex gap-2 items-center">
            <FaCalendarAlt></FaCalendarAlt>
            <div className="calendarWrap">
              <input
                value={`${format(
                  selectionRange.startDate,
                  "dd/MM/yyyy"
                )} to ${format(selectionRange.endDate, "dd/MM/yyyy")}`}
                readOnly
                className="inputBox"
                onClick={() => setOpen((open) => !open)}
              />

              <div ref={refOne}>
                {open && (
                  <DateRangePicker
                    ranges={[selectionRange]}
                    onChange={handleSelect}
                    className="calendarElement"
                  />
                )}
              </div>
            </div>
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
