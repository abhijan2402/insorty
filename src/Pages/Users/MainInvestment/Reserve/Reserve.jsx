import React from "react";
import DatePicker from "react-datepicker";
import swal from "sweetalert";

const Reserve = ({ reserve, index, reserveAmountOnChange, name, handleRemoveFields }) => {
  const { details, price } = reserve;

  return (
    <>
      <tr>
        <th>{index + 1}</th>
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
                handleRemoveFields('reserve',index);
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
            className="inputBox date"
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
            className="dailyReportInput wd-9"
          />
        </td>
      </tr>
    </>
  );
};

export default Reserve;
