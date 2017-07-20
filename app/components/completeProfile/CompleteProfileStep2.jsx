import React, { Component } from 'react';
import { CompleteProfileHeader } from '../registration/RegistrationHeaders';
import usStatesObj from '../../services/usStatesObj';

class CompleteProfileStep2 extends Component {
  constructor(props) {
    super();
  }

  valid() {
    return true;
  }

  update() {
    if(!this.valid()) return false;

    const refs = this.refs;

    this.props.continueHandler([
        refs.address1.value,
        refs.address2.value,
        refs.city.value,
        refs.state.value,
        refs.zip.value
    ]);
  }

  render() {
    return (
      <div>
        <CompleteProfileHeader step="2" />
        <h3>What is home address?</h3>
        <div>
          <input type="text" ref="address1" placeholder="Enter address 1" defaultValue={this.props.value[0]} />
        </div>
        <div>
          <input type="text" ref="address2" placeholder="Enter address 2" defaultValue={this.props.value[1]} />
        </div>
        <div>
          <input type="text" ref="city" placeholder="City" defaultValue={this.props.value[2]} />
        </div>
        <div>
          <select ref="state" defaultValue={this.props.value[3]}>
            <option>Please select</option>
            {Object.keys(usStatesObj).map((k, i) =>
              <option key={i} value={k}>{usStatesObj[k]}</option>
            )}
          </select>
        </div>
        <div>
          <input type="text" ref="zip" placeholder="ZIP Code" defaultValue={this.props.value[4]} />
        </div>
        <div className="mt10">
          <a href="#" onClick={this.props.backHandler}>Back</a> |
          <button
            type="button" onClick={this.update.bind(this)}>Continue</button>
        </div>
      </div>
    )
  }
}

export default CompleteProfileStep2;
