import React from "react";

const AddOneFristForm = ({ beerFront, index, fristFormOnChange }) => {
  console.log(beerFront.openingStock30);
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
              required
              min={0}
              name="brandName"
              value={beerFront.brandName}
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
                required
                min={0}
                value={beerFront.averageRate750}
              />
            </div>
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput "
                name="averageRate375"
                required
                min={0}
                value={beerFront.averageRate375}
              />
            </div>
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput "
                required
                min={0}
                name="averageRate180"
                value={beerFront.averageRate180}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                required
                min={0}
                name="averageRate30"
                value={beerFront.averageRate30}
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
                required
                min={0}
                value={beerFront.openingStock750}
                name="openingStock750"
              />
            </div>
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput "
                required
                min={0}
                value={beerFront.openingStock375}
                name="openingStock375"
              />
            </div>
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                required
                min={0}
                type="number"
                className="smallinput "
                name="openingStock180"
                value={beerFront.openingStock180}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                required
                min={0}
                type="number"
                className="smallinput"
                name="openingStock30"
                value={beerFront.openingStock30}
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
                className="smallinput"
                type="number"
                name="inflowShop750"
                required
                min={0}
                value={beerFront.inflowShop750}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                required
                min={0}
                type="number"
                className="smallinput"
                name="inflowShop375"
                value={beerFront.inflowShop375}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                required
                min={0}
                type="number"
                className="smallinput"
                name="inflowShop180"
                value={beerFront.inflowShop180}
              />
            </div>
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                required
                min={0}
                type="number"
                className="smallinput"
                name="inflowShop30"
                value={beerFront.inflowShop30}
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
                required
                min={0}
                value={beerFront.buyRateShop750}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="buyRateShop375"
                value={beerFront.buyRateShop375}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="buyRateShop180"
                value={beerFront.buyRateShop180}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="buyRateShop30"
                value={beerFront.buyRateShop30}
                required
                min={0}
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
                value={beerFront.inflowOut750}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="inflowOut375"
                value={beerFront.inflowOut375}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="inflowOut180"
                value={beerFront.inflowOut180}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="inflowOut30"
                value={beerFront.inflowOut30}
                required
                min={0}
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
                value={beerFront.buyRateOut750}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="buyRateOut375"
                value={beerFront.buyRateOut375}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="buyRateOut180"
                value={beerFront.buyRateOut180}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="buyRateOut30"
                value={beerFront.buyRateOut30}
                required
                min={0}
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
                value={beerFront.inflowCredit750}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="inflowCredit375"
                value={beerFront.inflowCredit375}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="inflowCredit180"
                value={beerFront.inflowCredit180}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="inflowCredit30"
                value={beerFront.inflowCredit30}
                required
                min={0}
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
                value={beerFront.send750}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="send375"
                value={beerFront.send375}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="send180"
                value={beerFront.send180}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="send30"
                value={beerFront.send30}
                required
                min={0}
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
                value={beerFront.sumRemaining30}
                required
                min={0}
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
                value={beerFront.closingStock30}
                required
                min={0}
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
                value={beerFront.sales30}
                required
                min={0}
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
                value={beerFront.total30}
                required
                min={0}
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
              value={beerFront.grandTotal}
              required
              min={0}
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default AddOneFristForm;
