import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";
import { Autocomplete } from "@mui/material";
import {TextField} from "@mui/material";



const Refund = ({ refundRecovery, index, refundRecoveryOnChange, name,handleRemoveFields,parties }) => {
  const { type, price } = refundRecovery;
  console.log(refundRecovery)

  const defaultProps = {
    options: parties,
    getOptionLabel: (option) => option.name,
  }

  return (
    <>
      <tr className="my-6">
        <th>{index + 1}</th>
        <th
          className="cross"
          onClick={() => {
            swal({
              title: "Are you sure?",
              text: `Once deleted, you will not be able to recover row ${index + 1
                }`,
              icon: "warning",
              buttons: true,
              dangerMode: true,
            }).then((willDelete) => {
              if (willDelete) {
                handleRemoveFields('refund',index);
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

          <select
            className="dailyReportInput"
            name="type"
            defaultValue={type}
            onChange={(e) => {
              refundRecoveryOnChange(name, e.target.value, index, "type");
            }}
          >
            <option selected >
              Select-type
            </option>
            <option  value="REFUND">
            रिफंड 

            </option>
            <option value="RECOVERY">रिकवरी </option>
          </select>
        </td>
        <td>
         
          <DatePicker
            selected={new Date(refundRecovery.date)}
            name="month"
            onChange={(month) => {
              refundRecoveryOnChange(name, new Date(month), index, "date");
            }}
            
            dateFormat="dd/MM/yyyy"
            placeholderText={"dd/mm/yyyy"}
            className="inputBox date"
            style={{
              zIndex: "1000"
            }}
          />
        </td>
        <td>
          <input
            type="number"
            name="price"
            defaultValue={price}
            onChange={(e) => {
              refundRecoveryOnChange(name, e.target.value, index, "price");
            }}
            className="dailyReportInput wd-9"
          />
        </td>
        <td>
        <Autocomplete
        {...defaultProps}
        className={refundRecovery.type==="RECOVERY" ? "" :"displayHidden"}
        id="autocomplete"
            size="small"
            style={{
              width: "20rem",
              border:"1px solid black",
              borderRadius:"5px"
            }}
        value={refundRecovery.partyName}
        onChange={(event, newValue) => {
          if (newValue) {
            refundRecovery.partyName = newValue.name;
            refundRecovery.partyId = newValue._id;
          } else {
            refundRecovery.partyName = "";
            refundRecovery.partyId = "";
          }
          refundRecoveryOnChange(name, newValue.name, index, "partyName");
          refundRecoveryOnChange(name, newValue._id, index, "partyId");
        }}
        renderInput={(params) => (
          <TextField {...params}
          // value={beerFront.brandName}
          inputProps={{
            ...params.inputProps,
            value: refundRecovery.partyName,
          }}
          onChange={(e) => {
            // handleInputChange(e, e.target.value);
            refundRecovery.partyName = e.target.value;
          }} 
         />
        )}
      />
        </td>
      </tr>
    </>
  );
};

export default Refund;
