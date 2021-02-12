import React,{useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const allowedUsers = JSON.parse(localStorage.getItem("allowedUsers"));


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
const history=useHistory()
  const classes = useStyles();
  const [usernameState,setUserNameState]=useState("")
  const [passwordState,setPasswordState]=useState("")

 const [[usernameFieldError,usernameFieldHelper],setUsernameError]=useState([false,""])
 const [[passwordFieldError,passowrdFieldHelper],setPasswordError]=useState([false,""])
const handleSubmit=(e)=>{
    e.preventDefault();
   setUsernameError([false,""])
     setPasswordError([false,""])
const username=usernameState
const password=passwordState

if (!username||!password) {
    if (!username) setUsernameError([true,"لطفا فیلد بالا را پر کنید"])
    if (!password) setPasswordError([true,"لطفا فیلد بالا را پر کنید"])
}

else {
    let foundUserIndex=allowedUsers.findIndex((allowedUser)=>allowedUser.username===username)
     if (foundUserIndex===-1) setUsernameError([true,"نام کاربری وارد شده یافت نشد"])
     else {
         if (allowedUsers[foundUserIndex].password!==password) {setPasswordError([true,"رمز وارد شده درست نیست"])}
         else {localStorage.setItem('isLoggedIn',"1")
             history.push("/explore")}
     }
}



}
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
ورود به سایت          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              error={usernameFieldError}
              helperText={usernameFieldHelper}
              fullWidth
              id="email"
              label="نام کاربری"
              name="username"
              autoComplete="username"
              autoFocus
              value={usernameState}
              onChange={(e)=>setUserNameState(e.target.value)}

            />
            <TextField
              variant="outlined"
              margin="normal"
              error={passwordFieldError}
              helperText={passowrdFieldHelper}
              fullWidth
              name="password"
              label="رمز عبور"
              type="password"
              id="password"
              autoComplete="current-password"
              value={passwordState}
              onChange={(e)=>setPasswordState(e.target.value)}

            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="مرا به خاطر بسپار"
            />
            <Button
            
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              ورود
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  رمز خود را فراموش کرده اید؟
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"هنوز عضو نیستید؟ ثبت نام کنید"}
                </Link>
              </Grid>
            </Grid>
           
          </form>
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />

    </Grid>
  );
}
