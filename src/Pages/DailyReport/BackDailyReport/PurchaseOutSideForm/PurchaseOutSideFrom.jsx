import React from "react";

const PurchaseOutSideFrom = ({
  index,
  onChangePurchesOutSide,
  purchesOutSideState,
}) => {
  return (
    <>
      <tr>
        <td>
          <div className="form-control">
            <input
              type="text"
              className="semiSmallInput"
              name="partyName"
              value={purchesOutSideState.partyName}
              onChange={(e) => onChangePurchesOutSide(e, index)}
            />
          </div>
        </td>
        {/* ======== प्रारम्भिक स्टॉक ========= */}
        <td>
          <div className="form-control">
            <input
              type="text"
              className="semiSmallInput"
              name="brandName"
              value={purchesOutSideState.brandName}
              onChange={(e) => onChangePurchesOutSide(e, index)}
            />
          </div>
        </td>

        {/* ======== आमद (खरीद)-दु. ========= */}

        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="theNumer"
              value={purchesOutSideState.theNumer}
              onChange={(e) => onChangePurchesOutSide(e, index)}
            />
          </div>
        </td>
        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="form-control">
            <input
              type="text"
              className="semiSmallInput"
              name="comment"
              value={purchesOutSideState.comment}
              onChange={(e) => onChangePurchesOutSide(e, index)}
            />
          </div>
        </td>
        {/* ======== आमद (उधारी) ========= */}
      </tr>
    </>
  );
};

export default PurchaseOutSideFrom;
