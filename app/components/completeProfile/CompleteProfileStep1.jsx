import React, { Component } from 'react';
import { CompleteProfileHeader } from '../registration/RegistrationHeaders';

class CompleteProfileStep1 extends Component {
  constructor(props) {
    super();
  }

  update() {
    this.props.continueHandler(this.refs.companyName.value);
  }

  render() {
    return (
      <div>
        <CompleteProfileHeader step="1" />
        <h3>What is company name?</h3>
        <div>
          <input type="text" ref="companyName" placeholder="Write company name here" defaultValue={this.props.value} />
        </div>
        <div className="mt10">
          <button
            type="button" onClick={this.update.bind(this)}>Continue</button>
        </div>
      </div>
    )
  }
}

export default CompleteProfileStep1;
