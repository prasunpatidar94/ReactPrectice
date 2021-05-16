import React from "react";

interface IState {}
interface IProps {
  info: any;
}

class Child extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return <React.Fragment>{JSON.stringify(this.props.info)}</React.Fragment>;
  }
}

export default Child;
