import React from "react";
interface IProps {}
interface IState {}

class IndentChild extends React.Component<IProps, IState> {
  render() {
    return (
      <React.Fragment>
        <h1>This is the Indent Child </h1>
      </React.Fragment>
    );
  }
}

export default IndentChild;
