import { Container } from "@mui/system";
import React from "react";
import Nav from "../Pages/Sheard/Nav/Nav";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Container>
        <Nav></Nav>
        <div>
          <Outlet></Outlet>
        </div>
      </Container>
    </>
  );
};

export default MainLayout;
