import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import CommisionForm from "../CommisionForm/CommisionForm";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";

const Commision = () => {
  const token = localStorage.getItem("token");
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  const { data: commitsonData, isLoading } = useQuery({
    queryKey: ["commitsonData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getTotalExpensesData",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (!commitsonData.length){
    return(
      <h1>No Data Found</h1>
    )
  }


  return (
    <section className="py-4 px-4">
      <div className="title">
        <h2 className="font-bold text-[1.5rem]">कमीशन</h2>

        <div className="flex gap-4 items-center my-4">
          <h2 className="font-bold text-[1.5rem]">From</h2>

          <div className="flex gap-2 items-center">
            <FaCalendarAlt></FaCalendarAlt>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              name="start"
              className="semiSmallInput"
            />
          </div>
          <h2 className="font-bold text-[1.5rem]">To</h2>

          <div className="flex gap-2 items-center">
            <FaCalendarAlt></FaCalendarAlt>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              name="end"
              className="semiSmallInput"
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
                  <th>S.no</th>
                  <th>विवरण</th>
                  <th>रकम</th>
                  <th>टिप्पणी</th>
                </tr>
              </thead>

              <tbody>
                {commitsonData && commitsonData.filter(row => {
                  let filterPass = true
                  const date = new Date(row.date)
                  if (startDate) {
                    filterPass = filterPass && (new Date(startDate) <= date)
                  }
                  if (endDate) {
                    filterPass = filterPass && (new Date(endDate) >= date)
                  }
                  //if filterPass comes back `false` the row is filtered out
                  return filterPass
                })
                  .map((commison, index) => {
                    return (
                      <CommisionForm
                        key={index}
                        index={index}
                        commison={commison}
                      ></CommisionForm>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </form>{" "}
      </div>
    </section>
  );
};

export default Commision;
