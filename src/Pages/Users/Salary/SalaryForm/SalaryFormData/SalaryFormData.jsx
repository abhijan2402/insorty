import React from "react";
import Loader from "../../../../../Components/Loader/Loader";
import moment from "moment/moment";
import swal from "sweetalert";
import { FaRegTrashAlt } from "react-icons/fa";

const SalaryFormData = ({ index, salary, salareyDataLoading,salareyDataList,handelDelete }) => {
  const { salary: salaryData, payment, comment,_id } = salary;

  if (salareyDataLoading) {
    return <Loader></Loader>;
  }

  let shesh = salareyDataList.slice(0,index).reduce(
    (total, currentItem) => (total = total + currentItem.salary.price),
    0
  );
  let totalPaid = salareyDataList.slice(0,index).reduce(
    (total, currentItem) => (total = total + currentItem.payment.price),
    0
  );

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
            <div className="form-control">
              {moment(salaryData?.month).format("DD/MM/YYYY")}
            </div>
            </td>

            <td>

            <div className="form-control">
              {salaryData?.price}
            </div>
        </td>

        <td>
            <div className="form-control">
              {moment(payment?.date).format("DD/MM/YYYY")}
            </div>
            </td>

            <td>

            <div className="form-control">
              {payment?.price}
            </div>
        </td>

        <td>
         <div className="form-control">
              {shesh - totalPaid + salaryData?.price - (payment?.price)}
            </div>
        </td>
        <td>
          <div className="flex gap-4">
            <div className="form-control">
              {comment}
            </div>
          </div>
        </td>

        <td>
                    <p
                      className="font-3xl font-bold"
                      style={{ color: "#AA237A" }}
                      // onClick={() => handelDelete(entry?._id)}
                      onClick={() => {
                        swal({
                          title: "Are you sure?",
                          text: `Once deleted, you will not be able to recover entry ${index+1}`,
                          icon: "warning",
                          buttons: true,
                          dangerMode: true,
                        }).then((willDelete) => {
                          if (willDelete) {
                            
                            handelDelete(_id);
                            
                          } else {
                            swal("Your entry is safe!");
                          }
                        });
                      }}
                    >
                      <FaRegTrashAlt></FaRegTrashAlt>
                    </p>
                  </td>
      </tr>
    </>
  );
};

export default SalaryFormData;
