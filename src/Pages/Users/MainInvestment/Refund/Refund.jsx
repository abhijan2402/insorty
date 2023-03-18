import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Refund = ({ refundRecovery, index, refundRecoveryOnChange, name }) => {
  const { type, price } = refundRecovery;

  return (
    <>
      <tr className="my-6">
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
            className="dailyReportInput wd-8"
          />
        </td>
      </tr>
    </>
  );
};

export default Refund;
