import React from "react";

const AddOneSecondForm = ({ index }) => {
  const SerialNo = index + 6;

  return (
    <>
      <tr>
        <th>{SerialNo}</th>
        <td>
          <div className="form-control">
            <h1 className="font-bold">90ml</h1>
          </div>
        </td>
        {/* ======== MRP Input ========= */}
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
              name="startingStock"
            />
          </div>
        </td>
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="incomingPurchase"
            />
          </div>
        </td>
        {/* ======== प्रारम्भिक स्टॉक ========= */}
        <td>
          <div className="form-control">
            <input type="number" className="semiSmallInput" name="buyRate" />
          </div>
        </td>

        {/* ======== आमद (खरीद)-दु. ========= */}

        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="incomePurchase"
            />
          </div>
        </td>
        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="purchaseRate"
            />
          </div>
        </td>
        {/* ======== आमद (उधारी) ========= */}

        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="inflowCredit"
            />
          </div>
        </td>
        {/* ======== भेजान ========= */}
        <td>
          <div className="form-control">
            <input type="number" className="semiSmallInput" name="sending" />
          </div>
        </td>
        {/* ======== योग/शेष ========= */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="sumRemainder"
            />
          </div>
        </td>
        {/* ======== अन्तिम स्टॉक ========= */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="closingStock"
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
            <input type="number" className="semiSmallInput" name="mainRate" />
          </div>
        </td>
        {/* ============= योग ================ */}
        <td>
          <div className="form-control">
            <input type="number" className="semiSmallInput" name="total" />
          </div>
        </td>
        {/* ============= कुल योग ================ */}
        <td>
          <div className="form-control">
            <input type="number" className="semiSmallInput" name="grandTotal" />
          </div>
        </td>
      </tr>
    </>
  );
};

export default AddOneSecondForm;
