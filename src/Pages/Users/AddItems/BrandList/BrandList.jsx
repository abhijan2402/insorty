import React from "react";
import { Link } from "react-router-dom";
import "../../../../Pages/Home/Style/Home.scss";
import AddBrandList from "./AddBrandList/AddBrandList";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";

const BrandList = () => {
  const token = localStorage.getItem("token");

  const { data: BrandData, isLoading, refetch } = useQuery({
    queryKey: ["BrandData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getAllParentLiquors",
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
    <section className="p-4">
      <div className="title">
        <div className="flex gap-4 justify-center items-center">
          <h2 className="font-bold md:text-[1.5rem] text-center">
            ब्राण्ड सूची
          </h2>
          
        </div>
        <div className="divider my-2"></div>
      </div>
      <div className="flex justify-center items-center">
        <table className="table w-4/5 removeCommonWSpace">
          <thead className="text-center">
            <th>
              <h1>Sr. No.</h1>
            </th>
            <th>
              <h1>Brand Name</h1>
            </th>
            <th>
              <h1>Type</h1>
            </th>
            <th>
              <h1>Quantity In ML</h1>
            </th>
          </thead>

          <tbody>
            {BrandData.length &&
              BrandData?.map((item, index) => {
                const { sizes } = item;
                const quantityInML = sizes?.map((item) => item?.quantityInML);

                return (
                  <tr key={index} className="text-center">
                    <th>
                      <h1>{index + 1}</h1>
                    </th>
                    <td>
                      <h1>{item?.brandName}</h1>
                    </td>
                    <td>{item?.type}</td>
                    <td>
                      <h1>
                        {quantityInML?.map((item, index) => {
                          return (
                            <span key={index}>
                              {item}
                              {index !== quantityInML?.length - 1 && ", "}
                            </span>
                          );
                        })}
                      </h1>
                    </td>
                    <td>
                      <Link
                        className="font-3xl font-bold"
                        style={{ color: "#AA237A" }}
                      >
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center">
        <div className="my-4">
          <label htmlFor="AddBrandList" className="commonBtn">
            Add New
          </label>
        </div>
      </div>

      <AddBrandList refetch={refetch}></AddBrandList>
    </section>
  );
};

export default BrandList;
