import styled from "styled-components";
import { Link } from "react-router";
import { Box, Typography } from "@mui/material";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLink = styled(Link)`
  display: inline-block;
  padding: 10px 30px;
  background-color: rgb(223, 223, 223);
  color: #00082f;
  border-radius: 12px;
  &:hover,
  &:focus {
    color: #004085;
  }
  &:focus {
    outline: solid 2px #0089b0;
  }
  &:active {
    color: #0089b0;
  }
`;

const NavbarLogo = styled(Link)`
  display: inline-block;
  color: #dfdfdf;
  border-radius: 12px;
  &:hover,
  &:focus {
    color: #004085;
  }
  &:active {
    color: #0089b0;
  }
`;

export const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: "0",
        zIndex: "10",
        width: "100%",
        minHeight: "96px",
        padding: { xs: "30px 15px", md: "30px 80px" },
        borderBottom: "solid 1px rgb(223, 223, 223)",
        backgroundColor: "#242424",
      }}
    >
      <StyledNav>
        <div>
          <Typography
            variant="body1"
            sx={{
              fontSize: { sm: "22px", md: "24px" },
              color: "rgba(255, 255, 255, 0.87)",
              "& a": {
                "&:focus": {
                  outline: "solid 2px #0089b0",
                },
              },
            }}
          >
            <NavbarLogo to="/">
              The Fun <br />
              Company
            </NavbarLogo>
          </Typography>
        </div>
        <NavbarLink to="/contacts">Contact Us</NavbarLink>
      </StyledNav>
    </Box>
  );
};
