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
  Container,Menu,MenuItem
} from "@material-ui/core";
import { PinDrop, Search } from "@material-ui/icons";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import StarRateIcon from "@material-ui/icons/StarRate";
import Map from "../Map/Map";
import { data } from "../../data";
import { useState } from "react";
import {useHistory,useRouteMatch,NavLink} from "react-router-dom"
import CustomizedCard from "./CustomizedCard/CustomizedCard";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs"
const useStyles = makeStyles((theme) => ({
  AppBar: {
    justifyContent: "space-between",
    color: "white",
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
  UserMenu:{
    top:"60px !important"
  }
}));
const Explore = () => {
 
  const classes = useStyles();
  const [searchState, setSearchState] = useState("");
  const [isMapShowing, setMapShow] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const history = useHistory()
const handleSwitchToggle=()=>{
  history.push(isMapShowing?"/explore/off":"/explore/on")
  setMapShow((prevState) => !prevState)
}
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
};
const handleSignOut=()=>{
  handleClose();
  localStorage.setItem("isLoggedIn","0")
  history.push("/explore")
}

  return (
    <div>
      <AppBar position="static">
        <Toolbar classes={{ root: classes.AppBar }}>
          <Button aria-controls="usermenu" aria-haspopup="true" onClick={handleClick} endIcon={<ArrowDropDownIcon />}>عرفان نقاش لو</Button>
          <Menu
        id="usermenu"
        classes={{paper:classes.UserMenu}}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>پروفایل</MenuItem>
        <MenuItem onClick={handleSignOut}>خروج</MenuItem>
      </Menu>
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
            onChange={handleSwitchToggle}
          />
        </Grid>
        <Grid item><BreadCrumbs/></Grid>
      </Grid>
      <Grid container spacing={1} xs={12}>
        <Grid item container spacing={3} xs={isMapShowing ? 8 : 12}>
          {data
            .filter((item) => item.name.includes(searchState))
            .map((gym, index) => {
              return <CustomizedCard gym={gym} isMapShowing={isMapShowing} />;
            })}
        </Grid>
        {isMapShowing ? (
          <Grid item xs={4} classes={{ root: classes.Map }}>
            <Map />
          </Grid>
        ) : null}
      </Grid>
    </div>
  );
};

export default Explore;
