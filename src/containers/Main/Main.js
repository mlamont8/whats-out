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
import Browse from "../Browse/Browse";

const Main = () => (
  <Router>
    <div className="container-fluid">
      <div className="row header">
        <Menu right noOverlay isOpen={false} width={175}>
          <Link to="/">Home</Link>
          <Link to="/browse/movies">Movies</Link>
        </Menu>
      </div>
      <div className="row content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/browse/:type" component={Browse} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  </Router>
);

export default Main;
