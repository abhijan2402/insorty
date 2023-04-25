import React, { useState } from "react";
import Loader from "../../../../../../Components/Loader/Loader";
import usePartyNames from "../../../../../../Hooks/usePartyNames";
import useLiquors from "../../../../../../Hooks/useLiquors";
import { Autocomplete, TextField } from "@mui/material";
import swal from "sweetalert";
import axios from "axios";

const ShippingForm = ({
  index,
  onChangeShipping,
  item,
  handleRemoveFieldsShipping,
}) => {
  const {  brandsLoaded,  liquors } = useLiquors();

  const { parties, partyLoaded } = usePartyNames();

  const token = localStorage.getItem("token");

  const [options, setOptions] = useState([]);

  const fetchOptions = async (query) => {
    await axios({
      url: `${process.env.REACT_APP_API_URL}/shop/getAllParentLiquors?q=${query}&page=0&pagesize=30`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },
    })
      .then((response) => {
        setOptions(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (event, value) => {
    fetchOptions(value);
  };


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
                handleRemoveFieldsShipping(index);
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
                onChangeShipping(event, index);
                console.log(item);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  required
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
              id="autocomplete"
              size="small"
              style={{
                width: "20rem",
              }}
              options={options}
              getOptionLabel={(option) => (option ? option.brandName : "")}
              onChange={(event, value) => {
                if (value) {
                  item.brandName = value.brandName;
                  item.liquorID = value._id;
                } else {
                  item.brandName = "";
                  item.liquorID = "";
                }
                onChangeShipping(event, index);
              }}
              renderInput={(params) => (
                <TextField
                  required
                  size="small"
                  {...params}
                  // value={item.brandName}
                  inputProps={{
                    ...params.inputProps,
                    value: item.brandName,
                  }}
                  onChange={(e) => {
                    handleInputChange(e, e.target.value);
                    item.brandName = e.target.value;
                  }}
                />
              )}
            />

          </div>
        </td>

        <td>
          <div className="form-control">
            <select
              name="quantity"
              className="smallinput wd-9"
              required
              value={item.quantity}
              onChange={(e) => {
                onChangeShipping(e, index);
                console.log(item);
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
              name="theNumber"
              value={item.theNumber}
              min={0}
              onChange={(e) => onChangeShipping(e, index)}
            />
          </div>
        </td>
        <td>
          <div className="form-control">
            <input
              type="text"
              required
              className="smallinput wd-30"
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
