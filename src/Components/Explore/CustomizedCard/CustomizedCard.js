import {
  makeStyles,
  Grid,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import {  PinDrop } from "@material-ui/icons";
import StarRateIcon from "@material-ui/icons/StarRate";
const useStyles = makeStyles((theme) => ({
  root:{
    "&:hover":{
      boxShadow:theme.shadows[15]
    }
  },
  CardMapNotShowing: {
    paddingBottom: theme.spacing(2),
  },
  CardMapShowing: {
    padding: theme.spacing(2),
  },
  RateContainer: {
    flexWrap: "nowrap",
  },
}));
const CustomizedCard = (props) => {
  const classes = useStyles();

  const { gym, isMapShowing } = props;
  if (!isMapShowing) {
    return (
      <Grid xs={12} md={6} lg={4}item >
        <Card elevation={3}  classes={{root:classes.root}}>
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
            <Typography variant="subtitle1">پذیرش {gym.gender}</Typography>
          </CardContent>
          <Box p={2} display="flex" justifyContent="space-between">
            <Box display="flex" justifyContent="flex-start" flexWrap="nowrap">
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <Typography>{gym.district}</Typography>
              <PinDrop />
            </Box>
          </Box>
        </Card>
      </Grid>
    );
  } else {
    return (
      <Grid xs={12} item container>
        <Box boxShadow={3} width={"100%"} display="flex"  classes={{root:classes.root}}>
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
          <Grid item container xs={9} justify="space-between">
            <Box
              width="100%"
              p={3}
              display="flex"
              justifyContent="space-between"
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Typography variant="h6" gutterBottom>
                  {gym.name}
                </Typography>
                <Typography variant="subtitle1">پذیرش {gym.gender}</Typography>
                <Box display="flex" justifyContent="center" flexWrap="nowrap">
                  <StarRateIcon />
                  <StarRateIcon />
                  <StarRateIcon />
                  <StarRateIcon />
                  <StarRateIcon />
                </Box>
              </Box>
              <Box  justify="center">
                <Typography>{gym.district}</Typography>
                <PinDrop />
              </Box>
            </Box>
          </Grid>
        </Box>
      </Grid>
    );
  }
};

export default CustomizedCard;
