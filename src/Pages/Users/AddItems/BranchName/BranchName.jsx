import React from "react";
import { Link } from "react-router-dom";
import AddBranchName from "./AddBranchName/AddBranchName";
import Loader from "../../../../Components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";

const BranchName = () => {
  const token = localStorage.getItem("token");

  const { data: BranchNameData, isLoading, refetch } = useQuery({
    queryKey: ["BranchNameData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getAllBranches",
        {
          method: "POST",
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
          <h2 className="font-bold text-[1.5rem] text-center">Branch name</h2>
          <Link to="/user/partyname" className="commonBtn ">
            Party name
          </Link>
          <Link to="/user/branchname" className="commonBtn ">
            Brand List
          </Link>
        </div>
        <div className="divider my-2"></div>
      </div>
      <div className="flex justify-center items-center">
        <table className="table w-4/5 removeCommonWSpace">
          <thead className="text-center ">
            <th>
              <h1>Sr. No.</h1>
            </th>
            <th>
              <h1>Brand Name</h1>
            </th>

            <th>
              <h1>Action</h1>
            </th>
          </thead>
          <tbody>
            {BranchNameData?.map((item, index) => {
              return (
                <tr key={index} className="text-center">
                  <th>
                    <h1>{index + 1}</h1>
                  </th>
                  <td>
                    <h1>{item?.branchName}</h1>
                  </td>
                  <td>
                    <Link
                      className="font-3xl font-bold"
                      style={{ color: "#AA237A" }}
                    ></Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <div className="my-4">
          <label htmlFor="AddPartyName" className="commonBtn">
            Add New
          </label>
        </div>
      </div>

      <AddBranchName refetch={refetch}></AddBranchName>
    </section>
  );
};

export default BranchName;
