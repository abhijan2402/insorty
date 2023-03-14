import React from "react";
import useLiquors from "../../../../../../Hooks/useLiquors";
import Loader from "../../../../../../Components/Loader/Loader";
import { Autocomplete, TextField } from "@mui/material";
import swal from "sweetalert";

const AddOneSecondForm = ({
  index,
  item,
  handelSeconFormOnChange,
  handleRemoveFieldsSecond,
}) => {
  const SerialNo = index + 1;

  const { liquors, brandsLoaded } = useLiquors();

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
          </h1>
        </th>

        <td>
          <div className="form-control">
            <Autocomplete
              size="small"
              style={{
                width: "10rem",
              }}
              options={
                liquors.length > 0
                  ? liquors.filter((brand) => {
                      if (brand.type === "WINE") {
                        return brand;
                      }
                    })
                  : ["no options"]
              }
              getOptionLabel={(option) => (option ? option.brandName : "")}
              
              onChange={(event, value) => {
                if (value) {
                  item.brandName = value.brandName;
                  item.liquorID = value._id;
                } else {
                  item.brandName = "";
                  item.liquorID = "";
                }
                handelSeconFormOnChange(event, index);

                console.log(item);
              }}
              renderInput={(params) => (
                <TextField
                required
                  size="small"
                  {...params}
                  // className="dailyReportInput"
                  // value={item.brandName}
                  inputProps={{ ...params.inputProps, value: item.brandName }}
                  onChange={(event) => {
                    item.brandName = event.target.value;
                    // item.liquorID = null;
                    // onChangeFristBackFormHandler(event, index)
                  }}
                />
              )}
            />
          </div>
        </td>
        <td>
          <div>
            <input
              type="number"
              required
              value={item.selectStockVarient}
              onChange={(e) => handelSeconFormOnChange(e, index)}
              className="SmallInput"
              name="selectStockVarient"
            />
          </div>
        </td>
        {/* ======== MRP Input ========= */}
        <td>
          <div className="form-control">
            <input
              type="number"
                required
              value={item.averageRate}
              onChange={(e) => handelSeconFormOnChange(e, index)}
              className="smallinput"
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
              className="smallinput"
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
              className="smallinput"
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
              type="number"
                required
              className="smallinput"
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
              type="number"
                required
              className="smallinput"
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
              className="smallinput"
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
              className="smallinput"
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
              className="smallinput"
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
