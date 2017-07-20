import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import { RadioInput } from "../reduxForm/InputFields";

const validate = values => {
  return {};
};

class Notifications extends Component {
  render() {
    if(this.props.loading) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <form onSubmit={this.props.handleSubmit}>
          <Field name="notifyVia" type="radio" component={RadioInput} label="Email" value="email" />
          <Field name="notifyVia" type="radio" component={RadioInput} label="Text Message" value="text" />
          <Field name="notifyVia" type="radio" component={RadioInput} label="Email and Text Message" value="both" />
          <Field name="notifyVia" type="radio" component={RadioInput} label="None" value="not_set" />
          <button type="submit" disabled={this.props.inProcess}>Submit</button>
        </form>
      );
    }
  }
}

export default reduxForm({
  form: "notifications",
  enableReinitialize: true,
  validate
})(Notifications);
