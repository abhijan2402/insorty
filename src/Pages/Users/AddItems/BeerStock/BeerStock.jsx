import { useQuery } from "@tanstack/react-query";
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../../Components/Loader/Loader";
import BeerStockTopData from "./BeerStockTopData/BeerStockTopData";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import moment from "moment/moment";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import jwtDecode from "jwt-decode";

const BeerStock = () => {
  const token = localStorage.getItem("token");
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState();
  const [beerStock, setBeerStock] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const front = useRef(null);
  let count = 0;

  const ShoptToken = jwtDecode(localStorage.getItem("token"));
  const ShopType = ShoptToken.shopType;
  const role = ShopType.role;

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
        setBeerStock((data) => [...data, ...response.data.data]);
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
  }, [beerStock]);

  const total = 0;

 

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
      <button className="commonBtn " onClick={handlePrint}>
            प्रिंट
          </button>
        <div className="flex gap-4 items-center justify-center">
          {ShopType === "BAR" && (
            <>
              <Link to="/user/bearshop/winestock" className="commonBtn ">
                अंग्रेजी
              </Link>
              <Link className="commonBtn" to="/user/bearshop/rmlstock">
              देशी / RML
              </Link>
            </>
          )}

          {ShopType === "SHOP" && (
            <>
              <Link to="/user/winestock" className="commonBtn ">
                अंग्रेजी
              </Link>
              <Link className="commonBtn" to="/user/rmlstock">
              देशी / RML
              </Link>
            </>
          )}

          
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
            <InfiniteScroll
              dataLength={beerStock.length}
              next={fetchData}
              hasMore={hasMore}
              scrollableTarget="scrollableDiv"
              loader={<h4>Loading...</h4>}
            >
              <table className="table removeCommonWSpace  m-2">
                <thead>
                  <tr>
                    <th className="text-xs" rowSpan={2}> क्र. सं.</th>
                    <th className="text-xs" rowSpan={2}>ब्राण्ड </th>
                    <th className="text-xs" colSpan={3}>स्टॉक </th>
                    <th className="text-xs" colSpan={3}> रेट</th>
                    <th className="text-xs" colSpan={3}>योग </th>
                    <th className="text-xs" rowSpan={2}>कुल योग</th>
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
                   
                  </tr>


                  {beerStock.length!==undefined &&
                    filteredData?.filter((item)=>item.isActive===true).filter((item)=>item.isActive===true).filter(brand =>
                      brand.sizes.some(size => size.currentStock>0 || Number(size.averageRate.$numberDecimal)>0)
                    ).sort((a, b) => a.brandName.localeCompare(b.brandName))?.map((item, index) => {
                      return (
                        <>
                          <tr id="scrollableDiv">
                            <BeerStockTopData
                              key={item._id}
                              index={index}
                              item={item}
                              total={total}
                            ></BeerStockTopData>
                          </tr>
                        </>
                      );
                    })}
                    <tr>
                    <td colSpan="11">Total</td>
                    <td>
                      {filteredData.filter((item)=>item.isActive===true).reduce(
                        (total, currentItem) =>
                          (total =
                            total +
                            currentItem.sizes.filter((brand)=>brand.quantityInML===650 || brand.quantityInML===500 || brand.quantityInML===330).reduce(
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
                      ).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </InfiniteScroll>
          </div>

          <div>
            <div className="flex justify-center gap-4 overflow-x-auto my-4 ">
              <div>
                <table className="removeCommonWSpace m-2">
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
                    {filteredData.map((brand, index) => {
                      return (
                        <>
                          {brand.sizes.filter((size)=>size.currentStock>0 || Number(size.averageRate.$numberDecimal)>0).map((size) => {
                            if (
                              size.quantityInML !== 650 &&
                              size.quantityInML !== 500 &&
                              size.quantityInML !== 330
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
                          .reduce(
                            (total, currentItem) =>
                              (total =
                                total +
                                currentItem.sizes.reduce(
                                  (total, currentItem) =>
                                    (total =
                                      total +
                                      currentItem.currentStock *
                                      Number(isNaN(currentItem?.averageRate?.$numberDecimal) ? 0 : currentItem?.averageRate?.$numberDecimal)),
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
