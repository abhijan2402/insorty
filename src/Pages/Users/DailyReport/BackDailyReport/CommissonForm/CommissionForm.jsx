import React from "react";
import swal from "sweetalert";

const CommissionForm = ({
  index,
  onChangeCommison,
  item,
  handleRemoveFieldsCommission,
}) => {
  return (
    <>
      <tr>
        <th className="h-12">{index + 1}</th>
        <th
          className="cross"
          onClick={() => {
            swal({
              title: "Are you sure?",
              text: `Once deleted, you will not be able to recover row ${
                index + 1
              }`,
              icon: "warning",
              buttons: true,
              dangerMode: true,
            }).then((willDelete) => {
              if (willDelete) {
                handleRemoveFieldsCommission(index);
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
          <div className="form-control">
            <select
              onBlur={() =>
                item.type.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "start",
                })
              }
              value={item.type}
              required
              onChange={(e) => onChangeCommison(e, index)}
              name="type"
              className="smallinput wd-9"
            >
              <option value="COMMISSION">कमीशन</option>
              <option value="FUT">फूट</option>
              <option value="KHARCHA">खर्चा</option>
              <option value="PENALTY">पेनल्टी</option>
              <option value="BEGAAR">बेगार</option>
              <option value="MONTHLY">मंथली</option>
              <option value="OTHERS">अन्य</option>
              <option value="SALARY">वेतन</option>
            </select>
          </div>
        </td>

        <td>
          <input
            type="number"
            onKeyDown={(e) => {
              // Prevent the default behavior of arrow keys
              if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                e.preventDefault();
              }
            }}
            required
            className="smallinput wd-6"
            name="amount"
            value={item.amount}
            min={0}
            onChange={(e) => onChangeCommison(e, index)}
            style={{
              width: "100%",
            }}
          />
        </td>
        <td>
          <input
            type="text"
            required
            className="smallinput wd-30"
            name="desc"
            value={item.desc}
            onChange={(e) => onChangeCommison(e, index)}
            style={{
              width: "100%",
            }}
          />
        </td>
      </tr>
    </>
  );
};

export default CommissionForm;
