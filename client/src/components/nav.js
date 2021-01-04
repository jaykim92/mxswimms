// import packages
import React from "react";

// import material-ui components
import { makeStyles, Grid, Toolbar, AppBar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";

// material-ui styling
const useStyles = makeStyles({
  black: {
    color: "black"
  },
  background: {
    background: "transparent",
    boxShadow: "none"
  }
});

function Nav() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.background}>
        <Toolbar>
          <Grid container justify="flex-end" spacing={2}>
            <Grid item>
              <a
                href="https://www.instagram.com/mxswimms/?hl=en"
                className={classes.black}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://twitter.com/mxswimms"
                className={classes.black}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://www.youtube.com/channel/UCiogzo6md3JDO2UOkA5ciKg"
                className={classes.black}
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
              </a>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
