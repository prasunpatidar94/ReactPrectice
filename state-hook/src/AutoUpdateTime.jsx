import React, { useState } from "react";

const AutoUpdateTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <React.Fragment>
      <div className="data">
        <h1>{time}</h1>
      </div>
    </React.Fragment>
  );
};

export default AutoUpdateTime;
