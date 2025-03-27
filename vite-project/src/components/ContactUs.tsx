import { Typography, Box } from "@mui/material";
import { bgImg } from "../assets";
import { Link } from "react-router";
import styled from "styled-components";

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

export const ContactUs = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "fit-content",
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "fit-content",
          padding: { xs: "20px 15px", md: "60px 50px" },
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            textAlign: "center",
          }}
        >
          Do you have any questions?
        </Typography>

        <NavbarLink to="/contacts">Contact Us</NavbarLink>
      </Box>
    </Box>
  );
};
