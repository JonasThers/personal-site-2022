import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const Contact = () => {
  const [buttonLoading, setButtonLoading] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const sendEmail = (data, event) => {
    setButtonLoading(true);
    event.preventDefault();

    emailjs
      .sendForm(
        process.env.envVar.REACT_APP_SERVICE_ID,
        process.env.envVar.REACT_APP_TEMPLATE_ID,
        event.target,
        process.env.envVar.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          event.target.reset();
          setButtonLoading(false);
          setFormMessage('Thank you for reaching out! Talk to you soon!')
        },
        (error) => {
          console.log(error.text);
          setButtonLoading(false);
        }
      );
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(sendEmail)}>
        <TextField
          id="outlined-basic"
          label="Your name"
          variant="outlined"
          name="name"
          {...register("nameRequired", { required: true })}
        />
        {errors.nameRequired && <span>I would like to know your name</span>}
        <TextField
          id="outlined-basic"
          label="Your mail"
          variant="outlined"
          name="email"
          {...register("emailRequired", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            },
          })}
        />
        {errors.emailRequired && <span>Valid email is required</span>}
        <TextField
          id="outlined-basic"
          label="Your message"
          variant="outlined"
          name="message"
          {...register("messageRequired", { required: true })}
        />
        {errors.messageRequired && <span>Don't you have anything to say?</span>}
        <Button disabled={buttonLoading ? true : false} type="submit">
          {buttonLoading ? <CircularProgress /> : "Send"}
        </Button>
      </form>
      <Box>
                {formMessage}
            </Box>
    </Box>
  );
};

export default Contact;
