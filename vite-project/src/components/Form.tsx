import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";

type FormFields = {
  name: string;
  email: string;
  message: string;
};

export const Form = () => {
  const [isDataSent, setIsDataSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [respose, setResponse] = useState("Jane");
  const [errors, setErrors] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      name: `${name}`,
      email: `${email}`,
      message: `${message}`,
    };

    const response = await fetch("http://localhost:3000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const serverResponce = await response.json();

    if (response.ok) {
      setResponse(serverResponce.message);
      setIsDataSent(true);
    } else {
      console.error(response);
    }
  };

  if (!isDataSent) {
    return (
      <Box
        sx={{
          margin: "30px 0",
        }}
      >
        <Stack
          component="form"
          spacing={2}
          onSubmit={handleSubmit}
          sx={{
            minWidth: "280px",
            maxWidth: "600px",
            width: { sm: "280px", md: "400px", lg: "600px" },
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#016364",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#016364",
                  borderWidth: "2px",
                },
              },
              "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#016364",
                  borderWidth: "3px",
                },
              },
              "& .MuiInputLabel-outlined": {
                color: "#016364",
                fontWeight: "bold",
                "&.Mui-focused": {
                  color: "#016364",
                  fontWeight: "bold",
                },
              },
            }}
          ></TextField>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#016364",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#016364",
                  borderWidth: "2px",
                },
              },
              "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#016364",
                  borderWidth: "3px",
                },
              },
              "& .MuiInputLabel-outlined": {
                color: "#016364",
                fontWeight: "bold",
                "&.Mui-focused": {
                  color: "#016364",
                  fontWeight: "bold",
                },
              },
            }}
          ></TextField>
          <TextField
            label="Message"
            multiline={true}
            rows="20"
            variant="outlined"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                color: "#016364",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#016364",
                  borderWidth: "2px",
                },
              },
              "&.Mui-focused": {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#016364",
                  borderWidth: "3px",
                },
              },
              "& .MuiInputLabel-outlined": {
                color: "#016364",
                fontWeight: "bold",
                "&.Mui-focused": {
                  color: "#016364",
                  fontWeight: "bold",
                },
              },
            }}
          ></TextField>
          <Button type="submit" variant="contained">
            Send
          </Button>
        </Stack>
      </Box>
    );
  } else {
    return (
      <Box>
        <Typography
          gutterBottom
          variant="body1"
          sx={{
            fontSize: "24px",
          }}
        >
          {respose}
        </Typography>
      </Box>
    );
  }
};
