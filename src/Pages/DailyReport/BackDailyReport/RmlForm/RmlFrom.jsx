import React from "react";

const RmlFrom = ({ index, onChangeRmlHandler, addRmlState }) => {
  const serialNo = index + 1;
  return (
    <>
      <tr>
        <th>{serialNo}</th>
        <td>
          <div className="form-control">
            <input
              type="text"
              className="semiSmallInput"
              name="brandName"
              value={addRmlState.brandName}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="averageRate"
              value={addRmlState.averageRate}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="openingStock"
              value={addRmlState.openingStock}
              onChange={(e) => onChangeRmlHandler(e, index)}
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
              value={addRmlState.incomingPurchase}
              onChange={(e) => onChangeRmlHandler(e, index)}
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
              value={addRmlState.incomePurchase}
              onChange={(e) => onChangeRmlHandler(e, index)}
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
              value={addRmlState.inflowCredit}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>
        {/* ======== योग/शेष ========= */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="sending"
              value={addRmlState.sending}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>
        {/* ======== अन्तिम स्टॉक ========= */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="sumRemainder"
              value={addRmlState.sumRemainder}
              onChange={(e) => onChangeRmlHandler(e, index)}
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
              value={addRmlState.sales}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>
        {/* ============= रेट ================ */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="rate"
              value={addRmlState.rate}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>
        {/* ============= योग ================ */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="cost"
              value={addRmlState.cost}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>
        {/* ============= कुल योग ================ */}
      </tr>
    </>
  );
};

export default RmlFrom;
