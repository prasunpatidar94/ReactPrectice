import React, { useState } from "react";

const info = {
  fullName: "",
  lastName: "",
};

const FormWithSingleState = () => {
  const [state, setState] = useState({
    fname: "",
    lname: "",
  });

  const submitData = (event) => {
    event.preventDefault();

    console.log("data", state);
  };

  const handChange = (event) => {
    let { name, value } = event.target;

    // const name = event.target.name;
    // const value = event.target.value;

    setState((preData) => {
      console.log(preData);

      return {
        ...preData,
        [name]: value,
      };

      //   if (name === "fname") {
      //     return {
      //       fname: value,
      //       lname: preData.lname,
      //     };
      //   } else if (name === "lname") {
      //     return {
      //       fname: preData.fname,
      //       lname: value,
      //     };
      //   }
    });
  };

  return (
    <>
      <div>
        <h3>
          Hello {info.fullName} {info.lastName}
        </h3>
        <form onSubmit={submitData}>
          <input
            name="fname"
            type="text"
            value={state.fname}
            placeholder="Enter First Name"
            onChange={handChange}
          />
          <br></br>
          <input
            name="lname"
            type="text"
            value={state.lname}
            placeholder="Enter Last Name"
            onChange={handChange}
          />

          <button type="submit" name="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FormWithSingleState;
