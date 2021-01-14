// import packages
import React from "react";

// import material-ui components
import {
  makeStyles,
  Grid,
  Card,
  CardActions,
  CardMedia
} from "@material-ui/core";

// material-ui styling
const useStyles = makeStyles(theme => ({
  mediaStyling: {
    width: 200,
    height: "auto"
  },
  cards: {
    maxWidth: 200,
    textAlign: "center",
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  musicIcons: {
    height: 25,
    width: 25
  },
  cardActionStyling: {
    justifyContent: "center"
  }
}));

function StreamModal({ data }) {
  // material ui custom css
  const classes = useStyles();

  // return jsx
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.cards}>
        <CardMedia
          component="img"
          alt={`${data.album} album cover`}
          title={`${data.album}-album-cover`}
          image={require(`../assets/${data.img}`)}
          className={classes.mediaStyling}
        />
        <CardActions className={classes.cardActionStyling}>
          <a href={data.itunes} target="_blank" rel="noopener noreferrer">
            <img
              src={require("../assets/itunes_logo.svg")}
              alt="itunes logo"
              className={classes.musicIcons}
            ></img>
          </a>
          <a href={data.spotify} target="_blank" rel="noopener noreferrer">
            <img
              src={require("../assets/spotify_logo.svg")}
              alt="spotify logo"
              className={classes.musicIcons}
            ></img>
          </a>
          <a href={data.tidal} target="_blank" rel="noopener noreferrer">
            <img
              src={require("../assets/tidal_logo.svg")}
              alt="tidal logo"
              className={classes.musicIcons}
            ></img>
          </a>
          <a href={data.amazon} target="_blank" rel="noopener noreferrer">
            <img
              src={require("../assets/amazon_logo.svg")}
              alt="amazon logo"
              className={classes.musicIcons}
            ></img>
          </a>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default StreamModal;
