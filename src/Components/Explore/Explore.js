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
import Map from "../Map/Map";
import { data } from "../../data";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  AppBar: {
    justifyContent: "space-between",color:"white"
  },
  SecondBar: {
    justifyContent: "space-between",
    padding: theme.spacing(2),
  },

  Card: {
    paddingBottom: theme.spacing(2),
  },
  Map: {
    height: "100vh",
    position: "sticky",
    left: "0",
    top: "0",
  },
}));
const Explore = () => {
  const classes = useStyles();
  const [searchState, setSearchState] = useState("");
  const [isMapShowing, setMapShow] = useState(false);

  return (
    <div>
    
      <AppBar position="static">
        <Toolbar classes={{ root: classes.AppBar }}>
          <Button endIcon={<ArrowDropDownIcon />}>عرفان نقاش لو</Button>
          <InputBase
            endAdornment={<Search />}
            value={searchState}
            onChange={(e) => setSearchState(e.target.value)}
            placeholder="جستجو..."
            inputProps={{ "aria-label": "search" }}
          />
        </Toolbar>
      </AppBar>
      <Grid container classes={{ root: classes.SecondBar }}>
        <Grid item>
          <Switch
          checked={isMapShowing}
          onChange={()=>setMapShow((prevState)=>!prevState)}
          />
        </Grid>
        <Grid item>BreadCrumbs</Grid>
      </Grid>
      <Grid container spacing={1} xs={12}>
        <Grid item container spacing={3} xs={isMapShowing?8:12}>
          {data
            .filter((item) => item.name.includes(searchState))
            .map((gym, index) => {
              return (
                <Grid xs={isMapShowing?12:3} item>
                  <Card classes={{ root: classes.Card }}>
                    <CardMedia
                      component="img"
                      alt={gym.name}
                      height="300"
                      image={gym.img}
                      title={gym.name}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {gym.name}
                      </Typography>
                      <Typography variant="subtitle1">
                        پذیرش {gym.gender}
                      </Typography>
                    </CardContent>
                    <Grid container justify="space-between">
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
            })}
        </Grid>
        {isMapShowing?<Grid item xs={4} classes={{ root: classes.Map }}>
          <Map />
        </Grid>:null}
      </Grid>
    </div>
  );
};

export default Explore;
