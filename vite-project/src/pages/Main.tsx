import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styled from "styled-components";
import Hero from "../components/Hero";
import { Services } from "../components/Services";
import { ContactUs } from "../components/ContactUs";

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
        <Services />
        <ContactUs />
      </PageWrapper>
      <Footer />
    </>
  );
};

export default Main;
