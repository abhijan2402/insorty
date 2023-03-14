import React from "react";
import useLiquors from "../../../../../Hooks/useLiquors";
import { Autocomplete, TextField } from "@mui/material";
import Loader from "../../../../../Components/Loader/Loader";
import usePartyNames from "../../../../../Hooks/usePartyNames";
import swal from "sweetalert";

const PurchaseOutSideFrom = ({
  index,
  onChangePurchesOutSide,
  item,
  handleRemoveFieldsPurchaseOut,
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
                handleRemoveFieldsPurchaseOut(index);
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
              options={parties.length > 0 ? parties : ["no options"]}
              size="small"
              style={{
                width: "10rem",
              }}
              getOptionLabel={(option) => (option ? option.partyName : "")}
              onChange={(event, value) => {
                if (value) {
                  item.partyName = value.partyName;
                  item.partyId = value._id;
                } else {
                  item.partyName = "";
                  item.partyId = "";
                }

                onChangePurchesOutSide(event, index);
                console.log(item);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
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
        {/* ======== प्रारम्भिक स्टॉक ========= */}
        <td>
          <div className="form-control">
            <Autocomplete
              size="small"
              style={{
                width: "10rem",
              }}
              options={liquors}
              getOptionLabel={(option) => (option ? option.brandName : "")}
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
                  item.brandName = value.brandName;
                  item.liquorID = value._id;
                } else {
                  item.brandName = "";
                  item.liquorID = "";
                }
                onChangePurchesOutSide(event, index);
                console.log(item);
              }}
              renderInput={(params) => (
                <TextField
                  required
                  {...params}
                  inputProps={{ ...params.inputProps, value: item.brandName }}
                  onChange={(event) => {
                    item.brandName = event.target.value;
                    // item.liquorID = null;
                    // onChangePurchesOutSide(event, index)
                  }}
                />
              )}
            />
          </div>
        </td>

        <td>
          <div className="form-control ">
            <select
              className=""
              required
              name="quantity"
              value={item.quantity}
              onChange={(e) => {
                onChangePurchesOutSide(e, index);
                console.log(item);
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

        {/* ======== आमद (खरीद)-दु. ========= */}

        <td>
          <div className="form-control ">
            <input
              type="number"
                required
              className="SmallInput"
              name="theNumber"
              value={item.theNumber}
              onChange={(e) => onChangePurchesOutSide(e, index)}
            />
          </div>
        </td>
        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="form-control">
            <input
              type="number"
                required
              className="SmallInput"
              name="rate"
              value={item.rate}
              onChange={(e) => onChangePurchesOutSide(e, index)}
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
              disabled
              value={item.total}
              onChange={(e) => onChangePurchesOutSide(e, index)}
            />
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="text"
                required
              className="SmallInput"
              name="reason"
              value={item.reason}
              onChange={(e) => onChangePurchesOutSide(e, index)}
            />
          </div>
        </td>
        {/* ======== आमद (उधारी) ========= */}
      </tr>
    </>
  );
};

export default PurchaseOutSideFrom;
