import React, { useState } from "react";
import logo from "../../images/insorty.png";
import user from "../../images/user.svg";
import lock from "../../images/lock.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { Navigate } from "react-router-dom";

import "./Login.css";
import { Container } from "@mui/system";
const Login = () => {
  const [userData, setuserData] = useState();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleAdd = async (event) => {
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
      })
      .catch((err) => {
        console.log(err.message);
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
    <div className="login-container">
      <div id="center">
        <div id="logo">
          <img src={logo} alt="" />
        </div>
        <h2>Log in</h2>
        <form onSubmit={handleAdd}>
          <div className="label_n_inp">
            <h4>User Name</h4>
            <div>
              <img className="img" src={user} alt="" />
              <input
                className="inputs"
                name="name"
                type="text"
                id="name"
                autofocus
                required
                pattern="[a-zA-z]{3,15}"
                title="your name should contain only capital letters(A-Z) and/or small letters(a-z) of min-length 3 and max-length 15"
              />
            </div>
          </div>
          <div className="label_n_inp">
            <h4>Role</h4>
            <div>
              {/* <img className='img' src={user} alt="" /> */}
              {/* <input className='inputs' type="text" id="name" autofocus required pattern="[a-zA-z]{3,15}" title="your name should contain only capital letters(A-Z) and/or small letters(a-z) of min-length 3 and max-length 15"/> */}
              <select name="select" id="role">
                <option value="admin">Admin</option>
                <option value="SunAdmin">SuB Admin</option>
                <option value="user">User</option>
              </select>
            </div>
          </div>
          <div className="label_n_inp">
            <h4>Password</h4>
            <div>
              <img className="img" src={lock} alt="" />
              <input
                name="password"
                className="inputs"
                type="password"
                id="password"
              />
            </div>
          </div>
          <h3>
            <a href="#req_otp" onclick="handleForm()">
              Forget password
            </a>
          </h3>

          <div id="submit_div">
            <button type="submit" className="continue">
              CONTINUE
            </button>
          </div>
          {/* <h5 id="signup">Don't have an account <a href="./signup.html">Sign up</a></h5> */}
        </form>
      </div>
    </div>
  );
};

export default Login;

// required pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$" title = "Must Contain atleast one lowercase,one uppercase,one digit and one special character of min-length 8 and max-length 16"
