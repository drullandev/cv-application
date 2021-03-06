import React from "react";
import styled from "styled-components";
import { FaFileInvoice } from "react-icons/fa";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <FaFileInvoice />
      </Logo>
      <AppName>CV Creator</AppName>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
`;

const Logo = styled.div`
  display: flex;
  margin-right: 1rem;
  font-size: 4rem;
`;

const AppName = styled.h1`
  font-family: "Montserrat", sans-serif;
`;
