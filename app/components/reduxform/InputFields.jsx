import React from "react";

export const TextInput = (props) => (
  <div className="input-row">
    <label htmlFor={props.input.name}>{props.label}</label>
    <input type={props.type || "text"} {...props.input} />
    {props.meta.touched && props.meta.error &&
       <span className="error">{props.meta.error}</span>}
  </div>
);

export const SelectInput = (props) => (
  <div className="input-row">
    <label htmlFor={props.input.name}>{props.label}</label>
    <select {...props.input}>
      <option>Please select</option>
      {Object.keys(props.options).map((k, i) =>
        <option key={i} value={k}>{props.options[k]}</option>
      )}
    </select>
    {props.meta.touched && props.meta.error &&
       <span className="error">{props.meta.error}</span>}
  </div>
);

export const RadioInput = (props) => (
  <div className="input-row">
    <input type="radio" {...props.input} />
    <label htmlFor={props.input.name}>{props.label}</label>
    {props.meta.touched && props.meta.error &&
       <span className="error">{props.meta.error}</span>}
  </div>
);
