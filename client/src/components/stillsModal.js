// import packages
import React from "react";

// import material-ui components
import { makeStyles, Grid, Card, CardMedia } from "@material-ui/core";

// material-ui styling
const useStyles = makeStyles(theme => ({
    cardStyling: {
        maxWidth: "100%"
    }
}));

function StillsModal({ data }) {
  // material-ui custom css
  const classes = useStyles();

  // jsx
  return (
    <Grid item className={classes.cardStyling}>
      <Card>
        <CardMedia
          component="img"
          alt="mx.swimms self portraits"
          image={require(`../assets/${data.still}`)}
        />
      </Card>
    </Grid>
  );
}

export default StillsModal;
