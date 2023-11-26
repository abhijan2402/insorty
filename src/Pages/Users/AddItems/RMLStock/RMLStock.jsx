import { useQuery } from "@tanstack/react-query";
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../../Components/Loader/Loader";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import moment from "moment/moment";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import jwtDecode from "jwt-decode";

const RmlStock = () => {
  const token = localStorage.getItem("token");
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState();
  const [rmlStock, setRmlStock] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const front = useRef(null);
  let count = 0;

  const ShoptToken = jwtDecode(localStorage.getItem("token"));
  const ShopType = ShoptToken.shopType;
  const role = ShoptToken.role;

  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

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
        setRmlStock((data) => [...data, ...response.data.data]);
        setPage((page) => page + 1);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setHasMore(false);
        }
      });

    console.log(hasMore, "hasmore");
  };

  useEffect(() => {
    fetchData();
    // console.log(page,hasMore,'page ')
  }, [rmlStock]);

  const rmlStockData = rmlStock?.filter((item) => item.type === "DESHIRML");
  const filteredData = rmlStockData.filter((item) => {
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

  if (!rmlStockData.length) {
    return <h1>No Data Found</h1>;
  }

  if (!filteredData.length) {
    return <h1>No Data Found</h1>;
  }

  return (
    <section>
      <div className="title">
      <button className="commonBtn " onClick={handlePrint}>
            प्रिंट
          </button>
        <div className="flex gap-4 justify-center items-center">
          {ShopType === "BAR" && (
            <>
              <Link to="/user/bearshop/winestock" className="commonBtn ">
                अंग्रेजी
              </Link>
              <Link to="/user/bearshop/beerstock" className="commonBtn ">
                बीयर
              </Link>
            </>
          )}

          {ShopType === "SHOP" && (
            <>
              <Link to="/user/winestock" className="commonBtn ">
                अंग्रेजी
              </Link>
              <Link to="/user/beerstock" className="commonBtn ">
                बीयर
              </Link>
            </>
          )}

         
        </div>
        <div className="divider my-2"></div>
      </div>

      <div ref={front} className="flex justify-center items-center">
        <div>
          <h2 className="font-bold md:text-[1.5rem] text-center">
            {" "}
            देशी / RML
          </h2>
          <div className="flex gap-4 items-center my-4">
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
                className="inputBox date"
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
          <div>
            <div className=" gap-4  my-4 ">
              <div>
                <InfiniteScroll
                  dataLength={rmlStock.length}
                  next={fetchData}
                  hasMore={hasMore}
                  scrollableTarget="scrollableDiv"
                  loader={<h4>Loading...</h4>}
                >
                  <table className="m-2 removeCommonWSpace">
                    <thead>
                      <tr>
                        <th className="text-xs"> क्र. सं.</th>
                        <th className="text-xs">ब्राण्ड </th>
                        <th className="text-xs">साईज </th>
                        <th className="text-xs">स्टॉक </th>
                        <th className="text-xs"> रेट</th>
                        <th className="text-xs"> योग</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData &&
                        filteredData.filter((item)=>item.isActive===true).sort((a, b) => a.brandName.localeCompare(b.brandName)).map((brand, index) => {
                          return (
                            <>
                              {brand.sizes.filter((size)=>size.currentStock>0 || Number(size.averageRate.$numberDecimal)>0).map((size) => 
                                 {
                                  count++;
                                  return (
                                    <tr id="scrollableDiv">
                                      <td>{count}</td>
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
                                        
                                        {Number(size.currentStock *
                                          Number(
                                            size.averageRate.$numberDecimal
                                          )).toFixed(2)}
                                      </td>
                                    </tr>
                                  );
                                
                              })}
                            </>
                          );
                        })}
                      <tr>
                        <td colSpan="5">Total</td>
                        <td>
                          {filteredData &&
                            filteredData
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
                                              currentItem.averageRate
                                                .$numberDecimal
                                            )),
                                      0
                                    )),
                                0
                              ).toFixed(2)
                             }
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </InfiniteScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RmlStock;
