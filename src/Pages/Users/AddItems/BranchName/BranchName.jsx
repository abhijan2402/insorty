import React from "react";
import { Link } from "react-router-dom";
import AddBranchName from "./AddBranchName/AddBranchName";
import Loader from "../../../../Components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import jwtDecode from "jwt-decode";

const BranchName = () => {
  const token = localStorage.getItem("token");

  const ShopToken = jwtDecode(localStorage.getItem("token"));
  const ShopType = ShopToken.shopType;
  const role = ShopToken.role;

  const {
    data: BranchNameData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["BranchNameData"],
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

  const handelDelete = (id) => {
    console.log("delete", id);
    fetch(`https://insorty-backend-clone.vercel.app/shop/deleteBranch`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", cookie_token: token },
      body: JSON.stringify({ branchId: id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          Swal.fire("Success!", "Your file has been deleted.", "success");
          refetch();
        } else {
          Swal.fire("Error!", "Something went wrong.", "error");
        }
      })
      .catch((err) => {
        Swal.fire("Error!", "Something went wrong.", "error");
      });
  };

  if (isLoading) return <Loader></Loader>;

  return (
    <section>
      <div className="title">
        <div className="flex gap-4 justify-center items-center">
          <h2 className="font-bold text-[1.5rem] text-center">ब्रांच जोड़ें</h2>

          {role === "shop" && ShopType === "BAR" && (
            <Link to="/user/bearshop/partyname" className="commonBtn ">
              पार्टी जोड़ें
            </Link>
          )}

          {role === "shop" && ShopType === "SHOP" && (
            <Link to="/user/partyname" className="commonBtn ">
              पार्टी जोड़ें
            </Link>
          )}
        </div>
        <div className="divider my-2"></div>
      </div>
      <div className="flex justify-center items-center">
        <table className="table w-4/5 removeCommonWSpace">
          <thead className="text-center ">
            <th>
              <h1>क्र. सं.</h1>
            </th>
            <th>
              <h1>ब्रांच नाम</h1>
            </th>

            <th>
              <h1>Delete</h1>
            </th>
          </thead>
          <tbody>
            {BranchNameData?.filter((prev)=>prev.isActive===true).map((item, index) => {
              return (
                <tr key={index} className="text-center">
                  <th>
                    <h1>{index + 1}</h1>
                  </th>
                  <td>
                    <h1>{item?.branchName}</h1>
                  </td>
                  <td>
                    <button
                      className="font-3xl font-bold"
                      style={{ color: "#AA237A" }}
                      onClick={() => handelDelete(item?._id)}
                    >
                      <FaRegTrashAlt></FaRegTrashAlt>
                    </button>
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
            नई ब्रांच जोड़ें
          </label>
        </div>
      </div>

      <AddBranchName refetch={refetch}></AddBranchName>
    </section>
  );
};

export default BranchName;
