import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../../Components/Loader/Loader";
import BeerStockTopData from "./BeerStockTopData/BeerStockTopData";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import moment from "moment/moment";
import { useReactToPrint } from "react-to-print";

const BeerStock = () => {
  const token = localStorage.getItem("token");
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState();
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  const { data: beerStock, isLoading } = useQuery({
    queryKey: ["beerStock"],
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

  const total = 0;

  if (isLoading) return <Loader></Loader>;

  if (!beerStock.length) {
    return <div>No data found</div>;
  }

  const beerStockData = beerStock?.filter((item) => item.type === "BEER");

  console.log(beerStockData);

  const filteredData = beerStockData.filter((item) => {
    let filterPass = true;
    const date = moment(item.date).format("DD/MM/YYYY");

    if (StartDate) {
      filterPass = filterPass && moment(StartDate).format("DD/MM/YYYY") <= date;
    }
    if (EndDate) {
      filterPass = filterPass && moment(EndDate).format("DD/MM/YYYY") >= date;
    }
    return filterPass;
  });

  return (
    <section>
      <div className="title">
        <div className="flex gap-4 items-center justify-center">
          <Link to="/user/winestock" className="commonBtn ">
            अंग्रेजी
          </Link>
          <Link className="commonBtn" to="/user/rmlstock">
            देशी
          </Link>
          <button className="commonBtn " onClick={handlePrint}>
            PRINT
          </button>
        </div>
      </div>
      <div className="divider my-2"></div>

      <div ref={front}>
        <div>
          <h2 className="font-bold text-[1.5rem] text-center"> बीयर</h2>
          <div className="flex gap-4 justify-center items-center my-4">
            <h2 className="font-bold text-[1.5rem]">From</h2>
            <div className="flex gap-2 items-center">
              <DatePicker
                selected={StartDate}
                onChange={(date) => {
                  setStartDate(date);
                  console.log(moment(date).format());
                }}
                dateFormat="dd/MM/yyyy"
                placeholderText={"dd/mm/yyyy"}
                className="inputBox  date"
              />
            </div>

            <h2 className="font-bold text-[1.5rem]">To</h2>
            <div className="flex gap-2 items-center">
              <DatePicker
                selected={EndDate}
                name="year"
                onChange={(data) => setEndDate(data)}
                dateFormat="dd/MM/yyyy"
                className="inputBox date"
                placeholderText={"dd/mm/yyyy"}
              />
            </div>
          </div>

          <div className="overflow-x-auto flex justify-center items-center">
            <table className="table  m-2">
              <thead>
                <tr>
                  <th> क्र. सं.</th>
                  <th>ब्राण्ड/ Brand Name </th>
                  <th colSpan={3}>स्टॉक / stock</th>
                  <th colSpan={3}>Avg. Rate / रेट</th>
                  <th colSpan={3}>Total / योग</th>
                  <th>कुल योग/ Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>

                  <td>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">650ml</span>
                      </label>
                    </div>
                  </td>

                  <td>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">550ml</span>
                      </label>
                    </div>
                  </td>

                  <td>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">330ml</span>
                      </label>
                    </div>
                  </td>

                  <td>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">650ml</span>
                      </label>
                    </div>
                  </td>

                  <td>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">550ml</span>
                      </label>
                    </div>
                  </td>

                  <td>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">330ml</span>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">650ml</span>
                      </label>
                    </div>
                  </td>

                  <td>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">550ml</span>
                      </label>
                    </div>
                  </td>

                  <td>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">330ml</span>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="form-control"></div>
                  </td>
                </tr>

                {beerStock.length &&
                  filteredData?.map((item, index) => {
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
            <div className="flex justify-center gap-4 overflow-x-auto my-4 ">
              <div>
                <table className="table m-2">
                  <thead>
                    <tr>
                      <th> क्र. सं.</th>
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
                            if (
                              size.quantityInML !== 650 &&
                              size.quantityInML !== 550 &&
                              size.quantityInML !== 330
                            ) {
                              return (
                                <tr>
                                  <td>{index + 1}</td>
                                  <td>{brand.brandName}</td>
                                  <td>{size.quantityInML}</td>
                                  <td> {size.currentStock}</td>
                                  <td>
                                    {" "}
                                    {Number(
                                      size.averageRate.$numberDecimal
                                    ).toFixed(2)}
                                  </td>
                                  <td>
                                    {" "}
                                    {size.currentStock *
                                      Number(
                                        size.averageRate.$numberDecimal
                                      ).toFixed(2)}
                                  </td>
                                </tr>
                              );
                            }
                          })}
                        </>
                      );
                    })}
                    <tr>
                      <td colSpan="5">Total</td>
                      <td>
                        {filteredData
                          .reduce(
                            (total, currentItem) =>
                              (total =
                                total +
                                currentItem.sizes.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      currentItem.currentStock *
                                        Number(
                                          currentItem.averageRate.$numberDecimal
                                        )),
                                  0
                                )),
                            0
                          )
                          .toFixed(2)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeerStock;
