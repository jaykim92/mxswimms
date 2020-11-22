// import packages
import React from "react";

// import material-ui components
import { makeStyles, Grid, Typography, Modal } from "@material-ui/core";

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
  }
}));

function Socialsbutton() {
  // material ui custom css
  const classes = useStyles();

  // jsx
  return (
    <a
      href="https://linktr.ee/mxswimms"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button type="button" className={classes.buttons}>
        <Typography className={classes.navFont}>Socials</Typography>
      </button>
    </a>
  );
}

export default Socialsbutton;
