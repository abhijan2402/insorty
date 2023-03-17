import React, { useState,useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import BranchFormData from "./BranchFormData/BranchFormData";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "react-bootstrap-typeahead";
import DatePicker from "react-datepicker";
import moment from "moment/moment";
import { useReactToPrint } from "react-to-print";

const BranchFrom = () => {
  const token = localStorage.getItem("token");
  const branchResponse = useLoaderData();
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState();
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  const branchData = branchResponse?.data;

  const { data: transactions, isLoading: branchDataLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getBranchTransactions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
          body: JSON.stringify({ branchId: branchData._id }),
        }
      );
      const data = await res.json();
      return data.data.transactions;
    },
  });

  if (branchDataLoading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <button
        className="my-4 btn btn-error text-white font-bold"
        onClick={handlePrint}
      >
        PRINT
      </button>
    <section ref={front} className="p-4">
      <div className="title">
        <h2 className="font-bold md:text-[1.5rem] text-center">
          Branch Name / ब्रांच नाम:-
          <span className="titleStyle"> {branchData.branchName}</span>
        </h2>

        <div className="flex gap-4 items-center my-4 z-10">
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

      {/* ************************ all branch data************** */}
      <div>
        <form action="">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th> क्र. सं.</th>
                  <th>Date / दिनांक</th>
                  <th>debit / नामे </th>
                  <th>Deposit / जमा</th>
                  <th>Running Balance / चालू शेष जमा</th>
                </tr>
              </thead>

              <tbody>
                {(transactions &&
                  transactions
                    .filter((row) => {
                      let filterPass = true;
                      const date = new Date(row.date);
                      if (StartDate) {
                        filterPass = filterPass && new Date(StartDate) <= date;
                      }
                      if (EndDate) {
                        filterPass = filterPass && new Date(EndDate) >= date;
                      }
                      //if filterPass comes back `false` the row is filtered out
                      return filterPass;
                    })
                    .map(
                      ((current_sum) => (transaction, index) => {
                        return (
                          <BranchFormData
                            key={index}
                            index={index}
                            transaction={{
                              ...transaction,
                              current_balance: (current_sum +=
                                transaction.deposit - transaction.debit),
                            }}
                          ></BranchFormData>
                        );
                      })(0)
                    )) || (
                  <>
                    <tr>
                      <td>
                        <span className="text-red-500">No Data Found</span>
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </form>{" "}
      </div>
    </section>
    </>
  );
};

export default BranchFrom;
