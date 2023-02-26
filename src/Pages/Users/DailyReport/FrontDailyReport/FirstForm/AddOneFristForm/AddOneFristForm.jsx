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
  handleRemoveFields,
  addOneFristFormState,
  setAddOneFristFormState,
}) => {
  const SerialNo = index + 1;
  const { brandsLoaded, liquors } = useLiquors();

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
        <th>{SerialNo} </th>
        <th>
          <h1 className="cross" onClick={() => handleRemoveFields(index)}>
            X
          </h1>
        </th>
        <td>
          <Autocomplete
            options={
              liquors.length > 0
                ? liquors.filter((brand) => {
                    if (brand.type === "WINE") {
                      return brand;
                    }
                  })
                : ["no options"]
            }
            getOptionLabel={(option) => (option ? option.brandName : "")}
            onChange={(event, value) => {
              if (value) {
                addOneFirst.brandName = value.brandName;
                addOneFirst.liquorID = value._id;
              } else {
                addOneFirst.brandName = "";
                addOneFirst.liquorID = "";
              }
              handelFristFormOnChange(event, index);
              console.log(addOneFirst);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                className="dailyReportInput"
                // value={addOneFirst.brandName}
                inputProps={{
                  ...params.inputProps,
                  value: addOneFirst.brandName,
                }}
                onChange={(event) => {
                  addOneFirst.brandName = event.target.value;
                  // addOneFirst.liquorID = null;
                  // handelFristFormOnChange(event, index);
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
                value={addOneFirst.averageRate375}
                onChange={(event) => handelFristFormOnChange(event, index)}
                name="averageRate375"
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
                name="startingStock375"
                value={addOneFirst.startingStock375}
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
                name="incomingPurchase375"
                value={addOneFirst.incomingPurchase375}
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
                name="buyRate375"
                value={addOneFirst.buyRate375}
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
                name="incomePurchase375"
                value={addOneFirst.incomePurchase375}
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
                name="purchaseRate375"
                value={addOneFirst.purchaseRate375}
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
                name="inflowCredit375"
                value={addOneFirst.inflowCredit375}
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
                name="sending375"
                value={addOneFirst.sending375}
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
                name="sumRemainder375"
                value={addOneFirst.sumRemainder375}
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
                name="closingStock375"
                value={addOneFirst.closingStock375}
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
                name="sales375"
                disabled
                value={addOneFirst.sales375}
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
                name="mainRate375"
                value={addOneFirst.mainRate375}
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
                value={
                  Number(addOneFirst.sales750) * Number(addOneFirst.mainRate750)
                }
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                className="smallinput"
                disabled
                name="total375"
                value={
                  Number(addOneFirst.sales375) * Number(addOneFirst.mainRate375)
                }
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="total180"
                className="smallinput"
                disabled
                value={
                  Number(addOneFirst.sales180) * Number(addOneFirst.mainRate180)
                }
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
                Number(addOneFirst.sales750) * Number(addOneFirst.mainRate750) +
                Number(addOneFirst.sales375) * Number(addOneFirst.mainRate375) +
                Number(addOneFirst.sales180) * Number(addOneFirst.mainRate180)
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
