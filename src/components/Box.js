import React from "react";

const Box = props => {
  return (
    <div>
      <span className="box">{props.value}</span>
      <span>{props.label}</span>
    </div>
  );
};

export default Box;
