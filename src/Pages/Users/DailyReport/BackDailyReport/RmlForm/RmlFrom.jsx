import React, { useContext, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { DataContextApi } from "../../../../../Context/DataContext";
import useLiquors from "../../../../../Hooks/useLiquors";
import useRmlAdd from "../../../../../Hooks/useRmlAdd";
import Loader from "../../../../../Components/Loader/Loader";
import swal from "sweetalert";
import axios from "axios";

const RmlFrom = ({
  index,
  onChangeRmlHandler,
  item,
  addRmlState,
  handleRemoveFieldsBackRml,
}) => {
  const serialNo = index + 1;
  const { setAddRmlState } = useRmlAdd();
  // const { liquors } = useContext(DataContextApi);
  let rmlData = addRmlState;
  const { brandsLoaded, liquors } = useLiquors();


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



  

  return (
    <>
      <tr>
        <th >{serialNo}</th>
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
                handleRemoveFieldsBackRml(index);
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
                onChangeRmlHandler(event, index);
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
          <select
            // className="select select-bordered"
            className="smallinput wd-9"
            name="ml"
            value={item.ml}
            onChange={(e) => onChangeRmlHandler(e, index)}
            required
          >
            {/* 750,700,650,550,500,375,330,275,250,200,180,90,60,50 */}

            <option value={750}>
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
        </td>
        <td>
          <div className="form-control">
            <input
              type="number"
                required
                min={0}
              className="smallinput"
              name="averageRate"
              value={Number(item.averageRate).toFixed(2)}
              onChange={(e) => onChangeRmlHandler(e, index)}
              disabled
            />
          </div>
        </td>

        <td>
          <div className="form-control items-center">
            <input
              type="number"
                required
                min={0}
                disabled
              className="smallinput wd-5"
              name="openingStock"
              value={item.openingStock}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>
        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="form-control items-center">
            <input
              type="number"
                required
                min={0}
              className="smallinput wd-5"
              name="incomingPurchase"
              value={item.incomingPurchase}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>
        {/* ======== आमद (खरीद)-बा. rate ========= */}

        <td>
          <div className="form-control items-center">
            <input
              type="number"
                required
                min={0}
              className="smallinput"
              name="buyRate"
              value={item.buyRate}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>
        {/* ======== khareed bahar ========= */}

        <td>
          <div className="form-control items-center">
            <input
              type="number"
                required
                min={0}
              className="smallinput wd-5"
              name="incomePurchase"
              value={item.incomePurchase}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>

        {/* ======== khareed rate bahar ========= */}
        <td>
          <div className="form-control items-center">
            <input
              type="number"
                required
                min={0}
              className="smallinput"
              name="purchaseRate"
              value={item.purchaseRate}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>
        {/* ======== udhari ========= */}
        <td>
          <div className="form-control items-center">
            <input
              type="number"
                required
                min={0}
              className="smallinput wd-5"
              name="inflowCredit"
              value={item.inflowCredit}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>
        {/* ======== bhejan ========= */}
        <td>
          <div className="form-control items-center">
            <input
              type="number"
                required
                min={0}
              className="smallinput wd-5"
              name="sending"
              value={item.sending}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>
        {/* ======== योग/शेष ========= */}
        <td>
          <div className="form-control items-center">
            <input
              type="number"
                required
                min={0}
              className="smallinput wd-5"
              name="sumRemainder"
              value={item.sumRemainder}
              onChange={(e) => onChangeRmlHandler(e, index)}
              disabled
            />
          </div>
        </td>
        {/* ======== अन्तिम स्टॉक ========= */}
        <td>
          <div className="form-control items-center">
            <input
              type="number"
                required
                min={0}
              className="smallinput wd-5"
              name="closingStock"
              value={item.closingStock}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>
        {/* ============= बिक्री ================ */}
        <td>
          <div className="form-control items-center">
            <input
              type="number"
                required
                min={0}
              className="smallinput wd-5"
              name="sales"
              value={item.sales}
              onChange={(e) => onChangeRmlHandler(e, index)}
              disabled
            />
          </div>
        </td>
        {/* ============= रेट ================ */}
        <td>
          <div className="form-control items-center">
            <input
              type="number"
                required
                min={0}
              className="smallinput wd-8"
              name="rate"
              value={item.rate}
              onChange={(e) => onChangeRmlHandler(e, index)}
            />
          </div>
        </td>
        {/* ============= योग ================ */}
        <td>
          <div className="form-control items-center">
            <input
              type="number"
                required
                min={0}
              className="smallinput wd-11"
              name="cost"
              value={item.cost}
              onChange={(e) => onChangeRmlHandler(e, index)}
              disabled
            />
          </div>
        </td>
        {/* ============= कुल योग ================ */}
      </tr>
    </>
  );
};

export default RmlFrom;
