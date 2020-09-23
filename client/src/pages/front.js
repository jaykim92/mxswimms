// import packages
import React from "react";

// import material-ui components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// import components
import Nav from "../components/nav";

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
        height: '90vh',
        width: '97vw'
    },
    nav: {
        color: 'white',

    },
    buttons: {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        overflow: 'hidden',
        outline: 'none',
    },
});

function Front() {
    const classes = useStyles();
    return (
    <div className={classes.cover}>
        <Nav />
        <Grid className={classes.fullHeight} container direction="column" justify="flex-end" alignItems="flex-end">
            <button className={`${classes.navFont} ${classes.buttons}`}>Stream</button>
            <button className={`${classes.navFont} ${classes.buttons}`}>Social</button>
            <button className={`${classes.navFont} ${classes.buttons}`}>Store</button>
            <button className={`${classes.navFont} ${classes.buttons}`}>Stills</button>
        </Grid>
    </div>
  );
}

export default Front;
