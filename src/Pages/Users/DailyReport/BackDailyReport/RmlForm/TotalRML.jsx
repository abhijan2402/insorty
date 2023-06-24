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
          <div className="form-control items-center">
            <input
              type="number"
              className="wd-5"
              name="averageRate"
              disabled
            />
          </div>
        </td>

        <td>
          <div className="form-control items-center">
            <input
              // type="number"
              className="wd-5"
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
          <div className="form-control items-center">
            <input
              type="number"
              className="wd-5"
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
          <div className="form-control items-center">
            <input
              type="number"
              className="wd-5"
              name="buyRate"
              disabled
            />
          </div>
        </td>
        {/* ======== आमद (उधारी) ========= */}

        <td>
          <div className="form-control items-center">
            <input
              type="number"
              className="wd-5"
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
          <div className="form-control items-center">
            <input
              type="number"
              className="wd-5"
              name="purchaserRate"
              disabled
            />
          </div>
        </td>
        {/* ======== भेजान ========= */}
        <td>
          <div className="form-control items-center">
            <input
              type="number"
              className="wd-5"
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
            <input type="number" className="" name="sending" value={addRmlState.reduce(
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
              className=""
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
              className=""
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
            <input type="number" className="" name="sales" value={addRmlState.reduce(
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
            <input type="number" className="" name="rate" disabled/>
          </div>
        </td>
        {/* ============= योग ================ */}
        <td>
          <div className="form-control">
            <input type="number" className="" name="cost" value={addRmlState.reduce(
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
