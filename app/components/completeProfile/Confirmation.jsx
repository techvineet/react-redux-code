import React from 'react';
import { RegistrationConfirmHeader } from './RegistrationHeaders';

const Confirmation = props => (
  <div>
    <RegistrationConfirmHeader />
    <h3>Please verify your account using the link we emailed to you</h3>
    <button type="button">Complete Profile</button> or
    <br />
    <a href="#">Login to proceed to your account.</a>
  </div>
)

export default Confirmation;
