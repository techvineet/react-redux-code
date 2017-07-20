import { apiUrl } from "../helpers/asyncHelper.jsx";

export default class UserAuthenticationService {
  static login(formData) {
    return (
      fetch(`${apiUrl}/sessions`, {
        method: "POST",
        body: formData,
        credentials: "include"
      })
    );
  }

  static registerUser(formData) {
    return (
      fetch("/users.json", {
        method: "POST",
        body: formData
      })
    );
  }

  static isUniqueEmail(email) {
    return (
      fetch(`${apiUrl}/users/test/email.json?q=${email}`, {
        method: "GET"
      })
    );
  }
}
