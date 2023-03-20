import React from "react";
import Loader from "../../../../../../Components/Loader/Loader";
import usePartyNames from "../../../../../../Hooks/usePartyNames";
import { Autocomplete, TextField } from "@mui/material";
import swal from "sweetalert";


const CreditDabitForm = ({ item, index, onChangeCarditDabit, handleRemoveFieldsCredit }) => {
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
      <th className="cross" onClick={() => {
        swal({
          title: "Are you sure?",
          text: `Once deleted, you will not be able to recover row ${index + 1}`,
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
          .then((willDelete) => {
            if (willDelete) {
              handleRemoveFieldsCredit(index)
              swal(`row ${index + 1}  has been deleted!`, {
                icon: "success",
              });
            } else {
              swal("Your row is safe!");
            }
          });
      }}>X</th>


      <td>
        <div className="form-control">
          <Autocomplete
          size="small"
          style={{
            width: "20rem",
          }}
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
                required
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
          size="small"
          style={{
            width: "20rem",
          }}
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
                required
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
          size="small"
          style={{
            width: "20rem",
          }}
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
                required
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
            required
            // className="select select-bordered"
            className="smallinput wd-30"
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
            required
            min={0}
            className="smallinput wd-9"
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
            required
            className="smallinput wd-30"
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
