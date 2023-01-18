import React from "react";

const AddOneSecondForm = ({
  index,
  item,
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
              value={item.selectStockVarient}
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
              value={item.averageRate}
              onChange={(e) => handelSeconFormOnChange(e, index)}
              className="semiSmallInput"
              name="averageRate"
              disabled
            />
          </div>
        </td>
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="startingStock"
              value={item.startingStock}
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
              value={item.incomingPurchase}
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
              value={item.buyRate}
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
              value={item.incomePurchase}
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
              value={item.purchaseRate}
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
              value={item.inflowCredit}
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
              value={item.sending}
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
              value={item.sumRemainder}
              onChange={(e) => handelSeconFormOnChange(e, index)}
              disabled
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
              value={item.closingStock}
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
              value={item.sales}
              onChange={(e) => handelSeconFormOnChange(e, index)}
              disabled
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
              value={item.mainRate}
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
              value={item.total}
              onChange={(e) => handelSeconFormOnChange(e, index)}
              disabled
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
              value={item.grandTotal}
              onChange={(e) => handelSeconFormOnChange(e, index)}
              disabled
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default AddOneSecondForm;
