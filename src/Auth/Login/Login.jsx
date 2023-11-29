import { Box, Container } from "@mui/system";
import React, { useContext, useState } from "react";
import "../Styles/Auth.scss";
import InstoryLogo from "../../images/insorty.png";
import { FaUnlock, FaUserAlt } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
import LoginModal from "../../Components/LoginModal/LoginModal";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { userData, setuserData } = useContext(AuthContext);
  const [showPassword,setShowPassword] = useState(false)

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const hadelLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const role = form.select.value;
    const password = form.password.value;

    const BasedURL = process.env.REACT_APP_API_URL;

    setIsLoading(true);
    try {
      await axios
        .post(`${BasedURL}/auth/login`, {
          role: role,
          accountId: name,
          password,
        })
        .then((response) => {
          setuserData(response.data);

          if (response.data.data.success) {
            console.log(response);
            console.log(role);
            if (role === "admin") {
              navigate("/admin");
            } else if (role === "subadmin") {
              navigate("/subadmin");
            } else if (response.data.data.user.role === "shop" && response.data.data.user.shopType === "BAR") {
              navigate("/user/bearshop");
            } else if (response.data.data.user.role === "shop" && response.data.data.user.shopType === "SHOP") {
              navigate("/user");
            }
          }

          localStorage.setItem("token", response.data.data.token);
          Swal.fire("Successfully Logged in!", "success");
        });
    } catch (error) {
      const errors = error.response.data.message;
      Swal.fire({
        title: "Error!",
        text: errors,
        icon: "error",
        confirmButtonText: "Oky !",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (token) {
    const tokenData = jwtDecode(token);
    if (tokenData.role === "admin") {
      return <Navigate to="/admin" replace />;
    } else if (tokenData.role === "subadmin") {
      return <Navigate to="/subadmin" replace />;
    } else if (tokenData.role === "shop" && tokenData.shopType === "SHOP") {
      return <Navigate to="/user" replace />;
    } else if (tokenData.role === "shop" && tokenData.shopType === "BAR") {
      return <Navigate to="/user/bearshop" replace />;
    }
  }

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
              <form onSubmit={hadelLogin}>
                <Box className="flex justify-center items-center flex-col">
                  <h1 className="font-bold text-2xl">Sign in</h1>

                  <div className="form-control loginFromControl">
                    <label className="label">
                      <span className="label-text font-bold">Username</span>
                    </label>
                    <div className="inputFild">
                      <FaUserAlt className="registrationIcon"></FaUserAlt>
                      <input type="text" placeholder="User Name" name="name" />
                    </div>
                  </div>

                  <div className="form-control loginFromControl">
                    <label className="label">
                      <span className="label-text font-bold">Password</span>
                    </label>
                    <div className="inputFild">
                      <FaUnlock className="registrationIcon"></FaUnlock>
                      <input
                        type={showPassword===true ?  "text" : "password"}
                        placeholder="Password"
                        name="password"
                      />
                      <FaEye className={showPassword===false ?  "cursor-pointer" : "displayHidden"} onClick={(e)=>setShowPassword(true)}></FaEye>
                      <FaEyeSlash className={showPassword===true ?  "cursor-pointer" : "displayHidden"} onClick={(e)=>setShowPassword(false)}></FaEyeSlash>
                    </div>
                  </div>

                  <div className="form-control loginFromControl my-2">
                    <label className="label">
                      <span className="label-text font-bold">Role</span>
                    </label>
                    <select
                      className="select select-bordered w-full inputFild"
                      name="select"
                    >
                      <option disabled selected>
                        Select Your Role
                      </option>
                      <option value="shop">Shop/Bar</option>
                      <option value="admin">Admin</option>
                      <option value="subadmin">Sub Admin</option>
                    </select>
                  </div>

                  <div className="form-control loginFromControl">
                    <div className="flex justify-center items-center my-4">
                      {isLoading ? (
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
                      ) : (
                        <button type="submit" className="btn btn-block">
                          Login
                        </button>
                      )}
                    </div>
                  </div>
                </Box>
              </form>
            </div>
          </Box>
        </Container>
        <LoginModal></LoginModal>
      </section>
    </>
  );
};

export default Login;
