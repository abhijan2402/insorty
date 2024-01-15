import { useQuery } from "@tanstack/react-query";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../../Components/Loader/Loader";
import WineStockTopData from "./WineStockTop/WIneSotckTop";
import DatePicker from "react-datepicker";
import moment from "moment/moment";
import { useReactToPrint } from "react-to-print";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import jwtDecode from "jwt-decode";

const WineStock = () => {
  const token = localStorage.getItem("token");
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState();
  const [wineStock, setWineStock] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const ShoptToken = jwtDecode(localStorage.getItem("token"));
  const ShopType = ShoptToken.shopType;
  const role = ShoptToken.role;

  let count = 0;

  const fetchData = async () => {
    await axios({
      url: `${process.env.REACT_APP_API_URL}/shop/getAllParentLiquors?page=${page}&pagesize=30`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },
    })
      .then((response) => {
        setWineStock((data) => [...data, ...response.data.data]);
        setPage((page) => page + 1);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setHasMore(false);
        }
      });
  };

  useEffect(() => {
    fetchData();
    // console.log(page,hasMore,'page ')
  }, [wineStock]);

  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  // if (!wineStock.length) {
  //   return <div>No data found</div>;
  // }

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

  // if (isLoading) return <Loader></Loader>;

  let three = [];
  filteredData.map((item) => {
    item.sizes.map((brand) => {
      if (
        brand.quantityInML === 750 ||
        brand.quantityInML === 375 ||
        brand.quantityInML === 180
      ) {
        three.push(brand);
      }
    });
  });

  return (
    <>
      <div className="py-0 sticky top-0 bg-white z-5000">
        <button className="commonBtn " onClick={handlePrint}>
          प्रिंट
        </button>
        <div className="flex justify-center gap-4 items-center">
          {ShopType === "BAR" && (
            <>
              <Link to="/user/bearshop/beerstock" className="commonBtn ">
                बीयर
              </Link>

              <Link className="commonBtn" to="/user/bearshop/rmlstock">
                देशी / RML
              </Link>
            </>
          )}

          {ShopType === "SHOP" && (
            <>
              <Link to="/user/beerstock" className="commonBtn ">
                बीयर
              </Link>

              <Link className="commonBtn" to="/user/rmlstock">
                देशी / RML
              </Link>
            </>
          )}
        </div>
        <h2 className="font-bold md:text-[1.5rem] text-center"> अंग्रेजी</h2>
        <div className="flex gap-4 items-center justify-center my-4">
          <h2 className="font-bold text-[1.5rem]">From</h2>
          <div className="flex gap-2 items-center z-1000">
            <DatePicker
              autoComplete="off"
              selected={StartDate}
              onChange={(date) => {
                setStartDate(date);
                console.log(moment(date).format());
              }}
              dateFormat="dd/MM/yyyy"
              placeholderText={"dd/mm/yyyy"}
              className="inputBox date "
            />
          </div>

          <h2 className="font-bold text-[1.5rem]">To</h2>
          <div className="flex gap-2 items-center z-1000">
            <DatePicker
              autoComplete="off"
              selected={EndDate}
              name="year"
              onChange={(data) => setEndDate(data)}
              dateFormat="dd/MM/yyyy"
              className="inputBox date"
              placeholderText={"dd/mm/yyyy"}
            />
          </div>
        </div>
        <div className="divider my-2"></div>
      </div>
      <section>
        <div ref={front}>
          <div
            className={`${
              ShopType === "BAR"
                ? "hidden"
                : " overflow-x-auto flex justify-center item-center"
            }`}
          >
            <InfiniteScroll
              dataLength={wineStock.length}
              next={fetchData}
              hasMore={hasMore}
              scrollableTarget="scrollableDiv"
              loader={<h4>Loading...</h4>}
            >
              {/* " removeCommonWSpace m-2" */}
              <table className=" removeCommonWSpace m-2">
                <thead>
                  <tr>
                    <th className="text-xs" rowSpan={2}>
                      {" "}
                      क्र. सं.
                    </th>
                    <th className="text-xs" rowSpan={2}>
                      ब्राण्ड
                    </th>
                    <th className="text-xs" colSpan={3}>
                      स्टॉक{" "}
                    </th>
                    <th className="text-xs" colSpan={3}>
                      {" "}
                      रेट
                    </th>
                    <th className="text-xs" colSpan={3}>
                      {" "}
                      योग
                    </th>
                    <th className="text-xs" rowSpan={2}>
                      कुल योग
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>

                    <td>750ml</td>
                    <td>375ml</td>
                    <td>180ml</td>

                    <td>750ml</td>
                    <td>375ml</td>
                    <td>180ml</td>

                    <td>750ml</td>
                    <td>375ml</td>
                    <td>180ml</td>
                  </tr>

                  {filteredData
                    ?.filter((item) => item.isActive === true)
                    .filter((brand) =>
                      brand.sizes.some(
                        (size) =>
                          size.currentStock > 0 ||
                          Number(size.averageRate.$numberDecimal) > 0
                      )
                    )
                    .map((item, index) => {
                      return (
                        <>
                          <tr id="scrollableDiv">
                            <WineStockTopData
                              key={item._id}
                              index={index}
                              item={item}
                            ></WineStockTopData>
                          </tr>
                        </>
                      );
                    })}
                  <tr>
                    <td colSpan="11">Total</td>
                    <td>
                      {filteredData
                        .filter((item) => item.isActive === true)
                        .reduce(
                          (total, currentItem) =>
                            (total =
                              total +
                              currentItem.sizes
                                .filter(
                                  (brand) =>
                                    brand.quantityInML === 750 ||
                                    brand.quantityInML === 375 ||
                                    brand.quantityInML === 180
                                )
                                .reduce(
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
            </InfiniteScroll>
          </div>

          <div>
            <div
              className={`${
                ShopType === "BAR" ? "hidden" : " gap-4 overflow-x-auto my-4 "
              }`}
            >
              <div className="flex justify-center item-center">
                <table className="removeCommonWSpace m-2">
                  <thead>
                    <tr>
                      <th className="text-xs"> क्र. सं.</th>
                      <th className="text-xs">ब्राण्ड</th>
                      <th className="text-xs">साईज </th>
                      <th className="text-xs">स्टॉक</th>
                      <th className="text-xs"> रेट</th>
                      <th className="text-xs"> योग</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData
                      .filter((item) => item.isActive === true)
                      .sort((a, b) => a.brandName.localeCompare(b.brandName))
                      .map((brand, index) => {
                        return (
                          <>
                            {brand.sizes
                              .filter(
                                (size) =>
                                  size.currentStock > 0 ||
                                  Number(size.averageRate.$numberDecimal) > 0
                              )
                              .map((size) => {
                                if (
                                  size.quantityInML !== 750 &&
                                  size.quantityInML !== 375 &&
                                  size.quantityInML !== 180
                                ) {
                                  count++;
                                  return (
                                    <tr>
                                      <th>{count}</th>
                                      <td>{brand.brandName}</td>
                                      <td>{size.quantityInML} ML</td>
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
                          .filter((item) => item.isActive === true)
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

          <div>
            <div
              className={`${
                ShopType === "SHOP" ? "hidden" : " gap-4 overflow-x-auto my-4 "
              }`}
            >
              <div className="flex justify-center item-center">
                <table className="removeCommonWSpace  m-2">
                  <thead>
                    <tr>
                      <th className="text-xs"> क्र. सं.</th>
                      <th className="text-xs">ब्राण्ड</th>
                      <th className="text-xs">साईज </th>
                      <th className="text-xs">स्टॉक</th>
                      <th className="text-xs"> रेट</th>
                      <th className="text-xs"> योग</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((brand, index) => {
                      return (
                        <>
                          {brand.sizes
                            .filter(
                              (size) =>
                                size.currentStock > 0 ||
                                Number(size.averageRate.$numberDecimal) > 0
                            )
                            .map((size) => {
                              if (size.quantityInML) {
                                count++;
                                return (
                                  <tr>
                                    <th>{count}</th>
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
                          .filter((item) => item.isActive === true)
                          .reduce(
                            (total, currentItem) =>
                              (total =
                                total +
                                currentItem.sizes
                                  .filter(
                                    (size) =>
                                      size.currentStock > 0 ||
                                      Number(size.averageRate.$numberDecimal) >
                                        0
                                  )
                                  .reduce(
                                    (total, currentItem) =>
                                      (total =
                                        total +
                                        currentItem.currentStock *
                                          Number(
                                            currentItem.averageRate
                                              .$numberDecimal
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
      </section>
    </>
  );
};

export default WineStock;
