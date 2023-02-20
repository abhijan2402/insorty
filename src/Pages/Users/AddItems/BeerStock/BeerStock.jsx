import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../../../Components/Loader/Loader";
import BeerStockTopData from "./BeerStockTopData/BeerStockTopData";
import { useState } from "react";

const BeerStock = () => {
  const token = localStorage.getItem("token");
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const { data: beerStock, isLoading } = useQuery({
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

  const beerStockData = beerStock?.filter((item) => item.type === "BEER");

  const filteredData = beerStockData
    ? beerStockData.filter((item) => {
        const itemDate = new Date(item.createdAt);
        const selected = selectedDate ? new Date(selectedDate) : null;
        if (selected) {
          return itemDate.toDateString() === selected.toDateString();
        } else {
          return true;
        }
      })
    : beerStockData;

  if (isLoading) return <Loader></Loader>;

  return (
    <section>
      <div className="title">
        <div className="flex gap-4 items-center">
          <h2 className="font-bold text-[1.5rem]">Beer Stock</h2>
          <Link to="/user/winestock" className="commonBtn ">
            Wine Stock
          </Link>
        </div>
        <div className="divider my-2"></div>
      </div>
      <div className="flex gap-4 items-center justify-center ">
        <div className="form-control">
          <input
            type="date"
            dateFormat="yyyy-MM-dd"
            value={selectedDate}
            onChange={handleDateChange}
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

            {filteredData?.map((item, index) => {
              return (
                <>
                  <BeerStockTopData
                    key={item._id}
                    index={index}
                    item={item}
                    total={total}
                  ></BeerStockTopData>
                </>
              );
            })}

            {/* <tr>
              <td colSpan="5">Total</td>
              <td>{total}</td>
            </tr> */}
          </tbody>
        </table>
      </div>

      <div>
        <div className=" gap-4 overflow-x-auto my-4 ">
          <div>
            <table className="table w-full m-2">
              <thead>
                <tr>
                  <th>S.no</th>
                  <th>ब्राण्ड/ Brand Name </th>
                  <th>size </th>
                  <th>स्टॉक / stock</th>
                  <th>Avg. Rate / रेट</th>
                  <th>Total / योग</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((brand, index) => {
                  return (
                    <>
                      {brand.sizes.map((size) => {
                        if (size.quantityInML !== 650 && size.quantityInML !== 550 && size.quantityInML !== 330) {

                          return (
                            <tr>
                              <td>{index + 1}</td>
                              <td>{brand.brandName}</td>
                              <td>{size.quantityInML}</td>
                              <td> {size.currentStock}</td>
                              <td> {size.averageRate.$numberDecimal}</td>
                              <td> {size.currentStock * Number(size.averageRate.$numberDecimal)}</td>
                            </tr>

                          )
                        }
                      })}
                    </>
                  )
                })}
                <tr>
                  <td colSpan="5">Total</td>
                  <td>
                    {
                      filteredData.reduce(
                        (total, currentItem) => (total = total + currentItem.sizes.reduce(

                          (total, currentItem) => (total = total + (currentItem.currentStock * Number(currentItem.averageRate.$numberDecimal))),
                          0
                        )),
                        0
                      )
                    }</td>
                </tr>
               
              </tbody>
            </table>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default BeerStock;
