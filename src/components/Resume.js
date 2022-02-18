import React from "react";
import ExperienceContainer from "./ExperienceContainer";
import { Typography, Box, Grid } from "@material-ui/core";

const Resume = () => {
  return (
    <Box id="resume">
      Resume
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ExperienceContainer title="Work experience" />
        </Grid>
        <Grid item xs={6}>
          <ExperienceContainer title="Education" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resume;
