import React, { useState } from "react";
import InputComponent from "./userComponent/InputComponent";

const FromComponent = () => {
  const [state, setState] = useState({
    fullname: "",
    lastname: "",
    email: "",
    number: "",
  });
  const handOnChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setState(function (preValue) {
      switch (name) {
        case "fullname":
          return {
            ...preValue,
            [name]: value,
          };
        case "lastname":
          return {
            ...preValue,
            [name]: value,
          };
        case "email":
          return {
            ...preValue,
            [name]: value,
          };
        case "number":
          return {
            ...preValue,
            [name]: value,
          };
      }
    });
  };
  return (
    <React.Fragment>
      <div className="main_show">
        <InputComponent
          lable="FullName :"
          name="fullname"
          value={state.fullname}
          placeholder="Enter Full Name :"
          handOnChange={handOnChange}
        />

        <InputComponent
          lable="LastName :"
          name="lastname"
          value={state.lastname}
          placeholder="Enter Full Name :"
          handOnChange={handOnChange}
        />

        <InputComponent
          lable="Email :"
          name="email"
          value={state.email}
          placeholder="Enter Email :"
          handOnChange={handOnChange}
        />

        <InputComponent
          lable="Number :"
          name="number"
          value={state.number}
          placeholder="Enter Number :"
          handOnChange={handOnChange}
        />
      </div>
    </React.Fragment>
  );
};
export default FromComponent;
