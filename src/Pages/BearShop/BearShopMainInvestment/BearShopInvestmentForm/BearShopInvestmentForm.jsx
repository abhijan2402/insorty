import React from "react";

const InvestmentForm = ({
  mainInvestment,
  index,
  mainInvestmentState,
  handelOnChangeMainInvestment,
}) => {
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <input
            className="dailyReportInput"
            type="text"
            name="brandName"
            value={mainInvestment.brandName}
            onChange={(e) => handelOnChangeMainInvestment(e, index)}
          />
        </td>
        <td>
          <input
            type="date"
            name="theDate"
            className="semiSmallInput"
            value={mainInvestmentState.theDate}
            onChange={(e) => handelOnChangeMainInvestment(e, index)}
          />
        </td>
        <td>
          <input
            type="number"
            name="price"
            className="semiSmallInput"
            value={mainInvestment.price}
            onChange={(e) => handelOnChangeMainInvestment(e, index)}
          />
        </td>
      </tr>
    </>
  );
};

export default InvestmentForm;
