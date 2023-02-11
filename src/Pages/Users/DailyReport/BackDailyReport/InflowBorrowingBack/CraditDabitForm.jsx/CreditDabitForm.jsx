import React from "react";
import Loader from "../../../../../../Components/Loader/Loader";
import usePartyNames from "../../../../../../Hooks/usePartyNames";
import { Autocomplete, TextField } from "@mui/material";


const CreditDabitForm = ({ item, index, onChangeCarditDabit }) => {
  const { parties, partyLoaded } = usePartyNames()

  if (partyLoaded) {
    return (
      <div>
        <Loader></Loader>
      </div>
    );
  }
  return (
    <tr>
      <th>{index + 1}</th>

      <td>
        <div className="form-control">
          <Autocomplete
            options={parties}
            
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
                item.partyId = value._id
              } else {
                item.partyName = ""
                item.partyId = ""
              }
              onChangeCarditDabit(event, index)
              console.log(item)
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                className="dailyReportInput"
                // value={item.partyName}
                inputProps={{ ...params.inputProps, value: item.partyName }}

                onChange={(event) => {
                  item.partyName = event.target.value;
                  // item.liquorID = null;
                  // onChangeCarditDabit(event, index)
                }}
              />
            )}
          />
        </div>
      </td>

      <td>
        <div className="form-control">
          <select
            type="text"
            className="select select-bordered"
            name="partyType"
            value={item.partyType}
            onChange={(e) => onChangeCarditDabit(e, index)}
          >
            <option selected value="PARTNER">
              PARTNER
            </option>
            <option value="PARTY">PARTY</option>
            <option value="BRANCH">BRANCH</option>
          </select>
        </div>
      </td>

      <td>
        <div className="form-control">
          <input
            type="number"
            className="semiSmallInput"
            name="amount"
            value={item.amount}
            onChange={(e) => onChangeCarditDabit(e, index)}
          />
        </div>
      </td>

      <td>
        <div className="form-control">
          <input
            type="text"
            className="semiSmallInput"
            name="note"
            value={item.note}
            onChange={(e) => onChangeCarditDabit(e, index)}
          />
        </div>
      </td>
    </tr>
  );
};

export default CreditDabitForm;
