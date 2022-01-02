import SendIcon from "@mui/icons-material/Send";
import { Button, Container, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useStyles } from "../../../styles/Styles";

const SendMessage = () => {
  const { outlineButton } = useStyles();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            required
            sx={{ mb: "10px" }}
            {...register("name", { required: true })}
            fullWidth
            id="filled-basic"
            label="Your Name"
            variant="filled"
          />
          <TextField
            required
            sx={{ mb: "10px" }}
            {...register("email", { required: true })}
            fullWidth
            id="filled-basic"
            label="E-mail"
            variant="filled"
          />
          <TextField
            sx={{ mt: 2 }}
            id="filled-multiline-static"
            label="Your Message"
            {...register("message", { required: true })}
            multiline
            fullWidth
            rows={4}
            variant="filled"
          />
          <Button
            type="submit"
            className={outlineButton}
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Send Message <SendIcon sx={{ ml: 1 }} />
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default SendMessage;
