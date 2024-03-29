import React from "react";
import "react-bootstrap-typeahead/css/Typeahead.css";
import Loader from "../../../../../../Components/Loader/Loader";
import { Autocomplete, TextField } from "@mui/material";
import useLiquors from "../../../../../../Hooks/useLiquors";

const AddOneFristFromBack = ({ index, item, onChangeFristBackFormHandler }) => {
  const SerialNo = index + 1;

  const { brands, brandsLoaded, checkLiquor, liquors } = useLiquors();

  if (!brandsLoaded) {
    // console.log(checkLiquor("b").filter((item)=>{
    //   if (item.quantityInML === 650){
    //     return item
    //   }
    // }))
    // console.log(brands)
  }

  // const brands = ["a", "b", "c", "d"];

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
          <div className="form-control">
            <Autocomplete
              size="small"
              style={{
                width: "24rem",
              }}
              options={
                liquors.length > 0
                  ? liquors.filter((brand) => {
                      if (brand.type === "BEER") {
                        return brand;
                      }
                    })
                  : ["no options"]
              }
              getOptionLabel={(option) => (option ? option.brandName : "")}
              // item.brandName = event.target.outerText;
              // // eslint-disable-next-line array-callback-return
              // const liq = liquors.filter((liq) => {
              //   if (liq.brandName === event.target.outerText) {
              //     return liq;
              //   }
              // });
              // item.liquorID = liq._id
              // handelFristFormOnChange(event, index);
              onChange={(event, value) => {
                if (value) {
                  item.brandName = value.brandName;
                  item.liquorID = value._id;
                } else {
                  item.brandName = "";
                  item.liquorID = "";
                }
                onChangeFristBackFormHandler(event, index);
                console.log(item);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="dailyReportInput"
                  // value={item.brandName}
                  inputProps={{ ...params.inputProps, value: item.brandName }}
                  onChange={(event) => {
                    item.brandName = event.target.value;
                    // item.liquorID = null;
                    // onChangeFristBackFormHandler(event, index)
                  }}
                />
              )}
            />
          </div>
        </td>
        {/* ======== MRP Input ========= */}
        <td>
          <div className="flex gap-2">
            <div className="form-control">
              <input
                // type="number"

                type="number"
                disabled
                className="smallinput"
                value={item.averageRate650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
                name="averageRate650"
              />
            </div>

            <div className="form-control">
              <input
                // type="number"

                type="number"
                disabled
                className="smallinput"
                value={item.averageRate550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
                name="averageRate550"
              />
            </div>

            <div className="form-control">
              <input
                // type="number"

                type="number"
                disabled
                className="smallinput"
                value={item.averageRate330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
                name="averageRate330"
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
                value={item.startingStock650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="startingStock550"
                value={item.startingStock550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="startingStock330"
                value={item.startingStock330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
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
                value={item.incomingPurchase650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomingPurchase550"
                value={item.incomingPurchase550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomingPurchase330"
                value={item.incomingPurchase330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
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
                value={item.buyRate650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="buyRate550"
                value={item.buyRate550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="buyRate330"
                value={item.buyRate330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
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
                value={item.incomePurchase650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomePurchase550"
                value={item.incomePurchase550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomePurchase330"
                value={item.incomePurchase330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
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
                value={item.purchaseRate650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="purchaseRate550"
                value={item.purchaseRate550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="purchaseRate330"
                value={item.purchaseRate330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
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
                value={item.inflowCredit650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="inflowCredit550"
                value={item.inflowCredit550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="inflowCredit330"
                value={item.inflowCredit330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
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
                value={item.sending650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sending550"
                value={item.sending550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sending330"
                value={item.sending330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
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
                disabled
                className="smallinput"
                name="sumRemainder650"
                value={item.sumRemainder650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                disabled
                className="smallinput"
                name="sumRemainder550"
                value={item.sumRemainder550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                disabled
                className="smallinput"
                name="sumRemainder330"
                value={item.sumRemainder330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
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
                value={item.closingStock650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="closingStock550"
                value={item.closingStock550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="closingStock330"
                value={item.closingStock330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
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
                disabled
                className="smallinput"
                name="sales650"
                value={item.sales650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                disabled
                className="smallinput"
                name="sales550"
                value={item.sales550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                disabled
                className="smallinput"
                name="sales330"
                value={item.sales330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
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
                value={item.mainRate650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="mainRate550"
                value={item.mainRate550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="mainRate330"
                value={item.mainRate330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
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
                name="total650"
                disabled
                value={item.total650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                className="smallinput"
                name="total550"
                disabled
                value={item.total550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                className="smallinput"
                name="total650"
                disabled
                value={item.total330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="text"
              disabled
              className="semiSmallInput"
              name="grandTotal"
              value={item.grandTotal}
              onChange={(event) => onChangeFristBackFormHandler(event, index)}
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default AddOneFristFromBack;
