import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Outlet />
    </LayoutWrapper>
  );
};

export default Layout;
const LayoutWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
`;
