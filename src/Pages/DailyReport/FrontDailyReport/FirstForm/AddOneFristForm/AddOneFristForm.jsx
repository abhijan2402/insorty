import React from "react";

const AddOneFristForm = ({ index, getFristFormDataState, avgState }) => {
  const SerialNo = index + 1;

  return (
    <>
      <tr>
        <th>{SerialNo}</th>
        <td>
          <div className="form-control">
            <input type="text" className="dailyReportInput " name="brandName" />
          </div>
        </td>
        {/* ======== MRP Input ========= */}
        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input type="number" className="smallinput" name="averageRate" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="averageRate" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="averageRate" />
            </div>
          </div>
        </td>
        {/* ======== प्रारम्भिक स्टॉक ========= */}
        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="startingStock"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="startingStock"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="startingStock"
              />
            </div>
          </div>
        </td>

        {/* ======== आमद (खरीद)-दु. ========= */}

        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomingPurchase"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomingPurchase"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomingPurchase"
              />
            </div>
          </div>
        </td>

        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input type="number" className="smallinput" name="buyRate" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="buyRate" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="buyRate" />
            </div>
          </div>
        </td>

        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomePurchase"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomePurchase"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomePurchase"
              />
            </div>
          </div>
        </td>

        {/*================ खरीद रेट - बा. ==================  */}
        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input type="number" className="smallinput" name="purchaseRate" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="purchaseRate" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="purchaseRate" />
            </div>
          </div>
        </td>

        {/* ======== आमद (उधारी) ========= */}

        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input type="number" className="smallinput" name="inflowCredit" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="inflowCredit" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="inflowCredit" />
            </div>
          </div>
        </td>
        {/* ======== भेजान ========= */}
        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input type="number" className="smallinput" name="sending" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="sending" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="sending" />
            </div>
          </div>
        </td>
        {/* ======== योग/शेष ========= */}
        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input type="number" className="smallinput" name="sumRemainder" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="sumRemainder" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="sumRemainder" />
            </div>
          </div>
        </td>
        {/* ======== अन्तिम स्टॉक ========= */}
        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input type="number" className="smallinput" name="closingStock" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="closingStock" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="closingStock" />
            </div>
          </div>
        </td>
        {/* ============= बिक्री ================ */}
        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input type="number" className="smallinput" name="sales" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="sales" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="sales" />
            </div>
          </div>
        </td>
        {/* ============= रेट ================ */}
        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input type="number" className="smallinput" name="mainRate" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="mainRate" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="mainRate" />
            </div>
          </div>
        </td>
        {/* ============= योग ================ */}
        <td>
          <div className="form-control">
            <input type="text" className="semiSmallInput" name="total" />
          </div>
        </td>
        {/* ============= कुल योग ================ */}
        <td>
          <div className="form-control">
            <input type="text" className="semiSmallInput" name="grandTotal" />
          </div>
        </td>
      </tr>
    </>
  );
};

export default AddOneFristForm;
