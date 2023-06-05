import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { FaRegCopy, FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const AddBrandList = ({ refetch }) => {
  const [brandName, setBrandName] = React.useState("");
  const [typeData, setTypeData] = React.useState("");

  const sizeTemplate = {
    sizeOfBottle: "",
  };
  const [size, setSize] = React.useState([sizeTemplate]);

  const addSize = () => {
    setSize([
      ...size,
      {
        sizeOfBottle: "",
      },
    ]);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...size];
    list[index][name] = value;
    setSize(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...size];
    list.splice(index, 1);
    setSize(list);
  };

  const handleSubmit = () => {
    let sizes=[]
    size.forEach(element => {
      sizes.push(Number(element.sizeOfBottle))
    });
    const token = localStorage.getItem("token");
    fetch("https://insorty-api.onrender.com/shop/addLiquor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cookie_token: token,
      },

      body: JSON.stringify({
           brandName: brandName,
        type: typeData,
        sizes: sizes,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          refetch();
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Brand Added Successfully",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Something Went Wrong",
          });
        }
      });
   
  };

  return (
    <>
      <input type="checkbox" id="AddBrandList" className="modal-toggle" />
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
            htmlFor="AddBrandList"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">New Brand</h3>
          <div className="divider my-2"></div>
          <div>
            <>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Brand Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Brand Name"
                  className="input input-bordered"
                  name="brandName"
                  style={{ width: "100%", border: "1px solid #e5e7eb" }}
                  onChange={(e) => setBrandName(e.target.value)}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Type</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  name="typeData"
                  style={{ width: "100%", border: "1px solid #e5e7eb" }}
                  onChange={(e) => setTypeData(e.target.value)}
                >
                  <option disabled selected>
                    Select Type
                  </option>
                  <option>WINE</option>
                  <option>BEER</option>
                  <option>DESHIRML</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">
                    Size of bottle in ml
                  </span>
                </label>

                <div className="flex gap-6 items-center flex-wrap">
                  {size.map((x, i) => {
                    return (
                      <input
                        type="number"
                        className="input input-bordered"
                        onChange={(e) => handleInputChange(e, i)}
                        value={x.sizeOfBottle}
                        name="sizeOfBottle"
                        style={{ width: "6rem", border: "1px solid #e5e7eb" }}
                      />
                    );
                  })}

                  <div className="flex gap-2 items-center">
                    <button onClick={addSize}>
                      <FaRegCopy
                        style={{ fontSize: "1.5rem", color: "#4B5563" }}
                      ></FaRegCopy>
                    </button>

                    <button onClick={handleRemoveClick}>
                      <FaRegTrashAlt
                        style={{ fontSize: "1.5rem", color: "#4B5563" }}
                      ></FaRegTrashAlt>
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <button
                  className="btn btn-primary my-4"
                  style={{ width: "100%", height: "2.5rem" }}
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBrandList;
