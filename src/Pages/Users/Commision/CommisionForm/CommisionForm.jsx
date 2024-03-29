import moment from "moment";
import React from "react";

const CommisionForm = ({ index, commison }) => {
  const { entries } = commison;

  const filterCommisionForm = (type) => {
    let filtered = entries.filter((item) => {
      return item.type === "COMMISSION";
    });
    return filtered;
  };
  const commisionForm = filterCommisionForm("COMMISSION");

  return (
    <>
      {commisionForm.map((item) => {
        const { amount, comment } = item;
        const dateData = commison?.date;

        const changeDateFormet = moment(dateData).format('DD/MM/YYYY');

        return (
          <tr key={index}>
            <th>{index+1}</th>
            <td>
              <div className="form-control">{changeDateFormet}</div>
            </td>

            <td>
              <div className="form-control">{amount?.$numberDecimal}</div>
            </td>

            <td>
              <div className="form-control">{comment}</div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default CommisionForm;
