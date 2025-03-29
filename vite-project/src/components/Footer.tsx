import { Typography, Box } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "sticky",
        bottom: "0",
        zIndex: "10",
        padding: { xs: "15px", md: "30px 50px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderTop: "solid 1px rgb(223, 223, 223)",
        backgroundColor: "#242424",
      }}
    >
      <Typography variant="h4" gutterBottom textAlign="center">
        The Fun Company 2025
      </Typography>
      <Typography variant="body2">All Rights Are Wrong</Typography>
    </Box>
  );
};
