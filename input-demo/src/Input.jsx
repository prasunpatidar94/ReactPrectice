import React from "react";

const Input = (props) => {
  return (
    <Input
      type={props.type}
      value={props.value}
      name={props.name}
      placeHolder={props.placeHolder}
      onChange={props.inputchange}
    />
  );
};
export default Input;
