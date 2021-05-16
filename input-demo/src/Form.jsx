import React from "react";
import Input from "./Input";

function Form() {
  const dataChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <Input
        type="text"
        value=""
        name="name"
        placeHolder="Enter the name"
        inputchange={dataChange}
      />
    </>
  );
}

export default Form;
