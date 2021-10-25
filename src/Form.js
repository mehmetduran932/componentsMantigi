import React, { useState } from "react";
import ToolBox from "./ToolBox";

function Form({ value, name, onChange }) {
  const [text, setText] = useState("");
  return (
    <>
      <ToolBox
        name={name}
        value={value}
        onChange={(e) => setText(e.target.value)}
      />
      <h1>{text}</h1>
    </>
  );
}
export default Form;
