import React, { Component } from 'react';
import { CompleteProfileHeader } from '../registration/RegistrationHeaders';

class CompleteProfileStep4 extends Component {
  constructor(props) {
    super();
  }

  valid() {
    return true;
  }

  update() {
    if(!this.valid()) return false;
    
    this.props.continueHandler(this.refs.nRentals.value);
  }

  render() {
    return (
      <div>
        <CompleteProfileHeader step="4" />
        <h3>How many rentals do you plan to manage using BaseRent?</h3>
        <div>
          <input type="text" ref="nRentals" placeholder="Write number of rentals here" defaultValue={this.props.value} />
        </div>
        <div className="mt10">
          <button
            type="button" onClick={this.update.bind(this)}>Continue</button>
        </div>
      </div>
    )
  }
}

export default CompleteProfileStep4;
