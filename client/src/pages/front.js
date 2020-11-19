// import packages
import React from "react";

// import material-ui components
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Modal,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Fade
} from "@material-ui/core";

// import components
import Nav from "../components/nav";
import StreamCard from "../components/streamCard";

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
  nameFont: {
    fontFamily: "'Monoton', cursive",
    fontSize: "36px",
    color: "white"
  },
  nav: {
    color: "white"
  },
  cards: {
    maxWidth: 345
  },
  menuStyling: {
    height: "61vh",
    width: "97vw"
  }
});

function Front() {
  const classes = useStyles();

  // hooks

  const [openSocial, setOpenSocial] = React.useState(false);
  const handleSocialOpen = () => {
    setOpenSocial(true);
  };
  const handleSocialClose = () => {
    setOpenSocial(false);
  };
  const [openStills, setOpenStills] = React.useState(false);
  const handleStillsOpen = () => {
    setOpenStills(true);
  };
  const handleStillsClose = () => {
    setOpenStills(false);
  };
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
          <StreamCard />
        <button
          type="button"
          onClick={handleSocialOpen}
          className={classes.buttons}
        >
          <Typography className={classes.navFont}>Social</Typography>
        </button>
        <button
          type="button"
          onClick={handleStillsOpen}
          className={classes.buttons}
        >
          <Typography className={classes.navFont}>Stills</Typography>
        </button>
        <button
          type="button"
          onClick={handleStoreOpen}
          className={classes.buttons}
        >
          <Typography className={classes.navFont}>Store</Typography>
        </button>
      </Grid>


      <Modal
        open={openSocial}
        onClose={handleSocialClose}
        aria-labelledby="social-modal"
        aria-describedby="social media"
      >
        <p>temporary placeholder</p>
      </Modal>
      <Modal
        open={openStills}
        onClose={handleStillsClose}
        aria-labelledby="stills-modal"
        aria-describedby="photos"
      >
        <p>temporary placeholder</p>
      </Modal>
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
