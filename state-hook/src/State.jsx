import React, { useState } from "react";
import "./State.css";

const State = () => {
  const [count, CountSet] = useState(0);

  return (
    <React.Fragment>
      <div className="data">
        <h1>{count}</h1>
        <button
          onClick={() => {
            CountSet(count + 1);
          }}
        >
          Click Me !!!
        </button>
      </div>
    </React.Fragment>
  );
};

export default State;
