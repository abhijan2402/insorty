import React from "react";
import Loader from "../../../../../../Components/Loader/Loader";
import usePartyNames from "../../../../../../Hooks/usePartyNames";
import { Autocomplete, TextField } from "@mui/material";


const CreditDabitForm = ({ item, index, onChangeCarditDabit }) => {
  const { parties,
    partyLoaded,
    partners,
    partnerLoaded,
    branches,
    branchLoaded } = usePartyNames()

  if (partyLoaded || partnerLoaded || branchLoaded) {
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
            options={parties.length > 0 ? parties : ['no options']}
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
            className={item.partyType === "PARTY" ? '' : 'displayHidden'}
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
                  // onChangePurchesOutSide(event, index)
                }}
              />
            )}
          />

          <Autocomplete
            options={partners.length > 0 ? partners : ['no options']}
            getOptionLabel={(option) => option ? option.name : ""}
            className={item.partyType === "PARTNER" ? '' : 'displayHidden'}
                
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
                item.partyName = value.name
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
                  // onChangePurchesOutSide(event, index)
                }}
              />
            )}
          />

          <Autocomplete
            options={branches.length > 0 ? branches : ['no options']}
            getOptionLabel={(option) => option ? option.branchName : ""}
            className={item.partyType === "BRANCH" ? '' : 'displayHidden'}

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
                item.partyName = value.branchName
                item.partyId = value._id
              } else {
                item.partyName = ""
                item.partyId = ""
              }

              onChangeCarditDabit(event, index)
              console.log(branches)
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
                  // onChangePurchesOutSide(event, index)
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
