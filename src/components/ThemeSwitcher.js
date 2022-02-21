import React, { useContext } from "react";
import { RetroThemeContext } from "../context/RetroThemeContext";
import Switch from "react-switch";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toggler: {
    position: "fixed",
    right: '1.5rem',
    top: '1.5rem'
  },
}));

const ThemeSwitcher = () => {
  const { retroTheme, setRetroTheme } = useContext(RetroThemeContext);

  const handleChange = () => {
    setRetroTheme(!retroTheme);
  };

  const classes = useStyles();

  return (
    <Box className={classes.toggler}>
      <Typography variant="h6" gutterBottom>
        Toggle theme
      </Typography>
      <Switch
        checked={retroTheme}
        onChange={handleChange}
        handleDiameter={28}
        height={30}
        width={100}
        uncheckedIcon={
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 9,
              color: "white",
              paddingRight: 15,
            }}
          >
            8bit
          </Box>
        }
        checkedIcon={
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 12,
              paddingLeft: 22,
            }}
          >
            Modern
          </Box>
        }
      />
    </Box>
  );
};

export default ThemeSwitcher;
