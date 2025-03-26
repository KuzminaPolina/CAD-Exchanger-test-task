import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import styled from "styled-components";

const PageWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const ContactPage = () => {
  return (
    <>
      <Header />
      <PageWrapper>
        <h1>Contacts</h1>
        <Link to="/">Back to main</Link>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default ContactPage;
