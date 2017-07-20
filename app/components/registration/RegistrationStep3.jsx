import React, { Component } from "react";

import { RegistrationStepHeader } from "./RegistrationHeaders";
import UserAuthenticationService from "../../services/userAuthenticationService";
import { checkStatus, errorHandler } from "../../helpers/asyncHelper";

class RegistrationStep3 extends Component {
  constructor(props) {
    super(props);

    this.state = { email: "", error: "", inProcess: false };
  }

  valid() {
    let error = "";

    if(!this.state.email) {
      error = "Required";
    }
    else {
      if((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email))) {
        error = "Invalid email address";
      }
    }

    this.setState({ error: error });
    return !error;
  }

  update() {
    this.setState({ email: this.refs.email.value }, () => {
      if(!this.valid()) return false;

      this.setState({ inProcess: true });
      // check uniqueness from server
      UserAuthenticationService.isUniqueEmail(this.state.email)
        .then(checkStatus)
        .then(response => response.json())
        .then(data => {
          if(!data.found) {
            this.props.continueHandler(this.state.email);
          }
          else {
            this.setState({ error: "Already Taken", inProcess: false });
          }
        })
        .catch(errorHandler);
    });
  }

  render() {
    return (
      <div>
        <RegistrationStepHeader step="3" />
        <h3>What is your email?</h3>
        <div>
          <input type="text" ref="email" placeholder="test@company.com" defaultValue={this.props.value} />
          <span>{this.state.error}</span>
        </div>
        <div className="mt10">
          <a href="#" onClick={this.props.backHandler}>Back</a> |
          <button
            type="button"
            onClick={this.update.bind(this)}
            disabled={this.state.inProcess}
          >Continue</button>
        </div>
      </div>
    );
  }
}

export default RegistrationStep3;
