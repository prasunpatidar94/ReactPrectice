import React, { useState } from "react";
import InputForm from "./InputForm";

function Form() {
  const dataChange = (event) => {
    console.log(event.target.value);
  };

  const [state, setState] = useState();
  return (
    <>
      <InputForm
        type="text"
        value={state}
        name="name"
        placeholder="Enter the name"
        inputchange={dataChange}
      />
    </>
  );
}

export default Form;
