import React from "react";
import TimeState from "./TimeState";

import State from "./State";
import AutoUpdateTime from "./AutoUpdateTime";

let Main = () => {
  return (
    <React.Fragment>
      <State />
      <TimeState />
      <AutoUpdateTime />
    </React.Fragment>
  );
};

export default Main;
