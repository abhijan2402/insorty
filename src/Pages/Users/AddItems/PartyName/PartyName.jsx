import React from "react";
import { Link } from "react-router-dom";
import AddPartyName from "./AddPartyName/AddPartyName";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";

const PartyName = () => {
  const token = localStorage.getItem("token");

  const {
    data: PartyNameData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["PartyNameData"],
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

  if (isLoading) return <Loader></Loader>;

  return (
    <section>
      <div className="title">
        <div className="flex gap-4 justify-center items-center">
          <h2 className="font-bold md:text-[1.5rem] text-center">
            पार्टी जोड़ें
          </h2>
          <Link to="/user/branchname" className="commonBtn ">
            ब्रांच जोड़ें
          </Link>
          
        </div>
        <div className="divider my-2"></div>
      </div>
      <div
        className="justify-center flex items-center"
      >
        <table className="table w-4/5 removeCommonWSpace">
          <thead className="text-center">
            <th>
              <h1>क्र. सं.</h1>
            </th>
            <th>
              <h1>पार्टी नाम</h1>
            </th>
            
          </thead>
          <tbody>
            {PartyNameData?.map((item, index) => {
              return (
                <tr key={index}>
                  <th>
                    <h1>{index + 1}</h1>
                  </th>
                  <td>
                    <h1>{item?.partyName}</h1>
                  </td>
                 =
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center">
        <div className="my-4">
          <label htmlFor="AddPartyName" className="commonBtn">
            नई पार्टी जोड़ें
          </label>
        </div>
      </div>

      <AddPartyName refetch={refetch}></AddPartyName>
    </section>
  );
};

export default PartyName;
