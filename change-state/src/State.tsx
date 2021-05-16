import React from "react";

interface IState {
  data: number;
}
interface IProps {}
class State extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: 0,
    };
  }

  increment = (p1: number) => {
    let jsonObj = { data: this.state.data + p1 };
    this.setState(jsonObj);
  };
  decrement = (p1: number) => {
    let jsonObj = { data: this.state.data - p1 };
    this.setState(jsonObj);
  };

  render() {
    return (
      <React.Fragment>
        numder : {this.state.data}
        <button
          onClick={() => {
            this.increment(2);
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.decrement(3);
          }}
        >
          Decrement
        </button>
      </React.Fragment>
    );
  }
}

export default State;
