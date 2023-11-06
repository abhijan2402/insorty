import React from "react";
import { Link } from "react-router-dom";
import AddPartyName from "./AddPartyName/AddPartyName";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import jwtDecode from "jwt-decode";
import swal from "sweetalert";

const PartyName = () => {
  const token = localStorage.getItem("token");

  const ShopToken = jwtDecode(localStorage.getItem("token"));
  const shopType = ShopToken.shopType;

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

  const handelDelete = (id) => {
    console.log(id);
    fetch(`https://insorty-api.onrender.com/shop/deleteParty`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", cookie_token: token },
      body: JSON.stringify({ partyId: id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          Swal.fire("Success!", "Your file has been deleted.", "success");
          refetch();
        }
      });
  };

  if (isLoading) return <Loader></Loader>;

  return (
    <section className="py-4">
      <div className="title">
        
        <div className="flex gap-4 justify-center items-center">
          
        <Link className = {shopType==="SHOP" ? "commonBtn" : "displayHidden"} to="/user/branchname">
            ब्रांच जोड़ें
          </Link>

         
          <Link className = {shopType==="SHOP" ? "commonBtn" : "displayHidden"} to="/user/branch">ब्रांच
          </Link>
          <Link className = {shopType==="SHOP" ? "commonBtn" : "displayHidden"} to="/user/borrow">पार्टी 
          </Link>

          
          
          
          <Link className = {shopType==="BAR" ? "commonBtn" : "displayHidden"} to="/user/bearshop/borrow">
            पार्टी 
          </Link>

        </div>
        <div>
        <h1 className="titleStyle text-center">पार्टी जोड़ें</h1>
        
      </div>
        <div className="divider my-2"></div>
      </div>
      <div className="justify-center flex items-center">
        <table className="table  removeCommonWSpace">
          <thead className="text-center">
            <th>
              <h1>क्र. सं.</h1>
            </th>
            <th>
              <h1>पार्टी नाम</h1>
            </th>
            <th>
              <h1>Delete</h1>
            </th>
          </thead>
          <tbody>
            {PartyNameData?.filter((prev)=>prev.isActive===true).map((item, index) => {
              return (
                <tr key={index}>
                  <th>
                    <h1>{index + 1}</h1>
                  </th>
                  <td>
                    <h1>{item?.partyName}</h1>
                  </td>
                  <td>
                    <button
                      className="font-3xl font-bold"
                      style={{ color: "#AA237A" }}
                      // onClick={() => handelDelete(item?._id)}
                      onClick={() => {
                        swal({
                          title: "Are you sure?",
                          text: `Once deleted, you will not be able to recover party ${item?.partyName}`,
                          icon: "warning",
                          buttons: true,
                          dangerMode: true,
                        }).then((willDelete) => {
                          if (willDelete) {
                            
                            handelDelete(item?._id);
                            
                          } else {
                            swal("Your party is safe!");
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

      <div className="flex justify-center items-center">
        <div className="my-4">
          <label htmlFor="AddPartyName" className="commonBtn">
            नई पार्टी जोड़ें
          </label>
        </div>
      </div>

      <AddPartyName refetch={refetch} names={PartyNameData}></AddPartyName>
    </section>
  );
};

export default PartyName;
