import styled from "styled-components";
import { Typography } from "@mui/material";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <Typography variant="h4">Our Reliable Company 2025</Typography>
    </FooterWrapper>
  );
};
