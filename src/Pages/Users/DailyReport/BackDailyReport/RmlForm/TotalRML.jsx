import React from "react";
import useRmlAdd from "../../../../../Hooks/useRmlAdd";

const TotalRML = () => {

  const {
    addRmlState,
   total,
   onChangeRmlHandler
  } = useRmlAdd();

  return (
    <>
      <tr>
        <th></th>
        <td>
          <div className="form-control">Total</div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="averageRate"
              disabled
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              // type="number"
              className="semiSmallInput"
              name="openingStock"
              value={addRmlState.reduce(
                (total, currentItem) =>
                  (total = total + Number(currentItem.openingStock)),
                0
              )}
              onChange={(e) => onChangeRmlHandler(e)}
              disabled
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
              value={addRmlState.reduce(
                (total, currentItem) =>
                  (total = total + Number(currentItem.openingStock)),
                0
              )}
              disabled
            />
          </div>
        </td>
        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="buyRate"
              disabled
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
              value={addRmlState.reduce(
                (total, currentItem) =>
                  (total = total + Number(currentItem.incomePurchase)),
                0
              )}
              disabled
            />
          </div>
        </td>
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="purchaserRate"
              disabled
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
              value={addRmlState.reduce(
                (total, currentItem) =>
                  (total = total + Number(currentItem.inflowCredit)),
                0
              )}
              disabled
            />
          </div>
        </td>
        {/* ======== योग/शेष ========= */}
        <td>
          <div className="form-control">
            <input type="number" className="semiSmallInput" name="sending" value={addRmlState.reduce(
              (total, currentItem) =>
                (total = total + Number(currentItem.sending)),
              0
            )}
              disabled />
          </div>
        </td>
        {/* ======== अन्तिम स्टॉक ========= */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="sumRemainder"
              value={addRmlState.reduce(
                (total, currentItem) =>
                  (total = total + Number(currentItem.sumRemainder)),
                0
              )}
              disabled
            />
          </div>
        </td>
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="closingStock"
              value={addRmlState.reduce(
                (total, currentItem) =>
                  (total = total + Number(currentItem.closingStock)),
                0
              )}
              disabled
            />
          </div>
        </td>
       
        {/* ============= बिक्री ================ */}
        <td>
          <div className="form-control">
            <input type="number" className="semiSmallInput" name="sales" value={addRmlState.reduce(
              (total, currentItem) =>
                (total = total + Number(currentItem.sales)),
              0
            )}
              disabled />
          </div>
        </td>
        {/* ============= रेट ================ */}
        <td>
          <div className="form-control">
            <input type="number" className="semiSmallInput" name="rate" disabled/>
          </div>
        </td>
        {/* ============= योग ================ */}
        <td>
          <div className="form-control">
            <input type="number" className="semiSmallInput" name="cost" value={addRmlState.reduce(
              (total, currentItem) =>
                (total = total + Number(currentItem.cost)),
              0
            )}
              disabled />
          </div>
        </td>
        {/* ============= कुल योग ================ */}
      </tr>
    </>
  );
};

export default TotalRML;
