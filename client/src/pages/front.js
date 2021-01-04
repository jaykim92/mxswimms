// import packages
import React from "react";

// import material-ui components
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Modal } from "@material-ui/core";

// import components
import Nav from "../components/nav";
import StreamButton from "../components/streamButton";
import SocialsButton from "../components/socialsButton";
import StillsButton from "../components/stillsButton";
import ScheduleButton from "../components/scheduleButton";

// import assets
import frontImage from "../assets/front.jpg";

// material-ui styling
const useStyles = makeStyles({
  cover: {
    height: "100vh",
    width: "100vw",
    backgroundImage: `url(${frontImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  menuStyling: {
    height: "61vh",
    width: "97vw"
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
  }
});

function Front() {
  const classes = useStyles();

  // hooks
  const [openStore, setOpenStore] = React.useState(false);
  const handleStoreOpen = () => {
    setOpenStore(true);
  };
  const handleStoreClose = () => {
    setOpenStore(false);
  };

  // return JSX
  return (
    <div className={classes.cover}>
      <Nav />
      <Grid
        className={classes.menuStyling}
        container
        direction="column"
        justify="flex-end"
        alignItems="flex-end"
      >
        <StreamButton />
        <StillsButton />
        <ScheduleButton />
        <SocialsButton />


        <button
          type="button"
          onClick={handleStoreOpen}
          className={classes.buttons}
        >
          <Typography className={classes.navFont}>Store</Typography>
        </button>
      </Grid>

      <Modal
        open={openStore}
        onClose={handleStoreClose}
        aria-labelledby="store-modal"
        aria-describedby="store"
      >
        <p>temporary placeholder</p>
      </Modal>
    </div>
  );
}

export default Front;
