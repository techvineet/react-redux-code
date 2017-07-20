import React, { Component } from "react";
import { Form, Field, FieldArray, reduxForm } from "redux-form";

import { RegistrationStepHeader } from "./RegistrationHeaders";
import usStatesObj from "../../services/usStatesObj";

const StateSelect = ({ fields, meta }) => (
  <ul>
    <li><button type="button" onClick={() => fields.push()}>Add State</button></li>
    {(meta.submitFailed) && meta.error && <span>{meta.error}</span>}
    {fields.map((state, i) => (
      <li key={i}>
        <Field name={state} component="select">
          <option>Please select</option>
          {Object.keys(usStatesObj).map((k, i) =>
            <option key={i} value={k}>{usStatesObj[k]}</option>
          )}
        </Field>
        { i > 0 && <a href="#" title="Remove"
          onClick={() => fields.remove(i)}
        > X </a> }
      </li>
    ))}
  </ul>
);

const validate = values => {
  const errors = {};

  // errors.states = { _error: 'This is some error message' };
  return errors;
};

class RegistrationStep5 extends Component {
  constructor(props) {
    super(props);

    this.continue = this.continue.bind(this);
  }

  continue(data) {
    this.props.continueHandler(data.states);
  }

  render() {
    return (
      <div>
        <RegistrationStepHeader step="5" />
        <h3>What states are your rentals in?</h3>
        <Form onSubmit={this.props.handleSubmit(this.continue)}>
          <div>
            <FieldArray name="states" component={StateSelect} />
          </div>
          <div className="mt10">
            <a href="#" onClick={this.props.backHandler}>Back</a> |
            <button
              type="submit"
            >Continue</button>
          </div>
        </Form>
      </div>
    );
  }
}

export default reduxForm({
  form: "registrationStep5",
  validate
})(RegistrationStep5);
