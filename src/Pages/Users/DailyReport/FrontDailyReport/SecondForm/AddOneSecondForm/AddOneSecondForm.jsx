import React,{useState} from "react";
import useLiquors from "../../../../../../Hooks/useLiquors";
import Loader from "../../../../../../Components/Loader/Loader";
import { Autocomplete, TextField } from "@mui/material";
import swal from "sweetalert";
import axios from "axios";


const AddOneSecondForm = ({
  index,
  item,
  handelSeconFormOnChange,
  handleRemoveFieldsSecond,
}) => {
  const SerialNo = index + 1;

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
        <th>{SerialNo}</th>
        <th>
          <h1
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
                  handleRemoveFieldsSecond(index);
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
            <input type="button" value="" autoFocus />

          </h1>
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
              handelSeconFormOnChange(event, index);
            }}
            renderInput={(params) => (
              <TextField
                required
                size="small"
                {...params}
                // value={beerFront.brandName}
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
              name="selectStockVarient"
              value={item.selectStockVarient}
              onChange={(e) => handelSeconFormOnChange(e, index)}
              required
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
              <option selected value={90}>90ml</option>
              <option value={60}>60ml</option>
              <option value={50}>50ml</option>
            </select>
          </div>
        </td>
        {/* ======== MRP Input ========= */}
        <td>
          <div className="form-control">
            <input
              type="number wd-9"
              required
              min={0}
              value={Number(item.averageRate).toFixed(2)}
              onChange={(e) => handelSeconFormOnChange(e, index)}
              className="smallinput show9Chereter show9Chereter"
              name="averageRate"
              disabled
            />
          </div>
        </td>
        <td>
          <div className="form-control">
            <input
              type="number"
              required
              min={0}
              disabled
              className="smallinput "
              name="startingStock"
              value={item.startingStock}
              onChange={(e) => handelSeconFormOnChange(e, index)}
            />
          </div>
        </td>
        <td>
          <div className="form-control">
            <input
              type="number"
              required
              min={0}
              className="smallinput "
              name="incomingPurchase"
              value={item.incomingPurchase}
              onChange={(e) => handelSeconFormOnChange(e, index)}
            />
          </div>
        </td>
        {/* ======== प्रारम्भिक स्टॉक ========= */}
        <td>
          <div className="form-control">
            <input
              type="number wd-9"
              required
              min={0}
              className="smallinput wd-9"
              name="buyRate"
              value={item.buyRate}
              onChange={(e) => handelSeconFormOnChange(e, index)}
            />
          </div>
        </td>

        {/* ======== आमद (खरीद)-दु. ========= */}

        <td>
          <div className="form-control">
            <input
              type="number"
              required
              min={0}
              className="smallinput"
              name="incomePurchase"
              value={item.incomePurchase}
              onChange={(e) => handelSeconFormOnChange(e, index)}
            />
          </div>
        </td>
        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="form-control">
            <input
              type="number wd-9"
              required
              min={0}
              className="smallinput wd-9"
              name="purchaseRate"
              value={item.purchaseRate}
              onChange={(e) => handelSeconFormOnChange(e, index)}
            />
          </div>
        </td>
        {/* ======== आमद (उधारी) ========= */}

        <td>
          <div className="form-control">
            <input
              type="number"
              required
              min={0}
              className="smallinput"
              name="inflowCredit"
              value={item.inflowCredit}
              onChange={(e) => handelSeconFormOnChange(e, index)}
            />
          </div>
        </td>
        {/* ======== भेजान ========= */}
        <td>
          <div className="form-control">
            <input
              type="number"
              required
              min={0}
              className="smallinput "
              name="sending"
              value={item.sending}
              onChange={(e) => handelSeconFormOnChange(e, index)}
            />
          </div>
        </td>
        {/* ======== योग/शेष ========= */}
        <td>
          <div className="form-control">
            <input
              type="number"
              required
              min={0}
              className="smallinput"
              name="sumRemainder"
              value={item.sumRemainder}
              onChange={(e) => handelSeconFormOnChange(e, index)}
              disabled
            />
          </div>
        </td>
        {/* ======== अन्तिम स्टॉक ========= */}
        <td>
          <div className="form-control">
            <input
              type="number"
              required
              min={0}
              className="smallinput"
              name="closingStock"
              value={item.closingStock}
              onChange={(e) => handelSeconFormOnChange(e, index)}
            />
          </div>
        </td>
        {/* ============= बिक्री ================ */}
        <td>
          <div className="form-control">
            <input
              type="number"
              required
              min={0}
              className="smallinput"
              name="sales"
              value={item.sales}
              onChange={(e) => handelSeconFormOnChange(e, index)}
              disabled
            />
          </div>
        </td>
        {/* ============= रेट ================ */}
        <td>
          <div className="form-control">
            <input
              type="number"
              required
              min={0}
              className="smallinput wd-6"
              name="mainRate"
              value={item.mainRate}
              onChange={(e) => handelSeconFormOnChange(e, index)}
            />
          </div>
        </td>
        {/* ============= योग ================ */}
        <td>
          <div className="form-control">
            <input
              type="number"
              required
              min={0}
              className="smallinput wd-7"
              name="total"
              value={item.total}
              onChange={(e) => handelSeconFormOnChange(e, index)}
              disabled
            />
          </div>
        </td>
        {/* ============= कुल योग ================ */}
      </tr>
    </>
  );
};

export default AddOneSecondForm;
