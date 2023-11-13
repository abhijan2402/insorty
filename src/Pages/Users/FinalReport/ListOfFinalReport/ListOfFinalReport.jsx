import React from "react";

const  ListOfFinalReport = ({ monthlyFinalReport }) => {
  const {
    openingStock,
    bought,
    closingStock,
    used,
    totalExpenses,
    savings,
    borrowedIncrease,
    realSavings,
    refundRecoveryOld,
    borrowedDecrease,
    totalOld,
    totalSavings,
    extraBorrowed,
    extraDeposits,
    cashOnHand,
    reservedCash,
    remainingCash,
    cashReceived
  } = monthlyFinalReport;

  return (
    <section>
      <div className="justify-center items-center flex">
        <table className="removeCommonWSpace">
          <thead>
            <tr>
              <th className="text-xs"> क्र. सं. </th>
              <th className="text-xs">विवरण</th>
              <th className="text-xs">रकम</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="commonText">1</th>
              <td className="commonText">माल ओपनिंग स्टॉक</td>
              <td className="price">
                {openingStock ? Number(openingStock).toFixed(2) : "0"}
              </td>
            </tr>
            <tr>
              <th className="commonText">2</th>
              <td className="commonText">माल खरीद</td>
              <td className="price">
                {bought ? Number(bought).toFixed(2) : "0"}
              </td>
            </tr>
            <tr>
              <th className="commonText">3</th>
              <td className="commonText">माल शेष/अन्तिम स्टॉक</td>
              <td className="price">
                {closingStock ? Number(closingStock).toFixed(2) : "0"}
              </td>
            </tr>
            <tr>
              <th className="commonText">4</th>
              <td className="commonText">
                माल काम में लिया
              </td>
              <td className="price">
                {openingStock + bought - closingStock
                  ? Number(openingStock + bought - closingStock).toFixed(2)
                  : "0"}
              </td>
            </tr>
            <tr>
              <th className="commonText">5</th>
              <td className="commonText">
                माल से नकद प्राप्ति (पर्चा रकम)
              </td>
              <td className="price">{cashReceived ? Number(cashReceived).toFixed(2) : "0"}</td>
            </tr>
            <tr>
              <th className="commonText">6</th>
              <td className="commonText">
                कमीशन/खर्चा/फूट/मंथली/पेनल्टी आदि
              </td>
              <td className="price">
                {totalExpenses ? Number(totalExpenses).toFixed(2) : "0"}
              </td>
            </tr>
            <tr>
              <th className="commonText">7</th>
              <td className="commonText">बचत</td>
              <td className="price">
                {savings ? Number(savings).toFixed(2) : "0"}
              </td>
            </tr>
            <tr>
              <th className="commonText">8</th>
              <td className="commonText">उधारी/नामे बढ़त</td>
              <td className="price">
                {borrowedIncrease ? Number(Number(borrowedIncrease)<0 ? 0 : borrowedIncrease).toFixed(2) : "0"}
              </td>
            </tr>
            <tr>
              <th className="commonText">9</th>
              <td className="commonText">शुद्ध बचत</td>
              <td className="price">
                {realSavings ? Number(realSavings).toFixed(2) : "0"}
              </td>
            </tr>
            <tr>
              <th className="commonText">10</th>
              <td className="commonText">
                उधारी/नामे कमी (रिकवरी) चालू वर्ष
              </td>
              <td className="price">
                {borrowedDecrease ? Number(Number(borrowedDecrease) < 0 ? 0 : borrowedDecrease).toFixed(2) : "0"}
              </td>
            </tr>
            <tr>
              <th className="commonText">11</th>
              <td className="commonText">रिफंड/रिकवरी पुरानी</td>
              <td className="price">
                {refundRecoveryOld ? Number(refundRecoveryOld).toFixed(2) : "0"}
              </td>
            </tr>
            <tr>
              <th className="commonText">12</th>
              <td className="commonText">
                कुल बचत
              </td>
              <td className="price">
                {totalSavings
                  ? Number(totalSavings).toFixed(
                      2
                    )
                  : "0"}
              </td>
            </tr>
            <tr>
              <th className="commonText">13</th>
              <td className="commonText">अधिक नामे</td>
              <td className="price">
                {extraBorrowed ? Number(Number(extraBorrowed)<0 ? 0 : extraBorrowed).toFixed(2) : "0"}
              </td>
            </tr>
            <tr>
              <th className="commonText">14</th>
              <td className="commonText">अधिक जमा</td>
              <td className="price">
                {extraDeposits ? Number(Number(extraDeposits)<0 ? 0 : extraDeposits).toFixed(2) : "0"}
              </td>
            </tr>
            <tr>
              <th className="commonText">15</th>
              <td className="commonText">कैश ऑन हैण्ड</td>
              <td className="price">
                {cashOnHand ? Number(cashOnHand).toFixed(2) : "0"}
              </td>
            </tr>
            <tr>
              <th className="commonText">16</th>
              <td className="commonText">रिजर्व रकम</td>
              <td className="price">
                {reservedCash ? Number(reservedCash).toFixed(2) : "0"}
              </td>
            </tr>
            <tr>
              <th className="commonText">17</th>
              <td className="commonText">शेष रकम</td>
              <td className="price">
                {remainingCash ? Number(remainingCash).toFixed(2) : "0"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ListOfFinalReport;
