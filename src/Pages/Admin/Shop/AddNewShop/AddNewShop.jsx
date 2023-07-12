import React,{useState} from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const AddNewShop = ({ addNewShop,Loading }) => {
  const [showPassword,setShowPassword] = useState(false)

  return (
    <section>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="addShop" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="addShop"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add New Shop</h3>
          <div className="py-4">
            <form onSubmit={(e)=>addNewShop(e)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                  style={{
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phone"
                  className="input input-bordered"
                  required
                  style={{
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>

              <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <div className="inputFild input input-bordered" >
                      <input
                        type={showPassword===true ?  "text" : "password"}
                        placeholder="Password"
                        name="password"
                        required

                        
                      />
                      <FaEye className={showPassword===false ?  "cursor-pointer" : "displayHidden"} onClick={(e)=>setShowPassword(true)}></FaEye>
                      <FaEyeSlash className={showPassword===true ?  "cursor-pointer" : "displayHidden"} onClick={(e)=>setShowPassword(false)}></FaEyeSlash>
                    </div>
                  </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  className="input input-bordered"
                  required
                  style={{
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  name="accountId"
                  className="input input-bordered"
                  required
                  style={{
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">License Number</span>
                </label>
                <input
                  type="text"
                  placeholder="License Number"
                  name="licenceNumber"
                  className="input input-bordered"
                  required
                  style={{
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>

              <div className="form-control my-3">
                <select className="select w-full"
                name = "shopType"
                required
                style={{
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <option disabled selected>
                    Select Shop Type
                  </option>
                  <option value={"BAR"}>BAR</option>
                  <option value={"SHOP"}>SHOP</option>
                </select>
              </div>

              <div>
              {Loading===true ? (
                        <>
                          <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-[#AA237A] transition duration-150 ease-in-out border-2 border-[#AA237A] rounded-md shadow cursor-not-allowed"
                            disabled=""
                          >
                            <svg
                              className="w-5 h-5 mr-3 -ml-1 text-[#AA237A] animate-spin"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Loading...
                          </button>
                        </>
                      ) :(  <button type="submit" className="commonBtn">
                  <span>Submit</span>
                </button>)}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddNewShop;
