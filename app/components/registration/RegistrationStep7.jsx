import React, { Component } from 'react';

import { RegistrationStepHeader } from './RegistrationHeaders';

class RegistrationStep7 extends Component {
  constructor(props) {
    super(props);

    this.state = { error: '', submitting: false }
  }

  valid() {
    if(this.props.pass != this.refs.password.value){
      this.setState({ error: 'Password doesn\'t match' });
      return false;
    };

    this.setState({ error: '' });
    return true;
  }

  update() {
    if(!this.valid()) return false;

    this.setState({ submitting: true });
    this.props.continueHandler(this.refs.password.value);
  }

  resetError() {
    if(this.state.error) this.setState({ error: '' });
  }

  render() {
    return (
      <div>
        <RegistrationStepHeader step="7" />
        <h3>Confirm your password?</h3>
        <div>
          <input
            type="password"
            ref="password"
            autoComplete="off"
            onFocus={this.resetError.bind(this)}
          />
          { this.state.error && <span>{ this.state.error }</span>}
        </div>
        <div className="mt10">
          <a href="#" onClick={this.props.backHandler}>Back</a> |
          <button
            type="button"
            disabled={this.state.submitting}
            onClick={this.update.bind(this)}
          >Continue</button>
        </div>
      </div>
    );
  }
}
export default RegistrationStep7;
