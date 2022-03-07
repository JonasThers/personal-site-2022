import React, { useState, useContext } from "react";
import { RetroThemeContext } from "../context/RetroThemeContext";
import {
  Typography,
  Box,
  TextField,
  Button,
  CircularProgress,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  modernContainer: {
    background: "#fff",
    color: "#000",
    padding: "2em 2em 1.5em 2em",
    border: "2px solid #fff",
    borderRadius: "5px",
    boxShadow:
      "0 2.8px 2.2px rgb(0 0 0 / 3%), 0 6.7px 5.3px rgb(0 0 0 / 5%), 0 12.5px 10px rgb(0 0 0 / 6%), 0 22.3px 17.9px rgb(0 0 0 / 7%), 0 41.8px 33.4px rgb(0 0 0 / 9%), 0 100px 80px rgb(0 0 0 / 12%)",
  },
  retroContainer: {
    background: "#000",
    border: "2px solid #fff",
    borderRadius: "5px",
    padding: "2em 2em 1.5em 2em",
    fontSize: "14px !important",
  },
  input: {
    width: "100%",
  },
}));

const Contact = () => {
  const classes = useStyles();

  const { retroTheme } = useContext(RetroThemeContext);

  const [buttonLoading, setButtonLoading] = useState(false);
  const [formMessage, setFormMessage] = useState("");

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
          setFormMessage("Thank you for reaching out! Talk to you soon!");
        },
        (error) => {
          console.log(error.text);
          setButtonLoading(false);
        }
      );
  };

  return (
    <Box
      className={retroTheme ? classes.retroContainer : classes.modernContainer}
    >
      <Typography variant="h3" gutterBottom>
        Contact
      </Typography>
      <form onSubmit={handleSubmit(sendEmail)}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Your name"
              variant="outlined"
              name="name"
              className={classes.input}
              {...register("nameRequired", { required: true })}
            />
            {errors.nameRequired && <span>I would like to know your name</span>}
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Your mail"
              variant="outlined"
              name="email"
              className={classes.input}
              {...register("emailRequired", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                },
              })}
            />
            {errors.emailRequired && <span>Valid email is required</span>}
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Your message"
              variant="outlined"
              name="message"
              className={classes.input}
              {...register("messageRequired", { required: true })}
            />
            {errors.messageRequired && (
              <span>Don't you have anything to say?</span>
            )}
          </Grid>
          <Button disabled={buttonLoading ? true : false} type="submit">
            {buttonLoading ? "Sending" : "Send"}
          </Button>
        </Grid>
      </form>

      <Box>{formMessage}</Box>
    </Box>
  );
};

export default Contact;
