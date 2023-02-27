import React from "react";

const InvestmentForm = ({
  mainInvestment,
  index,
  name,
  mainInvestmentState,
  handelOnChangeMainInvestment,
}) => {
  return (
    <>
      <tr>
        <th>{index + 2}</th>
        <td>
          <input
            className="dailyReportInput"
            type="text"
            name="brandName"
            value={name}
            onChange={(e) => handelOnChangeMainInvestment(e, index)}
          />
        </td>
        <td>
          <input
            type="date"
            name="date"
            className="semiSmallInput"
            dateFormat="dd/MM/yyyy"
            placeholderText={"dd/mm/yyyy"}
            defaultValue={mainInvestment.date}
            onChange={(event) =>
              handelOnChangeMainInvestment(index, "date", event.target.value)
            }
          />
          {/* <DatePicker
            name="date"
            className="semiSmallInput"
            selected={""}
            defaultValue={mainInvestment.date}
            onChange={(event) =>
              handelOnChangeMainInvestment(index, "date", event.target.value)
            }
            dateFormat="dd/MM/yyyy"
            placeholderText={"dd/mm/yyyy"}
          /> */}
        </td>
        <td>
          <input
            type="number"
            name="price"
            className="semiSmallInput"
            defaultValue={mainInvestment.price}
            onChange={(event) =>
              handelOnChangeMainInvestment(index, "price", event.target.value)
            }
          />
        </td>
      </tr>
    </>
  );
};

export default InvestmentForm;
