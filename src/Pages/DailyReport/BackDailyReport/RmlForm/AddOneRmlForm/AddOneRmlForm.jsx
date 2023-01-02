import React from "react";

const AddOneRmlForm = ({ index }) => {
  const serialNo = index + 5;
  return (
    <>
      <tr>
        <th>{serialNo}</th>
        <td>
          <div className="form-control">
            <input type="text" className="semiSmallInput" name="brandName" />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="averageRate"
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="openingStock"
            />
          </div>
        </td>
        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="incomingPurchase"
            />
          </div>
        </td>
        {/* ======== आमद (उधारी) ========= */}

        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="incomePurchase"
            />
          </div>
        </td>
        {/* ======== भेजान ========= */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="inflowCredit"
            />
          </div>
        </td>
        {/* ======== योग/शेष ========= */}
        <td>
          <div className="form-control">
            <input type="number" className="semiSmallInput" name="sending" />
          </div>
        </td>
        {/* ======== अन्तिम स्टॉक ========= */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="sumRemainder"
            />
          </div>
        </td>
        {/* ============= बिक्री ================ */}
        <td>
          <div className="form-control">
            <input type="number" className="semiSmallInput" name="sales" />
          </div>
        </td>
        {/* ============= रेट ================ */}
        <td>
          <div className="form-control">
            <input type="number" className="semiSmallInput" name="rate" />
          </div>
        </td>
        {/* ============= योग ================ */}
        <td>
          <div className="form-control">
            <input type="number" className="semiSmallInput" name="cost" />
          </div>
        </td>
        {/* ============= कुल योग ================ */}
      </tr>
    </>
  );
};

export default AddOneRmlForm;
