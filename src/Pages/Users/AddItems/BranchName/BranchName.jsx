import React from "react";
import { Link } from "react-router-dom";
import AddBranchName from "./AddBranchName/AddBranchName";
import Loader from "../../../../Components/Loader/Loader";
import { useQuery } from "@tanstack/react-query";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import jwtDecode from "jwt-decode";
import swal from "sweetalert";

const BranchName = () => {
  const token = localStorage.getItem("token");

  const ShopToken = jwtDecode(localStorage.getItem("token"));
  const shopType = ShopToken.shopType;

  const {
    data: BranchNameData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["BranchNameData"],
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

  const handelDelete = (id) => {
    console.log("delete", id);
    fetch(`https://insorty-api.onrender.com/shop/deleteBranch`, {
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
    <section className="py-4">
      <div className="title">
        <div className="flex gap-4 justify-center items-center">
         

       

          <Link className = {shopType==="SHOP" ? "commonBtn" : "displayHidden"} to="/user/partyname">पार्टी जोड़ें
          </Link>
          <Link className = {shopType==="SHOP" ? "commonBtn" : "displayHidden"} to="/user/branch">ब्रांच
          </Link>
          <Link className = {shopType==="SHOP" ? "commonBtn" : "displayHidden"} to="/user/borrow">पार्टी 
          </Link>

          
          <Link className = {shopType==="BAR" ? "commonBtn" : "displayHidden"} to="/user/bearshop/partyname">
            पार्टी जोड़ें
          </Link>
          
          <Link className = {shopType==="BAR" ? "commonBtn" : "displayHidden"} to="/user/bearshop/borrow">
            पार्टी 
          </Link>
        </div>
        <div>
        <h1 className="titleStyle text-center">ब्रांच जोड़ें</h1>
       
      </div>
        <div className="divider my-2"></div>
      </div>
      <div className="flex justify-center items-center">
        <table className="table  removeCommonWSpace">
          <thead className="text-center ">
            <th>
              <h1>क्र. सं.</h1>
            </th>
            <th>
              <h1>ब्रांच नाम</h1>
            </th>

            <th>
            डिलीट
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
                    {item?.branchName}
                  </td>
                  <td>
                    <button
                      className="font-3xl font-bold"
                      style={{ color: "#AA237A" }}
                      // onClick={() => handelDelete(item?._id)}
                      onClick={() => {
                        swal({
                          title: "Are you sure?",
                          text: `Once deleted, you will not be able to recover branch ${item?.branchName}`,
                          icon: "warning",
                          buttons: true,
                          dangerMode: true,
                        }).then((willDelete) => {
                          if (willDelete) {
                            
                            handelDelete(item?._id);
                            
                          } else {
                            swal("Your branch is safe!");
                          }
                        });
                      }}
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
