import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";

const ExperienceContainer = (props) => {
  const [data] = useState(props.data);

  if (props.type === "work") {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          {props.title} work
        </Typography>
        {data.map((data, index) => {
          return (
            <Box key={index}>
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
    <Box>
      <Typography variant="h4" gutterBottom>
        {props.title}
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
