/* eslint-disable array-callback-return */
import React, { useState, useRef } from "react";
import OutBillList from "../OutBillList/OutBillList";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";
import useLiquors from "../../../../Hooks/useLiquors";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import jwtDecode from "jwt-decode";

const OutBill = () => {
  const token = localStorage.getItem("token");
  const { brandsLoaded } = useLiquors();
  const [StartDate, setStartDate] = useState();
  const [EndDate, setEndDate] = useState();
  const front = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => front.current,
  });

  const ShopToken = jwtDecode(localStorage.getItem("token"));
  const ShopType = ShopToken.shopType;
  const role = ShopToken.role;

  const { data: OutBill, isLoading } = useQuery({
    queryKey: ["OutBill"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getOutBill",
        {
          method: "GET",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  if (isLoading || brandsLoaded) {
    return <Loader></Loader>;
  }

  const filteredData = OutBill.filter((item) => {
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

  const totalAmountData =ShopToken==="SHOP" ?  filteredData?.map((item) => {
    return Number(item.total.$numberDecimal);
  }) : filteredData?.filter((brand)=>{
    if (brand.liquor.type==="WINE"){
      if(brand.liquor.quantityInML===30){
        return brand
      }
    }
    else if(brand.liquor.type==="BEER"){
      return brand
    }
    else return
  } ).map((item) => {
    return Number(item.total.$numberDecimal);
  });
  const totalAmount = totalAmountData?.reduce((a, b) => a + b, 0);

  return (
    <section>
      <button className="commonBtn " onClick={handlePrint}>
            प्रिंट
          </button>
      <div className="title flex justify-center flex-col items-center py-2">
        <div className="flex gap-4">
          
          {role === "shop" && ShopType === "BAR" && (
            <Link className="commonBtn" to="/user/bearshop/selfbill">
              दुकान बिल
            </Link>
          ) }{role === "shop" && ShopType === "SHOP" && (
            <Link className="commonBtn" to="/user/selfbill">
              दुकान बिल
            </Link>
          )}
        </div>

        <div ref={front}>
          <div>
            <h2 className="font-bold md:text-[1.5rem] text-center">
              बाहर का बिल
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
            <div className="divider my-2"></div>
          </div>

          <div>
            <div className="overflow-x-auto">
              <table className={ShopType==="SHOP" ? 'removeCommonWSpace' : 'displayHidden'}>
                <thead>
                  <tr>
                    <td> क्र. सं.</td>
                    <th>दिनाक</th>
                    <th>ब्राण्ड</th>
                    <th>साईज </th>
                    <th>संख्या</th>
                    <th>रेट</th>
                    <th>रकम</th>
                  </tr>
                </thead>
                <tbody>
                  {(filteredData &&
                    filteredData?.map((outBill, index) => {
                      return (
                        <OutBillList
                          key={index}
                          outBill={outBill}
                          index={index}
                        ></OutBillList>
                      );
                    })) || (
                    <>
                      <p>
                        <span className="text-red-500">No Data Found</span>
                      </p>
                    </>
                  )}

                  <tr>
                    <th></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="commonText">Total</td>
                    <td className="price">{Number(totalAmount).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
              <table className={ShopType==="BAR" ? 'removeCommonWSpace' : 'displayHidden'}>
                <thead>
                  <tr>
                    <td> क्र. सं.</td>
                    <th>दिनाक</th>
                    <th>ब्राण्ड</th>
                    <th>साईज </th>
                    <th>संख्या</th>
                    <th>रेट</th>
                    <th>रकम</th>
                  </tr>
                </thead>
                <tbody>
                  {(filteredData &&
                    filteredData?.filter((brand)=>{
                      if (brand.liquor.type==="WINE"){
                        if(brand.liquor.quantityInML===30){
                          return brand
                        }
                      }
                      else if(brand.liquor.type==="BEER"){
                        return brand
                      }
                      else return
                    } ).map((outBill, index) => {
                      return (
                        <OutBillList
                          key={index}
                          outBill={outBill}
                          index={index}
                        ></OutBillList>
                      );
                    })) || (
                    <>
                      <p>
                        <span className="text-red-500">No Data Found</span>
                      </p>
                    </>
                  )}

                  <tr>
                    <th></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="commonText">Total</td>
                    <td className="price">{Number(totalAmount).toFixed(2)}</td>
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

export default OutBill;
