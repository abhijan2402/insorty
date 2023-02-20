import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../../Components/Loader/Loader";
import WineStockTopData from "./WineStockTop/WIneSotckTop";

const WineStock = () => {
  const token = localStorage.getItem("token");
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
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


  const wineStockData = wineStock?.filter((item) => item.type === "WINE");

  const filteredData = selectedDate
    ? wineStockData.filter((item) => {
        const itemDate = new Date(item.createdAt);
        const selected = selectedDate ? new Date(selectedDate) : null;
        if (selected) {
          return itemDate.toDateString() === selected.toDateString();
        } else {
          return true;
        }
      })
    : wineStockData;

  if (isLoading) return <Loader></Loader>;


  const total = 0;

  let three=[]

  filteredData.map((item)=>{
    item.sizes.map((brand)=>{
      if (brand.quantityInML === 750 || brand.quantityInML === 330 || brand.quantityInML === 180){
        console.log(brand)
        three.push(brand)
      }
    })
  })

  console.log(three)
  
  console.log(filteredData.reduce(
    (total, currentItem) => (total = total + currentItem.sizes.reduce(

      (total, currentItem) => (total = total + (currentItem.currentStock * Number(currentItem.averageRate.$numberDecimal))),
      0
    )),
    0
  ))

  // console.log(three.reduce(
  //   (total, currentItem) => (total = total + (currentItem.currentStock * Number(currentItem.averageRate.$numberDecimal))),
  //   0
  // ))

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
            dateFormat="yyyy-MM-dd"
            value={selectedDate}
            onChange={handleDateChange}
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
                  <th>S.no</th>
                  <th>ब्राण्ड/ Brand Name </th>
                  <th>size </th>
                  <th>स्टॉक / stock</th>
                  <th>Avg. Rate / रेट</th>
                  <th>Total / योग</th>
                </tr>
              </thead>
              <tbody>
              {filteredData.map((brand,index)=>{
                return(
                <>
               { brand.sizes.map((size)=>{
                 if (size.quantityInML !== 750 && size.quantityInML !== 330 && size.quantityInML !== 180){

                return(
                  <tr>         
                  <td>{index+1}</td>
                  <td>{brand.brandName}</td>
                  <td>{size.quantityInML}</td>
                  <td> {size.currentStock}</td>
                  <td> {size.averageRate.$numberDecimal}</td>
                    <td> {size.currentStock * Number(size.averageRate.$numberDecimal)}</td>
                  </tr>

) }
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

export default WineStock;