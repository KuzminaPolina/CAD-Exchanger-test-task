import { Typography, Box, useMediaQuery } from "@mui/material";
import ReactPlayer from "react-player/youtube";

const Hero = () => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        background:
          "linear-gradient(45deg, rgba(0,3,19,1) 0%, rgba(1,24,48,1) 32%, rgba(0,53,70,1) 64%, rgba(1,99,100,1) 100%)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          padding: { xs: "15px", md: "50px" },
          background: "transparent",
        }}
      >
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontSize: { xs: "3rem", md: "3rem", lg: "5rem" },
          }}
        >
          Our Boring Software
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
          error sequi quisquam, quaerat quos delectus fugit nisi mollitia quo
          sed omnis ratione!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: { xs: "15px", md: "50px" },
          background: "transparent",
        }}
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=VA975GOUFmM"
          width={matches ? "530px" : "280px"}
          height="235px"
        />
      </Box>
    </Box>
  );
};

export default Hero;
