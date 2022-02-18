import React, { useContext } from "react";
import { RetroThemeContext } from "../context/RetroThemeContext";
import { Typography, Box } from "@material-ui/core";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {

  const { retroTheme } = useContext(RetroThemeContext);

  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        { retroTheme ? 'Jonas The Developer' : 'Hello world, my name is Jonas' }
      </Typography>
      <AnchorLink href='#resume'>{ retroTheme ? 'Press here to start' : 'Learn more about me' }</AnchorLink>
    </Box>
  );
};

export default Hero;
