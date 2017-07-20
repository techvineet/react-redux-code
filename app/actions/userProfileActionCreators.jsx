import * as UserProfileConstants from "../constants/userProfileConstants";
import { userProfileOutputFormatter } from "../helpers/dataFormatter";
import UserProfileService from "../services/userProfileService";
import { checkStatus } from "../helpers/asyncHelper";
import { batchActions } from "redux-batched-actions";

export const incStep = () => ({
  type: UserProfileConstants.INC_STEP
});

export const load = (payload) => ({
  type: UserProfileConstants.LOAD,
  payload
});

export const setUserInfo = (payload) => ({
  type: UserProfileConstants.SET_USERINFO,
  payload
});

export const setAvatarUrl = (payload) => ({
  type: UserProfileConstants.SET_AVATAR_URL,
  payload
});

export const setLoading = (payload) => ({
  type: UserProfileConstants.SET_LOADING,
  payload
});

export const setInprocess = (payload) => ({
  type: UserProfileConstants.SET_INPROCESS,
  payload
});

export const setSubmissionError = (payload) => ({
  type: UserProfileConstants.SET_SUBMISSION_ERROR,
  payload
});

export const loadProfile = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
    UserProfileService.get()
      .then(response => checkStatus(response))
      .then(response => response.json())
      .then((data) => {
        // console.log('LoadProfile', data);
        dispatch(batchActions([load(data), setLoading(false)]));
      });
  };
};

export const updateProfile = (payload) => {
  return (dispatch) => {
    UserProfileService.updateProfile(userProfileOutputFormatter(payload))
      .then(response => checkStatus(response))
      .then(response => {
        if(response.status == 204) {
          return { success: true };
        }
      })
      .then(data => {
        if(data.success) {
          console.log('User updated');
          let safePayload = { ...payload , currentPassword: null, password: null, passwordConfirmation: null };
          dispatch(batchActions([setUserInfo(safePayload), setInprocess(false)]));
        }
      })
      .catch((error) => {
        console.log('Request failed', error);
        dispatch(batchActions([setSubmissionError(true), setInprocess(false)]));
      });
  };
};

export const updateAvatar = (payload) => {
  let formData = new FormData();
  formData.append("user[avatar_attributes][content]", payload);

  return(dispatch) => {
    UserProfileService.updateAvatar(formData)
      .then(response => checkStatus(response))
      .then(response => response.json())
      .then(data => {
        if(data.success) {
          dispatch(batchActions([setAvatarUrl(data.avatarUrl), setInprocess(false)]));
        }
        else {
          console.log(data.errors);
          dispatch(setInprocess(false));
        }
      })
      .catch((error) => {
        console.log('Request failed', error);
        dispatch(batchActions([setSubmissionError(true), setInprocess(false)]));
      });
  };
};
