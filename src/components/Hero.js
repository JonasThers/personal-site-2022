import React, { useContext } from "react";
import { RetroThemeContext } from "../context/RetroThemeContext";
import { Typography, Box, makeStyles } from "@material-ui/core";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const useStyles = makeStyles((theme) => ({
    wrapper: {
      height: "100vh",
    },
    heading: {
      textAlign: "center",
    },
    link: {
      textAlign: "center",
      textDecoration: 'none',
    },
  }));

  const classes = useStyles();

  const { retroTheme } = useContext(RetroThemeContext);

  return (
    <Box className={classes.wrapper}>
      <Typography variant="h2" gutterBottom className={classes.heading}>
        {retroTheme ? "Jonas The Developer" : "Hello world, my name is Jonas"}
      </Typography>
      <Box>
        <AnchorLink href="#resume" className={classes.link}>
          {retroTheme ? "Press here to start" : "Learn more about me"}
        </AnchorLink>
      </Box>
    </Box>
  );
};

export default Hero;
