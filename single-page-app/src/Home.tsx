import React from "react";
import HomeChild from "./HomeChild";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

interface IState {}
interface IProps {}
class Home extends React.Component<IProps, IState> {
  render() {
    return (
      <React.Fragment>
        <h1>This is tha home </h1>
        <Router>
          <NavLink
            to="/home-child"
            exact={true}
            strict
            activeStyle={{ color: "pink" }}
          >
            Child
          </NavLink>
          <Route
            path="/home-child"
            exact={true}
            strict
            component={HomeChild}
          ></Route>
        </Router>
      </React.Fragment>
    );
  }
}

export default Home;
