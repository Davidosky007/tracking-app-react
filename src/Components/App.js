import React from "react";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Dashboard from "./Dashboard";


function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} render={props => (
            <Home />
          )} />
          <Route exact path={"/dashboard"} component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}                              

export default App;
