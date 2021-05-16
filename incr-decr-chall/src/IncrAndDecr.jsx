import React, { useState } from "react";
import "./IncrAndDecr.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const IncrAndDecr = () => {
  const [state, setState] = useState(0);
  const increment = () => {
    setState(state + 1);
  };

  const decrement = () => {
    if (state !== 0) {
      setState(state - 1);
    } else {
      alert("Number is already reached on 0");
    }
  };

  return (
    <React.Fragment>
      <div className="outer">
        <div className="value">
          <h1>{state}</h1>
        </div>
        <div className="btns">
          <button type="button" onClick={increment}>
            <AddIcon />
          </button>
          <button type="button" onClick={decrement}>
            <RemoveIcon />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default IncrAndDecr;
