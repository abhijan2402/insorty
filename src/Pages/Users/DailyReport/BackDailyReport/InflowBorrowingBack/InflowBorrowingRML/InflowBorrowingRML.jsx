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
  const { brands, brandsLoaded, checkLiquor, liquors } = useLiquors();

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
                width: "10rem",
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
                  // value={item.partyName}
                  inputProps={{ ...params.inputProps, value: item.partyName }}
                  onChange={(event) => {
                    item.partyName = event.target.value;
                    // item.liquorID = null;
                    // onChangeBorrowingRml(event, index)
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
                width: "10rem",
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
                  // value={item.brandName}
                  inputProps={{ ...params.inputProps, value: item.brandName }}
                  onChange={(event) => {
                    item.brandName = event.target.value;
                    // item.liquorID = null;
                    // onChangeBorrowingRml(event, index)
                  }}
                />
              )}
            />
          </div>
        </td>

        <td>
          <div className="form-control ">
            <select
              // className="select select-bordered"
              className="semiSmallInput"
              name="quantity"
              value={item.quantity}
              required
              onChange={(e) => {
                onChangeBorrowingRml(e, index);
              }}
            >
              {/* 750,700,650,550,500,375,330,275,250,200,180,90,60,50 */}

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
              className="SmallInput"
              name="theNumber"
              value={item.theNumber}
              onChange={(e) => onChangeBorrowingRml(e, index)}
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="number"
              required
              className="SmallInput"
              name="rate"
              value={item.rate}
              onChange={(e) => onChangeBorrowingRml(e, index)}
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="number"
              required
              className="SmallInput"
              name="total"
              value={item.total}
              disabled
              onChange={(e) => onChangeBorrowingRml(e, index)}
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="text"
              required
              className="semiSmallInput"
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
