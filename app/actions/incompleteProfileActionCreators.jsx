import * as IncompleteProfileConstants from '../constants/incompleteProfileConstants';

export const incStep = () => ({
  type: IncompleteProfileConstants.INC_STEP
});

export const decStep = () => ({
  type: IncompleteProfileConstants.DEC_STEP
});

export const setCompName = (payload) => ({
  type: IncompleteProfileConstants.SET_COMP_NAME,
  payload
});

export const setHomeAdd = (payload) => ({
  type: IncompleteProfileConstants.SET_HOME_ADD,
  payload
});

export const setBillingAdd = (payload) => ({
  type: IncompleteProfileConstants.SET_BILLING_ADD,
  payload
});

export const setNRentals = (payload) => ({
  type: IncompleteProfileConstants.SET_NRENTALS,
  payload
});

export const setPaymentInfo = (payload) => ({
  type: IncompleteProfileConstants.SET_PAYMENT_INFO,
  payload
});

export const setGoals = (payload) => ({
  type: IncompleteProfileConstants.SET_GOALS,
  payload
});

export const setStrategy = (payload) => ({
  type: IncompleteProfileConstants.SET_STRATEGY,
  payload
});

export const setNiche = (payload) => ({
  type: IncompleteProfileConstants.SET_NICHE,
  payload
});

export const setSelfManage = (payload) => ({
  type: IncompleteProfileConstants.SET_SELF_MANAGE,
  payload
});

export const setLongTerm = (payload) => ({
  type: IncompleteProfileConstants.SET_LONG_TERM,
  payload
});

export const setBirthDate = (payload) => ({
  type: IncompleteProfileConstants.SET_BIRTH_DATE,
  payload
})

/*export const updateProfile = (payload) => {
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
        throw new Error('User invalid.');
      }
    })
    .catch((error) => {
      console.log('Request failed', error);
      dispatch(setSubmissionError(true));
    });
  }
}*/
