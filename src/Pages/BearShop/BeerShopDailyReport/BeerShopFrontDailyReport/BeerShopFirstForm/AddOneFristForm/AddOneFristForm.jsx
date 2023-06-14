import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import swal from "sweetalert";
import axios from "axios";


const AddOneFristForm = ({ beerFront, index, fristFormOnChange, removeFristForm }) => {
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
                removeFristForm(index);
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
        </th>
        <td>
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
                beerFront.brandName = value.brandName;
                beerFront.liquorID = value._id;
                beerFront.size = value
              } else {
                beerFront.brandName = "";
                beerFront.liquorID = "";
              }
              fristFormOnChange(event, index);
            }}
            renderInput={(params) => (
              <TextField
                required
                size="small"
                {...params}
                // value={beerFront.brandName}
                inputProps={{
                  ...params.inputProps,
                  value: beerFront.brandName,
                }}
                onChange={(e) => {
                  handleInputChange(e, e.target.value);
                  beerFront.brandName = e.target.value;
                }}
              />
            )}
          />
        </td>
        {/* ======== MRP Input ========= */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type="number"
                className="smallinput  wd-9"
                name="averageRate750"
                onChange={(e) => fristFormOnChange(e, index)}
                required
                min={0}
                value={beerFront.averageRate750}
                disabled
              />
            </div>
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput wd-9"
                name="averageRate375"
                required
                min={0}
                value={beerFront.averageRate375}
                disabled
              />
            </div>
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput wd-9"
                required
                min={0}
                name="averageRate180"
                value={beerFront.averageRate180}
                disabled
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput wd-9"
                required
                min={0}
                name="averageRate30"
                value={beerFront.averageRate30}
                disabled
              />
            </div>
          </div>
        </td>
        <td>
          <div className="flex ">


            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                required
                min={0}
                type="number"
                className="smallinput wd-9"
                name="openingStock30"
                value={beerFront.openingStock750}
                disabled
              />
            </div>
          </div>
        </td>
        {/* ======== प्रारम्भिक स्टॉक ========= */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                className="smallinput"
                type="number"
                name="inflowShop750"
                required
                min={0}
                value={beerFront.inflowShop750}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                required
                min={0}
                type="number"
                className="smallinput"
                name="inflowShop375"
                value={beerFront.inflowShop375}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                required
                min={0}
                type="number"
                className="smallinput"
                name="inflowShop180"
                value={beerFront.inflowShop180}
              />
            </div>
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                required
                min={0}
                type="number"
                className="smallinput wd-9"
                name="inflowShop30"
                value={beerFront.inflowShop30}
                disabled
              />
            </div>
          </div>
        </td>

        {/* ======== आमद (खरीद)-दु. ========= */}

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput wd-9"
                name="buyRateShop750"
                required
                min={0}
                value={beerFront.buyRateShop750}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput wd-9"
                name="buyRateShop375"
                value={beerFront.buyRateShop375}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput wd-8"
                name="buyRateShop180"
                value={beerFront.buyRateShop180}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="buyRateShop30"
                value={beerFront.buyRateShop30}
                disabled
                required
                min={0}
              />
            </div>
          </div>
        </td>

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="inflowOut750"
                value={beerFront.inflowOut750}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="inflowOut375"
                value={beerFront.inflowOut375}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="inflowOut180"
                value={beerFront.inflowOut180}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput wd-9"
                name="inflowOut30"
                value={beerFront.inflowOut30}
                disabled
                required
                min={0}
              />
            </div>
          </div>
        </td>

        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput wd-9"
                name="buyRateOut750"
                value={beerFront.buyRateOut750}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput wd-9"
                name="buyRateOut375"
                value={beerFront.buyRateOut375}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput wd-8"
                name="buyRateOut180"
                value={beerFront.buyRateOut180}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="buyRateOut30"
                value={beerFront.buyRateOut30}
                disabled
                required
                min={0}
              />
            </div>
          </div>
        </td>

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="inflowCredit750"
                value={beerFront.inflowCredit750}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="inflowCredit375"
                value={beerFront.inflowCredit375}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="inflowCredit180"
                value={beerFront.inflowCredit180}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput wd-9"
                name="inflowCredit30"
                value={beerFront.inflowCredit30}
                disabled
                required
                min={0}
              />
            </div>
          </div>
        </td>

        {/*================ खरीद रेट - बा. ==================  */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="send750"
                value={beerFront.send750}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="send375"
                value={beerFront.send375}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="send180"
                value={beerFront.send180}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput wd-9"
                name="send30"
                value={beerFront.send30}
                disabled
                required
                min={0}
              />
            </div>
          </div>
        </td>

        {/* ======== आमद (उधारी) ========= */}

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput wd-8"
                name="sumRemaining30"
                value={beerFront.sumRemaining30}
                disabled
                required
                min={0}
              />
            </div>
          </div>
        </td>
        {/* ======== भेजान ========= */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                name="closingStock30"
                className="smallinput wd-8"
                value={beerFront.closingStock30}
                required
                min={0}
              />
            </div>
          </div>
        </td>
        {/* ======== योग/शेष ========= */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput wd-8"
                name="sales30"
                value={beerFront.sales30}
                disabled
                required
                min={0}
              />
            </div>
          </div>
        </td>

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput"
                name="rate30"
                value={beerFront.rate30}
                required
                min={0}
              />
            </div>
          </div>
        </td>
        {/* ======== अन्तिम स्टॉक ========= */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type="number"
                className="smallinput wd-9"
                name="total30"
                value={beerFront.total30}
                disabled
                required
                min={0}
              />
            </div>
          </div>
        </td>
        {/* ============= कुल योग ================ */}
        <td>
          <div className="form-control">
            <input
              onChange={(e) => fristFormOnChange(e, index)}
              type="number"
              className="semiSmallInput"
              name="grandTotal"
              value={beerFront.grandTotal}
              disabled
              required
              min={0}
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default AddOneFristForm;
