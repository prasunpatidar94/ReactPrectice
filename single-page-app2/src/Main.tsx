import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing";
import Login from "./Login";

interface IProps { };
interface IState { };


class Main extends React.Component<IProps, IState>{
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Route path="/landing" exact={true} strict component={Landing}></Route>
                    <Route path="/" exact={true} strict component={Login}></Route>

                </BrowserRouter>
            </React.Fragment>
        );
    };
};
export default Main;