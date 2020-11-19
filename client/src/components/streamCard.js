// import packages
import React from "react";

// import components
import StreamModal from "../components/streamModal";

// import album info json from utils folder
import streamInfo from "../utils/stream.json";

// import material-ui components
import { makeStyles, Grid, Typography, Modal } from "@material-ui/core";

// material-ui styling
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  fullHeight: {
    height: "50vh"
  },
  modalStyling: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
    marginY: "auto"
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
  gridStyling: {
    outline: "none",
    width: "65vw"
  }
}));

function StreamCard() {
  // material ui custom css
  const classes = useStyles();

  //hooks
  const [openStream, setOpenStream] = React.useState(false);
  const handleStreamOpen = () => {
    setOpenStream(true);
  };
  const handleStreamClose = () => {
    setOpenStream(false);
  };

  // jsx
  return (
    <>
      <button
        type="button"
        onClick={handleStreamOpen}
        className={classes.buttons}
      >
        <Typography className={classes.navFont}>Stream</Typography>
      </button>

      <Modal
        open={openStream}
        onClose={handleStreamClose}
        aria-labelledby="stream-modal"
        aria-describedby="discography"
        className={classes.modalStyling}
      >
        <>
          <Grid
            container
            spacing={4}
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.gridStyling}
          >
            {streamInfo.map((item, i) => (
              <StreamModal key={i} data={item} />
            ))}
          </Grid>
        </>
      </Modal>
    </>
  );
}

export default StreamCard;
