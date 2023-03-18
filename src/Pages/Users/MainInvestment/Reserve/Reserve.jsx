import React from "react";
import DatePicker from "react-datepicker";

const Reserve = ({ reserve, index, reserveAmountOnChange, name }) => {
  const { details, price } = reserve;

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <input
            type="text"
            name="details"
            defaultValue={details}
            onChange={(e) => {
              reserveAmountOnChange(name, e.target.value, index, "details");
            }}
            className="semiSmallInput wd-30"
          />
        </td>
        <td>
          {/* <input
            type="date"
            name="date"
            defaultValue={date}
            className="semiSmallInput"
          /> */}
          <DatePicker
            // selected={new Date(reserve?.month)}
            selected={new Date(reserve.month)}
            name="month"
            onChange={(month) => {
              reserveAmountOnChange(name, new Date(month), index, "month");
              console.log(month);
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText={"dd/mm/yyyy"}
            className="inputBox"
          />
        </td>
        <td>
          <input
            type="number"
            name="price"
            defaultValue={price}
            onChange={(e) => {
              reserveAmountOnChange(name, e.target.value, index, "price");
            }}
            className="dailyReportInput wd-8"
          />
        </td>
      </tr>
    </>
  );
};

export default Reserve;
