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
    <section>
      <div className="title">
        <div className="flex justify-center gap-4 items-center">
          {role === "shop" && ShopType === "BAR" && (
            <>
              <Link to="/user/bearshop/beerstock" className="commonBtn ">
                बीयर
              </Link>

              <Link className="commonBtn" to="/user/bearshop/rmlstock">
                देशी
              </Link>
            </>
          )}

          {role === "shop" && ShopType === "SHOP" && (
            <>
              <Link to="/user/beerstock" className="commonBtn ">
                बीयर
              </Link>

              <Link className="commonBtn" to="/user/rmlstock">
                देशी
              </Link>
            </>
          )}

          <button className="commonBtn " onClick={handlePrint}>
            प्रिंट
          </button>
        </div>
        <div className="divider my-2"></div>
      </div>

      <div ref={front}>
        <h2 className="font-bold md:text-[1.5rem] text-center"> अंग्रेजी</h2>
        <div className="flex gap-4 items-center justify-center my-4">
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
              className="inputBox date "
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

        <div
          className={`${
            role === "shop" && ShopType === "BAR"
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
            <table className="removeCommonWSpace m-2">
              <thead>
                <tr>
                  <th> क्र. सं.</th>
                  <th>ब्राण्ड</th>
                  <th colSpan={3}>स्टॉक </th>
                  <th colSpan={3}> रेट</th>
                  <th colSpan={3}> योग</th>
                  <th>कुल योग</th>
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
              </tbody>
            </table>
          </InfiniteScroll>
        </div>

        <div>
          <div
            className={`${
              role === "shop" && ShopType === "BAR"
                ? "hidden"
                : " gap-4 overflow-x-auto my-4 "
            }`}
          >
            <div className="flex justify-center item-center">
              <table className="removeCommonWSpace  m-2">
                <thead>
                  <tr>
                    <th> क्र. सं.</th>
                    <th>ब्राण्ड</th>
                    <th>साईज </th>
                    <th>स्टॉक</th>
                    <th> रेट</th>
                    <th> योग</th>
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
                            count++;
                            return (
                              <tr>
                                <td>{count}</td>
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
                    <td colSpan="5">कुल योग</td>
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

        <div>
          <div
            className={`${
              role === "shop" && ShopType === "SHOP"
                ? "hidden"
                : " gap-4 overflow-x-auto my-4 "
            }`}
          >
            <div className="flex justify-center item-center">
              <table className="removeCommonWSpace  m-2">
                <thead>
                  <tr>
                    <th> क्र. सं.</th>
                    <th>ब्राण्ड</th>
                    <th>साईज </th>
                    <th>स्टॉक</th>
                    <th> रेट</th>
                    <th> योग</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((brand, index) => {
                    return (
                      <>
                        {brand.sizes.map((size) => {
                          if (size.quantityInML === 30) {
                            count++;
                            return (
                              <tr>
                                <td>{count}</td>
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
                    <td colSpan="5">कुल योग</td>
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
    </section>
  );
};

export default WineStock;
