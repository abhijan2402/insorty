import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import CommisionForm from "../CommisionForm/CommisionForm";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";

const Commision = () => {
  const token = localStorage.getItem("token");

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

  return (
    <section className="py-4 px-4">
      <div className="title">
        <h2 className="font-bold text-[1.5rem]">कमीशन</h2>

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
                {commitsonData.map((commison, index) => {
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
