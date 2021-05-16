import React from "react";
import Child from "./Child";

interface IState {}
interface IProps {}

class Base extends React.Component<IProps, IState> {
  render() {
    let info = {
      id: 111,
      ename: "Prasun Patidar",
      city: "kasrawad",
    };
    return (
      <React.Fragment>
        <Child info={info}></Child>
      </React.Fragment>
    );
  }
}
export default Base;
