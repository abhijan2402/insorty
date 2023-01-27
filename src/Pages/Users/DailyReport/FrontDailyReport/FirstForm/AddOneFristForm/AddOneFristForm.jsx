import React from "react";

import { Autocomplete, TextField } from "@mui/material";
import useLiquors from "../../../../../../Hooks/useLiquors";
import Loader from "../../../../../../Components/Loader/Loader";

const AddOneFristForm = ({
  index,
  handelFristFormOnChange,
  formula,
  myOptions,
  sujestedData,
  addOneFirst,
  addOneFristFormState,
  setAddOneFristFormState,
}) => {
  const SerialNo = index + 1;
  const {
    brands,
    brandsLoaded,
    checkLiquor,
    liquors
  } = useLiquors()

  if (!brandsLoaded) {
    console.log(liquors.filter((item)=>{
      if (item.brandName === "mac"){
        return item
      }
     
    }))
    // console.log(brands)
  }
  

  if (brandsLoaded) {
    return (
      <div>
        <Loader></Loader>
      </div>
    );
  }

  return (
    <>
      <tr>
        <th>{SerialNo}</th>
        <td>
          <Autocomplete
            options={brands}
            value={addOneFirst.brandName}
            onChange={(event) => {
              addOneFirst.brandName = event.target.outerText;
              // eslint-disable-next-line array-callback-return
              addOneFirst.liquorID = liquors.filter((liq) => {
                if (liq.brandName === event.target.outerText) {
                  return liq._id;
                }
              });
              console.log(addOneFristFormState);
              handelFristFormOnChange(event, index);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                className="dailyReportInput"
                value={addOneFirst.brandName}
                onChange={(event) => {
                  handelFristFormOnChange(event, index);
                  addOneFirst.brandName = event.target.value;
                  addOneFirst.liquorID = null;
                  console.log(event.target.value);
                }}
              />
            )}
          />
        </td>
        {/* ======== MRP Input ========= */}
        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input
                // type="number"

                className="smallinput"
                value={addOneFirst.averageRate750}
                onChange={(event) => handelFristFormOnChange(event, index)}
                name="averageRate750"
                disabled
              />
            </div>

            <div className="form-control">
              <input
                // type="number"
                className="smallinput"
                value={addOneFirst.averageRate330}
                onChange={(event) => handelFristFormOnChange(event, index)}
                name="averageRate330"
                disabled
              />
            </div>

            <div className="form-control">
              <input
                // type="number"
                className="smallinput"
                value={addOneFirst.averageRate180}
                onChange={(event) => handelFristFormOnChange(event, index)}
                name="averageRate180"
                disabled
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
                name="startingStock750"
                value={addOneFirst.startingStock750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="startingStock330"
                value={addOneFirst.startingStock330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="startingStock180"
                value={addOneFirst.startingStock180}
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
                value={addOneFirst.incomingPurchase750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomingPurchase330"
                value={addOneFirst.incomingPurchase330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomingPurchase180"
                value={addOneFirst.incomingPurchase180}
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
                value={addOneFirst.buyRate750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="buyRate330"
                value={addOneFirst.buyRate330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="buyRate180"
                value={addOneFirst.buyRate180}
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
                value={addOneFirst.incomePurchase750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomePurchase330"
                value={addOneFirst.incomePurchase330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomePurchase180"
                value={addOneFirst.incomePurchase180}
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
                value={addOneFirst.purchaseRate750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="purchaseRate330"
                value={addOneFirst.purchaseRate330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="purchaseRate180"
                value={addOneFirst.purchaseRate180}
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
                value={addOneFirst.inflowCredit750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="inflowCredit330"
                value={addOneFirst.inflowCredit330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="inflowCredit180"
                value={addOneFirst.inflowCredit180}
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
                value={addOneFirst.sending750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sending330"
                value={addOneFirst.sending330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sending180"
                value={addOneFirst.sending180}
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
                value={addOneFirst.sumRemainder750}
                onChange={(event) => handelFristFormOnChange(event, index)}
                disabled
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sumRemainder330"
                value={addOneFirst.sumRemainder330}
                onChange={(event) => handelFristFormOnChange(event, index)}
                disabled
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sumRemainder180"
                value={addOneFirst.sumRemainder180}
                onChange={(event) => handelFristFormOnChange(event, index)}
                disabled
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
                value={addOneFirst.closingStock750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="closingStock330"
                value={addOneFirst.closingStock330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="closingStock180"
                value={addOneFirst.closingStock180}
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
                disabled
                value={addOneFirst.sales750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sales330"
                disabled
                value={addOneFirst.sales330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sales180"
                disabled
                value={addOneFirst.sales180}
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
                value={addOneFirst.mainRate750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="mainRate330"
                value={addOneFirst.mainRate330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="mainRate180"
                value={addOneFirst.mainRate180}
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
                disabled
                value={addOneFirst.total750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                className="smallinput"
                disabled
                name="total330"
                value={addOneFirst.total330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="total180"
                className="smallinput"
                disabled
                value={addOneFirst.total180}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control"></div>
          </div>
        </td>
        {/* ============= कुल योग ================ */}

        <td>
          <div className="form-control">
            <input
              type="text"
              className="semiSmallInput"
              name="grandTotal"
              disabled
              value={
                Number(addOneFirst.total750) +
                Number(addOneFirst.total330) +
                Number(addOneFirst.total180)
              }
              onChange={(event) => handelFristFormOnChange(event, index)}
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default AddOneFristForm;
