import React from "react";

class Challange2 extends React.Component {
  render() {
    const uname = "Prasun patidar";

    return (
      <React.Fragment>
        <h1>{`my name is ${uname}`}</h1>
        <p>{`today date is ${new Date().toLocaleDateString()}`}</p>
        <p>{`today time is ${new Date().toLocaleTimeString()}`}</p>
      </React.Fragment>
    );
  }
}
export default Challange2;
