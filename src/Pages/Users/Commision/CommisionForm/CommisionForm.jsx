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
      {commisionForm.map((item, index) => {
        const { description, amount, comment } = item;

        console.log(item);

        return (
          <tr key={index}>
            <th>1</th>
            <td>
              <div className="form-control">
                <input
                  type="text"
                  value={description}
                  className="dailyReportInput"
                  disabled
                />
              </div>
            </td>

            <td>
              <div className="form-control">
                <input
                  type="number"
                  value={amount?.$numberDecimal}
                  className="commonSmallForm"
                  disabled
                />
              </div>
            </td>

            <td>
              <div className="form-control">
                <input
                  type="text"
                  value={comment}
                  className="dailyReportInput"
                  disabled
                />
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default CommisionForm;
