import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const AddOneFristForm = ({ beerFront, index }) => {
  //
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="form-control">
            <input type="text" className="dailyReportInput" name="brandName" />
          </div>
          {/* <Autocomplete
            size="small"
            style={{
              width: "20rem",
            }}
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
                required
                size="small"
                {...params}
                // value={addOneFirst.brandName}
                inputProps={{
                  ...params.inputProps,
                  value: addOneFirst.brandName,
                }}
                onChange={(event) => {
                  addOneFirst.brandName = event.target.value;
                }}
              />
            )}
          /> */}
        </td>
        {/* ======== MRP Input ========= */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type="number"
                className="smallinput "
                name="OpeningStock750"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                className="smallinput "
                name="OpeningStock330"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                className="smallinput "
                name="OpeningStock180"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="OpeningStock60"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="OpeningStock30"
              />
            </div>
          </div>
        </td>
        {/* ======== प्रारम्भिक स्टॉक ========= */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                className="smallinput"
                type="number"
                name="inflowShop750"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="inflowShop330"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="inflowShop180"
              />
            </div>
            <div className="form-control">
              <input type="number" className="smallinput" name="inflowShop60" />
            </div>
            <div className="form-control">
              <input type="number" className="smallinput" name="inflowShop30" />
            </div>
          </div>
        </td>

        {/* ======== आमद (खरीद)-दु. ========= */}

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="buyeRateShop750"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="buyeRateShop330"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="buyeRateShop180"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="buyeRateShop60"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="buyeRateShop30"
              />
            </div>
          </div>
        </td>

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomePurchase750"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomePurchase330"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomePurchase180"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomePurchase60"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="incomePurchase30"
              />
            </div>
          </div>
        </td>

        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="buyeRateOut750"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="buyeRateOut330"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="buyeRateOut180"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="buyeRateOut60"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="buyeRateOut30"
              />
            </div>
          </div>
        </td>

        {/*================ खरीद रेट - बा. ==================  */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input type="number" className="smallinput" name="send750" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="send330" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="send180" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="send60" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="send30" />
            </div>
          </div>
        </td>

        {/* ======== आमद (उधारी) ========= */}

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sumRemaining750"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sumRemaining330"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sumRemaining180"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sumRemaining60"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="sumRemaining30"
              />
            </div>
          </div>
        </td>
        {/* ======== भेजान ========= */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="closingStock750"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                name="closingStock330"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                name="closingStock180"
                className="smallinput"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                name="closingStock60"
                className="smallinput"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                name="closingStock30"
                className="smallinput"
              />
            </div>
          </div>
        </td>
        {/* ======== योग/शेष ========= */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input type="number" className="smallinput" name="salse750" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="salse330" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="salse180" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="salse60" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="salse30" />
            </div>
          </div>
        </td>
        {/* ======== अन्तिम स्टॉक ========= */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input type="number" className="smallinput" name="total750" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="total330" />
            </div>

            <div className="form-control">
              <input type="number" className="smallinput" name="total180" />
            </div>
            <div className="form-control">
              <input type="number" className="smallinput" name="total60" />
            </div>
            <div className="form-control">
              <input type="number" className="smallinput" name="total30" />
            </div>
          </div>
        </td>
        {/* ============= कुल योग ================ */}
        <td>
          <div className="form-control">
            <input type="number" className="semiSmallInput" name="grandTotal" />
          </div>
        </td>
      </tr>
    </>
  );
};

export default AddOneFristForm;
