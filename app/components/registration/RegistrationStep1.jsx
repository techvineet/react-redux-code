import React, { Component } from "react";
import { RegistrationStepHeader } from "./RegistrationHeaders";

class RegistrationStep1 extends Component {
  constructor(props) {
    super();
  }

  update() {
    this.props.continueHandler(this.refs.reference.value);
  }

  componentDidMount() {
    console.log(this.refs.test);
    this.refs.test.classList.add('active');
  }

  componentWillUnmount() {
    console.log(this.refs.classList);
  }

  render() {
    return (
      <div ref="test">
        <RegistrationStepHeader step="1" />
        <h3>How did you hear about us?</h3>
        <div>
          <select ref="reference" defaultValue={this.props.value}>
            <option>Please select</option>
            <option value="1">Beta Testing</option>
            <option value="2">Social Media</option>
            <option value="3">Friends</option>
          </select>
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

export default RegistrationStep1;
