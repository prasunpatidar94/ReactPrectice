import React from "react";

const InputForm = (props) => {
  return (
    <input
      type={props.type}
      value={props.value}
      name={props.name}
      placeholder={props.placeHolder}
      onChange={props.inputchange}
    />
  );
};
export default InputForm;
