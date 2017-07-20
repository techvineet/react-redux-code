import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import RegistrationStep0 from "./registration/RegistrationStep0";
import RegistrationStep1 from "./registration/RegistrationStep1";
import RegistrationStep2 from "./registration/RegistrationStep2";
import RegistrationStep3 from "./registration/RegistrationStep3";
import RegistrationStep4 from "./registration/RegistrationStep4";
import RegistrationStep5 from "./registration/RegistrationStep5";
import RegistrationStep6 from "./registration/RegistrationStep6";
import RegistrationStep7 from "./registration/RegistrationStep7";
import Confirmation from "./registration/Confirmation";

class Registration extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={30000}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
        { this.props.step == 0 &&
          <RegistrationStep0
            continueHandler={this.props.setAgreeToAll}
            agreeToAll={this.props.agreeToAll}
            backHandler={this.props.decStep} /> }

        { this.props.step == 1 &&
          <RegistrationStep1
            continueHandler={this.props.setRef}
            value={this.props.reference}
            backHandler={this.props.decStep} /> }

        { this.props.step == 2 &&
          <RegistrationStep2
            continueHandler={this.props.setName}
            value={this.props.name}
            backHandler={this.props.decStep} /> }

        { this.props.step == 3 && <RegistrationStep3
          continueHandler={this.props.setEmail}
          value={this.props.email}
          backHandler={this.props.decStep} /> }

        { this.props.step == 4 && <RegistrationStep4
          continueHandler={this.props.setPhone}
          value={this.props.phone}
          backHandler={this.props.decStep} /> }

        { this.props.step == 5 && <RegistrationStep5
          continueHandler={this.props.setStates}
          initialValues={{states: this.props.states}}
          backHandler={this.props.decStep} /> }

        { this.props.step == 6 && <RegistrationStep6
          continueHandler={this.props.setPassword}
          backHandler={this.props.decStep} /> }

        { this.props.step == 7 && <RegistrationStep7
          continueHandler={this.props.submitForm}
          pass={this.props.password}
          backHandler={this.props.decStep} /> }

        { this.props.step == 8 && <Confirmation /> }

        { this.props.submissionError && <div>There is an error while registering. Please contact administrator.</div>}
      </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Registration;
