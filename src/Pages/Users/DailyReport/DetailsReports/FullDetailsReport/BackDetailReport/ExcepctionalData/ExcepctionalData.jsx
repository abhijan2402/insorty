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
          <td> क्र. सं.</td>
          <th>Brand Name/ ब्राण्ड</th>
          <th>ml</th>
          <th>Average Rate</th>
          <th>प्रारम्भिक स्टॉक</th>
          <th>आमद (खरीद)-दु.</th>
          <th>खरीद रेट - दु</th>
          <th>आमद (खरीद)-बा.</th>
          <th>खरीद रेट - बा.</th>
          <th>आमद (उधारी)</th>
          <th>भेजान</th>
          <th>योग/शेष</th>
          <th>अन्तिम स्टॉक </th>
          <th>बिक्री</th>
          <th>रेट</th>
          <th>रकम</th>
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
