import React, { useEffect, useState } from "react";

const AddOneFristForm = ({
  index,
  handelFristFormOnChange,
  formula,
  addOneFristFormState,
}) => {
  const SerialNo = index + 1;
  const { avg, yog, saleDone, totalIndividual, allTotal } = formula;

  const [avgValue, setAvgValue] = useState(avg);
  const [yogValue, setYogValue] = useState(yog);
  const [saleDoneValue, setSaleDoneValue] = useState(saleDone);
  const [totalIndividualValue, setTotalIndividualValue] =
    useState(totalIndividual);
  const [allTotalValue, setAllTotalValue] = useState(allTotal);

  useEffect(() => {
    setAvgValue(avg);
    setYogValue(yog);
    setSaleDoneValue(saleDone);
    setTotalIndividualValue(totalIndividual);
    setAllTotalValue(allTotal);
  }, [allTotal, avg, saleDone, totalIndividual, yog]);

  return (
    <>
      <tr>
        <th>{SerialNo}</th>
        <td>
          <div className="form-control">
            <input
              type="text"
              className="dailyReportInput"
              name="brandName"
              value={addOneFristFormState.brandName}
              onChange={(event) => handelFristFormOnChange(event, index)}
            />
          </div>
        </td>
        {/* ======== MRP Input ========= */}
        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                value={addOneFristFormState.averageRate750}
                onChange={(event) => handelFristFormOnChange(event, index)}
                name="averageRate750"
              />
              {/* <input
                name="750"
                value={addOneFristFormState.averageRate[750]}
                onChange={(e) => handelFristFormOnChange(e, index)}
              /> */}
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                value={addOneFristFormState.averageRate330}
                onChange={(event) => handelFristFormOnChange(event, index)}
                name="averageRate330"
              />
              {/* <input
                name="330"
                value={addOneFristFormState.averageRate[330]}
                onChange={(e) => handelFristFormOnChange(e, index)}
              /> */}
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                value={addOneFristFormState.averageRate180}
                onChange={(event) => handelFristFormOnChange(event, index)}
                name="averageRate180"
              />
              {/* <input
                name="180"
                value={addOneFristFormState.averageRate[180]}
                onChange={(e) => handelFristFormOnChange(e, index)}
              /> */}
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
                name="startingStock750"
                value={addOneFristFormState.startingStock750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="startingStock330"
                value={addOneFristFormState.startingStock330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="startingStock180"
                value={addOneFristFormState.startingStock180}
                onChange={(event) => handelFristFormOnChange(event, index)}
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
                name="incomingPurchase750"
                value={addOneFristFormState.incomingPurchase750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomingPurchase330"
                value={addOneFristFormState.incomingPurchase330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomingPurchase180"
                value={addOneFristFormState.incomingPurchase180}
                onChange={(event) => handelFristFormOnChange(event, index)}
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
                name="buyRate750"
                value={addOneFristFormState.buyRate750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="buyRate330"
                value={addOneFristFormState.buyRate330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="buyRate180"
                value={addOneFristFormState.buyRate180}
                onChange={(event) => handelFristFormOnChange(event, index)}
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
                name="incomePurchase750"
                value={addOneFristFormState.incomePurchase750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomePurchase330"
                value={addOneFristFormState.incomePurchase330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomePurchase180"
                value={addOneFristFormState.incomePurchase180}
                onChange={(event) => handelFristFormOnChange(event, index)}
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
                name="purchaseRate750"
                value={addOneFristFormState.purchaseRate750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="purchaseRate330"
                value={addOneFristFormState.purchaseRate330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="purchaseRate180"
                value={addOneFristFormState.purchaseRate180}
                onChange={(event) => handelFristFormOnChange(event, index)}
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
                name="inflowCredit750"
                value={addOneFristFormState.inflowCredit750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="inflowCredit330"
                value={addOneFristFormState.inflowCredit330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="inflowCredit180"
                value={addOneFristFormState.inflowCredit180}
                onChange={(event) => handelFristFormOnChange(event, index)}
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
                name="sending750"
                value={addOneFristFormState.sending750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sending330"
                value={addOneFristFormState.sending330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sending180"
                value={addOneFristFormState.sending180}
                onChange={(event) => handelFristFormOnChange(event, index)}
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
                name="sumRemainder750"
                value={addOneFristFormState.sumRemainder750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sumRemainder330"
                value={addOneFristFormState.sumRemainder330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sumRemainder180"
                value={addOneFristFormState.sumRemainder180}
                onChange={(event) => handelFristFormOnChange(event, index)}
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
                name="closingStock750"
                value={addOneFristFormState.closingStock750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="closingStock330"
                value={addOneFristFormState.closingStock330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="closingStock180"
                value={addOneFristFormState.closingStock180}
                onChange={(event) => handelFristFormOnChange(event, index)}
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
                name="sales750"
                value={addOneFristFormState.sales750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sales330"
                value={addOneFristFormState.sales330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sales180"
                value={addOneFristFormState.sales180}
                onChange={(event) => handelFristFormOnChange(event, index)}
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
                name="mainRate750"
                value={addOneFristFormState.mainRate750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="mainRate330"
                value={addOneFristFormState.mainRate330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="mainRate180"
                value={addOneFristFormState.mainRate180}
                onChange={(event) => handelFristFormOnChange(event, index)}
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
              name="total750"
              value={addOneFristFormState.total750}
              onChange={(event) => handelFristFormOnChange(event, index)}
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
              value={allTotalValue}
              onChange={(event) => handelFristFormOnChange(event, index)}
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default AddOneFristForm;
