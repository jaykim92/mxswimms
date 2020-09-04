// import packages
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

// import components

// material-ui styling
const useStyles = makeStyles({
    cover: {
        height: '100vh',
        backgroundImage: `url(${"https://media.giphy.com/media/Rl5JEocdk1jOgwYVcG/giphy.gif"})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
});

function Front() {
    const classes = useStyles();
    return (
    <div>
      <div className={classes.cover}></div>
    </div>
  );
}

export default Front;
