import React from "react";
import "./ApplyCss.css";
class ApplyCss extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="header">Prasun Patidar</h1>
        <div className="nav-bar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Indent</a>
            </li>
            <li>
              <a href="#">Report</a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
export default ApplyCss;
