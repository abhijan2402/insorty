import React, { useState } from "react";
import useLiquors from "../../../../../Hooks/useLiquors";
import { Autocomplete, TextField } from "@mui/material";
import Loader from "../../../../../Components/Loader/Loader";
import usePartyNames from "../../../../../Hooks/usePartyNames";
import swal from "sweetalert";
import axios from "axios";

const PurchaseOutSideFrom = ({
  index,
  onChangePurchesOutSide,
  item,
  handleRemoveFieldsPurchaseOut,
}) => {
  const { brands, brandsLoaded, checkLiquor, liquors } = useLiquors();

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
      <th className="sticky">{index+1}</th>
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
              options={parties.length > 0 ? parties.filter((prev)=>prev.isActive===true) : ["no options"]}
              size="small"
              
              style={{
                width: "20rem",
                border:"1px solid black",
              borderRadius:"5px"
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
                  inputProps={{ ...params.inputProps, value: item.partyName }}
                  onChange={(event) => {
                    item.partyName = event.target.value;
                    
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
              id="autocomplete"
              size="small"
              style={{
                width: "20rem",
                border:"1px solid black",
              borderRadius:"5px"
              }}
              options={options}
              getOptionLabel={(option) => (option ? option.brandName : "")}
              onChange={(event, value) => {
                if (value) {
                  item.brandName = value.brandName;
                  item.liquorID = value._id;
                  item.size = value
                } else {
                  item.brandName = "";
                  item.liquorID = "";
                }
                onChangePurchesOutSide(event, index);
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
          <div className="form-control ">
            <select
            
            className="semiSmallInput wd-9"
            name="quantity"
            value={item.quantity}
            onChange={(e) => onChangePurchesOutSide(e, index)}
            required
            >
              {
            item.size.sizes.map((size)=>{
              if( item.brandName && item.brandName!=="" ){
              return(
                <option value={size.quantityInML}>{size.quantityInML}ml</option>
              )}
              else{
                return (
                  <option disabled>please-select-brand</option>
                )
              }
            })
          }
              
              
            </select>
            
          </div>
        </td>

        {/* ======== आमद (खरीद)-दु. ========= */}

        <td>
          <div className="form-control ">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                min={0}
                required
              className="smallinput"
              name="theNumber"
              value={item.theNumber}
              onChange={(e) => onChangePurchesOutSide(e, index)}
            />
          </div>
        </td>
        <td>
          <div className="form-control ">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                min={0}
                required
              className="smallinput"
              name="rate"
              value={item.rate}
              onChange={(e) => onChangePurchesOutSide(e, index)}
            />
          </div>
        </td>
        <td>
          <div className="form-control ">
            <input
              type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
              disabled
                min={0}
                required
              className="smallinput"
              name="total"
              value={Number(item.total).toFixed(2)}
              onChange={(e) => onChangePurchesOutSide(e, index)}
            />
          </div>
        </td>
        {/* ======== आमद (खरीद)-बा. ========= */}

      

        <td>
          <div className="form-control">
            <input
              type="text"
                required
              className="smallinput wd-30"
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
