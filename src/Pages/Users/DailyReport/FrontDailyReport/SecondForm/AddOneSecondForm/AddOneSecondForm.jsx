import React from "react";

const AddOneSecondForm = ({
  index,
  addOneSecondFormState,
  handelSeconFormOnChange,
}) => {
  const SerialNo = index + 1;

  return (
    <>
      <tr>
        <th>{SerialNo}</th>
        <td>
          <div className="form-control">
            <select
              className="select"
              name="selectStockVarient"
              value={addOneSecondFormState.selectStockVarient}
              onChange={(e) => handelSeconFormOnChange(e, index)}
            >
              <option>90</option>
              <option>60</option>
            </select>
          </div>
        </td>
        {/* ======== MRP Input ========= */}
        <td>
          <div className="form-control">
            <input
              type="number"
              value={addOneSecondFormState.averageRate}
              onChange={(e) => handelSeconFormOnChange(e, index)}
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
              value={addOneSecondFormState.startingStock}
              onChange={(e) => handelSeconFormOnChange(e, index)}
            />
          </div>
        </td>
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="incomingPurchase"
              value={addOneSecondFormState.incomingPurchase}
              onChange={(e) => handelSeconFormOnChange(e, index)}
            />
          </div>
        </td>
        {/* ======== प्रारम्भिक स्टॉक ========= */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="buyRate"
              value={addOneSecondFormState.buyRate}
              onChange={(e) => handelSeconFormOnChange(e, index)}
            />
          </div>
        </td>

        {/* ======== आमद (खरीद)-दु. ========= */}

        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="incomePurchase"
              value={addOneSecondFormState.incomePurchase}
              onChange={(e) => handelSeconFormOnChange(e, index)}
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
              value={addOneSecondFormState.purchaseRate}
              onChange={(e) => handelSeconFormOnChange(e, index)}
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
              value={addOneSecondFormState.inflowCredit}
              onChange={(e) => handelSeconFormOnChange(e, index)}
            />
          </div>
        </td>
        {/* ======== भेजान ========= */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="sending"
              value={addOneSecondFormState.sending}
              onChange={(e) => handelSeconFormOnChange(e, index)}
            />
          </div>
        </td>
        {/* ======== योग/शेष ========= */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="sumRemainder"
              value={addOneSecondFormState.sumRemainder}
              onChange={(e) => handelSeconFormOnChange(e, index)}
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
              value={addOneSecondFormState.closingStock}
              onChange={(e) => handelSeconFormOnChange(e, index)}
            />
          </div>
        </td>
        {/* ============= बिक्री ================ */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="sales"
              value={addOneSecondFormState.sales}
              onChange={(e) => handelSeconFormOnChange(e, index)}
            />
          </div>
        </td>
        {/* ============= रेट ================ */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="mainRate"
              value={addOneSecondFormState.mainRate}
              onChange={(e) => handelSeconFormOnChange(e, index)}
            />
          </div>
        </td>
        {/* ============= योग ================ */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="total"
              value={addOneSecondFormState.total}
              onChange={(e) => handelSeconFormOnChange(e, index)}
            />
          </div>
        </td>
        {/* ============= कुल योग ================ */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="grandTotal"
              value={addOneSecondFormState.grandTotal}
              onChange={(e) => handelSeconFormOnChange(e, index)}
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default AddOneSecondForm;
