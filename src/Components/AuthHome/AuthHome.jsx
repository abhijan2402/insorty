import React from "react";
import { Container } from "@mui/material";
import "./HomeStyle/HomeStyle.scss";
import { Box } from "@mui/system";
import InstoryLogo from "../../images/insorty.png";
import { Link } from "react-router-dom";

const AuthHome = () => {
  return (
    <>
      <section>
        <Container>
          <Box>
            <Box
              className="flex justify-center items-center"
              style={{
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              <img src={InstoryLogo} alt="Instory" className="mainLogo" />
            </Box>
            <Box className="flex justify-center flex-col gap-6 items-center">
              <h1 className="font-bold text-2xl">Choose Account Type</h1>
              <Box className="flex justify-center items-center gap-12">
                <Link
                  to="/register"
                  id="target1"
                  className="target flex flex-col justify-center items-center"
                >
                  <div>
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35.6704 5.1025L30.8975 0.329596C30.458 -0.109865 29.7458 -0.109865 29.3063 0.329596L27.7151 1.9208C27.2756 2.36026 27.2756 3.07254 27.7151 3.512L22.3241 8.90297C19.0489 7.51778 15.124 8.1485 12.4542 10.8176L1.31786 21.9539C-0.439286 23.7111 -0.439286 26.5609 1.31786 28.318L7.68197 34.6821C9.43911 36.4393 12.2889 36.4393 14.0461 34.6821L25.1831 23.5451C27.8522 20.876 28.4829 16.9504 27.0977 13.6752L32.4887 8.2842C32.9282 8.72367 33.6404 8.72367 34.0799 8.2842L35.6711 6.693C36.1099 6.25424 36.1099 5.54196 35.6704 5.1025ZM12.6011 29.763L6.23702 23.3989L14.8181 14.8178L21.1822 21.1819L12.6011 29.763Z"
                        fill="black"
                        fill-opacity="1"
                      />
                    </svg>
                  </div>
                  <h5 className="text-1xl ">Wine Shop</h5>
                </Link>

                <Link
                  to="/register"
                  id="target2"
                  className="target flex flex-col justify-center items-center"
                >
                  <svg
                    width="45"
                    height="36"
                    viewBox="0 0 45 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M44.9525 30.4868C44.3619 29.0527 42.7169 28.3707 41.2827 28.9683L39.729 29.6151L37.0084 22.4513C40.3758 19.9908 41.5639 15.4001 39.4338 11.7092L33.3456 1.1288C32.7832 0.151607 31.5811 -0.256143 30.5336 0.172697L22.4981 3.505L14.4626 0.172697C13.4151 -0.263174 12.2129 0.151607 11.6505 1.1288L5.56241 11.7092C3.43929 15.4001 4.62036 19.9908 7.98782 22.4443L5.26714 29.608L3.71347 28.9613C2.27932 28.3637 0.641286 29.0456 0.0437214 30.4798C-0.0757915 30.768 0.0577818 31.0984 0.346019 31.2179L11.756 35.9563C12.0442 36.0758 12.3676 35.9422 12.4871 35.654C13.0777 34.2198 12.4028 32.5748 10.9686 31.9772L9.41494 31.3304L12.1848 24.0472C12.4942 24.0823 12.8035 24.1386 13.1058 24.1386C16.7404 24.1386 20.0938 21.8116 21.078 18.1418L22.4981 12.8411L23.9182 18.1418C24.9024 21.8116 28.2558 24.1386 31.8904 24.1386C32.1927 24.1386 32.502 24.0823 32.8114 24.0472L35.5742 31.3304L34.0205 31.9772C32.5864 32.5748 31.9045 34.2198 32.502 35.654C32.6215 35.9422 32.952 36.0758 33.2332 35.9563L44.6502 31.2179C44.9314 31.0984 45.072 30.775 44.9525 30.4868ZM19.3978 11.3999L11.517 8.13085L14.083 3.67372L20.7265 6.42955L19.3978 11.3999ZM25.5984 11.3999L24.2697 6.42955L30.9132 3.67372L33.4792 8.13085L25.5984 11.3999Z"
                      fill="black"
                      fill-opacity="1"
                    />
                  </svg>
                  <h5 className="text-1xl ">Bar</h5>
                </Link>
              </Box>

              <Box>
                <div className="form-control loginFromControl">
                  <div className="flex justify-center items-center my-4">
                    <form action="">
                      <button className="btn w-full" type="submit">
                        CONTINUE
                      </button>
                    </form>
                  </div>
                </div>
                <div className="text-center">
                  <h3>
                    Already have an account ? &nbsp;
                    <Link to="/login" className="font-bold text-red-500">
                      Login
                    </Link>
                  </h3>
                </div>
              </Box>
            </Box>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default AuthHome;
