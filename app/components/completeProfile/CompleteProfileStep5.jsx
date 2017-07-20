import React, { Component } from 'react';
import { CompleteProfileHeader } from '../registration/RegistrationHeaders';

class CompleteProfileStep5 extends Component {
  constructor(props) {
    super();

    let cardnumber = [];
    if(props.value[0]) {
      cardnumber =
      [props.value[0][0], props.value[0][1], props.value[0][3],
      props.value[0][4]];
    }

    this.state = { cardnumber };
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
        <CompleteProfileHeader step="5" />
        <h3>What is your payment info?</h3>
        <div>
          <input type="text" ref="card1" defaultValue={this.state.cardnumber[0]} /> -
          <input type="text" ref="card2" defaultValue={this.state.cardnumber[1]} /> -
          <input type="text" ref="card3" defaultValue={this.state.cardnumber[2]} /> -
          <input type="text" ref="card4" defaultValue={this.state.cardnumber[3]} />
        </div>
        <div className="mt10">
          <button
            type="button" onClick={this.update.bind(this)}>Continue</button>
        </div>
      </div>
    )
  }
}

export default CompleteProfileStep5;
