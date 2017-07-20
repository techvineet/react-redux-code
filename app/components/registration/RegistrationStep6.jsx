import React, { Component } from 'react';

import { RegistrationStepHeader } from './RegistrationHeaders';

class RegistrationStep6 extends Component {
  constructor(props) {
    super(props);

    this.state = { password: "", error: "", inProcess: false };
  }

  valid() {
    let error = "";

    if(!this.state.password) {
      error = "Required";
    }
    else {
      if((!/^(?=.*[\d!@#$%^&*()\/_+=`~?><;:"{}\[\]])(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,40}$/.test(this.state.password))) {
        error = "Invalid password";
      }
    }

    this.setState({ error: error });
    return !error;
  }

  update() {
    this.setState({ password: this.refs.password.value }, () => {
      if(!this.valid()) return false;
      this.props.continueHandler(this.state.password);
    });
  }

  render() {
    return (
      <div>
        <RegistrationStepHeader step="6" />
        <h3>What will be your password?</h3>
        <div>
          <input type="password" ref="password" autoComplete="off" />
          <span>{this.state.error}</span>
        </div>
        <div className="mt10">
          <a href="#" onClick={this.props.backHandler}>Back</a> |
          <button
            type="button"
            onClick={this.update.bind(this)} disabled={this.state.inProcess}
          >Continue</button>
        </div>
      </div>
    );
  }
}
export default RegistrationStep6;
