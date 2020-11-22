// import packages
import React from "react";

// import material-ui components
import { makeStyles, Grid } from "@material-ui/core";

// material-ui styling
const useStyles = makeStyles(theme => ({
  imageStyling: {
    width: "70vw",
    outline: 0
  }
}));

function StillsModal({data}) {
    // material-ui custom css
    const classes = useStyles();

    // jsx
    return (
        <Grid item>
            <img src={require(`../assets/${data.still}`)} className={classes.imageStyling}></img>
        </Grid>
    );
};

export default StillsModal;