import React, { Component } from "react";
import update from "react-addons-update";

import UserAuthenticationService from "../services/userAuthenticationService";

let validate = function(email, password) {
  let errors = { email: null, password: null };

  if(!email) {
    errors.email = "Required";
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email address";
  }

  if(!password) {
    errors.password = "Required";
  }

  errors.valid = Object.values(errors).every((val) => {
    return val === null;
  });

  return errors;
};

let fetchFormData = function(state) {
  let formData = new FormData();
  // const token = document.querySelector('meta[name=csrf-token]').content;

  // formData.append('authenticity_token', token);
  formData.append("user[email]", state.email);
  formData.append("user[password]", state.password);

  return formData;
};

class LoginForm extends Component {
  constructor(props) {
    super();

    this.state = {
      email: "",
      password: "",
      errors: {
        email: "",
        password: ""
      },
      message: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  login() {
    this.setState(update(this.state, {
      errors: { email: { $set: ""}, password: { $set: "" } }, message: { $set: "" }
    }));

    const errObj = validate(this.state.email, this.state.password);

    if(!errObj.valid) {
      this.setState(update(this.state, {
        errors: { email: { $set: errObj.email }, password: { $set: errObj.password } }
      }));

      return;
    }

    UserAuthenticationService.login(fetchFormData(this.state))
      .then(response => response.json())
      .then(response => {
        if(response.token && !response.error) {
          sessionStorage.setItem("token", response.token);
          console.log(response.token);
          window.location.href = "/";
        }
        else {
          let message = "";

          if(response.error == "unconfirmed") {
            message = "Please confirm your registered email to access your account.";
          }
          else {
            message = "Username and passsword does not match";
          }

          this.setState(update(this.state, { message: { $set: message } } ));
          return;
        }
      })
      .catch(function(error) {
        console.log('request failed', error)
      });
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <form>
          <div className="field">
            <label htmlFor="user_email">Email</label><br />
            <input
              autoFocus="autofocus"
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email" type="email" />
            <span>{this.state.errors.email}</span>
          </div>
          <div className="field">
            <label htmlFor="user_password">Password</label><br />
            <input
              autoComplete="off"
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password" type="password" />
            <span>{this.state.errors.password}</span>
          </div>
          <div className="actions">
            <input name="commit" value="Log in" type="button" onClick={this.login} />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
