import React from "react";
import "../../Auth/Styles/Auth.scss";

const LoginModal = () => {
  return (
    <>
      <input type="checkbox" id="loginModal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box relative loginModalContainer">
          <label
            htmlFor="loginModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            OTP is send to your phone number +91 ******858
          </h3>
          <p className="py-4">Verify OTP.</p>
          <form action="">
            <div className="flex gap-4 justify-center items-center">
              <input type="text" className="inputOTP" />
              <input type="text" className="inputOTP" />
              <input type="text" className="inputOTP" />
              <input type="text" className="inputOTP" />
            </div>

            <div>
              <div className="flex justify-center items-center my-4">
                <button className="btn btn-block" type="submit">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
