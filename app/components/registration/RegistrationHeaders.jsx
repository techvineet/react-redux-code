import React, { Component } from 'react';

export const RegistrationStepHeader = props => (
  <div>
    <h2>Landlord registration process</h2>
    { props.step && <p> Step {props.step} of 8 </p> }
  </div>
);

export const RegistrationConfirmHeader = props => (
  <div>
    <h2>Your account was successfully created</h2>
    <p>We have sent you a verification email</p>
  </div>
);

export const CompleteProfileHeader = props => (
  <div>
    <h2>Landlord profile completion process</h2>
    { props.step && <p> Step {props.step} of 8 </p> }
  </div>
);

export const ProfileCompletedConfirmHeader = props => (
  <div>
    <h2>Success! Your profile is now complete</h2>
  </div>
);
