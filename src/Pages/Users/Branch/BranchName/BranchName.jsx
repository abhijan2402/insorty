import React from "react";
import { Link } from "react-router-dom";
import AddNewBranch from "../AddNewBranch/AddNewBranch";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";
import jwtDecode from "jwt-decode";

const BranchName = () => {
  const token = localStorage.getItem("token");

  const shopType = jwtDecode(token).shopType;

  const {
    data: branches,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["branches"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getAllBranches",
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

    fetch("https://insorty-api.onrender.com/shop/addBranch", {
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
    <>
      <div className="py-0 sticky top-0 bg-white z-5000">
        <div className="flex item-cnter justify-center flex-wrap">
          <Link
            className={shopType === "SHOP" ? "commonBtn" : "displayHidden"}
            to="/user/branchname"
          >
            ब्रांच जोड़ें
          </Link>

          <Link
            className={shopType === "SHOP" ? "commonBtn" : "displayHidden"}
            to="/user/partyname"
          >
            पार्टी जोड़ें
          </Link>

          <Link
            className={shopType === "SHOP" ? "commonBtn" : "displayHidden"}
            to="/user/borrow"
          >
            पार्टी
          </Link>

          <Link
            className={shopType === "BAR" ? "commonBtn" : "displayHidden"}
            to="/user/bearshop/partyname"
          >
            पार्टी जोड़ें
          </Link>

          <Link
            className={shopType === "BAR" ? "commonBtn" : "displayHidden"}
            to="/user/bearshop/borrow"
          >
            पार्टी
          </Link>
        </div>
        <div>
          <h1 className="titleStyle text-center">ब्रांच सूची</h1>
          <div className="divider my-2"></div>
        </div>
      </div>
      <section className="py-4">
        <div>
          <div className="flex justify-center items-center">
            <table className=" removeCommonWSpace">
              <thead>
                <tr>
                  <th> क्र. सं.</th>
                  <th colSpan={2}>नाम</th>
                </tr>
              </thead>
              <tbody>
                {branches &&
                  branches
                    .filter((prev) => prev.isActive === true)
                    .map((branch, index) => (
                      <tr>
                        <th>{index + 1}</th>
                        <td>
                          <Link
                            className="text-[1rem]"
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
    </>
  );
};

export default BranchName;
