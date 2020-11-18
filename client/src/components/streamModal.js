// import packages
import React from "react";

// import components
import StreamCard from "./streamCard";

// import album info json from utils folder
import stream from "../utils/stream.json";

// import images
import togetherCover from "../assets/together_cover.jpeg";
import distractionsCover from "../assets/distractions_cover.jpeg";
import stayTrueCover from "../assets/stay_true_cover.jpeg";
import bflCover from "../assets/bfl_cover.jpeg";
import stickyNotesCover from "../assets/sticky_notes.jpeg";

// import material-ui components
import {
  makeStyles,
  Grid,
  Typography,
  Modal,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Box
} from "@material-ui/core";

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
  cards: {
    maxWdith: 345
  },
  modalStyling: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
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
    outline: "none"
  },
  mediaStyling: {
    width: 200,
    height: "auto"
  },
  cardContentStyling: {
    textAlign: "center"
  }
}));

function StreamModal({ data }) {
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
        <Grid
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.gridStyling}
        >
          <Grid item>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="album cover"
                  title="album cover"
                  image={togetherCover}
                  className={classes.mediaStyling}
                />
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    className={classes.cardContentStyling}
                  >
                    album title
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <button>itunes</button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
}

export default StreamModal;
