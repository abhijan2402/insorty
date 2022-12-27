import { Box, Container } from "@mui/system";
import React from "react";
import { FaPowerOff } from "react-icons/fa";
import { Link } from "react-router-dom";
import InstoryLogo from "../../images/insorty.png";
import "./Style/Home.scss";

const Home = () => {
  return (
    <section>
      <Container>
        <Box>
          <div
            className="flex justify-center items-center"
            style={{
              marginTop: "20px",
              marginBottom: "40px",
            }}
          >
            <img src={InstoryLogo} alt="Instory" className="mainLogo" />
          </div>
        </Box>

        <Box className="flex flex-col justify-center items-center">
          <div className="grid gap-4 md:grid-cols-3">
            <Link className="homeUserBtn">Stock / स्टॉक</Link>
            <Link className="homeUserBtn">Investments</Link>
            <Link className="homeUserBtn">Parterns</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <Link className="homeUserBtn" to="/dailyReport">
              Daily Report / दैनिक रिपोर्ट{" "}
            </Link>
            <Link className="homeUserBtn">Party Payment</Link>
          </div>
        </Box>

        <Box className="flex justify-center items-center mt-20">
          <Link className="logoutBtn flex justify-center items-center gap-2">
            <FaPowerOff className="powerIcon"></FaPowerOff> Log out
          </Link>
        </Box>
      </Container>
    </section>
  );
};

export default Home;
