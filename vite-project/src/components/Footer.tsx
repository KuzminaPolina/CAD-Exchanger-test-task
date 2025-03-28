import { Typography, Box } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        padding: { xs: "15px", md: "50px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderTop: "solid 1px rgb(223, 223, 223)",
      }}
    >
      <Typography variant="h4" gutterBottom textAlign="center">
        Our Boring Company 2025
      </Typography>
      <Typography variant="body2">All Rights Are Wrong</Typography>
    </Box>
  );
};
