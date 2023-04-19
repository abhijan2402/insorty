import React from "react";

const AddOneFristForm = ({ beerFront, index, fristFormOnChange }) => {
console.log(beerFront.openingStock30)
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="form-control">
            <input
              onChange={(e) => fristFormOnChange(e, index)}
              type="text"
              className="dailyReportInput"
              name="brandName"
            />
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
                name="averageRate750"
                onChange={(e) => fristFormOnChange(e, index)}
              />
            </div>
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput "
                name="averageRate375"
              />
            </div>
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput "
                name="averageRate180"
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="averageRate30"
              />
            </div>
          </div>
        </td>
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput "
                value={beerFront.openingStock750}
                name="openingStock750"
              />
            </div>
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput "
                value={beerFront.openingStock375}                
                name="openingStock375"
              />
            </div>
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                value={beerFront.openingStock180}

                type="number"
                className="smallinput "
                name="openingStock180"
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                value={beerFront.openingStock30}

                type="number"
                className="smallinput"
                name="openingStock30"
              />
            </div>
          </div>
        </td>
        {/* ======== प्रारम्भिक स्टॉक ========= */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                value={beerFront.inflowShop750}
                className="smallinput"
                type="number"
                name="inflowShop750"
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                value={beerFront.inflowShop375}

                type="number"
                className="smallinput"
                name="inflowShop375"
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                value={beerFront.inflowShop180}

                type="number"
                className="smallinput"
                name="inflowShop180"
              />
            </div>
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                value={beerFront.inflowShop30}

                type="number"
                className="smallinput"
                name="inflowShop30"
              />
            </div>
          </div>
        </td>

        {/* ======== आमद (खरीद)-दु. ========= */}

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="buyRateShop750"
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="buyRateShop375"
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="buyRateShop180"
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="buyRateShop30"
              />
            </div>
          </div>
        </td>

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="inflowOut750"
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="inflowOut375"
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="inflowOut180"
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="inflowOut30"
              />
            </div>
          </div>
        </td>

        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="buyRateOut750"
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="buyRateOut375"
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="buyRateOut180"
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="buyRateOut30"
              />
            </div>
          </div>
        </td>

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="inflowCredit750"
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="inflowCredit375"
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="inflowCredit180"
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="inflowCredit30"
              />
            </div>
          </div>
        </td>

        {/*================ खरीद रेट - बा. ==================  */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="send750"
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="send375"
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="send180"
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="send30"
              />
            </div>
          </div>
        </td>

        {/* ======== आमद (उधारी) ========= */}

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
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
                onChange={(e) => fristFormOnChange(e, index)}
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
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="sales30"
              />
            </div>
          </div>
        </td>
        {/* ======== अन्तिम स्टॉक ========= */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="total30"
              />
            </div>
          </div>
        </td>
        {/* ============= कुल योग ================ */}
        <td>
          <div className="form-control">
            <input
              onChange={(e) => fristFormOnChange(e, index)}
              type="number"
              className="semiSmallInput"
              name="grandTotal"
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default AddOneFristForm;
