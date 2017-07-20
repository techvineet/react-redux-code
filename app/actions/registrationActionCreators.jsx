import * as RegistrationConstants from "../constants/registrationConstants";
import { userRegFormatter } from "../helpers/dataFormatter";
import UserAuthenticationService from "../services/userAuthenticationService";
import { checkStatus } from "../helpers/asyncHelper";

export const incStep = () => ({
  type: RegistrationConstants.INC_STEP
});

export const decStep = () => ({
  type: RegistrationConstants.DEC_STEP
});

export const setRef = (payload) => ({
  type: RegistrationConstants.SET_REF,
  payload
});

export const setName = (payload) => ({
  type: RegistrationConstants.SET_NAME,
  payload
});

export const setEmail = (payload) => ({
  type: RegistrationConstants.SET_EMAIL,
  payload
});

export const setPhone = (payload) => ({
  type: RegistrationConstants.SET_PHONE,
  payload
});

export const setStates = (payload) => ({
  type: RegistrationConstants.SET_STATES,
  payload
});

export const setPassword = (payload) => ({
  type: RegistrationConstants.SET_PASSWORD,
  payload
});

export const setPasswordConfirm = (payload) => ({
  type: RegistrationConstants.SET_CONFIRMED_PASSWD,
  payload
});

export const setSubmissionError = (payload) => ({
  type: RegistrationConstants.SET_SUBMISSION_ERROR,
  payload
});

export const setAgreeToAll = (payload) => ({
  type: RegistrationConstants.SET_AGREETOALL,
  payload
})

export const submitForm = (payload) => {
  return (dispatch, getState) => {
    dispatch(setPasswordConfirm(payload));

    UserAuthenticationService.registerUser(userRegFormatter(getState()))
      .then(response => checkStatus(response))
      .then(response => response.json())
      .then(data => {
        if(data.id > 0 && data.email) {
          dispatch(incStep());
        }
        else {
          throw new Error("User invalid.");
        }
      })
      .catch((error) => {
        console.log('Request failed', error);
        dispatch(setSubmissionError(true));
      });
  };
};
