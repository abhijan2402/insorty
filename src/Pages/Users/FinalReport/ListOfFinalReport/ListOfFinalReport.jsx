import React from "react";

const ListOfFinalReport = ({ monthlyFinalReport }) => {
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
    totalOld,
    extraBorrowed,
    extraDeposits,
    cashOnHand,
    reservedCash,
    remainingCash,
  } = monthlyFinalReport;

  return (
    <section>
      <div className="justify-center items-center flex">
        <table className="table w-2/3">
          <thead>
            <tr>
              <th> क्र. सं. </th>
              <th>विवरण</th>
              <th>रकम</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="commonText">1</th>
              <td className="commonText">माल ओपनिंग स्टॉक/openingStock</td>
              <td className="price">{openingStock ? openingStock : "0"}</td>
            </tr>
            <tr>
              <th className="commonText">2</th>
              <td className="commonText">माल खरीद/bought</td>
              <td className="price">{bought ? bought : "0"}</td>
            </tr>
            <tr>
              <th className="commonText">3</th>
              <td className="commonText">माल शेष/अन्तिम स्टॉक/closingStock</td>
              <td className="price">{closingStock ? closingStock : "0"}</td>
            </tr>
            <tr>
              <th className="commonText">4</th>
              <td className="commonText">
                माल काम में लिया/openingStock+bought-closingStock
              </td>
              <td className="price">
                {openingStock + bought - closingStock
                  ? openingStock + bought - closingStock
                  : "0"}
              </td>
            </tr>
            <tr>
              <th className="commonText">5</th>
              <td className="commonText">
                माल से नकद प्राप्ति (पर्चा रकम)/used
              </td>
              <td className="price">{used ? used : "0"}</td>
            </tr>
            <tr>
              <th className="commonText">6</th>
              <td className="commonText">
                कमीशन/खर्चा/फूट/मंथली/पेनल्टी आदि/totalExpenses
              </td>
              <td className="price">{totalExpenses ? totalExpenses : "0"}</td>
            </tr>
            <tr>
              <th className="commonText">7</th>
              <td className="commonText">बचत/savings</td>
              <td className="price">{savings ? savings : "0"}</td>
            </tr>
            <tr>
              <th className="commonText">8</th>
              <td className="commonText">उधारी/नामे बढ़त/borrowedIncrease</td>
              <td className="price">
                {borrowedIncrease ? borrowedIncrease : "0"}
              </td>
            </tr>
            <tr>
              <th className="commonText">9</th>
              <td className="commonText">शुद्ध बचत/realSavings</td>
              <td className="price">{realSavings ? realSavings : "0"}</td>
            </tr>
            <tr>
              <th className="commonText">10</th>
              <td className="commonText">
                उधारी/नामे कमी (रिकवरी) चालू वर्ष/refundRecoveryOld
              </td>
              <td className="price">
                {refundRecoveryOld ? refundRecoveryOld : "0"}
              </td>
            </tr>
            <tr>
              <th className="commonText">11</th>
              <td className="commonText">रिफंड/रिकवरी पुरानी/totalOld</td>
              <td className="price">{totalOld ? totalOld : "0"}</td>
            </tr>
            <tr>
              <th className="commonText">12</th>
              <td className="commonText">
                कुल बचत/realSavings+refundRecoveryOld+totalOld
              </td>
              <td className="price">
                {realSavings + refundRecoveryOld + totalOld
                  ? realSavings + refundRecoveryOld + totalOld
                  : "0"}
              </td>
            </tr>
            <tr>
              <th className="commonText">13</th>
              <td className="commonText">अधिक नामे/extraBorrowed</td>
              <td className="price">{extraBorrowed ? extraBorrowed : "0"}</td>
            </tr>
            <tr>
              <th className="commonText">14</th>
              <td className="commonText">अधिक जमा/extraDeposits</td>
              <td className="price">{extraDeposits ? extraDeposits : "0"}</td>
            </tr>
            <tr>
              <th className="commonText">15</th>
              <td className="commonText">कैश ऑन हैण्ड/cashOnHand</td>
              <td className="price">{cashOnHand ? cashOnHand : "0"}</td>
            </tr>
            <tr>
              <th className="commonText">16</th>
              <td className="commonText">रिजर्व रकम/reservedCash</td>
              <td className="price">{reservedCash ? reservedCash : "0"}</td>
            </tr>
            <tr>
              <th className="commonText">17</th>
              <td className="commonText">शेष रकम/remainingCash</td>
              <td className="price">{remainingCash ? remainingCash : "0"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ListOfFinalReport;
