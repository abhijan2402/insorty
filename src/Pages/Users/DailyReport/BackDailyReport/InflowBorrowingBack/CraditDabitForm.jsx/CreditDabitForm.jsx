import React from "react";

const CreditDabitForm = ({ index, craditDabitState, onChangeCarditDabit }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="form-control">
          <input
            type="text"
            className="semiSmallInput"
            name="partyName"
            value={craditDabitState.partyName}
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
            value={craditDabitState.ammount}
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
            value={craditDabitState.note}
            onChange={(e) => onChangeCarditDabit(e, index)}
          />
        </div>
      </td>
    </tr>
  );
};

export default CreditDabitForm;
