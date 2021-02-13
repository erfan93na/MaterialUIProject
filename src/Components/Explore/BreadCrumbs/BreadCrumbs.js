import {
  useHistory,
  useRouteMatch,
  NavLink,
  withRouter,
  useLocation,
} from "react-router-dom";
import { makeStyles, Box, withTheme } from "@material-ui/core";
import { PlayCircleFilledWhite } from "@material-ui/icons";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const useStyles = makeStyles({
  linkActive: {
    color: "white !important",
    background: "green",
    borderRadius: "5px",
  },
  root: {
    "& a": {
      color: "black",
      fontSize: "16px",
      padding: "8px",
    },
  },
});
const BreadCrumbs = (props) => {
  const location = useLocation();
  const classes = useStyles();
  const splittedURL = location.pathname
    .split("/")
    .slice(1)
    .map((item) => {
      let splitted = item.split("");
      splitted[0] = splitted[0].toUpperCase();
      return splitted.join("");
    });

  let addedURL = "";
  const finalLinks = splittedURL.map((item, index) => {
    addedURL += "/" + item;
    return (
      <>
        <ArrowForwardIosIcon/>
        <NavLink exact activeClassName={classes.linkActive} to={addedURL}>
          {item}
        </NavLink>
      </>
    );
  });
  return (
    <Box classes={{ root: classes.root }} mr={2} display="flex" flexDirection="row-reverse" alignItems="center">
      <NavLink to="/">Home</NavLink>
      {finalLinks}
    </Box>
  );
};

export default withRouter(BreadCrumbs);
