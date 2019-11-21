import React from "react";

const Input = props => {
  return (
    <span>
      <label htmlFor={props.label}>{props.label}</label>
      <input
        name={props.name}
        type={props.type}
        id={props.label}
        value={props.input}
        onChange={props.handleChange}
      />
    </span>
  );
};

export default Input;
