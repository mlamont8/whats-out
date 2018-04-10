import React from "react";
import { stack as Menu } from "react-burger-menu";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "../Home/Home";

const Main = () => (
  <Router>
    <div className="container-fluid">
      <div className="row header">
        <Menu right noOverlay isOpen={false} width={175}>
          <Link to="/">Home</Link>
        </Menu>
      </div>
      <hr />
      <div className="row">
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  </Router>
);

export default Main;
