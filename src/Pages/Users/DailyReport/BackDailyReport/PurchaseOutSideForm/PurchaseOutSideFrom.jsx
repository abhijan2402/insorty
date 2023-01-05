import React from "react";

const PurchaseOutSideFrom = ({
  index,
  onChangePurchesOutSide,
  item,
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
              value={item.partyName}
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
              value={item.brandName}
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
              value={item.theNumer}
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
              value={item.comment}
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
