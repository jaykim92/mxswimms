// import packages
import React from "react";

// import material-ui components
import { makeStyles, Grid, Modal, Typography, Paper } from "@material-ui/core";

// import components
import ScheduleModal from "./scheduleModal";

// import json for
import scheduleInfo from "../utils/schedule.json";

// material-ui styling
const useStyles = makeStyles(theme => ({
  modalStyling: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll"
  },
  buttons: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    overflow: "hidden",
    outline: "none"
  },
  navFont: {
    fontFamily: "'century-gothic', sans-serif",
    fontSize: "16pt",
    color: "black",
    textAlign: "right",
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  paperStyling: {
    width: "40vw",
    outline: 0,
    height: "70vh",
    overflow: "hide",
    background: "rgba(255,255,255,0.7)"
  }
}));

function ScheduleButton() {
  // material ui custom css
  const classes = useStyles();

  // hooks
  const [openSchedule, setOpenSchedule] = React.useState(false);
  const handleScheduleOpen = () => {
    setOpenSchedule(true);
  };
  const handleScheduleClose = () => {
    setOpenSchedule(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleScheduleOpen}
        className={classes.buttons}
      >
        <Typography className={classes.navFont}>Schedule</Typography>
      </button>

      <Modal
        open={openSchedule}
        onClose={handleScheduleClose}
        aria-labelledby="schedule-modal"
        aria-describedby="schedule media"
        className={classes.modalStyling}
      >
        <Paper className={classes.paperStyling}>
          <Grid container direction="row" justify="center" alignItems="center">
              {scheduleInfo.map((item, i) => (
                <ScheduleModal key={i} data={item} />
              ))}
          </Grid>
        </Paper>
      </Modal>
    </>
  );
}

export default ScheduleButton;
