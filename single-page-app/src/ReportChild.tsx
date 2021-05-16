import React from "react";
interface IProps {}
interface IState {}

class ReportChild extends React.Component<IProps, IState> {
  render() {
    return (
      <React.Fragment>
        <h1>This is the Report Child </h1>
      </React.Fragment>
    );
  }
}

export default ReportChild;
