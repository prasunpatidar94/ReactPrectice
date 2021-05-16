import React, { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState(0);
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);


  useEffect(() => {
    document.title = `you have clicked me : ${state}`;
  }, [state]);
  return (
    <>
      <button onClick={() => {
        setState(state + 1);
      }}>Click me : {state}</button>
      <br />
      <button onClick={() => {
        setState1(state1 + 1);
      }}>Click me : {state1}</button>
      <br />
      <button onClick={() => {
        setState2(state2 + 1);
      }}>Click me : {state2}</button>
    </>
  );
}

export default App;
