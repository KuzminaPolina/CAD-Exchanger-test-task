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
      borderColor: "#0089b0",
    },
  },
});

export const RHForm = () => {
  const [respose, setResponse] = useState("You message was sent");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameRegex = /^[a-zA-Zaа-яА-Я0-9 _.]{2,32}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

  const isNameValid =
    name.length > 0 && (!nameRegex.test(name) || name.length < 2);

  const isEmailValid =
    email.length > 0 && (!emailRegex.test(email) || email.length < 2);

  const isMessageValid = message.length > 0 && message.length < 5;
  let formData = {};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    formData = {
      name: `${name}`,
      email: `${email}`,
      message: `${message}`,
    };

    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL}/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const serverResponce = await response.json();

    if (response.ok) {
      setResponse(serverResponce.message);
    } else {
      setResponse(response.statusText);
    }
  };

  if (Object.keys(formData).length !== 0) {
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
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            error={isNameValid}
            helperText={
              isNameValid ? "Name must be minimum 2 characters" : null
            }
            required
          />
          <CssTextField
            label="Email"
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            error={isEmailValid}
            helperText={isEmailValid ? "Please enter valid e-mail" : null}
            required
          />
          <CssTextField
            label="Message"
            id="message"
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            error={isMessageValid}
            helperText={
              !isMessageValid
                ? null
                : "Please write some more! We want to hear from you  :)"
            }
            multiline={true}
            rows="20"
            required
          />
          <Button
            type="submit"
            variant="contained"
            disabled={isMessageValid && !isEmailValid && !isNameValid}
            sx={{
              "&.MuiButton-root": {
                backgroundColor: "#016364",
                color: "rgba(255, 255, 255, 0.87)",
              },
              "&.Mui-disabled": {
                backgroundColor: "#5e5e5e",
              },
              "&:hover": {
                backgroundColor: "#003546",
              },
              "&:focus": {
                outline: "solid 2px #0089b0",
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
