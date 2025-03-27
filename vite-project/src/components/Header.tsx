import styled from "styled-components";
import { Link } from "react-router";
import { Box } from "@mui/material";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLink = styled(Link)`
  display: inline-block;
  padding: 5px 40px;
  background-color: rgb(223, 223, 223);
  color: #00082f;
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
        minHeight: "96px",
        padding: { xs: "30px 15px", md: "30px 80px" },
        borderBottom: "solid 1px rgb(223, 223, 223)",
      }}
    >
      <StyledNav>
        <div>
          <h2>Boring Company</h2>
        </div>
        <NavbarLink to="/contacts">Contact Us</NavbarLink>
      </StyledNav>
    </Box>
  );
};
