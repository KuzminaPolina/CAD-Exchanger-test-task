import { RHForm } from "../components/RHForm";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import styled from "styled-components";
import { Typography } from "@mui/material";

const PageWrapper = styled.main`
  min-height: 100vh;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavbarLogo = styled(Link)`
  display: inline-block;
  color: rgba(255, 255, 255, 0.87);
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

const ContactPage = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "3rem", md: "3rem", lg: "5rem" },
          }}
          gutterBottom
        >
          Contact Us
        </Typography>
        <RHForm />
        <NavbarLogo to="/">Back to main page</NavbarLogo>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default ContactPage;
