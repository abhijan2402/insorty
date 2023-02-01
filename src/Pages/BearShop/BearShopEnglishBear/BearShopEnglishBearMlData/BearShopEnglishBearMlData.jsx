import React from "react";

const EnglishBearMlData = () => {
  return (
    <>
      <tr>
        <th>1</th>
        <td>
          <h1 className="font-bold">90 ml</h1>
        </td>
        <td>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              value={300}
              readOnly
              className="commonSmallForm"
            />
            <input
              type="number"
              value={300}
              readOnly
              className="commonSmallForm"
            />
            <input
              type="number"
              value={300}
              readOnly
              className="commonSmallForm"
            />
          </div>
        </td>
        <td>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              value={300}
              readOnly
              className="commonSmallForm"
            />
            <input
              type="number"
              value={300}
              readOnly
              className="commonSmallForm"
            />
            <input
              type="number"
              value={300}
              readOnly
              className="commonSmallForm"
            />
          </div>
        </td>
        <td>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              value={300}
              readOnly
              className="commonSmallForm"
            />
            <input
              type="number"
              value={300}
              readOnly
              className="commonSmallForm"
            />
            <input
              type="number"
              value={300}
              readOnly
              className="commonSmallForm"
            />
          </div>
        </td>
        <td>
          <input type="text" value={300} readOnly className="semiSmallInput" />
        </td>
      </tr>
    </>
  );
};

export default EnglishBearMlData;
