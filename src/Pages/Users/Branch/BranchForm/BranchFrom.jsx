import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import useBranch from "../BranchHooks/useBranch";
import { Link, useLoaderData } from "react-router-dom";
import BranchFormData from "./BranchFormData/BranchFormData";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "react-bootstrap-typeahead";

const BranchFrom = () => {
  const token = localStorage.getItem("token");
  const branchResponse = useLoaderData();
  const branchData = branchResponse?.data;
  const {
    branchState,
    isLoading,
    setIsLoading,
  } = useBranch();

  const {
    data: transactions,
    isLoading: branchDataLoading,
    refetch,
  } = useQuery({
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
    <section className="p-4">
      <div className="title">
        <h2 className="font-bold text-[1.5rem]">
          Branch Name / ब्रांच नाम
          <span className="titleStyle"> {branchData.branchName}</span>
        </h2>

        <div className="flex gap-4 items-center my-4">
          <h2 className="font-bold text-[1.5rem]">From</h2>

          <div className="flex gap-2 items-center">
            <FaCalendarAlt></FaCalendarAlt>
            <input
              type="text"
              value={"12 Dec 2022 "}
              name="year"
              className="semiSmallInput"
            />
          </div>
          <h2 className="font-bold text-[1.5rem]">To</h2>

          <div className="flex gap-2 items-center">
            <FaCalendarAlt></FaCalendarAlt>
            <input
              type="text"
              value={"07 January 2023 "}
              name="year"
              className="semiSmallInput"
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
                  <th>S.no</th>
                  <th>Date / दिनांक</th>
                  <th>debit / नामे </th>
                  <th>Deposit / जमा</th>
                  <th>Running Balance / चालू शेष जमा</th>
                </tr>
              </thead>

              <tbody>
                {(transactions && transactions.map(((current_sum => (transaction, index) => {
                  return (
                    <BranchFormData
                      key={index}
                      index={index}
                      transaction={{...transaction, current_balance: (current_sum += (transaction.deposit - transaction.debit))}}
                    ></BranchFormData>
                  );
                }))(0))) || (
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
  );
};

export default BranchFrom;
