import { apiUrl, tokenHeader } from "../helpers/asyncHelper.jsx";

export default class UserProfileService {
  static get() {
    let headers = tokenHeader();
    return (
      fetch(`${apiUrl}/profile.json`, {
        method: "GET",
        headers: headers
      })
    );
  }

  static updateProfile(formData) {
    let headers = tokenHeader();
    return (
      fetch(`${apiUrl}/users.json`, {
        method: "PATCH",
        body: formData,
        headers: headers
      })
    );
  }

  static updateAvatar(formData) {
    let headers = tokenHeader();
    return(
      fetch(`${apiUrl}/profile/avatar.json`, {
        method: "PATCH",
        body: formData,
        headers: headers
      })
    );
  }
}
