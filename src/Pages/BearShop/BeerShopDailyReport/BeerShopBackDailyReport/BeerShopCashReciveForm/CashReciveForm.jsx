import React,{useState} from "react";
import usePartyNames from "../../../../../Hooks/usePartyNames";
import Loader from "../../../../../Components/Loader/Loader";
import { Autocomplete,TextField } from "@mui/material";


const CashReciveForm = ({ index, onChangeCashRecive, item }) => {

  // const {type,setType} = useState("PARTY")

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
    <>
      <tr>
        <td>
          <div className="form-control">
            {/* <input
              type="text"
              className="semiSmallInput"
              name="reson"
              value={item.reson}
              onChange={(e) => onChangeCashRecive(e, index)}
             
            /> */}
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
              className={item.type === "PARTY" ? '' :'displayHidden'}
              onChange={(event, value) => {
                if (value) {
                  item.name = value.partyName
                  item.id = value._id
                } else {
                  item.name = ""
                  item.id = ""
                }

                // onChangePurchesOutSide(event, index)
                console.log(item)
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="dailyReportInput"
                // value={item.partyName}
                // inputProps={{ ...params.inputProps, value: item.partyName }}

                onChange={(event) => {
                  item.name = event.target.value;
                  // item.liquorID = null;
                  // onChangePurchesOutSide(event, index)
                }}
                />
              )}
            />

            <Autocomplete
              options={partners.length > 0 ? partners : ['no options']}
              getOptionLabel={(option) => option ? option.name : ""}
              className={item.type === "PARTNER" ? '' : 'displayHidden'}

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
                  item.name = value.name
                  item.id = value._id
                } else {
                  item.name = ""
                  item.id = ""
                }

                // onChangePurchesOutSide(event, index)
                console.log(item)
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="dailyReportInput"
                  // value={item.partyName}
                  // inputProps={{ ...params.inputProps, value: item.partyName }}

                  onChange={(event) => {
                    item.name = event.target.value;
                    // item.liquorID = null;
                    // onChangePurchesOutSide(event, index)
                  }}
                />
              )}
            />

            <Autocomplete
              options={branches.length > 0 ? branches : ['no options']}
              getOptionLabel={(option) => option ? option.branchName : ""}
              className={item.type === "BRANCH" ? '' : 'displayHidden'}

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
                  item.name = value.branchName
                  item.id = value._id
                } else {
                  item.name = ""
                  item.id = ""
                }

                // onChangePurchesOutSide(event, index)
                console.log(branches)
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="dailyReportInput"
                  // value={item.partyName}
                  // inputProps={{ ...params.inputProps, value: item.partyName }}

                  onChange={(event) => {
                    item.name = event.target.value;
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
            <select className="semiSmallInput" name="type" value={item.type} onChange={(e) => {onChangeCashRecive(e, index)}} id="">
              <option value="PARTY">Party</option>
              <option value="PARTNER">Partner</option>
              <option value="BRANCH">Branch</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
        </td>

        <td>
          <input
            type="number"
            name="amount"
            value={item.amount}
            onChange={(e) => onChangeCashRecive(e, index)}
            className="semiSmallInput"
            style={{
              width: "100%",
            }}
          />
        </td>
        <td>
          <input
            type="text"
            name="comment"
            value={item.comment}
            onChange={(e) => onChangeCashRecive(e, index)}
            className="semiSmallInput"
            style={{
              width: "100%",
            }}
          />
        </td>
      </tr>
    </>
  );
};

export default CashReciveForm;
