import React, { Component } from "react";
import { Field, FieldArray, reduxForm } from "redux-form";

import { TextInput, SelectInput } from "../reduxForm/InputFields";
import usStatesObj from "../../services/usStatesObj";

const StateSelect = ({ fields, meta }) => (
  <div className="input-row">
    <label>States where you have rentals</label>
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
  </div>
);

const validate = values => {
  const errors = {};

  if(!values.name) {
    errors.name = "Required";
  }

  return errors;
};

const goals = () => ({
  "1": "Goal1",
  "2": "Goal2",
  "3": "Goal3"
});

const strategies = () => ({
  "1": "Strategy1",
  "2": "Strategy2",
  "3": "Strategy3"
});

const timeFrames = () => ({
  "1": "TimeFrame1",
  "2": "TimeFrame2",
  "3": "TimeFrame3"
});

const markets = () => ({
  "1": "Market1",
  "2": "Market2",
  "3": "Market3"
});

const criterias = () => ({
  "1": "Criteria1",
  "2": "Criteria2",
  "3": "Criteria3"
});

const niches = () => ({
  "1": "Niche1",
  "2": "Niche2",
  "3": "Niche3"
});


class CompanyInfo extends Component {
  render() {
    if(this.props.loading) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <form onSubmit={this.props.handleSubmit}>
          <Field name="name" component={TextInput} label="Company Name" />
          <Field name="mission" component={TextInput} label="Mission" />
          <Field name="goals" component={SelectInput} options={goals()} label="Goals" />
          <Field name="strategy" component={SelectInput} options={strategies()} label="Strategy" />
          <Field name="timeFrame" component={SelectInput} options={timeFrames()} label="Timeframe to reach goal" />
          <Field name="market" component={SelectInput} options={markets()} label="Market" />
          <Field name="criteria" component={SelectInput} options={criterias()} label="Criteria" />
          <Field name="niche" component={SelectInput} options={niches()} label="Niche" />
          <FieldArray name="states" component={StateSelect} />
          <button type="submit" disabled={this.props.inProcess}>Submit</button>
        </form>
      );
    }
  }
}

export default reduxForm({
  form: "companyInfo",
  enableReinitialize: true,
  validate
})(CompanyInfo);
