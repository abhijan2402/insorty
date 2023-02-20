import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
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
        <div className="flex gap-4 items-center">
          <h2 className="font-bold text-[1.5rem]">Branch name</h2>
          <Link to="/user/partyname" className="commonBtn ">
            Party name
          </Link>
          <Link to="/user/branchname" className="commonBtn ">
            Brand List
          </Link>
        </div>
        <div className="divider my-2"></div>
      </div>
      <div>
        <table className="table w-4/5">
          <tbody>
            {BranchNameData?.map((item, index) => {
              return (
                <tr key={index}>
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

      <AddBranchName refetch={refetch}></AddBranchName>
    </section>
  );
};

export default BranchName;
