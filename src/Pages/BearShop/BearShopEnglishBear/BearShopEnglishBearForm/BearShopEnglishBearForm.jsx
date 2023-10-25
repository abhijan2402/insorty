import React from "react";

const EnglishBearForm = () => {
  return (
    <>
      <tr>
        <th>1</th>
        <td>
          <input type="text" value={"Coca Cola"} className="semiSmallInput" />
        </td>
        <td>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              value={500}
              readOnly
              className="commonSmallForm"
            />
            <input
              type="number"
              value={1000}
              readOnly
              className="commonSmallForm"
            />
            <input
              type="number"
              value={1500}
              readOnly
              className="commonSmallForm"
            />
          </div>
        </td>
        <td>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              value={100}
              readOnly
              className="commonSmallForm"
            />
            <input
              type="number"
              value={100}
              readOnly
              className="commonSmallForm"
            />
            <input
              type="number"
              value={100}
              readOnly
              className="commonSmallForm"
            />
          </div>
        </td>
        <td>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              value={100}
              readOnly
              className="commonSmallForm"
            />
            <input
              type="number"
              value={100}
              readOnly
              className="commonSmallForm"
            />
            <input
              type="number"
              value={100}
              readOnly
              className="commonSmallForm"
            />
          </div>
        </td>
        <td>
          <input type="text"
            value={100}
          className="semiSmallInput" />
        </td>
      </tr>
    </>
  );
};

export default EnglishBearForm;
