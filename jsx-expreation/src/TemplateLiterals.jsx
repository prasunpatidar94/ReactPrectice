import React from "react";

let firstName = "Prasun";
let secondName = "Patidar";
class TemplateLiterals extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>{firstName + secondName}</h1>

        <h1>{`${firstName} ${secondName}`}</h1>
      </React.Fragment>
    );
  }
}
export default TemplateLiterals;
