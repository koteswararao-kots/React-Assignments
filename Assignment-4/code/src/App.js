import React from "react";
import Postview from "./Postview";
import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () =>{
    return (

<Router>
<Switch>
  <Route path="/Postview">
    <Postview />
    </Route>
    <Route path="/">
    <LandingPage />
  </Route>
</Switch>
</Router>
    );
}
export default App;