import React from "react";

const AddOneFristFromBack = ({
  index,
  fristFormState,
  onChangeFristBackFormHandler,
}) => {
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
              <input
                type="number"
                className="smallinput"
                name="averageRate650"
                value={fristFormState.averageRate650}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="averageRate550"
                value={fristFormState.averageRate550}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="averageRate330"
                value={fristFormState.averageRate330}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
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
                name="startingStock650"
                value={fristFormState.startingStock650}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="startingStock550"
                value={fristFormState.startingStock550}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="startingStock330"
                value={fristFormState.startingStock330}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
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
                name="incomingPurchase650"
                value={fristFormState.incomingPurchase650}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomingPurchase550"
                value={fristFormState.incomingPurchase550}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomingPurchase330"
                value={fristFormState.incomingPurchase330}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>
          </div>
        </td>

        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="buyRate650"
                value={fristFormState.buyRate650}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="buyRate550"
                value={fristFormState.buyRate550}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="buyRate330"
                value={fristFormState.buyRate330}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
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
                name="incomePurchase650"
                value={fristFormState.incomePurchase650}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomePurchase550"
                value={fristFormState.incomePurchase550}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomePurchase330"
                value={fristFormState.incomePurchase330}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>
          </div>
        </td>

        {/*================ खरीद रेट - बा. ==================  */}
        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="purchaseRate650"
                value={fristFormState.purchaseRate650}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="purchaseRate550"
                value={fristFormState.purchaseRate550}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="purchaseRate330"
                value={fristFormState.purchaseRate330}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>
          </div>
        </td>

        {/* ======== आमद (उधारी) ========= */}

        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="inflowCredit650"
                value={fristFormState.inflowCredit650}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="inflowCredit550"
                value={fristFormState.inflowCredit550}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="inflowCredit330"
                value={fristFormState.inflowCredit330}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>
          </div>
        </td>
        {/* ======== भेजान ========= */}
        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sending650"
                value={fristFormState.sending650}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sending550"
                value={fristFormState.sending550}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sending330"
                value={fristFormState.sending330}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>
          </div>
        </td>
        {/* ======== योग/शेष ========= */}
        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sumRemainder650"
                value={fristFormState.sumRemainder650}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sumRemainder550"
                value={fristFormState.sumRemainder550}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sumRemainder330"
                value={fristFormState.sumRemainder330}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>
          </div>
        </td>
        {/* ======== अन्तिम स्टॉक ========= */}
        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="closingStock650"
                value={fristFormState.closingStock650}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="closingStock550"
                value={fristFormState.closingStock550}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="closingStock330"
                value={fristFormState.closingStock330}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>
          </div>
        </td>
        {/* ============= बिक्री ================ */}
        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sales650"
                value={fristFormState.sales650}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sales550"
                value={fristFormState.sales550}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sales330"
                value={fristFormState.sales330}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>
          </div>
        </td>
        {/* ============= रेट ================ */}
        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="mainRate650"
                value={fristFormState.mainRate650}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="mainRate550"
                value={fristFormState.mainRate550}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="mainRate330"
                value={fristFormState.mainRate330}
                onChange={(e) => onChangeFristBackFormHandler(e, index)}
              />
            </div>
          </div>
        </td>
        {/* ============= योग ================ */}
        <td>
          <div className="form-control">
            <input
              type="text"
              className="semiSmallInput"
              name="total"
              value={fristFormState.total}
              onChange={(e) => onChangeFristBackFormHandler(e, index)}
            />
          </div>
        </td>
        {/* ============= कुल योग ================ */}
        <td>
          <div className="form-control">
            <input
              type="text"
              className="semiSmallInput"
              name="grandTotal"
              value={fristFormState.grandTotal}
              onChange={(e) => onChangeFristBackFormHandler(e, index)}
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default AddOneFristFromBack;
