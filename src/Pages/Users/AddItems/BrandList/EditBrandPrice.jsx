import React from "react";
import swal from "sweetalert";

const EditBrandPrice = ({ priceList,editPrice,handleRemove, handlePriceUpdate }) => {
 

  

  return (
    <>
      <input type="checkbox" id="EditBrandPrice" className="modal-toggle" />
      <div className="modal p-6 " style={{ width: "100%" }}>
        <div
          className="modal-box "
          style={{
            width: "100%",
            maxWidth: "700px",
            height: "100%",
            maxHeight: "500px",
            overflow: "auto",
          }}
        >
          <label
            htmlFor="EditBrandPrice"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">New Brand</h3>
          <div className="divider my-2"></div>
          <div>
            <>
              <table className="removeCommonWspace">
                <thead>
                    <th>Brand</th>
                    <th>ML</th>
                    <th>Price</th>
                    <th>Delete</th>
                </thead>
          <tbody>
         { priceList.map((item,index)=>{
            return(<tr>
                <td>{item.brandName}</td>
                <td>{item.quantityInML}</td>
                <td><input className="smallinput" type="text" value={item.rate} onChange={(e)=>editPrice(index,e.target.value)}/></td>
                <th className="cursor-pointer" onClick={() => {
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
                  handleRemove(index);
                  swal(`row ${index + 1}  has been deleted!`, {
                    icon: "success",
                  });
                } else {
                  swal("Your row is safe!");
                }
              });
            }}>X</th>
                </tr>
            )
         })}
          </tbody>
              </table>
                <button
                  className="btn btn-primary my-4"
                  style={{ width: "100%", height: "2.5rem" }}
                  onClick={handlePriceUpdate}
                >
                  Save
                </button>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBrandPrice;
