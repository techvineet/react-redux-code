import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import { TextInput, SelectInput } from "../reduxForm/InputFields";
import usStatesObj from "../../services/usStatesObj";

const validate = values => {
  const errors = {};

  if(!values.firstName) {
    errors.firstName = "Required";
  }

  return errors;
};

class UserProfileInfo extends Component {
  render() {
    if(this.props.loading) {
      return <div>Loading...</div>;
    }
    else {
      return (
        <form onSubmit={this.props.handleSubmit}>
          <Field name="firstName" component={TextInput} label="First Name" />
          <Field name="lastName" component={TextInput} label="Last Name" />
          <Field name="middleName" component={TextInput} label="Middle Name" />
          <Field name="email" component={TextInput} label="Email" type="email" />
          <Field name="phone" component={TextInput} label="Phone Number" />
          <Field name="dob" component={TextInput} label="Birthday" />
          <Field name="currentPassword" component={TextInput} label="Current Password" type="password"/>
          <Field name="password" component={TextInput} label="New Password" type="password"/>
          <Field name="passwordConfirmation" component={TextInput} label="Confirm Password" type="password"/>
          <div>Home Address</div>
          <Field name="address1" component={TextInput} label="Address1" />
          <Field name="address2" component={TextInput} label="Address2" />
          <Field name="city" component={TextInput} label="City" />
          <Field name="state" component={SelectInput} options={usStatesObj} label="State" />
          <Field name="zip" component={TextInput} label="Zip Code" />
          <button type="submit">Submit</button>
        </form>
      );
    }
  }
}

export default reduxForm({
  form: "userProfileInfo",
  enableReinitialize: true,
  validate
})(UserProfileInfo);
