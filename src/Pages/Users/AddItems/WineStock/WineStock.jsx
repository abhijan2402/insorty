import { useQuery} from "@tanstack/react-query";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../../Components/Loader/Loader";
import WineStockTopData from "./WineStockTop/WIneSotckTop";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import moment from "moment/moment";
import { useReactToPrint } from "react-to-print";

const WineStock = () => {
  const token = localStorage.getItem("token");
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState();
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });
  

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

  if (isLoading) return <Loader></Loader>;

  if (!wineStock.length) {
    return <div>No data found</div>;
  }

  const wineStockData = wineStock?.filter((item) => item.type === "WINE");

  const filteredData = wineStockData.filter((item) => {
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

  if (isLoading) return <Loader></Loader>;

  let three = [];
  filteredData.map((item) => {
    item.sizes.map((brand) => {
      if (
        brand.quantityInML === 750 ||
        brand.quantityInML === 375 ||
        brand.quantityInML === 180
      ) {
        console.log(brand);
        three.push(brand);
      }
    });
  });

  console.log(three);

  console.log(
    filteredData.reduce(
      (total, currentItem) =>
        (total =
          total +
          currentItem.sizes.reduce(
            (total, currentItem) =>
              (total =
                total +
                currentItem.currentStock *
                  Number(currentItem.averageRate.$numberDecimal)),
            0
          )),
      0
    )
  );
  return (
    <section>
      <div className="title">
        <div className="flex gap-4 items-center">

          <Link to="/user/beerstock" className="commonBtn ">
            बीयर
          </Link>

          <Link className="commonBtn" to="/user/rmlstock">
            देशी
          </Link>
          <button
            className="my-4 btn btn-error text-white font-bold"
            onClick={handlePrint}
          >
            PRINT
          </button>
        </div>
        <div className="divider my-2"></div>
      </div>

      <div ref={front}>
      <div>

          <h2 className="font-bold md:text-[1.5rem] text-center"> अंग्रेजी</h2>
      <div className="flex gap-4 items-center my-4">
        <h2 className="font-bold text-[1.5rem]">From</h2>
        <div className="flex gap-2 items-center">
          <FaCalendarAlt></FaCalendarAlt>
          <DatePicker
            selected={StartDate}
            onChange={(date) => {
              setStartDate(date);
              console.log(moment(date).format());
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText={"dd/mm/yyyy"}
            className="inputBox"
          />
        </div>

        <h2 className="font-bold text-[1.5rem]">To</h2>
        <div className="flex gap-2 items-center">
          <FaCalendarAlt></FaCalendarAlt>
          <DatePicker
            selected={EndDate}
            name="year"
            onChange={(data) => setEndDate(data)}
            dateFormat="dd/MM/yyyy"
            className="inputBox"
            placeholderText={"dd/mm/yyyy"}
          />
        </div>
      </div>

      <div className="overflow-x-auto ">
        <table className="table w-full m-2">
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
              <td>
                <div className="form-control"></div>
              </td>
              <td>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">750ml</span>
                    </label>
                  </div>
            </td>
            <td>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">375ml</span>
                    </label>
                  </div>
                  </td>
                  <td>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">180ml</span>
                    </label>
                  </div>
                
              </td>
                  
                  <td>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">750ml</span>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">375ml</span>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">180ml</span>
                      </label>
                    </div>

                  </td>
                 
                  <td>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">750ml</span>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">375ml</span>
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">180ml</span>
                      </label>
                    </div>

                  </td>
              <td>
                <div className="form-control"></div>
              </td>
            </tr>

            {filteredData?.map((item, index) => {
              return (
                <>
                  <WineStockTopData
                    key={item._id}
                    index={index}
                    item={item}
                  ></WineStockTopData>
                </>
              );
            })}
          </tbody>
        </table>
      </div>

      <div>
        <div className=" gap-4 overflow-x-auto my-4 ">
          <div>
            <table className="table w-full m-2">
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
                          size.quantityInML !== 750 &&
                          size.quantityInML !== 375 &&
                          size.quantityInML !== 180
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
                    {filteredData.reduce(
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
                    )}
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

export default WineStock;
