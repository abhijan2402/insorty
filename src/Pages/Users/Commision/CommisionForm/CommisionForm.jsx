import React from "react";

const CommisionForm = ({ index, commison }) => {
  const { entries } = commison;

  // filter the type of commision form entries arry and return the type of commision form

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
        const { description, amount, comment } = item;

        console.log(item);

        return (
          <tr key={index}>
            <th>{index}</th>
            <td>
              <div className="form-control">
                {description}
              </div>
            </td>

            <td>
              <div className="form-control">
                {amount?.$numberDecimal}
              </div>
            </td>

            <td>
              <div className="form-control">
                {comment}
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default CommisionForm;
