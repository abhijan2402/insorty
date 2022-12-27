import React from "react";
import { Box, Container } from "@mui/material";
import InstoryLogo from "../../images/insorty.png";
import {
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaPhoneSquareAlt,
  FaUnlock,
  FaUserAlt,
} from "react-icons/fa";
import "../Styles/Auth.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <section>
        <Container>
          <div className="registerContainer">
            <div
              className="flex justify-center items-center"
              style={{
                marginTop: "20px",
              }}
            >
              <img src={InstoryLogo} alt="Instory" className="mainLogo" />
            </div>
            <div>
              <h1 className="font-bold text-2xl">Sign up</h1>

              <Box>
                <form action="">
                  <Box className="grid md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold">User Name</span>
                      </label>
                      <div className="inputFild">
                        <FaUserAlt className="registrationIcon"></FaUserAlt>
                        <input type="text" placeholder="User Name" />
                      </div>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold">
                          Phone Number
                        </span>
                      </label>
                      <div className="inputFild">
                        <FaPhoneSquareAlt className="registrationIcon"></FaPhoneSquareAlt>
                        <input type="number" placeholder="Phone Number" />
                      </div>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold">Password</span>
                      </label>
                      <div className="inputFild">
                        <FaUnlock className="registrationIcon"></FaUnlock>
                        <input type="password" placeholder="Password" />
                      </div>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold">
                          Confirm Password
                        </span>
                      </label>
                      <div className="inputFild">
                        <FaUnlock className="registrationIcon"></FaUnlock>
                        <input type="password" placeholder="Confirm Password" />
                      </div>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-bold">Address</span>
                      </label>
                      <div className="inputFild">
                        <FaMapMarkerAlt className="registrationIcon"></FaMapMarkerAlt>
                        <input type="text" placeholder="Address" />
                      </div>
                    </div>

                    <div className="flex xs:flex-col gap-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-bold">Pin Code</span>
                        </label>
                        <div className="inputFild">
                          <FaMapMarkedAlt className="registrationIcon"></FaMapMarkedAlt>
                          <input type="number" placeholder="Pin Code" />
                        </div>
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-bold">City</span>
                        </label>
                        <div className="inputFild">
                          <FaMapMarkedAlt className="registrationIcon"></FaMapMarkedAlt>
                          <input type="text" placeholder="City" />
                        </div>
                      </div>
                    </div>
                  </Box>

                  <div className="flex justify-center items-center my-4">
                    <button className="btn btn-block" type="submit">CONTINUE</button>
                  </div>

                  <div>
                    <h3>
                      Already have an account ? &nbsp;
                      <Link to="/login" className="font-bold text-red-500">
                        Login
                      </Link>
                    </h3>
                  </div>
                </form>
              </Box>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Register;
