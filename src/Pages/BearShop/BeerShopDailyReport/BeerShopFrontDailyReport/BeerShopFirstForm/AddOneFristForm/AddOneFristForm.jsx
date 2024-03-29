import React, { useState,useRef } from "react";
import { Autocomplete, TextField } from "@mui/material";
import swal from "sweetalert";
import axios from "axios";


const AddOneFristForm = ({ beerFront, index, fristFormOnChange, removeFristForm }) => {
  const token = localStorage.getItem("token");

  const ip = useRef(null)
  const ip2 = useRef(null)

  const scrollToComponent = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth',block:"center",inline:"center" });
  };

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
            options={options.filter((brand)=>brand.type==="WINE")}
            getOptionLabel={(option) => (option ? option.brandName : "")}
            onChange={(event, value) => {
              if (value) {
                beerFront.brandName = value.brandName;
                beerFront.liquorID = value._id;
                beerFront.size = value
                beerFront.buyRateShop750 = value.sizes.find((brand)=>brand.quantityInML===750).rate
                beerFront.buyRateShop375 = value.sizes.find((brand)=>brand.quantityInML===375).rate
                beerFront.buyRateShop180 = value.sizes.find((brand)=>brand.quantityInML===180).rate
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
          <div className="flex justify-around">
            <div className="form-control">
              <input
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5  wd-9"
                name="averageRate750"
                onChange={(e) => fristFormOnChange(e, index)}
                required
                min={0}
                value={Number(beerFront.averageRate750).toFixed(2)}
                disabled
              />
            </div>
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5 wd-9"
                name="averageRate375"
                required
                min={0}
                value={Number(beerFront.averageRate375).toFixed(2)}
                disabled
              />
            </div>
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5 wd-9"
                required
                min={0}
                name="averageRate180"
                value={Number(beerFront.averageRate180).toFixed(2)}
                disabled
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5 wd-9"
                required
                min={0}
                name="averageRate30"
                value={Number(beerFront.averageRate30).toFixed(2)}
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
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5 wd-9"
                name="openingStock30"
                value={Number(beerFront.openingStock750).toFixed(2)}
                disabled
              />
            </div>
          </div>
        </td>
        {/* ======== प्रारम्भिक स्टॉक ========= */}
        <td>
          <div className="flex justify-around">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                className="smallinput  p-0.5 p-0.5"
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
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
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5"
                name="inflowShop375"
                value={beerFront.inflowShop375}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                required
                min={0}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5"
                name="inflowShop180"
                value={beerFront.inflowShop180}
              />
            </div>
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                required
                min={0}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5 wd-9"
                name="inflowShop30"
                value={Number(beerFront.inflowShop30).toFixed(2)}
                disabled
              />
            </div>
          </div>
        </td>

        {/* ======== आमद (खरीद)-दु. ========= */}

        <td>
          <div className="flex justify-around">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5 wd-9"
                name="buyRateShop750"
                disabled
                required
                min={0}
                value={beerFront.buyRateShop750}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5 wd-9"
                name="buyRateShop375"
                disabled
                value={beerFront.buyRateShop375}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                disabled
                className="smallinput  p-0.5 wd-8"
                name="buyRateShop180"
                value={beerFront.buyRateShop180}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5"
                name="buyRateShop30"
                value={Number(beerFront.buyRateShop30).toFixed(2)}
                disabled
                required
                min={0}
              />
            </div>
          </div>
        </td>

        <td>
          <div className="flex justify-around">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5"
                name="inflowOut750"
                value={beerFront.inflowOut750}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5"
                name="inflowOut375"
                value={beerFront.inflowOut375}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5"
                name="inflowOut180"
                value={beerFront.inflowOut180}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5 wd-9"
                name="inflowOut30"
                value={Number(beerFront.inflowOut30).toFixed(2)}
                disabled
                required
                min={0}
              />
            </div>
          </div>
        </td>

        {/* ======== आमद (खरीद)-बा. ========= */}

        <td>
          <div className="flex justify-around">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5 wd-9"
                name="buyRateOut750"
                value={beerFront.buyRateOut750}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5 wd-9"
                name="buyRateOut375"
                value={beerFront.buyRateOut375}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5 wd-8"
                name="buyRateOut180"
                value={beerFront.buyRateOut180}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5"
                name="buyRateOut30"
                value={Number(beerFront.buyRateOut30).toFixed(2)}
                disabled
                required
                min={0}
              />
            </div>
          </div>
        </td>

        <td>
          <div className="flex justify-around">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5"
                ref={ip}
                onFocus={()=>scrollToComponent(ip)}
                name="inflowCredit750"
                value={beerFront.inflowCredit750}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5"
                name="inflowCredit375"
                value={beerFront.inflowCredit375}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5"
                name="inflowCredit180"
                value={beerFront.inflowCredit180}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5 wd-9"
                name="inflowCredit30"
                value={Number(beerFront.inflowCredit30).toFixed(2)}
                disabled
                required
                min={0}
              />
            </div>
          </div>
        </td>

        {/*================ खरीद रेट - बा. ==================  */}
        <td>
          <div className="flex justify-around">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5"
                name="send750"
                
                value={beerFront.send750}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5"
                name="send375"
                value={beerFront.send375}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5"
                name="send180"
                value={beerFront.send180}
                required
                min={0}
              />
            </div>

            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5 wd-9"
                name="send30"
                value={Number(beerFront.send30).toFixed(2)}
                disabled
                required
                min={0}
              />
            </div>
          </div>
        </td>

        {/* ======== आमद (उधारी) ========= */}

        <td>
          <div className="flex justify-around">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5 wd-8"
                name="sumRemaining30"
                value={Number(beerFront.sumRemaining30).toFixed(2)}
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
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                name="closingStock30"
                className="smallinput  p-0.5 wd-8"
                ref={ip2}
                onFocus={()=>scrollToComponent(ip2)}
                value={beerFront.closingStock30}
                required
                min={0}
              />
            </div>
          </div>
        </td>
        {/* ======== योग/शेष ========= */}
        <td>
          <div className="flex justify-around">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5 wd-8"
                name="sales30"
                value={Number(beerFront.sales30).toFixed(2)}
                disabled
                required
                min={0}
              />
            </div>
          </div>
        </td>

        <td>
          <div className="flex justify-around">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5"
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
          <div className="flex justify-around">
            <div className="form-control">
              <input
                onChange={(e) => fristFormOnChange(e, index)}
                type = "number"
 onKeyDown={(e) => {
                  // Prevent the default behavior of arrow keys
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown')  {
                    e.preventDefault();
                  }
                }} 
                className="smallinput  p-0.5 wd-9"
                name="total30"
                value={Number(beerFront.total30).toFixed(2)}
                disabled
                required
                min={0}
              />
            </div>
          </div>
        </td>
        {/* ============= कुल योग ================ */}
        
      </tr>
    </>
  );
};

export default AddOneFristForm;
