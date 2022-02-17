import React from "react";
import { Box, Typography } from "@material-ui/core";

const ExperienceContainer = (props) => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {props.title}
      </Typography>
    </Box>
  );
};

export default ExperienceContainer;
