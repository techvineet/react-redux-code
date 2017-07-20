import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import * as UserProfileConstants from "../constants/userProfileConstants";
import { userProfileInputFormatter } from "../helpers/dataFormatter";

const profile = (state = {}, action) => {
  switch(action.type) {
  case UserProfileConstants.LOAD:
    return Object.assign({}, userProfileInputFormatter(action.payload));
  case UserProfileConstants.SET_USERINFO:
    return Object.assign({}, state, action.payload);
  case UserProfileConstants.SET_AVATAR_URL:
    return { ...state, avatarUrl: action.payload };
  default:
    return state;
  }
};

const loading = (state = true, action) => {
  switch(action.type) {
  case UserProfileConstants.SET_LOADING:
    return action.payload;
  default:
    return state;
  }
};

const inProcess = (state = false, action) => {
  switch(action.type) {
  case UserProfileConstants.SET_INPROCESS:
    return action.payload;
  default:
    return state;
  }
};

const submissionError = (state = false, action) => {
  switch(action.type) {
  case UserProfileConstants.SET_SUBMISSION_ERROR:
    return action.payload;
  default:
    return state;
  }
};

export default combineReducers({
  profile,
  loading,
  inProcess,
  submissionError,
  form: formReducer
});
