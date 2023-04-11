import React from "react";
import Loader from "../../../../../../Components/Loader/Loader";
import usePartyNames from "../../../../../../Hooks/usePartyNames";
import useLiquors from "../../../../../../Hooks/useLiquors";
import { Autocomplete, TextField } from "@mui/material";
import swal from "sweetalert";

const InflowBorrowingRML = ({
  index,
  onChangeBorrowingRml,
  item,
  handleRemoveFieldsInflow,
}) => {
  const { brandsLoaded, liquors } = useLiquors();

  const { parties, partyLoaded } = usePartyNames();

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
                handleRemoveFieldsInflow(index);
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
            <Autocomplete
              size="small"
              style={{
                width: "20rem",
              }}
              options={parties.length > 0 ? parties : ["no options"]}
              getOptionLabel={(option) => (option ? option.partyName : "")}
              onChange={(event, value) => {
                if (value) {
                  item.partyName = value.partyName;
                  item.partyId = value._id;
                } else {
                  item.partyName = "";
                  item.partyId = "";
                }
                onChangeBorrowingRml(event, index);
                console.log(item);
              }}
              renderInput={(params) => (
                <TextField
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
            <Autocomplete
              size="small"
              style={{
                width: "20rem",
              }}
              options={liquors.length > 0 ? liquors : ["no options"]}
              getOptionLabel={(option) => (option ? option.brandName : "")}
              onChange={(event, value) => {
                if (value) {
                  item.brandName = value.brandName;
                  item.liquorId = value._id;
                } else {
                  item.brandName = "";
                  item.liquorId = "";
                }
                onChangeBorrowingRml(event, index);
                console.log(item);
              }}
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  className="dailyReportInput"

                  inputProps={{ ...params.inputProps, value: item.brandName }}
                  onChange={(event) => {
                    item.brandName = event.target.value;
                   
                  }}
                />
              )}
            />
          </div>
        </td>

        <td>
          <div className="form-control ">
            <select

              className="smallinput wd-9"
              name="quantity"
              value={item.quantity}
              required
              onChange={(e) => {
                onChangeBorrowingRml(e, index);
              }}
            >
             
              <option selected value={750}>
                750ml
              </option>
              <option value={700}>700ml</option>
              <option value={650}>650ml</option>
              <option value={550}>550ml</option>
              <option value={500}>500ml</option>
              <option value={375}>375ml</option>
              <option value={330}>330ml</option>
              <option value={275}>275ml</option>
              <option value={250}>250ml</option>
              <option value={200}>200ml</option>
              <option value={180}>180ml</option>
              <option value={90}>90ml</option>
              <option value={60}>60ml</option>
              <option value={50}>50ml</option>
            </select>
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="number"
              required
              className="smallinput"
              min={0}
              name="theNumber"
              value={item.theNumber}
              onChange={(e) => onChangeBorrowingRml(e, index)}
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="text"
              required
              className="smallinput wd-30"
              name="reason"
              value={item.reason}
              onChange={(e) => onChangeBorrowingRml(e, index)}
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default InflowBorrowingRML;
