import { Typography } from "@material-ui/core";
import React from "react";
interface IState { }
interface IProps { }

class Mobiles extends React.Component<IProps, IState> {
  render() {
    return (
      <React.Fragment>
        <Typography variant="h1" color="secondary">
          Mobiles is comming soon...!
        </Typography>
      </React.Fragment>
    );
  }
}
export default Mobiles;
