// import packages
import React from "react";

// import material-ui components
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box
} from "@material-ui/core";



const useStyles = makeStyles({
  cards: {
    maxWidth: 345
  }
});

function StreamCard({ data }) {
  const classes = useStyles();
  return (
    <Box display="flex" alignItems="center">
      <Card className={classes.cards}>
        <CardActionArea>
          <CardMedia />
          <CardContent>
            <Typography variant="h5">hello</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default StreamCard;



// {stream.singles.map((item, i) => (
//     <StreamCard data={item} key={i} />
//   ))}