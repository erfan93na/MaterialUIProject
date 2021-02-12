import { Redirect, Route } from "react-router-dom";

const PrevRoute = (props) => {
    console.log("ho")
  const isLoggedIn = localStorage.getItem("isLoggedIn");
console.log(isLoggedIn)
  const Component = props.component;
  return <Route>
      {isLoggedIn?<Component/>:<Redirect to="/login"/>}
  </Route>
  
};

export default PrevRoute;
