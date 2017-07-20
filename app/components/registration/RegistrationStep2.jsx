import React, { Component } from 'react';
import { RegistrationStepHeader } from './RegistrationHeaders';

class RegistrationStep2 extends Component {
  constructor(props) {
    super(props);
  }

  valid() {
    return true;
  }

  update() {
    if(!this.valid()) return false;

    const refs = this.refs;
    this.props.continueHandler(
      [refs.fname.value, refs.mname.value, refs.lname.value]
    );
  }

  render() {
    return (
      <div>
        <RegistrationStepHeader step="2" />
        <h3>What is your name?</h3>
        <div>
          <input type="text" ref="fname" placeholder="First" defaultValue={this.props.value[0]} />
          <input type="text" ref="mname" placeholder="mi" size="4" defaultValue={this.props.value[1]}/>
          <input type="text" ref="lname" placeholder="Last" defaultValue={this.props.value[2]} />
        </div>
        <div className="mt10">
          <a href="#" onClick={this.props.backHandler}>Back</a> |
          <button
            type="button"
            onClick={this.update.bind(this)}
          >Continue</button>
        </div>
      </div>
    );
  }
}

export default RegistrationStep2;
