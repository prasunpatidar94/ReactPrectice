import React from "react";
import "./InputComponent.css";

const InputComponent = (props) => {
  return (
    <React.Fragment>
      <div className="input_cshow">
        <span>
          <label> {props.lable}</label>
          <input
            type={props.type}
            name={props.name}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.handOnChange}
          />
        </span>
      </div>
    </React.Fragment>
  );
};

export default InputComponent;
