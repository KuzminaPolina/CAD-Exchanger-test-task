import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import styled from "styled-components";
import Hero from "../components/Hero";

const PageWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const Main = () => {
  return (
    <>
      <Header />
      <Hero />
      <PageWrapper>
        <h1>Main</h1>
        <Link to="/contacts">Contacts</Link>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default Main;
