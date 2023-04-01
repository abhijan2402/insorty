import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const ShopParmisson = () => {
  const shopParmissonTemplate = {
    shopName: "",
    shopParmisson: "",
  };
  const [shopParmisson, setShopParmisson] = useState([shopParmissonTemplate]);
  const [subAdminName, setSubAdminName] = useState("");

  const addMore = () => {
    setShopParmisson([...shopParmisson, shopParmissonTemplate]);
  };

  const onChange = (event, index) => {
    const updatedProduct = shopParmisson.map((shopParmisson, i) =>
      index === i
        ? Object.assign(shopParmisson, {
            [event.target.name]: event.target.value,
          })
        : shopParmisson
    );
    setShopParmisson(updatedProduct);
  };

  const removeShop = (index) => {
    const newReturned = shopParmisson.filter((shopParmisson, i) => i !== index);
    setShopParmisson(newReturned);
  };

  const hendelSubmit = (e) => {
    e.preventDefault();
    const shopsData = Object.assign({}, shopParmisson);
    const subAdminNames = subAdminName;

    console.log(shopsData, subAdminNames);
  };

  return (
    <section>
      <div className="title">
        <div className="flex gap-4 shopParmissons-center my-4">
          <h2 className="font-bold text-[1.5rem]">Shop Parmisson</h2>
        </div>
        <div className="divider my-2"></div>
      </div>

      <div className="w-2/3 mx-auto border shadow-lg p-6">
        <div className="form-control mb-2">
          <label className="label">
            <span className="label-text">SubAdmin Name</span>
          </label>
          <input
            style={{
              width: "100%",
              height: "2.8rem",
              borderRadius: "0.5rem",
              border: "1px solid #e2e8f0",
              textAlign: "left",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
            className="px-6"
            type="text"
            name="subAdminName"
            value={subAdminName}
            onChange={(event) => setSubAdminName(event.target.value)}
          />
        </div>

        <form onSubmit={hendelSubmit}>
          {shopParmisson.map((shopParmisson, index) => {
            return (
              <div key={index}>
                {/* <div className="form-control mb-2">
                  <label className="label">
                    <span className="label-text">Shop Name</span>
                  </label>
                  <input
                    style={{
                      width: "100%",
                      height: "2.8rem",
                      borderRadius: "0.5rem",
                      border: "1px solid #e2e8f0",
                      textAlign: "left",
                      paddingLeft: "1rem",
                      paddingRight: "1rem",
                    }}
                    className="px-6"
                    type="text"
                    name="shopName"
                    value={shopParmisson.shopName}
                    onChange={(event) => onChange(event, index)}
                  />
                </div> */}

                <div className="form-control mb-2">
                  <Autocomplete
                    size="small"
                    style={{
                      width: "100%",
                    }}
                    // options={
                    //   liquors.length > 0
                    //     ? liquors.filter((shopName) => {
                    //         if (shopName.type === "BEER") {
                    //           return shopName;
                    //         }
                    //       })
                    //     : ["no options"]
                    // }
                    getOptionLabel={(option) =>
                      option ? option.shopName : ""
                    }
                    onChange={(event, value) => {
                      onChange(event, index);
                      console.log(shopParmisson);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        required
                        className="dailyReportInput"
                        // value={shopParmisson.shopName}
                        inputProps={{
                          ...params.inputProps,
                          value: shopParmisson.shopName,
                        }}
                        onChange={(event) => {
                          shopParmisson.shopName = event.target.value;
                          // shopParmisson.liquorID = null;
                          // onChangeFristBackFormHandler(event, index)
                        }}
                      />
                    )}
                  />
                </div>

                <div className="form-control">
                  <select
                    className="select w-full"
                    name="shopParmisson"
                    value={shopParmisson.shopParmisson}
                    onChange={(event) => onChange(event, index)}
                    style={{
                      width: "100%",
                      height: "2.8rem",
                      borderRadius: "0.5rem",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <option disabled selected>
                      Set Shop Parmisson
                    </option>
                    <option value={"GET"}>GET</option>
                    <option value={"POST"}>POST</option>
                    <option value={"DELETE"}>DELETE</option>
                    <option value={"PUT"}>PUT</option>
                  </select>
                </div>

                <div className="flex">
                  <button
                    className="commonBtn flex justify-center shopParmissons-center"
                    onClick={() => removeShop(index)}
                  >
                    <FaTrashAlt className="text-2xl mr-2"></FaTrashAlt>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </form>

        <div className="pt-2 ">
          <button className="commonBtn mx-4" onClick={() => addMore()}>
            Add
          </button>

          <button className="commonBtn" type="submit" onClick={hendelSubmit}>
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShopParmisson;
