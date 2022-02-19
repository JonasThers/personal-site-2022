import React, { useEffect, useState } from "react";
import axios from "axios";
import ExperienceContainer from "./ExperienceContainer";
import { Box, Grid } from "@material-ui/core";

const Resume = () => {
  const [loading, setLoading] = useState(true);
  const [schoolData, setSchoolData] = useState([]);
  const [workData, setWorkData] = useState([]);

  useEffect(() => {
    async function getData() {
      const school = await axios(process.env.envVar.REACT_APP_SCHOOL_DATA);
      const work = await axios(process.env.envVar.REACT_APP_WORK_DATA);

      setSchoolData(school.data);
      setWorkData(work.data);
      setLoading(false);
    }

    getData();
  }, []);

  return (
    <Box id="resume">
      Resume
      {loading ? (
        "Loading"
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ExperienceContainer
              title="Work experience"
              type="work"
              {...workData}
            />
          </Grid>
          <Grid item xs={6}>
            <ExperienceContainer
              title="Education"
              type="school"
              {...schoolData}
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Resume;
