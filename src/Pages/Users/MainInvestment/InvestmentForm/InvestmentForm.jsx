import React from "react";
import DatePicker from "react-datepicker";
import swal from "sweetalert";

const InvestmentForm = ({
  mainInvestment,
  index,
  name,
  handelOnChangeMainInvestment,
  handleRemoveFields
}) => {
  return (
    <>
      <tr>
        <th>{index + 3}</th>
        <th
          className="cross"
          onClick={() => {
            swal({
              title: "Are you sure?",
              text: `Once deleted, you will not be able to recover row ${index + 1
                }`,
              icon: "warning",
              buttons: true,
              dangerMode: true,
            }).then((willDelete) => {
              if (willDelete) {
                handleRemoveFields('fees',index);
                swal(`row ${index + 1}  has been deleted!`, {
                  icon: "success",
                });
              } else {
                swal("Your row is safe!");
              }
            });
          }}
        >
          X
        </th>
        <td>
          <input
            type="text"
            name="price"
            className="dailyReportInput wd-30"
            defaultValue={mainInvestment.type}
            onChange={(event) =>
              handelOnChangeMainInvestment(
                name,
                event.target.value,
                index,
                "type"
              )
            }
          />
        </td>
        <td>
          {/* <input
            type="date"
            name="date"
            className="dailyReportInput"
            defaultValue={new Date(mainInvestment.date) }
            onChange={event => handelOnChangeMainInvestment(name, new Date(event.target.value), index, 'date')}
          // onChange={event => handelOnChangeMainInvestment(name, moment(event.target.value, 'dd-mm-yyyy').toDate(), index, 'date')}
          /> */}
          <DatePicker
            // selected the date from the database and convert it to date format for display in the input box
            selected={new Date(mainInvestment.date)}
            name="date"
            onChange={(date) => {
              handelOnChangeMainInvestment(name, new Date(date), index, "date");
              console.log(date);
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
            className="dailyReportInput wd-8"
            defaultValue={mainInvestment.price}
            onChange={(event) =>
              handelOnChangeMainInvestment(
                name,
                event.target.value,
                index,
                "price"
              )
            }
          />
        </td>
      </tr>
    </>
  );
};

export default InvestmentForm;
