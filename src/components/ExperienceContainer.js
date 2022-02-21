import React, { useState, useContext } from "react";
import { RetroThemeContext } from "../context/RetroThemeContext";
import { Box, Typography, makeStyles } from "@material-ui/core";

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
  containerTitle: {
    marginBottom: "1em",
    textAlign: "center",
  },
  containerEntry: {
    marginBottom: "1.5em",
  },
}));

const ExperienceContainer = (props) => {
  const [data] = useState(props.data);

  const { retroTheme } = useContext(RetroThemeContext);

  const classes = useStyles();

  if (props.type === "work") {
    return (
      <Box
        className={
          retroTheme ? classes.retroContainer : classes.modernContainer
        }
      >
        <Typography
          variant="h4"
          gutterBottom
          className={classes.containerTitle}
        >
          {props.title}:
        </Typography>
        {data.map((data, index) => {
          return (
            <Box key={index} className={classes.containerEntry}>
              <Typography variant="h5" gutterBottom>
                {data.attributes.Title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                - At {data.attributes.Work}
              </Typography>
              <Typography variant="body1" gutterBottom>
                - Technologies used: {data.attributes.Technologies}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {data.attributes.Start} - {data.attributes.End}
              </Typography>
            </Box>
          );
        })}
      </Box>
    );
  }

  return (
    <Box
      className={retroTheme ? classes.retroContainer : classes.modernContainer}
    >
      <Typography variant="h4" gutterBottom className={classes.containerTitle}>
        {props.title}:
      </Typography>
      {data.map((data, index) => {
        return (
          <Box key={index}>
            <Typography variant="h5" gutterBottom>
              {data.attributes.Degree}
            </Typography>
            <Typography variant="body1" gutterBottom>
              - From {data.attributes.School}
            </Typography>
            <Typography variant="body1" gutterBottom>
              - Electives: {data.attributes.School}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default ExperienceContainer;
