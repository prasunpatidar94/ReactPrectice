import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ContactUs from "./ContactUs";
import Error from "./Error";
import Home from "./Home";
import Indent from "./Indent";
import Menu from "./Menu";
import User from "./User";

function App() {
  return (<>
    <Menu />
    <Switch>
      <Route exact path="/" component={() => { return <Home name="This is props pass " /> }} />
      <Route path="/indent" component={Indent} />
      <Route path="/contact" render={() => { return <ContactUs name="This is props pass with render method " /> }} />
      {/* single data add  */}
      {/* <Route path="/user/:fname" component={User} /> */}
      {/* multipal data add  */}
      <Route path="/user/:fname/:lname" component={User} />


      <Redirect to="/" />

      {/* <Route component={Error} /> */}

    </Switch>

  </>);
}

export default App;
