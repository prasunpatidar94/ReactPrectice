import React, { useState } from "react";

const TimeState = () => {
  const [initDate, setCurrentDate] = useState(new Date().toLocaleTimeString());

  return (
    <React.Fragment>
      <div className="data">
        <h1>{initDate}</h1>
        <button
          onClick={() => {
            setCurrentDate(new Date().toLocaleTimeString());
          }}
        >
          Click Me !!!
        </button>
      </div>
    </React.Fragment>
  );
};

export default TimeState;
