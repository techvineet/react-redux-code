import React, { Component } from 'react';
import { RegistrationStepHeader } from './RegistrationHeaders';

class RegistrationStep0 extends Component {
  constructor(props) {
    super();

    this.state = {
      canContinue: props.agreeToAll
    }

    this.cbChanged = this.cbChanged.bind(this);
  }

  cbChanged(event) {
    if(this.refs.securityPolicyChkbox.checked &&
      this.refs.termsOfServiceChkbox.checked &&
      this.refs.fcraAgreemntChkbox.checked
    ) {
      this.setState({ canContinue: true });
    }
    else {
     this.setState({ canContinue: false });
    }
  }

  update() {
    this.props.continueHandler(true);
  }

  render() {
    return (
      <div>
        <RegistrationStepHeader step="" />
        <h3>Registration Requirements</h3>
        <p>
        Welcome to BaseRent, in order to use this app we require the location
        of the property to be in the US and the rent term should be more than
        6 month. Stay tuned for the future updates and markets.
        </p>
        <div>
          <input
            type="checkbox"
            ref="securityPolicyChkbox"
            defaultChecked={this.props.agreeToAll}
            onChange={this.cbChanged} /> I have read Security Policy
          <br />
          <input
            type="checkbox"
            ref="termsOfServiceChkbox"
            defaultChecked={this.props.agreeToAll}
            onChange={this.cbChanged} /> I have read Terms of Service
          <br />
          <input
            type="checkbox"
            ref="fcraAgreemntChkbox"
            defaultChecked={this.props.agreeToAll}
            onChange={this.cbChanged} /> I agree with FCRA agreement
        </div>
        <div className="mt10">
          <button
            type="button"
            disabled={!this.state.canContinue}
            onClick={this.update.bind(this)}
          >Continue</button>
        </div>
      </div>
    );
  }
}

export default RegistrationStep0;
