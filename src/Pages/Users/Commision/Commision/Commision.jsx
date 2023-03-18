import React, { useState,useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import CommisionForm from "../CommisionForm/CommisionForm";
import Loader from "../../../../Components/Loader/Loader";
import DatePicker from "react-datepicker";
import moment from "moment/moment";
import useCommision from "../CommisionHooks/useCommision";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";


const Commision = () => {
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState();
  const { commitsonData, isLoading } = useCommision();
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (!commitsonData.length) {
    return <h1>No Data Found</h1>;
  }

  const filteredData = commitsonData.filter((item) => {
    let filterPass = true;
    const date = moment(item.date).format("DD/MM/YYYY");

    if (StartDate) {
      filterPass = filterPass && moment(StartDate).format("DD/MM/YYYY") <= date;
    }
    if (EndDate) {
      filterPass = filterPass && moment(EndDate).format("DD/MM/YYYY") >= date;
    }
    return filterPass;
  });

  // get total amount of filtered data and map it to the array of objects and then add all the values of the array
  const totalAmount = filteredData.map((item) => {
    // get total ammount using reduce method
    const total = item.entries.reduce((acc, item) => {
      return acc + Number(item.amount.$numberDecimal);
    }, 0);
    return total;
  });

  console.log(totalAmount, "totalAmount");

  return (
    <section className="py-4 px-4">
      <div className="title">
        <h2 className="font-bold md:text-[1.5rem] text-center ">कमीशन</h2>

        <div className="flex item-cnter justify-center">
          <button
            className="my-4 btn btn-error text-white font-bold"
            onClick={handlePrint}
          >
            PRINT
          </button>
          <Link className="commonBtn " to="/user/kharcha">
            KHARCHA
          </Link>

          <Link className="commonBtn " to="/user/fut">
            FUT
          </Link>

          <Link className="commonBtn " to="/user/begar">
            BEGAR
          </Link>

          <Link className="commonBtn " to="/user/monthly">
            MONTHLY
          </Link>

          <Link className="commonBtn " to="/user/penalty">
            PENALTY
          </Link>

          <Link className="commonBtn " to="/user/others">
            OTHERS
          </Link>
        </div>

        <div ref={front}>
        <div>

        <div className="flex gap-4 items-center my-4">
          <h2 className="font-bold text-[1.5rem]">From</h2>
          <div className="flex gap-2 items-center">
            <FaCalendarAlt></FaCalendarAlt>
            <DatePicker
              selected={StartDate}
              onChange={(date) => {
                setStartDate(date);
                console.log(moment(date).format());
              }}
              dateFormat="dd/MM/yyyy"
              placeholderText={"dd/mm/yyyy"}
              className="inputBox"
            />
          </div>

          <h2 className="font-bold text-[1.5rem]">To</h2>
          <div className="flex gap-2 items-center">
            <FaCalendarAlt></FaCalendarAlt>
            <DatePicker
              selected={EndDate}
              name="year"
              onChange={(data) => setEndDate(data)}
              dateFormat="dd/MM/yyyy"
              className="inputBox"
              placeholderText={"dd/mm/yyyy"}
            />
          </div>
        </div>

        <div className="divider my-2"></div>
      </div>

      <div>
        <form action="">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <td> क्र. सं.</td>
                  <th>विवरण</th>
                  <th>रकम</th>
                  <th>टिप्पणी</th>
                </tr>
              </thead>

              <tbody>
                {filteredData.map((commison, index) => {
                  return (
                    <CommisionForm
                      key={index}
                      index={index}
                      commison={commison}
                    ></CommisionForm>
                  );
                })}

                <tr>
                  <td></td>
                  <th></th>
                  <th
                    className="flex items-center justify-center
                    text-[#AA237A]
                  "
                  >
                    Total :
                    <span className="mx-4">
                      {totalAmount.reduce((acc, item) => {
                        return acc + item;
                      }, 0)}
                    </span>
                  </th>
                  <th></th>
                </tr>
              </tbody>
            </table>
          </div>
        </form>{" "}
      </div>
        </div>
      </div>
    </section>
  );
};

export default Commision;
