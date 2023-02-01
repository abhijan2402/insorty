import React from "react";

const Reserve = () => {
  return (
    <>
      <tr>
        <th>1</th>
        <td>
          <input
            type="text"
            name="brandName"
            value="ब्राण्ड/ Brand Name"
            readOnly
            className="semiSmallInput"
          />
        </td>
        <td>
          <input
            type="date"
            name="date"
            value="2021-08-01"
            readOnly
            className="semiSmallInput"
          />
        </td>
        <td>
          <input
            type="number"
            name="price"
            value={162000}
            readOnly
            className="semiSmallInput"
          />
        </td>
      </tr>
    </>
  );
};

export default Reserve;
