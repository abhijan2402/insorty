import React from "react";

const AddOneFristForm = ({
  index,
  handelFristFormOnChange,
  formula,
  item,
  addOneFristFormState,
}) => {
  const SerialNo = index + 1;
 

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
              value={item.brandName}
              onChange={(event) => handelFristFormOnChange(event, index)}
            />
          </div>
        </td>
        {/* ======== MRP Input ========= */}
        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input
                // type="number"

                className="smallinput"
                value={item.averageRate750}
                onChange={(event) => handelFristFormOnChange(event, index)}
                name="averageRate750"
              />
              {/* <input
                name="750"
                value={item.averageRate[750]}
                onChange={(e) => handelFristFormOnChange(e, index)}
              /> */}
            </div>

            <div className="form-control">
              <input
                // type="number"
                className="smallinput"
                value={item.averageRate330}
                onChange={(event) => handelFristFormOnChange(event, index)}
                name="averageRate330"
              />
              {/* <input
                name="330"
                value={item.averageRate[330]}
                onChange={(e) => handelFristFormOnChange(e, index)}
              /> */}
            </div>

            <div className="form-control">
              <input
                // type="number"
                className="smallinput"
                value={item.averageRate180}
                onChange={(event) => handelFristFormOnChange(event, index)}
                name="averageRate180"
              />
              {/* <input
                name="180"
                value={item.averageRate[180]}
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
                value={item.startingStock750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="startingStock330"
                value={item.startingStock330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="startingStock180"
                value={item.startingStock180}
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
                value={item.incomingPurchase750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomingPurchase330"
                value={item.incomingPurchase330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomingPurchase180"
                value={item.incomingPurchase180}
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
                value={item.buyRate750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="buyRate330"
                value={item.buyRate330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="buyRate180"
                value={item.buyRate180}
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
                value={item.incomePurchase750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomePurchase330"
                value={item.incomePurchase330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomePurchase180"
                value={item.incomePurchase180}
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
                value={item.purchaseRate750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="purchaseRate330"
                value={item.purchaseRate330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="purchaseRate180"
                value={item.purchaseRate180}
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
                value={item.inflowCredit750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="inflowCredit330"
                value={item.inflowCredit330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="inflowCredit180"
                value={item.inflowCredit180}
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
                value={item.sending750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sending330"
                value={item.sending330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sending180"
                value={item.sending180}
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
                value={item.sumRemainder750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sumRemainder330"
                value={item.sumRemainder330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sumRemainder180"
                value={item.sumRemainder180}
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
                value={item.closingStock750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="closingStock330"
                value={item.closingStock330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="closingStock180"
                value={item.closingStock180}
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
                value={item.sales750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sales330"
                value={item.sales330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sales180"
                value={item.sales180}
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
                value={item.mainRate750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="mainRate330"
                value={item.mainRate330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="mainRate180"
                value={item.mainRate180}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>
          </div>
        </td>
        {/* ============= योग ================ */}
        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input
                type="text"
                className="smallinput"
                name="total750"
                value={item.total750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                className="smallinput"
                name="total330"
                value={item.total330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                className="smallinput"
                name="total750"
                value={item.total180}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>
          </div>
        </td>
        {/* ============= कुल योग ================ */}

        <td>
          <div className="form-control">
            <input
              type="text"
              className="semiSmallInput"
              name="grandTotal"
              value={item.grandTotal}
              onChange={(event) => handelFristFormOnChange(event, index)}
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default AddOneFristForm;
