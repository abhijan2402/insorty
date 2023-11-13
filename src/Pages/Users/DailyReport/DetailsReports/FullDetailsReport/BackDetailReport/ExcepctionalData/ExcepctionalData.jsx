import React from "react";
import ExceptionalDataDetails from "./ExceptionalDataDetails";

const ExcepctionalData = ({
  BackPageReportExceptionalSize: filteredExceptionalData,
}) => {


  const sales = filteredExceptionalData.map((item) => {
    console.log(item, "item+++++");
    const { sales } = item;
    return sales;
  });

  console.log(sales, "468++");

  return (
    <table className="table w-full">
      <thead>
        <tr>
          <td className="tg-0lax " colSpan={50}>
            <span style={{ fontWeight: "bold" }}>English</span>
          </td>
        </tr>

        <tr>
          <td className="text-xs"> क्र. सं.</td>
          <th className="text-xs"> ब्राण्ड</th>
          <th className="text-xs">ml</th>
          <th className="text-xs">औसत दर</th>
          <th className="text-xs">प्रारम्भिक स्टॉक</th>
          <th className="text-xs">आमद (खरीद)-दु.</th>
          <th className="text-xs">खरीद रेट - दु</th>
          <th className="text-xs">आमद (खरीद)-बा.</th>
          <th className="text-xs">खरीद रेट - बा.</th>
          <th className="text-xs">आमद (उधारी)</th>
          <th className="text-xs">भेजान</th>
          <th className="text-xs">योग/शेष</th>
          <th className="text-xs">अन्तिम स्टॉक </th>
          <th className="text-xs">बिक्री</th>
          <th className="text-xs">रेट</th>
          <th className="text-xs">रकम</th>
        </tr>
      </thead>
      <tbody>
        {filteredExceptionalData &&
          filteredExceptionalData.map((exceptionalData, index) => {
            return (
              <ExceptionalDataDetails
                key={index}
                index={index}
                exceptionalData={exceptionalData}
              ></ExceptionalDataDetails>
            );
          })}

    
      </tbody>
    </table>
  );
};

export default ExcepctionalData;
