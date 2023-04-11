import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";


const Refund = ({ refundRecovery, index, refundRecoveryOnChange, name,handleRemoveFields }) => {
  const { type, price } = refundRecovery;

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
              REFUND
            </option>
            <option value="RECOVERY">RECOVERY</option>
          </select>
        </td>
        <td>
         
          <DatePicker
            selected={new Date(refundRecovery.date)}
            name="month"
            onChange={(month) => {
              refundRecoveryOnChange(name, new Date(month), index, "date");
              console.log(month);
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
      </tr>
    </>
  );
};

export default Refund;
