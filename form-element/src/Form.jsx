import React, { useState } from "react";
import "./Form";

const Form = () => {
  const [firstName, setFirsName] = useState();
  const [sfirstName, setSfirsName] = useState();
  const [lastName, setLastName] = useState();
  const [slastName, setSlastName] = useState();

  const handChangefirst = (event) => {
    setFirsName(event.target.value);
  };

  const handChangelast = (event) => {
    setLastName(event.target.value);
  };

  const SubmitData = (event) => {
    event.preventDefault();
    setSfirsName(firstName);
    setSlastName(lastName);
  };

  return (
    <>
      <div className="formData">
        <form onSubmit={SubmitData}>
          <h1>
            {sfirstName} {slastName}
          </h1>
          <input
            name="name"
            placeholder=" Enter first Name"
            onChange={handChangefirst}
          />
          <input
            name="name"
            placeholder=" Enter last Name"
            onChange={handChangelast}
          />

          <button type="submit">Click Me !</button>
        </form>
      </div>
    </>
  );
};
export default Form;
