import React from "react";
import useLiquors from "../../../../../../Hooks/useLiquors";
import Loader from "../../../../../../Components/Loader/Loader";
import { Autocomplete, TextField } from "@mui/material";
import swal from "sweetalert";

const AddOneSecondFormBack = ({
  index,
  item,
  handelSeconFormOnChange,
  handleRemoveFieldsBeer,
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
                handleRemoveFieldsBeer(index);
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
                width: "10rem",
              }}
              options={
                liquors.length > 0
                  ? liquors.filter((brand) => {
                      if (brand.type === "BEER") {
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
                  {...params}
                  className="dailyReportInput"
                  // value={item.brandName}
                  inputProps={{ ...params.inputProps, value: item.brandName }}
                  onChange={(event) => {
                    item.brandName = event.target.value;
                  }}
                />
              )}
            />
          </div>
        </td>
        <td>
          <div className="form-control">
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
              className="SmallInput"
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
              className="SmallInput"
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
              className="SmallInput"
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
              className="SmallInput"
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
              className="SmallInput"
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
              className="SmallInput"
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
              className="SmallInput"
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
              className="SmallInput"
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
              className="SmallInput"
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
              className="SmallInput"
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
              className="SmallInput"
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
              className="SmallInput"
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
              className="SmallInput"
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

export default AddOneSecondFormBack;
