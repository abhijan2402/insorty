/* eslint-disable no-sequences */
import React from "react";
import EnglishBearDataDisplay from "../EnglishBearDataDisplay/EnglishBearDataDisplay";
import EnglishBearForm from "../EnglishBearForm/EnglishBearForm";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../../Components/Loader/Loader";
import useLiquors from "../../../../Hooks/useLiquors";

const EnglishBear = () => {
  const token = localStorage.getItem("token");
  const { liquors,brandsLoaded} = useLiquors()
  const total = 0
  const { data: englishBearData, isLoading } = useQuery({
    queryKey: ["englishBearData"],
    queryFn: async () => {
      const res = await fetch(
        "https://insorty-api.onrender.com/shop/getAllLiquors",
        {
          method: "POST",
          headers: { "Content-Type": "application/json", cookie_token: token },
        }
      );
      const data = await res.json();
      return data.data;
    },
  });

  // const totalAmountData = englishBearData?.map((item) => {
  //   return Number(item.currentStock) * Number(item.rate) || 0;
  // });
  
  // const totalAmount = Number(
  //   totalAmountData?.reduce((a, b) => Number(a) + Number(b), 0)
  // );

  // console.log(totalAmount);

  if (isLoading || brandsLoaded) {
    return <Loader></Loader>;
  }

  console.log(liquors.filter((brand) => {
    if (brand.type === "WINE") {
      return brand
    }
  }).reduce((total, current) => (
    total = total + current.sizes.reduce((tot, curr) => (tot = tot + (curr.currentStock * Number(curr.averageRate.$numberDecimal))), 0)
  ), 0))


  return (
    <section>
      <div className="title my-2">
        <h2 className="font-bold md:text-[1.5rem] text-center">अंग्रेजी शराब</h2>
        <div className="flex gap-8 items-center my-4">
          {/* <h2 className="font-bold text-[1.5rem]">सेल्समेन का नाम</h2>
          <h2 className="font-bold text-[1.5rem]">12/12/2022</h2> */}
        </div>
        <div className="divider my-2"></div>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>S.No</th>
              <th>ब्राण्ड/ Brand Name </th>
              <th>स्टॉक / stock</th>
              <th>Avg. Rate/ रेट</th>
              <th>Total/ योग</th>
              <th>Amount / रकम</th>
            </tr>
          </thead>
          <tbody>
            {(liquors &&
              liquors.filter((brand) => {
                if (brand.type === "WINE") {
                  return brand
                }
              }).map((englishBear, index) => {
                return (
                  <EnglishBearForm
                    key={index}
                    englishBear={englishBear}
                    liquors={liquors.filter((brand)=>{
                      if(brand.type==="WINE"){
                        return brand
                      }
                    })}
                    index={index}
                    total ={total}
                  ></EnglishBearForm>
                );
              })) || (
              <p>
                <span className="text-red-500">No Data Found</span>
              </p>
            )}

            <tr>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <td className="commonText">Total</td>
              <td className="price">{liquors.filter((brand) => {
                if (brand.type === "WINE") {
                  return brand
                }
              }).reduce((total,current)=>(
                total = total + current.sizes.reduce((tot, curr) => (tot = tot + (curr.currentStock * Number(curr.averageRate.$numberDecimal))),0)
              ),0)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default EnglishBear;
