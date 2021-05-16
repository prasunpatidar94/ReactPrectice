import React from "react";
interface IProps {}
interface IState {}

class HomeChild extends React.Component<IProps, IState> {
  render() {
    return (
      <React.Fragment>
        <h1>This is the Home child </h1>
      </React.Fragment>
    );
  }
}

export default HomeChild;
