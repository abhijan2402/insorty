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
      <th></th>
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
              value={item.type}
              required
              onChange={(e) => onChangeCommison(e, index)}
              name="type"
              className="smallinput wd-30"
            >
              <option value="COMMISSION">COMMISSION</option>
              <option value="FUT">FUT</option>
              <option value="KHARCHA">KHARCHA</option>
              <option value="PENALTY">PENALTY</option>
              <option value="BEGAAR">BEGAAR</option>
              <option value="MONTHLY">MONTHLY</option>
              <option value="OTHERS">OTHERS</option>
              <option value="SALARY">SALARY</option>
            </select>
          </div>
        </td>

        <td>
          <input
            type="number"
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
