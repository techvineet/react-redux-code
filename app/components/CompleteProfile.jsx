import React, { Component } from "react";

import CompleteProfileStep1 from "./completeProfile/CompleteProfileStep1";
import CompleteProfileStep2 from "./completeProfile/CompleteProfileStep2";
import CompleteProfileStep3 from "./completeProfile/CompleteProfileStep3";
import CompleteProfileStep4 from "./completeProfile/CompleteProfileStep4";

import RegistrationStep5 from "./registration/RegistrationStep5";
import RegistrationStep6 from "./registration/RegistrationStep6";
import RegistrationStep7 from "./registration/RegistrationStep7";
import Confirmation from "./registration/Confirmation";

class CompleteProfile extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        { this.props.step == 1 &&
          <CompleteProfileStep1
            continueHandler={this.props.setCompName}
            value={this.props.companyName} /> }

        { this.props.step == 2 &&
          <CompleteProfileStep2
            continueHandler={this.props.setHomeAdd}
            value={this.props.homeAddress}
            backHandler={this.props.decStep} /> }

        { this.props.step == 3 &&
          <CompleteProfileStep3
            continueHandler={this.props.setBillingAdd}
            value={this.props.billingAddress}
            backHandler={this.props.decStep} /> }

        { this.props.step == 4 && <CompleteProfileStep4
          continueHandler={this.props.setNRentals}
          value={this.props.nRentals}
          backHandler={this.props.decStep} /> }

        { this.props.step == 5 && <RegistrationStep4
          continueHandler={this.props.setPhone}
          value={this.props.phone}
          backHandler={this.props.decStep} /> }

        { this.props.step == 6 && <RegistrationStep5
          continueHandler={this.props.setStates}
          initialValues={{states: this.props.states}}
          backHandler={this.props.decStep} /> }

        { this.props.step == 7 && <RegistrationStep6
          continueHandler={this.props.setPassword}
          backHandler={this.props.decStep} /> }

        { this.props.step == 8 && <RegistrationStep7
          continueHandler={this.props.submitForm}
          pass={this.props.password}
          backHandler={this.props.decStep} /> }

        { this.props.step == 9 && <Confirmation /> }

        { this.props.submissionError && <div>There is an error while registering. Please contact administrator.</div>}
      </div>
    );
  }
};

export default CompleteProfile;
