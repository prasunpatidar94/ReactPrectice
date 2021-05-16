import React from "react";
import Input from "./Input";

const Data = () => {
  const getValue = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <Input
        type="text"
        placeholder="ender the name "
        name="name"
        lable="Name"
        value=""
      />
      <Input
        type="text"
        placeholder="ender the name "
        name="name"
        lable="Name"
        onChange={getValue}
      />
      <Input
        type="text"
        placeholder="ender the name "
        name="name"
        lable="Name"
      />
      <Input
        type="text"
        placeholder="ender the name "
        name="name"
        lable="Name"
        value=""
      />
    </>
  );
};

export default Data;
