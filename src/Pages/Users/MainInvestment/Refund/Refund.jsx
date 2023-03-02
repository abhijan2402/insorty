import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Refund = ({ refundRecovery, index, refundRecoveryOnChange, name }) => {
  const { type, price } = refundRecovery;

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          {/* <input
            type="text"
            name="brandName"
            value="ब्राण्ड/ Brand Name"
            readOnly
            className="semiSmallInput"
          /> */}

          <select
            className="select w-full max-w-xs"
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
          {/* <input
            type="date"
            name="date"
            value="2021-08-01"
            className="semiSmallInput"
          /> */}
          <DatePicker
            selected={new Date(refundRecovery.date)}
            name="month"
            onChange={(month) => {
              refundRecoveryOnChange(name, new Date(month), index, "date");
              console.log(month);
            }}
            
            dateFormat="dd/MM/yyyy"
            placeholderText={"dd/mm/yyyy"}
            className="inputBox"
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
            className="semiSmallInput"
          />
        </td>
      </tr>
    </>
  );
};

export default Refund;
