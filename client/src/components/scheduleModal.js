// import packages
import React from "react";

// import material-ui components
import { Grid, Paper } from "@material-ui/core";

function ScheduleModal({ data }) {
  return (
    <Grid item xs={12} align="center">
        <Paper>
          <h5>Date</h5>
          <p>{data.date}</p>
          <h5>Venue</h5>
          <p>{data.venue}</p>
        </Paper>
    </Grid>
  );
}

export default ScheduleModal;
