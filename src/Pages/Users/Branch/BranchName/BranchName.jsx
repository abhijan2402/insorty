import React from "react";
import { Link } from "react-router-dom";
import AddNewBranch from "../AddNewBranch/AddNewBranch";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";

const BranchName = () => {
  const token = localStorage.getItem("token");

  const {
    data: branches,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["branches"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-backend-clone.vercel.app/shop/getAllBranches",
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  const handelSubmitAddNewBranch = (e) => {
    e.preventDefault();
    const branchName = e.target.branchName.value;

    fetch("https://insorty-backend-clone.vercel.app/shop/addBranch", {
      method: "POST",
      headers: { "Content-Type": "application/json", cookie_token: token },
      body: JSON.stringify({ branchName }),
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        if (data.success) {
          Swal.fire("Success!", "Your file has been added.", "success");
        } else {
          Swal.fire("Failed!", "Your file has not been added.", "error");
        }
      });
  };

  if (isLoading) {
    return (
      <div>
        <Loader></Loader>
      </div>
    );
  }


  return (
    <section className="py-4">
      <div>
        <h1 className="titleStyle text-center">ब्रांच सूची</h1>
        <div className="divider my-2"></div>
      </div>

      <div>
        <div className="flex justify-center items-center">
         
          <table className="table w-5/6">
          <thead>
            <tr>
              <th> क्र. सं.</th>
              <th colSpan={2}>Branch Name</th>
            </tr>
          </thead>
            <tbody>
              {branches &&
                branches.filter((prev)=>prev.isActive===true).map((branch, index) => (
                  <tr>
                    <th>{index + 1}</th>
                    <td>
                      <Link
                        className="font-bold text-[1rem]"
                        to={`/user/branch/from/${branch._id}`}
                      >
                        {branch.branchName}
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <AddNewBranch
        // key={}
        handelSubmitAddNewBranch={handelSubmitAddNewBranch}
      ></AddNewBranch>
    </section>
  );
};

export default BranchName;
