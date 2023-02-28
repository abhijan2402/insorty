import moment from "moment/moment";
import React from "react";

const InvestmentForm = ({
  mainInvestment,
  index,
  name,
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

            onChange={event => handelOnChangeMainInvestment(name, new Date(event.target.value), index, 'date')}
            // onChange={event => handelOnChangeMainInvestment(name, moment(event.target.value, 'dd-mm-yyyy').toDate(), index, 'date')}
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

            onChange={event => handelOnChangeMainInvestment(name, event.target.value, index, 'price')}
          />
        </td>
      </tr>
    </>
  );
};

export default InvestmentForm;
