import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../../../Components/Loader/Loader";
import { FaRegTrashAlt } from "react-icons/fa";
import jwtDecode from "jwt-decode";

const StockLanding = () => {
  const todayDate = new Date(new Date());
  const token = localStorage.getItem("token");
  const ShopToken = jwtDecode(localStorage.getItem("token"));
  const ShopType = ShopToken.shopType;
  const role = ShopToken.role;

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
      console.log(data.data);
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
    return <div>No Stock Lending</div>;
  }

  return (
    <>
      <div className="py-2 sticky top-0 bg-white z-5000">
        <div>
          <h1 className="titleStyle text-center">पार्टी का नाम</h1>
          <div className="divider my-2"></div>
        </div>
      </div>
      <section className="p-6">
        <div>
          <div className="flex justify-center items-center">
            <table className=" removeCommonWSpace">
              <thead>
                <tr>
                  <th className="text-xs"> क्र. सं.</th>
                  <th className="text-xs" colSpan={2}>
                    नाम
                  </th>
                </tr>
              </thead>
              <tbody>
                {PartyInfo?.map((party, index) => {
                  return (
                    <>
                      {ShopType === "BAR" && (
                        <tr key={party?._id}>
                          <th>{index + 1}</th>
                          <td>
                            <Link
                              className="text-[1rem]"
                              to={`/user/bearshop/stocklanding/form/${party?._id}`}
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
                      )}
                      {ShopType === "SHOP" && (
                        <tr key={party?._id}>
                          <th>{index + 1}</th>
                          <td>
                            <Link
                              className=" text-[1rem]"
                              to={`/user/stocklanding/form/${party?._id}`}
                            >
                              {party?.partyName}
                            </Link>
                          </td>
                        </tr>
                      )}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default StockLanding;
