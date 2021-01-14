// import packages
import React from "react";

// import material-ui components
import { Grid, Paper } from "@material-ui/core";

function ScheduleModal({ data }) {
  return (
    <Grid item xs={12} align="center">
      <Paper>
        <h5>{data.date}</h5>
        <p>{data.venue}</p>
        <p>{data.citystate}</p>
      </Paper>
    </Grid>
  );
}

export default ScheduleModal;
