import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../../../Components/Loader/Loader";
import WineStockTopData from "./WineStockTop/WIneSotckTop";

const WineStock = () => {
  const token = localStorage.getItem("token");
  const { data: wineStock, isLoading } = useQuery({
    queryKey: ["beerStock"],
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

  const total = 0;

  const wineStockData = wineStock?.filter((item) => item.type === "WINE");

  if (isLoading) return <Loader></Loader>;

  return (
    <section>
      <div className="title">
        <div className="flex gap-4 items-center">
          <h2 className="font-bold text-[1.5rem]">Wine Stock</h2>
          <Link to="/user/beerstock" className="commonBtn ">
            Beer Stock
          </Link>
        </div>
        <div className="divider my-2"></div>
      </div>
      <div className="flex gap-4 items-center justify-center ">
        <div className="form-control">
          <input
            type="date"
            className="input mb-2"
            style={{
              border: "1px solid #e5e7eb",
            }}
          />
        </div>
      </div>
      <div className="overflow-x-auto ">
        <table className="table w-full m-2">
          <thead>
            <tr>
              <th>S.no</th>
              <th>ब्राण्ड/ Brand Name </th>
              <th>स्टॉक / stock</th>
              <th>Avg. Rate / रेट</th>
              <th>Total / योग</th>
              <th>कुल योग/ Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <div className="form-control"></div>
              </td>
              <td>
                <div className="flex gap-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">650ml</span>
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">550ml</span>
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">330ml</span>
                    </label>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex gap-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">650ml</span>
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">550ml</span>
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">330ml</span>
                    </label>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex gap-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">650ml</span>
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">550ml</span>
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">330ml</span>
                    </label>
                  </div>
                </div>
              </td>
              <td>
                <div className="form-control"></div>
              </td>
            </tr>

            {wineStockData?.map((item, index) => {
              return (
                <>
                  <WineStockTopData
                    key={item._id}
                    index={index}
                    item={item}
                    total={total}
                  ></WineStockTopData>
                </>
              );
            })}

            <tr>
              <td colSpan="5">Total</td>
              <td>{total}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <div className="flex gap-4 overflow-x-auto my-4 ">
          <div>
            <table className="table w-full m-2">
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>ब्राण्ड/ Brand Name </th>
                  <th>स्टॉक / stock</th>
                  <th>Avg. Rate / रेट</th>
                  <th>Total / योग</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Brand Name</td>
                  <td> 400</td>
                  <td> 654</td>
                  <td> 1000</td>
                </tr>
                <tr>
                  <td colSpan="4">Total</td>
                  <td>1000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-1/2 mx-4">
            <h1 className="text-2xl font-bold ">रफ जगह</h1>
            <textarea
              className="textarea textarea-accent h-40 "
              placeholder="Type Here ...."
            ></textarea>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WineStock;
