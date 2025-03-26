import styled from "styled-components";
import { Link } from "react-router";

const HeaderWrapper = styled.header`
  min-height: 96px;
  padding: 30px 80px;
  border-bottom: solid 1px rgb(223, 223, 223);
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLink = styled(Link)`
  display: inline-block;
  padding: 5px 40px;
  background-color: rgb(223, 223, 223);
  color: rgb(44, 44, 44);
  border-radius: 12px;
  &:hover,
  &:focus {
    color: #8d8db4;
  }
  &:active {
    color: #57668f;
  }
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <StyledNav>
        <div>
          <h2>Our Reliable Company</h2>
        </div>
        <NavbarLink to="/contacts">Contact Us</NavbarLink>
      </StyledNav>
    </HeaderWrapper>
  );
};
