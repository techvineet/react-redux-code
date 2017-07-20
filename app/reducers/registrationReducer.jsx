import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import * as RegistrationConstants from "../constants/registrationConstants";

const step = (state = 0, action) => {
  switch(action.type) {
  case RegistrationConstants.INC_STEP:
  case RegistrationConstants.SET_AGREETOALL:
  case RegistrationConstants.SET_REF:
  case RegistrationConstants.SET_NAME:
  case RegistrationConstants.SET_EMAIL:
  case RegistrationConstants.SET_PHONE:
  case RegistrationConstants.SET_STATES:
  case RegistrationConstants.SET_PASSWORD:
    return state + 1;
  case RegistrationConstants.DEC_STEP:
    if (state == 0) return state;
    return state - 1;
  default:
    return state;
  }
};

const reference = (state = "", action) => {
  switch(action.type) {
    case RegistrationConstants.SET_REF:
      return action.payload;
    default:
      return state;
  }
};

const name = (state = [], action) => {
  switch(action.type) {
    case RegistrationConstants.SET_NAME:
      return action.payload;
    default:
      return state;
  }
};

const email = (state = "", action) => {
  switch(action.type) {
    case RegistrationConstants.SET_EMAIL:
      return action.payload;
    default:
      return state;
  }
};

const phone = (state = [], action) => {
  switch(action.type) {
    case RegistrationConstants.SET_PHONE:
      return action.payload;
    default:
      return state;
  }
};

const states = (state = [""], action) => {
  switch(action.type) {
    case RegistrationConstants.SET_STATES:
      return action.payload;
    default:
      return state;
  }
};

const password = (state = "", action) => {
  switch(action.type) {
    case RegistrationConstants.SET_PASSWORD:
      return action.payload;
    default:
      return state;
  }
};

const confirmedPassword = (state = "", action) => {
  switch(action.type) {
    case RegistrationConstants.SET_CONFIRMED_PASSWD:
      return action.payload;
    default:
      return state;
  }
};

const submissionError = (state = false, action) => {
  switch(action.type) {
    case RegistrationConstants.SET_SUBMISSION_ERROR:
      return action.payload;
    default:
      return state;
  }
};

const agreeToAll = (state = false, action) => {
  switch(action.type) {
    case RegistrationConstants.SET_AGREETOALL:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  step,
  reference,
  name,
  email,
  phone,
  states,
  password,
  confirmedPassword,
  submissionError,
  agreeToAll,
  form: formReducer
});
