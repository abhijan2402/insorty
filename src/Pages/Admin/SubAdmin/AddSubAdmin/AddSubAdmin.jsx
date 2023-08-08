import React,{useState} from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const AddSubAdmin = ({ addNewSubAdmin }) => {
  const [showPassword,setShowPassword] = useState(false)

  return (
    <section>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="addNewSubAdmin" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="addNewSubAdmin"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">New Subadmin</h3>
          <div className="py-4">
            <form onSubmit={addNewSubAdmin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subadmin Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Subadmin Name"
                  name="name"
                  required
                  className="input input-bordered"
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
                  required
                  className="input input-bordered"
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
                  required
                  className="input input-bordered"
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

              
             

              <div>
                <button type="submit" className="commonBtn">
                  <span>Submit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddSubAdmin;
