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
          <select
            type="text"
            required
            className="smallinput wd-30"
            name="partyType"
            value={item.partyType}
            onChange={(e) => onChangeCarditDabit(e, index)}
          >
            <option selected value="PARTNER">
            पार्टनर
            </option>
            <option value="PARTY">पार्टी</option>
            <option value="BRANCH">ब्रांच</option>
          </select>
        </div>
      </td>


      <td>
        <div className="form-control">
          <Autocomplete
          size="small"
          style={{
            width: "20rem",
            border:"1px solid black",
              borderRadius:"5px"
          }}
            options={parties.length > 0 ? parties.filter((prev)=>prev.isActive===true) : ['no options']}
            getOptionLabel={(option) => option ? option.partyName : ""}
            
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
                inputProps={{ ...params.inputProps, value: item.partyName }}

                onChange={(event) => {
                  item.partyName = event.target.value;
                  
                }}
              />
            )}
          />

          <Autocomplete
          size="small"
          style={{
            width: "20rem",
            border:"1px solid black",
              borderRadius:"5px"
          }}
            options={partners.length > 0 ? partners : ['no options']}
            getOptionLabel={(option) => option ? option.name : ""}
            className={item.partyType === "PARTNER" ? '' : 'displayHidden'}
            

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
                inputProps={{ ...params.inputProps, value: item.partyName }}

                onChange={(event) => {
                  item.partyName = event.target.value;
                 
                }}
              />
            )}
          />

          <Autocomplete
          size="small"
          style={{
            width: "20rem",
            border:"1px solid black",
              borderRadius:"5px"
          }}
            options={branches.length > 0 ? branches.filter((prev)=>prev.isActive===true) : ['no options']}
            getOptionLabel={(option) => option ? option.branchName : ""}
            className={item.partyType === "BRANCH" ? '' : 'displayHidden'}

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
                inputProps={{ ...params.inputProps, value: item.partyName }}

                onChange={(event) => {
                  item.partyName = event.target.value;
                  
                }}
              />
            )}
          />
        </div>
      </td>

      

      <td>
        <div className="form-control">
          <input
            type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
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
