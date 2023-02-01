import React, { useContext } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { DataContextApi } from "../../../../../Context/DataContext";
import useLiquors from "../../../../../Hooks/useLiquors";
import useRmlAdd from "../../../../../Hooks/useRmlAdd";
import Loader from "../../../../../Components/Loader/Loader";

const RmlFrom = ({ index, onChangeRmlHandler, item, addRmlState }) => {
  const serialNo = index + 1;
  const { setAddRmlState } = useRmlAdd()
  // const { liquors } = useContext(DataContextApi);
  let rmlData = addRmlState
  const {
    brands,
    brandsLoaded,
    checkLiquor,
    liquors
  } = useLiquors()

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
        <th>{serialNo}</th>
        <td>
          <div className="form-control">
            {/* <input
              type="text"
              className="semiSmallInput"
              name="brandName"
              value={item.brandName}
              onChange={(e) => onChangeRmlHandler(e, index)}
            /> */}

            <Autocomplete
              options={liquors.length > 0 ? liquors.filter((brand) => {
                if (brand.type === 'RML') {
                  return brand
                }
              }) : ['no options']}
              freeSolo
              getOptionLabel={(option) => option ? option.brandName : ""}

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
                  item.brandName = value.brandName
                  item.liquorID = value._id

                } else {
                  item.brandName = ""
                  item.liquorID = ""
                }
                setAddRmlState(addRmlState)
                onChangeRmlHandler(event, index)

                console.log(addRmlState)

              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="dailyReportInput"
                  value={item.brandName}
                  inputProps={{ ...params.inputProps, value: item.brandName }}
                  name='brandName'
                  onChange={(event) => {
                    item.brandName = event.target.value;
                    item.liquorID = null;
                    onChangeRmlHandler(event, index)
                    console.log(event.target.name)
                  }}
                />
              )}
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="averageRate"
              value={item.averageRate}
              onChange={(e) => onChangeRmlHandler(e, index)}
              disabled
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="openingStock"
              value={item.openingStock}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>
        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="incomingPurchase"
              value={item.incomingPurchase}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>
        {/* ======== आमद (खरीद)-बा. rate ========= */}

        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="buyRate"
              value={item.buyRate}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>
        {/* ======== khareed bahar ========= */}

        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="incomePurchase"
              value={item.incomePurchase}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>

        {/* ======== khareed rate bahar ========= */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="purchaseRate"
              value={item.purchaseRate}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>
        {/* ======== udhari ========= */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="inflowCredit"
              value={item.inflowCredit}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>
        {/* ======== bhejan ========= */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="sending"
              value={item.sending}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>
        {/* ======== योग/शेष ========= */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="sumRemainder"
              value={item.sumRemainder}
              onChange={(e) => onChangeRmlHandler(e, index)}
              disabled
            />
          </div>
        </td>
        {/* ======== अन्तिम स्टॉक ========= */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="closingStock"
              value={item.closingStock}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>
        {/* ============= बिक्री ================ */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="sales"
              value={item.sales}
              onChange={(e) => onChangeRmlHandler(e, index)}
              disabled
            />
          </div>
        </td>
        {/* ============= रेट ================ */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="rate"
              value={item.rate}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>
        {/* ============= योग ================ */}
        <td>
          <div className="form-control">
            <input
              type="number"
              className="semiSmallInput"
              name="cost"
              value={item.cost}
              onChange={(e) => onChangeRmlHandler(e, index)}
              disabled
            />
          </div>
        </td>
        {/* ============= कुल योग ================ */}
      </tr>
    </>
  );
};

export default RmlFrom;
