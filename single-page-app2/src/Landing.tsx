import { Typography } from "@material-ui/core";
import React from "react";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Leptops from "./Leptops";
import Mobiles from "./Mobiles";
import Tv from "./Tv";

interface IState { }
interface IProps { }

class Landing extends React.Component<IProps, IState> {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <NavLink
                        to="/leptop"
                        exact={true}
                        strict
                        activeStyle={{ color: "black" }}
                    >
                        <Typography color="textPrimary" variant="h3">
                            Leptops
            </Typography>
                    </NavLink>
                    <NavLink
                        to="/mobiles"
                        exact={true}
                        strict
                        activeStyle={{ color: "black" }}
                    >
                        <Typography color="textPrimary" variant="h3">
                            Mobiles
            </Typography>
                    </NavLink>
                    <NavLink
                        to="/tv"
                        exact={true}
                        strict
                        activeStyle={{ color: "black" }}>
                        <Typography color="textPrimary" variant="h3">
                            TV
            </Typography>
                    </NavLink>
                    <Route path="/leptop" component={Leptops} strict exact={true}></Route>
                    <Route
                        path="/mobiles"
                        component={Mobiles}
                        strict
                        exact={true}
                    ></Route>
                    <Route path="/tv" component={Tv} strict exact={true}></Route>
                </Router>
            </React.Fragment>
        );
    }
}
export default Landing;
