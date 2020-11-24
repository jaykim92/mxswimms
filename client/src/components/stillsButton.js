// import packages
import React from "react";

// import material-ui components
import { makeStyles, Typography, Modal, Grid } from "@material-ui/core";

// import components
import StillsModal from "./stillsModal";

// import json for pictures
import stillInfo from "../utils/stills.json";

// material-ui styling
const useStyles = makeStyles(theme => ({
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
  modalStyling: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "scroll"
  },
  gridStyling: {
    outline: 0,
    maxWidth: "80vw",
    maxHeight: "100%"
  }
}));

function StillsButton({ data }) {
  // material-ui custom css
  const classes = useStyles();

  // hooks
  const [openStills, setOpenStills] = React.useState(false);
  const handleStillsOpen = () => {
    setOpenStills(true);
  };
  const handleStillsClose = () => {
    setOpenStills(false);
  };

  // jsx
  return (
    <>
      <button
        type="button"
        onClick={handleStillsOpen}
        className={classes.buttons}
      >
        <Typography className={classes.navFont}>Stills</Typography>
      </button>

      <Modal
        open={openStills}
        onClose={handleStillsClose}
        aria-labelledby="stills-modal"
        aria-describedby="photos"
        className={classes.modalStyling}
      >
        <Grid
          container
          className={classes.gridStyling}
          align="center"
          justify="center"
          alignItems="center"
        >
          {stillInfo.map((item, i) => (
            <StillsModal key={i} data={item} />
          ))}
        </Grid>
      </Modal>
    </>
  );
}

export default StillsButton;
