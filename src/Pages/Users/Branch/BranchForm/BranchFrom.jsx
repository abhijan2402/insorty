import React, { useState, useRef } from "react";
import BranchFormData from "./BranchFormData/BranchFormData";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "react-bootstrap-typeahead";
import DatePicker from "react-datepicker";
import moment from "moment/moment";
import { useReactToPrint } from "react-to-print";
import { useParams } from "react-router-dom";

const BranchFrom = () => {
  const token = localStorage.getItem("token");
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState();
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });
  const { branchId } = useParams()

  console.log(branchId)

  const { data: transactions, isLoading: branchDataLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const res = await fetch(
        `https://insorty-api.onrender.com/shop/getBranchTransactions?branchId=${branchId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            cookie_token: token,
          },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  if (branchDataLoading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <div>
        
        <button className="commonBtn " onClick={handlePrint}>
          प्रिंट
        </button>
      </div>
      <section ref={front} className="p-4">
        <div className="flex justify-center items-center">
          <div className="title">
            


            
              <h2 className="font-bold md:text-[1.5rem] text-center">
                ब्रांच नाम:-
                <span className="titleStyle"> {transactions.branchName}</span>
              </h2>

            <div className="flex gap-4 justify-center items-center my-4 z-10">
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
            <div className="divider my-2"></div>
          </div>
        </div>
        {/* ************************ all branch data************** */}
        <div className="flex justify-center items-center">
          <form action="">
            <div className="overflow-x-auto">
              <table className="removeCommonWSpace">
                <thead>
                  <tr>
                    <th> क्र. सं.</th>
                    <th>दिनांक</th>
                    <th>नामे </th>
                    <th>जमा</th>
                    <th>चालू शेष नामे</th>
                  </tr>
                </thead>

                <tbody>
                  {(transactions.transactions &&
                    transactions.transactions
                      .filter((row) => {
                        let filterPass = true;
                        const date = new Date(row.date);
                        if (StartDate) {
                          filterPass =
                            filterPass && new Date(StartDate) <= date;
                        }
                        if (EndDate) {
                          filterPass = filterPass && new Date(EndDate) >= date;
                        }
                        //if filterPass comes back `false` the row is filtered out
                        return filterPass;
                      })
                      .map(
                        ((current_sum) => (transaction, index) => {
                          console.log(transaction)
                          return (
                            <BranchFormData
                              key={index}
                              index={index}
                              transaction={{
                                ...transaction,
                                current_balance: (current_sum +=
                                  transaction.debit - transaction.deposit),
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
