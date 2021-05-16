import React from "react";

const header = {
  color: "red",
  fontSize: "px",
  textAlign: "center",
};
class InlineCss extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={header}>Prasun Patidar</h1>
      </React.Fragment>
    );
  }
}

export default InlineCss;
