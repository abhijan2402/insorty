import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import "../Styles/Auth.scss";
import InstoryLogo from "../../images/insorty.png";
import { FaUnlock, FaUserAlt } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import LoginModal from "../../Components/LoginModal/LoginModal";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const [userData, setuserData] = useState();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const hadelLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const role = form.select.value;
    const password = form.password.value;
    await axios
      .post("https://beer-shop.onrender.com/auth/login", {
        role: role,
        accountId: name,
        password,
      })
      .then((response) => {
        setuserData(response.data);
        console.log(response.data);
        if (response.data.success) {
          if (role === "admin") {
            navigate("/admin");
          } else if (role === "subadmin") {
            navigate("/subadmin");
          } else if (role === "user") {
            navigate("/user");
          }
        }
        localStorage.setItem("token", response.data.data.token);
        console.log(userData);
        Swal.fire("Succesfully Login!", "You clicked the button!", "success");
      })
      .catch((err) => {
        console.log(err.message);
        const error = err.message;
        Swal.fire({
          title: "Error!",
          text: error,
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };

  if (token) {
    const tokenData = jwtDecode(token);
    if (tokenData.role === "admin") {
      return <Navigate to="/admin" replace />;
    } else if (tokenData.role === "subadmin") {
      return <Navigate to="/subadmin" replace />;
    } else if (tokenData.role === "user") {
      return <Navigate to="/user" replace />;
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
                      <span className="label-text font-bold">User Name</span>
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
                        type="password"
                        placeholder="Password"
                        name="password"
                      />
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
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                      <option value="subadmin">Sub Admin</option>
                    </select>
                  </div>

                  <div className="form-control loginFromControl mt-4">
                    <Link className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </div>

                  <div className="form-control loginFromControl">
                    <div className="flex justify-center items-center my-4">
                      {/* <label htmlFor="loginModal" className="btn btn-block">
                        CONTINUE
                      </label> */}
                      <button type="submit" className="btn btn-block">
                        Login
                      </button>
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
        <LoginModal></LoginModal>
      </section>
    </>
  );
};

export default Login;
