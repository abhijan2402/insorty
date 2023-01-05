import React from "react";

const CreditDabitForm = ({
  item,
  index,
  onChangeCarditDabit,
}) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="form-control">
          <input
            type="text"
            className="semiSmallInput"
            name="partyName"
            value={item.partyName}
            onChange={(e) => onChangeCarditDabit(e, index)}
          />
        </div>
      </td>

      <td>
        <div className="form-control">
          <input
            type="number"
            className="semiSmallInput"
            name="ammount"
            value={item.ammount}
            onChange={(e) => onChangeCarditDabit(e, index)}
          />
        </div>
      </td>

      <td>
        <div className="form-control">
          <input
            type="text"
            className="semiSmallInput"
            name="note"
            value={item.note}
            onChange={(e) => onChangeCarditDabit(e, index)}
          />
        </div>
      </td>
    </tr>
  );
};

export default CreditDabitForm;
