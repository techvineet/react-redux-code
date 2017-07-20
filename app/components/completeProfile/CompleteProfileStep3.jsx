import React, { Component } from 'react';
import { CompleteProfileHeader } from '../registration/RegistrationHeaders';
import usStatesObj from '../../services/usStatesObj';

class CompleteProfileStep3 extends Component {
  constructor(props) {
    super();

    this.state = { sameAsHome: props.value[0] };
  }

  valid() {
    return true;
  }

  update() {
    if(!this.valid()) return false;

    const refs = this.refs;

    this.props.continueHandler([
        this.state.sameAsHome,
        refs.address1.value,
        refs.address2.value,
        refs.city.value,
        refs.state.value,
        refs.zip.value
    ]);
  }

  sameHomeAddCbChange() {
    this.setState({ sameAsHome: this.refs.sameHomeAddCb.checked });
  }

  render() {
    return (
      <div>
        <CompleteProfileHeader step="2" />
        <h3>What is billing address?</h3>
        <input
          type="checkbox"
          ref="sameHomeAddCb"
          defaultChecked={this.props.value[0]}
          onChange={this.sameHomeAddCbChange.bind(this)} /> Same as home address
        <br />
        <div>
          <input type="text" ref="address1" placeholder="Enter address 1" defaultValue={this.props.value[1]} disabled={this.state.sameAsHome} />
        </div>
        <div>
          <input type="text" ref="address2" placeholder="Enter address 2" defaultValue={this.props.value[2]} disabled={this.state.sameAsHome} />
        </div>
        <div>
          <input type="text" ref="city" placeholder="City" defaultValue={this.props.value[3]} disabled={this.state.sameAsHome} />
        </div>
        <div>
          <select ref="state" defaultValue={this.props.value[4]} disabled={this.state.sameAsHome}>
            <option>Please select</option>
            {Object.keys(usStatesObj).map((k, i) =>
              <option key={i} value={k}>{usStatesObj[k]}</option>
            )}
          </select>
        </div>
        <div>
          <input type="text" ref="zip" placeholder="ZIP Code" disabled={this.state.sameAsHome} defaultValue={this.props.value[5]} />
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

export default CompleteProfileStep3;
