import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../../../Components/Loader/Loader";
import { FaRegTrashAlt } from "react-icons/fa";

const StockLanding = () => {
  const todayDate = new Date(new Date());
  const token = localStorage.getItem("token");

  const { data: PartyInfo, isLoading } = useQuery({
    queryKey: ["PartyInfo"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getAllParties",
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  if (isLoading) {
    return (
      <div>
        <Loader></Loader>
      </div>
    );
  }

  if (!PartyInfo) {
    return <div>No Stock Landing</div>;
  }

  return (
    <section className="p-6">
      <div>
        <h1 className="titleStyle text-center">पार्टी का नाम</h1>
        <div className="flex gap-10 font-bold">
          
        </div>
        <div className="divider my-2"></div>
      </div>

      <div>
        <div className="flex justify-center items-center">
          <table className="table w-2/3">
          <thead>
            <tr>
              <th> क्र. सं.</th>
              <th colSpan={2}>Party Name</th>
              <th colSpan={2}>Delete</th>
            </tr>
          </thead>
            <tbody>
              {PartyInfo?.map((party, index) => {
                return (
                  <tr key={party?._id}>
                    <th>{index + 1}</th>
                    <td>
                      <Link
                        className="font-bold text-[1rem]"
                        to={`/user/stocklanding/form/${party?._id}`}
                      >
                        {party?.partyName}
                      </Link>
                    </td>
                    <td>
                      <Link
                        className="font-3xl font-bold"
                        style={{ color: "#AA237A" }}
                      >
                        <FaRegTrashAlt></FaRegTrashAlt>
                      </Link>
                    </td>
                  </tr>
                );
              })}

             
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default StockLanding;
