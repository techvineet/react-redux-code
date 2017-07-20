import React, { Component } from 'react';

import { RegistrationStepHeader } from './RegistrationHeaders';

class RegistrationStep4 extends Component {
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
      [refs.part1.value, refs.part2.value, refs.part3.value]
    );
  }

  render() {
    return (
      <div>
        <RegistrationStepHeader step="4" />
        <h3>What is your phone number?</h3>
        <div>
          (<input type="text" ref="part1" size="3" placeholder="123" defaultValue={this.props.value[0]} />)
          <input type="text" ref="part2" size="3" placeholder="456" defaultValue={this.props.value[1]} /> -
          <input type="text" ref="part3" size="4" placeholder="0789" defaultValue={this.props.value[2]} />
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

export default RegistrationStep4;
