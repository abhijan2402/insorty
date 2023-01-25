import React from "react";

const CreditDabitForm = ({ item, index, onChangeCarditDabit }) => {
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
          <select
            type="enum"
            className="select select-bordered"
            name="partyType"
            value={item.partyType}
            onChange={(e) => onChangeCarditDabit(e, index)}
          >
            <option selected value="PARTNER">
              PARTNER
            </option>
            <option value="PARTY">PARTY</option>
          </select>
        </div>
      </td>

      <td>
        <div className="form-control">
          <input
            type="number"
            className="semiSmallInput"
            name="amount"
            value={item.amount}
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
