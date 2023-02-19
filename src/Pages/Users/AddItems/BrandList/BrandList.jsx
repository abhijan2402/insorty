import React from "react";
import { Link } from "react-router-dom";
import "../../../../Pages/Home/Style/Home.scss";
import { FaRegTrashAlt } from "react-icons/fa";
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
    <section className="p-4">
      <div className="title">
        <div className="flex gap-4 items-center">
          <h2 className="font-bold text-[1.5rem]">Brand List / ब्राण्ड सूची</h2>
          <Link to="/user/branchname" className="commonBtn ">
            Branch
          </Link>
          <Link to="/user/partyname" className="commonBtn ">
            Party
          </Link>
        </div>
        <div className="divider my-2"></div>
      </div>
      <div>
        <table className="table w-4/5">
          <tbody>
            {BrandData?.map((item, index) => {
              const { sizes } = item;
              const quantityInML = sizes?.map((item) => item?.quantityInML);

              return (
                <tr key={index}>
                  <th>
                    <h1>{index + 1}</h1>
                  </th>
                  <td>
                    <h1>{item?.brandName}</h1>
                  </td>
                  <td>{item?.type}</td>
                  <td>
                    <h1>
                      {quantityInML?.slice(0, 3).map((item, index) => {
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
                      // onClick={() => handleDelete(salary?._id)}
                    >
                      <FaRegTrashAlt></FaRegTrashAlt>
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
          <label htmlFor="AddBrandList" className="commonBtn">
            Add Naw
          </label>
        </div>
      </div>

      <AddBrandList refetch={refetch}></AddBrandList>
    </section>
  );
};

export default BrandList;
