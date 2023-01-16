import React from "react";

const PurchaseOutSideFrom = ({ index, onChangePurchesOutSide, item }) => {
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
          <div className="form-control ">
            <input
              type="number"
              className="semiSmallInput"
              name="theNumber"
              value={item.theNumber}
              onChange={(e) => onChangePurchesOutSide(e, index)}
            />
          </div>
        </td>
        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="form-control ">
            <select
              className="select select-bordered"
              name="quantity"
              value={item.quantity}
              onChange={(e) => onChangePurchesOutSide(e, index)}
            >
              <option value={650} selected>
                650ml
              </option>
              <option value={550}>550ml</option>
              <option value={330}>330ml</option>
              <option value={90}>90ml</option>
              <option value={60}>60ml</option>
            </select>
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="rate"
              value={item.rate}
              onChange={(e) => onChangePurchesOutSide(e, index)}
            />
          </div>
        </td>
        
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="total"
              disabled
              value={item.total}
              onChange={(e) => onChangePurchesOutSide(e, index)}
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="text"
              className="semiSmallInput"
              name="reason"
              value={item.reason}
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
