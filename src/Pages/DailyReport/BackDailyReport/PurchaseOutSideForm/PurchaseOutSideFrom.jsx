import React from "react";

const PurchaseOutSideFrom = () => {
  return (
    <>
      <tr>
        <td>
          <div className="form-control">
            <input type="text" className="semiSmallInput" name="partyName" />
          </div>
        </td>
        {/* ======== प्रारम्भिक स्टॉक ========= */}
        <td>
          <div className="form-control">
            <input type="text" className="semiSmallInput" name="brandName" />
          </div>
        </td>

        {/* ======== आमद (खरीद)-दु. ========= */}

        <td>
          <div className="form-control">
            <input type="number" className="semiSmallInput" name="theNumer" />
          </div>
        </td>
        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="form-control">
            <input type="text" className="semiSmallInput" name="comment" />
          </div>
        </td>
        {/* ======== आमद (उधारी) ========= */}
      </tr>
      <tr>
        <td>
          <div className="form-control">
            <input type="text" className="semiSmallInput" name="partyName" />
          </div>
        </td>
        {/* ======== प्रारम्भिक स्टॉक ========= */}
        <td>
          <div className="form-control">
            <input type="text" className="semiSmallInput" name="brandName" />
          </div>
        </td>

        {/* ======== आमद (खरीद)-दु. ========= */}

        <td>
          <div className="form-control">
            <input type="number" className="semiSmallInput" name="theNumer" />
          </div>
        </td>
        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="form-control">
            <input type="text" className="semiSmallInput" name="comment" />
          </div>
        </td>
        {/* ======== आमद (उधारी) ========= */}
      </tr>
    </>
  );
};

export default PurchaseOutSideFrom;
