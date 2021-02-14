import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (props) => {
  const isLoggedIn = +localStorage.getItem("isLoggedIn");
  const Component = props.component;
  return <Route  path={props.path}>
      {isLoggedIn?<Component/>:<Redirect to="/"/>}
  </Route>
  
};

export default PrivateRoute;
