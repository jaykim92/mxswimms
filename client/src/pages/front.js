// import packages
import React from "react";

// import material-ui components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// import assets
import frontImage from '../assets/front.jpg';

// material-ui styling
const useStyles = makeStyles({
    cover: {
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${frontImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    nameFont: {
        fontFamily: "'Monoton', cursive",
        fontSize: '36px',
        color: 'white'
    },
    navFont: {
        fontFamily: "'century-gothic', sans-serif",
        fontSize: '18pt',
        color: "white",
        textAlign: "right",
        fontWeight: "bold"
    },
    fullHeight: {
        height: '100vh',
        width: '97vw'
    },
    nav: {
        color: 'white',

    },
});

function Front() {
    const classes = useStyles();
    return (
    <div className={classes.cover}>
        <Grid className={classes.fullHeight} container direction="column" justify="flex-end" alignItems="flex-end">
            <Grid item xs={1} className={classes.navFont}>Stream</Grid>
            <Grid item xs={1} className={classes.navFont}>Social</Grid>
            <Grid item xs={1} className={classes.navFont}>Store</Grid>
            <Grid item xs={1} className={classes.navFont}>Stills</Grid>
        </Grid>
    </div>
  );
}

export default Front;
