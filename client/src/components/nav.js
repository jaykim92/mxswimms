// import packages
import React from 'react';

// import material-ui components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

// material-ui styling
const useStyles = makeStyles({
    font: {
        color: 'white',
    },
});

function Nav() {
    const classes = useStyles();
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <InstagramIcon />
                    <TwitterIcon />
                    <YouTubeIcon />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Nav;