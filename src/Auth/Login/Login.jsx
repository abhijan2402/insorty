import { Box, Container } from "@mui/system";
import React from "react";
import "../Styles/Auth.scss";
import InstoryLogo from "../../images/insorty.png";
import { FaUnlock, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section>
        <Container>
          <Box className="loginContainer">
            <div
              className="flex justify-center items-center"
              style={{
                marginTop: "20px",
              }}
            >
              <img src={InstoryLogo} alt="Instory" className="mainLogo" />
            </div>

            <div>
              <form action="">
                <Box className="flex justify-center items-center flex-col">
                  <h1 className="font-bold text-2xl">Sign in</h1>

                  <div className="form-control loginFromControl">
                    <label className="label">
                      <span className="label-text font-bold">User Name</span>
                    </label>
                    <div className="inputFild">
                      <FaUserAlt className="registrationIcon"></FaUserAlt>
                      <input type="text" placeholder="User Name" />
                    </div>
                  </div>

                  <div className="form-control loginFromControl">
                    <label className="label">
                      <span className="label-text font-bold">Password</span>
                    </label>
                    <div className="inputFild">
                      <FaUnlock className="registrationIcon"></FaUnlock>
                      <input type="password" placeholder="Password" />
                    </div>
                  </div>

                  <div className="form-control loginFromControl mt-4">
                    <Link className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </div>

                  <div className="form-control loginFromControl">
                    <div className="flex justify-center items-center my-4">
                      <button className="btn btn-block">CONTINUE</button>
                    </div>
                  </div>

                  <div className="form-control loginFromControl">
                    <h3>
                      Don´t have on account.{" "}
                      <Link to="/register" className="font-bold text-red-500">
                        Sign up
                      </Link>
                    </h3>
                  </div>
                </Box>
              </form>
            </div>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default Login;
