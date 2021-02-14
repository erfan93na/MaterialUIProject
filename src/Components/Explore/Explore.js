import React, { useState } from "react";
import { useHistory, Redirect, useLocation } from "react-router-dom";
import { Search } from "@material-ui/icons";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { data } from "../../data";
import Map from "../Map/Map";
import CustomizedCard from "./CustomizedCard/CustomizedCard";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import {
  AppBar,
  Toolbar,
  Button,
  InputBase,
  makeStyles,
  Grid,
  Switch,
  Box,
  Menu,
  MenuItem,
  FormControlLabel,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  AppBarBox: {
    color: "white",
    "& *": {
      color: "white",
    },
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
    "@media (max-width:960px)": {
      position: "static",
      height: "300px",
      margin: "10px",
      order: "-1",
    },
  },
  UserMenu: {
    top: "60px !important",
  },
}));
const Explore = () => {
  const isLoggedIn = +localStorage.getItem("isLoggedIn");
  const location = useLocation();

  const classes = useStyles();
  const [searchState, setSearchState] = useState("");
  const [isMapShowing, setMapShow] = useState(
    location.pathname.includes("/explore/on") ? true : false
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();
  const handleSwitchToggle = () => {
    history.push(isMapShowing ? "/explore/off" : "/explore/on");
    setMapShow((prevState) => !prevState);
  };
  const handleClick = (e) => {
    setAnchorEl(e.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSignOut = () => {
    handleClose();
    localStorage.setItem("isLoggedIn", "0");

    history.push("/");
  };

  return !isLoggedIn ? (
    <Redirect to="/explore" />
  ) : (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box
            classes={{ root: classes.AppBarBox }}
            display="flex"
            justifyContent="space-between"
            width={1}
            flexWrap="wrap"
            p={1}
          >
            {" "}
            <Button
              aria-controls="usermenu"
              aria-haspopup="true"
              onClick={handleClick}
              endIcon={<ArrowDropDownIcon />}
            >
              عرفان نقاش لو
            </Button>
            <Menu
              id="usermenu"
              classes={{ paper: classes.UserMenu }}
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>پروفایل</MenuItem>
              <MenuItem onClick={handleSignOut}>خروج</MenuItem>
            </Menu>
            <Box
              bgcolor="primary.light"
              py={1}
              px={2}
              borderRadius="borderRadius"
            >
              {" "}
              <InputBase
                endAdornment={<Search />}
                value={searchState}
                onChange={(e) => setSearchState(e.target.value)}
                placeholder="جستجو..."
                inputProps={{ "aria-label": "search" }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        bgcolor={"primary.light"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        p={3}
        mb={4}
        boxShadow={3}
      >
        <FormControlLabel
          control={
            <Switch
              color="primary"
              checked={isMapShowing}
              onChange={handleSwitchToggle}
            />
          }
          label="نمایش نقشه"
        />

        <Grid item>
          <BreadCrumbs />
        </Grid>
      </Box>
      <Grid container item justify="center" spacing={2} xs={12}>
        <Grid item container spacing={3} xs={12} md={isMapShowing ? 8 : 10}>
          {data
            .filter((item) => item.name.includes(searchState))
            .map((gym, index) => {
              return (
                <CustomizedCard
                  key={index}
                  gym={gym}
                  isMapShowing={isMapShowing}
                />
              );
            })}
        </Grid>
        {isMapShowing ? (
          <Grid item xs={12} md={4} classes={{ root: classes.Map }}>
            <Map />
          </Grid>
        ) : null}
      </Grid>
    </>
  );
};

export default Explore;
