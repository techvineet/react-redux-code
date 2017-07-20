import React from "react";
import { Provider } from "react-redux";

import userProfileStore from "../store/userProfileStore";
import UserProfileContainer from "../containers/UserProfileContainer";

const userProfileProvider = (props, _railsContext) => (
  <Provider store={ userProfileStore(props) }>
    <UserProfileContainer />
  </Provider>
);

export default userProfileProvider;
