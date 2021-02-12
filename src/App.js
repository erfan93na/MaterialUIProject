import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrevRoute from "./Components/PrivateRoute/PrivateRoute";
import RTLProvider from "./RTLProvider/RTLProivder";
import Explore from "./Components/Explore/Explore";
import Login from "./Components/Login/Login";
import "./App.css"

const App = () => {
  return (
    <RTLProvider>
      <Router>
        <Switch>
          <PrevRoute path="/explore" component={Explore} />
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </RTLProvider>
  );
};

export default App;
