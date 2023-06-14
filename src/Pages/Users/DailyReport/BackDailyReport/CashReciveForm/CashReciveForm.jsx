import React from "react";
import usePartyNames from "../../../../../Hooks/usePartyNames";
import Loader from "../../../../../Components/Loader/Loader";
import { Autocomplete, TextField } from "@mui/material";
import swal from "sweetalert";

const CashReciveForm = ({
  index,
  onChangeCashRecive,
  item,
  handleRemoveFieldsCashBack,
}) => {

  const {
    parties,
    partyLoaded,
    partners,
    partnerLoaded,
    branches,
    branchLoaded,
  } = usePartyNames();

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
      <th>{index+1}</th>
        <th
          className="cross"
          onClick={() => {
            swal({
              title: "Are you sure?",
              text: `Once deleted, you will not be able to recover row ${
                index + 1
              }`,
              icon: "warning",
              buttons: true,
              dangerMode: true,
            }).then((willDelete) => {
              if (willDelete) {
                handleRemoveFieldsCashBack(index);
                swal(`row ${index + 1}  has been deleted!`, {
                  icon: "success",
                });
              } else {
                swal("Your row is safe!");
              }
            });
          }}
        >
          X
        </th>

        <td>
          <div className="form-control">
            <select
              className="smallinput wd-30"
              name="type"
              required
              value={item.type}
              onChange={(e) => {
                onChangeCashRecive(e, index);
              }}
              id=""
            >
              <option value="PARTY">पार्टी</option>
              <option value="PARTNER">पार्टनर</option>
              <option value="BRANCH">ब्रांच</option>
              <option value="OTHER">अन्य</option>
            </select>
          </div>
        </td>

        <td>
          <div className="form-control">
         
            {item.type==="PARTY" ?(
            <Autocomplete
              size="small"
              style={{
                width: "20rem",
                border:"1px solid black",
              borderRadius:"5px"
              }}
              options={parties.length > 0 ? parties.filter((prev)=>prev.isActive===true) : ["no options"]}
              getOptionLabel={(option) => (option ? option.partyName : "")}
              className={item.type === "PARTY" ? "" : "displayHidden"}
              onChange={(event, value) => {
                if (value) {
                  item.name = value.partyName;
                  item.id = value._id;
                } else {
                  item.name = "";
                  item.id = "";
                }

                onChangeCashRecive(event, index);
                console.log(item);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  className="dailyReportInput"
                  inputProps={{ ...params.inputProps, value: item.name }}
                  onChange={(event) => {
                    item.name = event.target.value;
                   
                  }}
                />
              )}
            />) : item.type==="PARTNER" ?(

            <Autocomplete
              size="small"
              style={{
                width: "20rem",
                border:"1px solid black",
              borderRadius:"5px"
              }}
              options={partners.length > 0 ? partners : ["no options"]}
              getOptionLabel={(option) => (option ? option.name : "")}
              className={item.type === "PARTNER" ? "" : "displayHidden"}
              

              onChange={(event, value) => {
                if (value) {
                  item.name = value.name;
                  item.id = value._id;
                } else {
                  item.name = "";
                  item.id = "";
                }

                onChangeCashRecive(event, index);
                console.log(item);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
                  className="dailyReportInput"
                  inputProps={{ ...params.inputProps, value: item.name }}
                  onChange={(event) => {
                    item.name = event.target.value;
                  
                  }}
                />
              )}
            />) : item.type==="BRANCH" ?(

            <Autocomplete
              size="small"
              style={{
                width: "20rem",
                border:"1px solid black",
              borderRadius:"5px"
              }}
              options={branches.length > 0 ? branches.filter((prev)=>prev.isActive===true) : ["no options"]}
              getOptionLabel={(option) => (option ? option.branchName : "")}
              className={item.type === "BRANCH" ? "" : "displayHidden"}
            

              onChange={(event, value) => {
                if (value) {
                  item.name = value.branchName;
                  item.id = value._id;
                } else {
                  item.name = "";
                  item.id = "";
                }

              }}
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  className="dailyReportInput"
                  inputProps={{ ...params.inputProps, value: item.name }}
                  onChange={(event) => {
                    item.name = event.target.value;
            
                  }}
                />
              )}
            />) : <div></div>}
          </div>
        </td>

        

        <td>
          <input
            type="number"
            required
            name="amount"
            min={0}
            value={item.amount}
            onChange={(e) => onChangeCashRecive(e, index)}
            className="smallinput wd-7"
            
          />
        </td>
        <td>
          <input
            type="text"
            required
            name="comment"
            value={item.comment}
            onChange={(e) => onChangeCashRecive(e, index)}
            className="smallinput"
            style={{
              width: "240px",
            }}
          />
        </td>
      </tr>
    </>
  );
};

export default CashReciveForm;
