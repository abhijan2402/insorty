import React, { useState,useRef } from "react";
import "react-bootstrap-typeahead/css/Typeahead.css";
import Loader from "../../../../../../Components/Loader/Loader";
import { Autocomplete, TextField } from "@mui/material";
import useLiquors from "../../../../../../Hooks/useLiquors";
import swal from "sweetalert";
import axios from "axios";
import jwtDecode from "jwt-decode";

const AddOneFristFromBack = ({
  index,
  item,
  onChangeFristBackFormHandler,
  handleRemoveFieldsBack,
}) => {
  const SerialNo = index + 1;
  const token = localStorage.getItem("token");
  const shopType = jwtDecode(localStorage.getItem("token")).shopType;
 

  const ip = useRef(null)
  const ip2 = useRef(null)
  const ip3 = useRef(null)
  const ip4 = useRef(null)

  const scrollToComponent = (ref) => {
    if(shopType==="SHOP"){
    ref.current.scrollIntoView({ behavior: 'smooth',block:"center",inline:"center" });
  }
  };
  const scrollToStart = (ref) => {
    if(shopType==="SHOP"){
    ref.current.scrollIntoView({ behavior: 'smooth',block:"center",inline:"start" });
  }
  };



  const { brandsLoaded } = useLiquors();


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

  if (brandsLoaded) {
    return (
      <div>
        <Loader></Loader>
      </div>
    );
  }
  return (
    <>
      <tr>
        <th>{SerialNo}</th>
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
                handleRemoveFieldsBack(index);
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
          <input type="button" value="" autoFocus={shopType==="SHOP" ? true : false} />
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
              options={options.filter((brand)=>brand.type==='BEER')}
              getOptionLabel={(option) => (option ? option.brandName : "")}
              onChange={(event, value) => {
                if (value) {
                  item.brandName = value.brandName;
                  item.liquorID = value._id;
                  item.size =  value;
                  item.buyRate650 = value.sizes.find((brand)=>brand.quantityInML===650).rate
                item.buyRate550 = value.sizes.find((brand)=>brand.quantityInML===500).rate
                item.buyRate330 = value.sizes.find((brand)=>brand.quantityInML===330).rate
                } else {
                  item.brandName = "";
                  item.liquorID = "";
                }
                onChangeFristBackFormHandler(event, index);
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
        {/* ======== MRP Input ========= */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                disabled
                className="smallinput wd-7"
                value={Number(item.averageRate650).toFixed(2)}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
                name="averageRate650"
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                disabled
                className="smallinput wd-7"
                value={Number(item.averageRate550).toFixed(2)}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
                name="averageRate550"
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                disabled
                className="smallinput wd-6"
                value={Number(item.averageRate330).toFixed(2)}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
                name="averageRate330"
              />
            </div>
          </div>
        </td>
        {/* ======== प्रारम्भिक स्टॉक ========= */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                className="smallinput"
                name="startingStock650"
                disabled
                value={item.startingStock650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                className="smallinput"
                name="startingStock550"
                disabled
                value={item.startingStock550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                className="smallinput"
                name="startingStock330"
                disabled
                value={item.startingStock330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>
          </div>
        </td>

        {/* ======== आमद (खरीद)-दु. ========= */}

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                ref={ip}
                onFocus={()=>scrollToComponent(ip)}
                className="smallinput"
                name="incomingPurchase650"
                value={item.incomingPurchase650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                className="smallinput"
                name="incomingPurchase550"
                value={item.incomingPurchase550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                className="smallinput"
                name="incomingPurchase330"
                value={item.incomingPurchase330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>
          </div>
        </td>

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                disabled
                min={0}
                className="smallinput  wd-7 "
                name="buyRate650"
                value={item.buyRate650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                disabled
                min={0}
                className="smallinput wd-6 "
                name="buyRate550"
                value={item.buyRate550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                disabled
                className="smallinput wd-6"
                name="buyRate330"
                value={item.buyRate330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>
          </div>
        </td>

        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                className="smallinput"
                name="incomePurchase650"
                value={item.incomePurchase650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                className="smallinput"
                name="incomePurchase550"
                value={item.incomePurchase550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                className="smallinput"
                name="incomePurchase330"
                value={item.incomePurchase330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>
          </div>
        </td>

        {/*================ खरीद रेट - बा. ==================  */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                ref={ip2}
                onFocus={()=>scrollToComponent(ip2)}
                className="smallinput wd-7"
                name="purchaseRate650"
                value={item.purchaseRate650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                className="smallinput wd-6"
                name="purchaseRate550"
                value={item.purchaseRate550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                className="smallinput wd-6"
                name="purchaseRate330"
                value={item.purchaseRate330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>
          </div>
        </td>

        {/* ======== आमद (उधारी) ========= */}

        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                className="smallinput"
                name="inflowCredit650"
                value={item.inflowCredit650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                className="smallinput"
                name="inflowCredit550"
                value={item.inflowCredit550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                className="smallinput"
                name="inflowCredit330"
                value={item.inflowCredit330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>
          </div>
        </td>

        {/* ======== भेजान ========= */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                className="smallinput"
                name="sending650"
                value={item.sending650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                className="smallinput"
                name="sending550"
                value={item.sending550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                className="smallinput"
                name="sending330"
                value={item.sending330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>
          </div>
        </td>
        {/* ======== योग/शेष ========= */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                disabled
                className="smallinput"
                name="sumRemainder650"
                value={item.sumRemainder650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                disabled
                className="smallinput"
                name="sumRemainder550"
                value={item.sumRemainder550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                disabled
                className="smallinput"
                name="sumRemainder330"
                value={item.sumRemainder330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>
          </div>
        </td>
        {/* ======== अन्तिम स्टॉक ========= */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                ref={ip3}
                onFocus={()=>scrollToComponent(ip3)}
                className="smallinput"
                name="closingStock650"
                value={item.closingStock650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
               
                className="smallinput"
                name="closingStock550"
                value={item.closingStock550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                className="smallinput"
                name="closingStock330"
                value={item.closingStock330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>
          </div>
        </td>
        {/* ============= बिक्री ================ */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                disabled
                className="smallinput"
                name="sales650"
                value={item.sales650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                disabled
                className="smallinput"
                name="sales550"
                value={item.sales550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                disabled
                className="smallinput"
                name="sales330"
                value={item.sales330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>
          </div>
        </td>
        {/* ============= रेट ================ */}
        <td>
          <div className="flex ">
            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                ref={ip4}
                onFocus={()=>scrollToStart(ip4)}
                className="smallinput"
                name="mainRate650"
                value={item.mainRate650}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                className="smallinput"
                name="mainRate550"
                value={item.mainRate550}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                required
                min={0}
                className="smallinput"
                name="mainRate330"
                value={item.mainRate330}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
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
                required
                min={0}
                className="smallinput wd-6"
                name="total650"
                disabled
                value={Number(item.total650).toFixed(2)}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                required
                min={0}
                className="smallinput wd-6"
                name="total550"
                disabled
                value={Number(item.total550).toFixed(2)}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                required
                min={0}
                className="smallinput wd-6"
                name="total330"
                disabled
                value={Number(item.total330).toFixed(2)}
                onChange={(event) => onChangeFristBackFormHandler(event, index)}
              />
            </div>
          </div>
        </td>

        <td>
          <div className="form-control">
            <input
              type="text"
              required
              min={0}
              disabled
              className="smallinput wd-7"
              name="grandTotal"
              value={(Number(item.grandTotal) || 0).toFixed(2)}
              onChange={(event) => onChangeFristBackFormHandler(event, index)}
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default AddOneFristFromBack;
