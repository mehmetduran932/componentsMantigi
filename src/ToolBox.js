import React from "react";

function ToolBox({ name, value, onChange }) {
  return (
    <>
      <input name={name} value={value} onChange={onChange} />
    </>
  );
}
export default ToolBox;
