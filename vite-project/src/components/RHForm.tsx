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
  const [isDataSent, setIsDataSent] = useState(false);
  const [respose, setResponse] = useState("You message was sent");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);
  const [disableSend, setDisableSend] = useState(false);
  const nameRegex = /^[a-zA-Zaа-яА-Я0-9 _.]{2,32}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

  const checkNameValidity = (value: string) => {
    const nameCheck = nameRegex.test(value);
    if (nameCheck) {
      setIsNameValid(true);
      setDisableSend(false);
    } else {
      setIsNameValid(false);
      setDisableSend(true);
    }
  };

  const checkEmailValidity = (value: string) => {
    const emailCheck = emailRegex.test(value);
    if (emailCheck) {
      setIsEmailValid(true);
      setDisableSend(false);
    } else {
      setIsEmailValid(false);
      setDisableSend(true);
    }
  };

  const checkMessageValidity = (value: string) => {
    if (value.length < 2 || value.length >= 500) {
      setIsMessageValid(false);
      setDisableSend(true);
    } else {
      setIsMessageValid(true);
      setDisableSend(false);
    }
  };

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
      setResponse(response.statusText);
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
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              checkNameValidity(e.target.value);
            }}
            error={!isNameValid}
            helperText={
              isNameValid ? null : "Name must be minimum 2 characters"
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
              checkEmailValidity(e.target.value);
            }}
            error={!isEmailValid}
            helperText={isEmailValid ? null : "Please enter valid e-mail"}
            required
          />
          <CssTextField
            label="Message"
            id="message"
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              checkMessageValidity(e.target.value);
            }}
            error={!isMessageValid}
            helperText={
              isMessageValid
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
            disabled={disableSend}
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
