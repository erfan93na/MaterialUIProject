import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import RTLProvider from "./RTLProvider/RTLProivder";
import Explore from "./Components/Explore/Explore";
import Login from "./Components/Login/Login";
import "./App.css"

const App = () => {
  return (
    <RTLProvider>
      <Router>
        <Switch>
        <Route exact path="/">
        <Login />
          </Route>
          <PrivateRoute path="/explore/" component={Explore} />
          
        </Switch>
      </Router>
    </RTLProvider>
  );
};

export default App;
