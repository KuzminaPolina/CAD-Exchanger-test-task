import { Form } from "../components/Form";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import styled from "styled-components";
import { Typography } from "@mui/material";

const PageWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
        <Form />
        <Link to="/">Back to main page</Link>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default ContactPage;
