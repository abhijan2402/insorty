import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddPartyName from "./AddPartyName/AddPartyName";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";

const PartyName = () => {
  const token = localStorage.getItem("token");

  const { data: PartyNameData, isLoading, refetch } = useQuery({
    queryKey: ["PartyNameData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getAllParties",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });
  console.log(PartyNameData, "Party Name ++++++++++++");

  if (isLoading) return <Loader></Loader>;

  return (
    <section>
      <div className="title">
        <div className="flex gap-4 items-center">
          <h2 className="font-bold text-[1.5rem]">Party Name/ पार्टी का नाम</h2>
          <Link to="/user/branchname" className="commonBtn ">
            Branch
          </Link>
          <Link to="/user/brandlist" className="commonBtn ">
            Brand List
          </Link>
        </div>
        <div className="divider my-2"></div>
      </div>
      <div>
        <table className="table w-4/5">
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
                  <td>
                    <Link
                      className="font-3xl font-bold"
                      style={{ color: "#AA237A" }}
                      // onClick={() => handleDelete(salary?._id)}
                    >
                      {/* <FaRegTrashAlt></FaRegTrashAlt> */}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div>
        <div className="my-4">
          <label htmlFor="AddPartyName" className="commonBtn">
            Add New
          </label>
        </div>
      </div>

      <AddPartyName refetch={refetch}></AddPartyName>
    </section>
  );
};

export default PartyName;
