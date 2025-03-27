import { Box, Stack, TextField, Button } from "@mui/material";

export const Form = () => {
  return (
    <Box
      sx={{
        margin: "30px 0",
      }}
    >
      <Stack
        component="form"
        spacing={2}
        sx={{
          minWidth: "280px",
          maxWidth: "600px",
          width: { sm: "280px", md: "400px", lg: "600px" },
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          sx={{
            // Root class for the input field
            "& .MuiOutlinedInput-root": {
              color: "#d4d4d4",
              // Class for the border around the input field
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#d4d4d4",
                borderWidth: "2px",
              },
            },
            // Class for the label of the input field
            "& .MuiInputLabel-outlined": {
              color: "#d4d4d4",
              fontWeight: "bold",
            },
          }}
        ></TextField>
        <TextField
          label="Email"
          variant="outlined"
          sx={{
            // Root class for the input field
            "& .MuiOutlinedInput-root": {
              color: "#d4d4d4",
              // Class for the border around the input field
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#d4d4d4",
                borderWidth: "2px",
              },
            },
            // Class for the label of the input field
            "& .MuiInputLabel-outlined": {
              color: "#d4d4d4",
              fontWeight: "bold",
            },
          }}
        ></TextField>
        <TextField
          label="Message"
          multiline={true}
          rows="20"
          variant="outlined"
          sx={{
            // Root class for the input field
            "& .MuiOutlinedInput-root": {
              color: "#d4d4d4",
              // Class for the border around the input field
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#d4d4d4",
                borderWidth: "2px",
              },
            },
            // Class for the label of the input field
            "& .MuiInputLabel-outlined": {
              color: "#d4d4d4",
              fontWeight: "bold",
            },
          }}
        ></TextField>
        <Button type="submit" variant="contained">
          Send
        </Button>
      </Stack>
    </Box>
  );
};
