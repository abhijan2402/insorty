/* eslint-disable no-sequences */
import React from "react";
import EnglishBearDataDisplay from "../EnglishBearDataDisplay/EnglishBearDataDisplay";
import { useQuery } from "@tanstack/react-query";
// import EnglishBearForm from "../EnglishBearForm/EnglishBearForm";
// import EnglishBearMlData from "../EnglishBearMlData/EnglishBearMlData";
import Loader from "../../../../Components/Loader/Loader";

const EnglishBear = () => {
  const token = localStorage.getItem("token");
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

  const totalAmountData = englishBearData?.map((item) => {
    return Number(item.currentStock) * Number(item.rate) || 0;
  });

  const totalAmount = Number(
    totalAmountData?.reduce((a, b) => Number(a) + Number(b), 0)
  );

  console.log(totalAmount);

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <section>
      <div className="title my-2">
        <h2 className="font-bold text-[1.5rem]">अंग्रेजी शराब</h2>
        <div className="flex gap-8 items-center my-4">
          <h2 className="font-bold text-[1.5rem]">सेल्समेन का नाम</h2>
          <h2 className="font-bold text-[1.5rem]">12/12/2022</h2>
        </div>
        <div className="divider my-2"></div>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>S.No</th>
              <th>ब्राण्ड/ Brand Name </th>
              <th>साईज / ml</th>
              <th>Number / संख्या</th>
              <th>Rate / रेट</th>
              <th>Amount / रकम</th>
            </tr>
          </thead>
          <tbody>
            {englishBearData.map((englishBear, index) => {
              return (
                <EnglishBearDataDisplay
                  key={index}
                  englishBear={englishBear}
                  index={index}
                ></EnglishBearDataDisplay>
              );
            })}

            {/* <EnglishBearForm></EnglishBearForm> */}
            <tr>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <td className="commonText">Total</td>
              <td className="price">{totalAmount}</td>
            </tr>

            {/* <EnglishBearMlData></EnglishBearMlData> */}
            {/* <tr>
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <td className="commonText">Total</td>
              <td className="price">162,000</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default EnglishBear;
