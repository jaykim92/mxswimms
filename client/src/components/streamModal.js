// import packages
import React from "react";

// import material-ui components
import {
  makeStyles,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
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
  }
}));

function StreamModal({ data }) {
  // material ui custom css
  const classes = useStyles();

  // return jsx
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.cards}>
        <CardMedia
          component="img"
          alt={`${data.album} album cover`}
          title={`${data.album}-album-cover`}
          image={require(`../assets/${data.img}`)}
          className={classes.mediaStyling}
        />
        <CardActions>
          <button>itunes</button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default StreamModal;
