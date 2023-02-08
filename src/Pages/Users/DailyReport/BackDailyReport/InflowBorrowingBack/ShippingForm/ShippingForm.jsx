import React from "react";
import Loader from "../../../../../../Components/Loader/Loader";
import usePartyNames from "../../../../../../Hooks/usePartyNames";
import useLiquors from "../../../../../../Hooks/useLiquors";
import { Autocomplete, TextField } from "@mui/material";


const ShippingForm = ({ index, onChangeShipping, item }) => {

  const {
    brands,
    brandsLoaded,
    checkLiquor,
    liquors
  } = useLiquors()

  const { parties, partyLoaded } = usePartyNames()

  if (brandsLoaded || partyLoaded) {
    return (
      <div>
        <Loader></Loader>
      </div>
    );
  }

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="form-control">
            <Autocomplete
              options={parties.length>0 ? parties : ['no options']}
              
              getOptionLabel={(option) => option ? option.partyName : ""}
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
                  item.partyName = value.partyName
                  item.liquorID = value._id
                } else {
                  item.partyName = ""
                  item.liquorID = ""
                }
                onChangeShipping(event, index)
                console.log(item)
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="dailyReportInput"
                  // value={item.partyName}
                  // inputProps={{ ...params.inputProps, value: item.partyName }}

                  // onChange={(event) => {
                  //   item.partyName = event.target.value;
                  //   item.liquorID = null;
                  //   onChangeShipping(event, index)
                  // }}
                />
              )}
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <Autocomplete
              options={liquors}
              
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
                onChangeShipping(event, index)
                console.log(item)
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="dailyReportInput"
                  // value={item.brandName}
                  // inputProps={{ ...params.inputProps, value: item.brandName }}

                  // onChange={(event) => {
                  //   item.brandName = event.target.value;
                  //   item.liquorID = null;
                  //   onChangeShipping(event, index)
                  // }}
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
              name="theNumber"
              value={item.theNumber}
              onChange={(e) => onChangeShipping(e, index)}
            />
          </div>
        </td>
        <td>
          <div className="form-control">
            <input
              type="text"
              className="semiSmallInput"
              name="comment"
              value={item.comment}
              onChange={(e) => onChangeShipping(e, index)}
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default ShippingForm;
