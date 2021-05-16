import { Typography } from "@material-ui/core";
import React from "react";
interface IState {}
interface IProps {}

class Leptops extends React.Component<IProps, IState> {
  render() {
    return (
      <React.Fragment>
        <Typography variant="h1" color="secondary">
          leptops is comming soon...!
        </Typography>
      </React.Fragment>
    );
  }
}
export default Leptops;
