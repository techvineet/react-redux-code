import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import * as IncompleteProfileConstants from '../constants/incompleteProfileConstants';

const step = (state = 1, action) => {
  switch(action.type) {
    case IncompleteProfileConstants.INC_STEP:
    case IncompleteProfileConstants.SET_COMP_NAME:
    case IncompleteProfileConstants.SET_HOME_ADD:
    case IncompleteProfileConstants.SET_BILLING_ADD:
    case IncompleteProfileConstants.SET_NRENTALS:
    case IncompleteProfileConstants.SET_PHONE:
    case IncompleteProfileConstants.SET_STATES:
    case IncompleteProfileConstants.SET_PASSWORD:
      return state + 1;
    case IncompleteProfileConstants.DEC_STEP:
      if (state == 0) return state;
      return state - 1;
    default:
      return state;
  }
};

const companyName = (state = '', action) => {
  switch(action.type) {
    case IncompleteProfileConstants.SET_COMP_NAME:
      return action.payload;
    default:
      return state;
  }
};

const homeAddress = (state = [], action) => {
  switch(action.type) {
    case IncompleteProfileConstants.SET_HOME_ADD:
      return action.payload;
    default:
      return state;
  }
};

const billingAddress = (state = [], action) => {
  switch(action.type) {
    case IncompleteProfileConstants.SET_BILLING_ADD:
      return action.payload;
    default:
      return state;
  }
};

const nRentals = (state = 0, action) => {
  switch(action.type) {
    case IncompleteProfileConstants.SET_NRENTALS:
      return action.payload;
    default:
      return state;
  }
};

const paymentInfo = (state = [], action) => {
  switch(action.type) {
    case IncompleteProfileConstants.SET_PAYMENT_INFO:
      return action.payload;
    default:
      return state;
  }
};

const goals = (state = '', action) => {
  switch(action.type) {
    case IncompleteProfileConstants.SET_GOALS:
      return action.payload;
    default:
      return state;
  }
};

const strategy = (state = '', action) => {
  switch(action.type) {
    case IncompleteProfileConstants.SET_STRATEGY:
      return action.payload;
    default:
      return state;
  }
};

const niche = (state = '', action) => {
  switch(action.type) {
    case IncompleteProfileConstants.SET_NICHE:
      return action.payload;
    default:
      return state;
  }
};

const selfManage = (state = false, action) => {
  switch(action.type) {
    case IncompleteProfileConstants.SET_SELF_MANAGE:
      return action.payload;
    default:
      return state;
  }
};

const longTerm = (state = false, action) => {
  switch(action.type) {
    case IncompleteProfileConstants.SET_LONG_TERM:
      return action.payload;
    default:
      return state;
  }
};

const birthDate = (state = [], action) => {
  switch(action.type) {
    case IncompleteProfileConstants.SET_BIRTH_DATE:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  step,
  companyName,
  homeAddress,
  billingAddress,
  nRentals,
  paymentInfo,
  goals,
  strategy,
  niche,
  selfManage,
  longTerm,
  birthDate,
  form: formReducer
});
