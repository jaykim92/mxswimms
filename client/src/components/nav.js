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
    white: {
        color: 'white',
    },
});

function Nav() {
    const classes = useStyles();
    return(
        <div>
            <AppBar position="static">
                <Toolbar className={}>
                    <a href="https://www.instagram.com/mxswimms/?hl=en" className={classes.white}><InstagramIcon /></a>
                    <a href="https://twitter.com/mxswimms" className={classes.white}><TwitterIcon /></a>
                    <a href="https://www.youtube.com/channel/UCiogzo6md3JDO2UOkA5ciKg" className={classes.white}><YouTubeIcon /></a>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Nav;