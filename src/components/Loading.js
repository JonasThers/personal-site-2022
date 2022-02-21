import React, { useState, useEffect, useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";
import { Box, Typography, makeStyles } from "@material-ui/core";

const Loading = () => {
  const useStyles = makeStyles((theme) => ({
    wrapper: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    loading: {
      textAlign: "center",
    },
  }));

  const classes = useStyles();

  const [dots, setDots] = useState("");

  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => {
      setDots(dots + ".");
    }, 500);
  }, [dots]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Box className={classes.wrapper}>
      <Typography variant="h3" gutterBottom className={classes.loading}>
        Loading{dots}
      </Typography>
    </Box>
  );
};

export default Loading;
