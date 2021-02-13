import {
  AppBar,
  Toolbar,
  Button,
  InputBase,
  makeStyles,
  Grid,
  Switch,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
} from "@material-ui/core";
import { PinDrop, Search } from "@material-ui/icons";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  CardMapNotShowing: {
    paddingBottom: theme.spacing(2),
  },
  CardMapShowing: {
    padding: theme.spacing(2),
  },
}));
const CustomizedCard = (props) => {
  const classes = useStyles();

  const { gym, isMapShowing } = props;
  if (!isMapShowing) {
    return (
      <Grid xs={3} item>
        <Card >
          <CardMedia
            component="img"
            alt={gym.name}
            height="300"
            image={gym.img}
            title={gym.name}
          />
          <CardContent >
            <Typography variant="h6" gutterBottom>
              {gym.name}
            </Typography>
            <Typography variant="subtitle1">پذیرش {gym.gender}</Typography>
          </CardContent>
          <Grid container justify="space-between" classes={{root:classes.CardMapNotShowing}}>
            <Grid item xs={5} justify="center" container>
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
            </Grid>
            <Grid xs={3} item container justify="center">
              <Typography>{gym.district}</Typography>
              <PinDrop />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    );
  } else {
    return (
      <Grid xs={12} item container >
        <Grid item xs={3}>
          {" "}
          <CardMedia
            component="img"
            alt={gym.name}
            height="200"
            image={gym.img}
            title={gym.name}
          />
        </Grid>
        <Grid item container xs={9} justify="space-between" classes={{root:classes.CardMapShowing}}>
          <Grid item>
            <Typography variant="h6" gutterBottom>
              {gym.name}
            </Typography>
            <Typography variant="subtitle1">پذیرش {gym.gender}</Typography>
            <Grid item justify="center">
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
            </Grid>
          </Grid>
          <Grid item justify="center">
            <Typography>{gym.district}</Typography>
            <PinDrop />
          </Grid>
        </Grid>
      </Grid>
    );
  }
};

export default CustomizedCard;
