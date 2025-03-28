import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "rgba(255, 255, 255, 0.87)",
  },
  "& .MuiInputLabel-outlined": {
    color: "rgba(255, 255, 255, 0.87)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "rgba(255, 255, 255, 0.87)",
  },
  "& .MuiOutlinedInput-root": {
    color: "rgba(255, 255, 255, 0.87)",
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.87)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.87)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(255, 255, 255, 0.87)",
    },
  },
});

export const Form = () => {
  //const nameRegex = "^[a-zA-Z.]{1,32}$";
  //const emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";
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
          <CssTextField
            label="Name"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <CssTextField
            label="Email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <CssTextField
            label="Message"
            id="message"
            multiline={true}
            rows="20"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              "&.MuiButton-root": {
                backgroundColor: "#016364",
                color: "rgba(255, 255, 255, 0.87)",
              },
              "&:hover": {
                backgroundColor: "#003546",
              },
            }}
          >
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
