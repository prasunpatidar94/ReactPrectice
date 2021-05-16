import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Indent from "./Indent";
import Report from "./Report";

interface IState {}
interface IProps {}

class Main extends React.Component<IProps, IState> {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavLink
            to="/home-page"
            exact={true}
            strict
            activeStyle={{ color: "red" }}
            style={{ marginLeft: 100 }}
          >
            Home
          </NavLink>
          <NavLink
            to="/indent-page"
            exact={true}
            strict
            activeStyle={{ color: "red" }}
            style={{ marginLeft: 100 }}
          >
            Indent
          </NavLink>
          <NavLink
            to="/report-page"
            exact={true}
            strict
            activeStyle={{ color: "red" }}
            style={{ marginLeft: 100 }}
          >
            Report
          </NavLink>

          <Route path="/home-page" component={Home} exact={true} strict></Route>
          <Route
            path="/indent-page"
            component={Indent}
            exact={true}
            strict
          ></Route>
          <Route
            path="/report-page"
            component={Report}
            exact={true}
            strict
          ></Route>
        </Router>
      </React.Fragment>
    );
  }
}
export default Main;
