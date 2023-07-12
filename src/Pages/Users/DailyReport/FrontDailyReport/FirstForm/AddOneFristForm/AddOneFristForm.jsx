import React,{useState} from "react";
import { Autocomplete, TextField } from "@mui/material";
import useLiquors from "../../../../../../Hooks/useLiquors";
import Loader from "../../../../../../Components/Loader/Loader";
import swal from "sweetalert";
import axios from "axios";


const AddOneFristForm = ({
  index,
  handelFristFormOnChange,
  formula,
  myOptions,
  sujestedData,
  addOneFirst,
  handleRemoveFields,
  addOneFristFormState,
  setAddOneFristFormState,
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
        <th>{SerialNo} </th>
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
                  handleRemoveFields(index);
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
            <input type="button" value="" autoFocus/>
          </h1>
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
            options={options.filter((brand)=>brand.type==='WINE')}
            getOptionLabel={(option) => (option ? option.brandName : "")}
            onChange={(event, value) => {
              if (value) {
                addOneFirst.brandName = value.brandName;
                addOneFirst.liquorID = value._id;
                addOneFirst.size = value
                addOneFirst.buyRate750 = value.sizes.find((brand)=>brand.quantityInML===750).rate
                addOneFirst.buyRate330 = value.sizes.find((brand)=>brand.quantityInML===375).rate
                addOneFirst.buyRate180 = value.sizes.find((brand)=>brand.quantityInML===180).rate
                console.log(value)
              } else {
                addOneFirst.brandName = "";
                addOneFirst.liquorID = "";
              }
              handelFristFormOnChange(event, index);
            }}
            renderInput={(params) => (
              <TextField
                required
                size="small"
                {...params}
                // value={beerFront.brandName}
                inputProps={{
                  ...params.inputProps,
                  value: addOneFirst.brandName,
                }}
                onChange={(e) => {
                  handleInputChange(e, e.target.value);
                  addOneFirst.brandName = e.target.value;
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
                className="smallinput wd-9"
                required
                min={0}
                value={Number(addOneFirst.averageRate750).toFixed(2)}
                onChange={(event) => handelFristFormOnChange(event, index)}
                name="averageRate750"
                disabled
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput wd-9"
                required
                min={0}
                value={Number(addOneFirst.averageRate330).toFixed(2)}
                onChange={(event) => handelFristFormOnChange(event, index)}
                name="averageRate330"
                disabled
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput wd-9"
                required
                min={0}
                value={Number(addOneFirst.averageRate180).toFixed(2)}
                onChange={(event) => handelFristFormOnChange(event, index)}
                name="averageRate180"
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
                type="number"
                className="smallinput"
                required
                min={0}
                disabled
                name="startingStock750"
                value={addOneFirst.startingStock750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                required
                min={0}
                disabled
                name="startingStock330"
                value={addOneFirst.startingStock330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                required
                min={0}
                disabled
                name="startingStock180"
                value={addOneFirst.startingStock180}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>
          </div>
        </td>

        {/* ======== आमद (खरीद)-दु. ========= */}

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                required
                min={0}
                name="incomingPurchase750"
                value={addOneFirst.incomingPurchase750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                required
                min={0}
                name="incomingPurchase330"
                value={addOneFirst.incomingPurchase330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                required
                min={0}
                name="incomingPurchase180"
                value={addOneFirst.incomingPurchase180}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>
          </div>
        </td>

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type="number"
                className="smallinput wd-9"
                required
                min={0}
                disabled
                name="buyRate750"
                value={addOneFirst.buyRate750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput wd-9"
                required
                disabled
                min={0}
                name="buyRate330"
                value={addOneFirst.buyRate330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput wd-8"
                required
                disabled
                min={0}
                name="buyRate180"
                value={addOneFirst.buyRate180}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>
          </div>
        </td>

        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                required
                min={0}
                name="incomePurchase750"
                value={addOneFirst.incomePurchase750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                required
                min={0}
                name="incomePurchase330"
                value={addOneFirst.incomePurchase330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                required
                min={0}
                name="incomePurchase180"
                value={addOneFirst.incomePurchase180}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>
          </div>
        </td>

        {/*================ खरीद रेट - बा. ==================  */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type="number"
                className="smallinput  wd-9"
                required
                min={0}
                name="purchaseRate750"
                value={addOneFirst.purchaseRate750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput  wd-9"
                required
                min={0}
                name="purchaseRate330"
                value={addOneFirst.purchaseRate330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput  wd-8"
                required
                min={0}
                name="purchaseRate180"
                value={addOneFirst.purchaseRate180}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>
          </div>
        </td>

        {/* ======== आमद (उधारी) ========= */}

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                required
                min={0}
                name="inflowCredit750"
                value={addOneFirst.inflowCredit750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                required
                min={0}
                name="inflowCredit330"
                value={addOneFirst.inflowCredit330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                required
                min={0}
                name="inflowCredit180"
                value={addOneFirst.inflowCredit180}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>
          </div>
        </td>

        {/* ======== भेजान ========= */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type="number"
                className="smallinput "
                required
                min={0}
                name="sending750"
                value={addOneFirst.sending750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput "
                required
                min={0}
                name="sending330"
                value={addOneFirst.sending330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput "
                required
                min={0}
                name="sending180"
                value={addOneFirst.sending180}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>
          </div>
        </td>
        {/* ======== योग/शेष ========= */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                required
                min={0}
                name="sumRemainder750"
                value={addOneFirst.sumRemainder750}
                onChange={(event) => handelFristFormOnChange(event, index)}
                disabled
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                required
                min={0}
                name="sumRemainder330"
                value={addOneFirst.sumRemainder330}
                onChange={(event) => handelFristFormOnChange(event, index)}
                disabled
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                required
                min={0}
                name="sumRemainder180"
                value={addOneFirst.sumRemainder180}
                onChange={(event) => handelFristFormOnChange(event, index)}
                disabled
              />
            </div>
          </div>
        </td>
        {/* ======== अन्तिम स्टॉक ========= */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                required
                min={0}
                name="closingStock750"
                value={addOneFirst.closingStock750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                required
                min={0}
                name="closingStock330"
                value={addOneFirst.closingStock330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                required
                min={0}
                name="closingStock180"
                value={addOneFirst.closingStock180}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>
          </div>
        </td>
        {/* ============= बिक्री ================ */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                required
                min={0}
                name="sales750"
                disabled
                value={addOneFirst.sales750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                required
                min={0}
                name="sales330"
                disabled
                value={addOneFirst.sales330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput"
                required
                min={0}
                name="sales180"
                disabled
                value={addOneFirst.sales180}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>
          </div>
        </td>
        {/* ============= रेट ================ */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type="number"
                className="smallinput wd-6"
                required
                min={0}
                name="mainRate750"
                value={addOneFirst.mainRate750}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput wd-5"
                required
                min={0}
                name="mainRate330"
                value={addOneFirst.mainRate330}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                className="smallinput wd-5"
                required
                min={0}
                name="mainRate180"
                value={addOneFirst.mainRate180}
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>
          </div>
        </td>
        {/* ============= योग ================ */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type="text"
                className="smallinput wd-6"
                required
                min={0}
                name="total750"
                disabled
                value={
                  Number(addOneFirst.sales750) * Number(addOneFirst.mainRate750)
                }
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                className="smallinput wd-6"
                required
                disabled
                min={0}
                name="total330"
                value={
                  Number(addOneFirst.sales330) * Number(addOneFirst.mainRate330)
                }
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="total180"
                className="smallinput wd-6"
                required
                min={0}
                disabled
                value={
                  Number(addOneFirst.sales180) * Number(addOneFirst.mainRate180)
                }
                onChange={(event) => handelFristFormOnChange(event, index)}
              />
            </div>

            <div className="form-control"></div>
          </div>
        </td>
        {/* ============= कुल योग ================ */}

        <td>
          <div className="form-control">
            <input
              type="text"
              className="smallinput wd-7"
              required
              min={0}
              name="grandTotal"
              disabled
              value={
                Number(addOneFirst.sales750) * Number(addOneFirst.mainRate750) +
                Number(addOneFirst.sales330) * Number(addOneFirst.mainRate330) +
                Number(addOneFirst.sales180) * Number(addOneFirst.mainRate180)
              }
              onChange={(event) => handelFristFormOnChange(event, index)}
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default AddOneFristForm;
