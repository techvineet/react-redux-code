import React from "react";
import { Provider } from "react-redux";

import RegistrationStore from "../store/registrationStore";
import RegistrationContainer from "../containers/RegistrationContainer";

const RegistrationProvider = (props, _railsContext) => (
  <Provider store={ RegistrationStore(props) }>
    <RegistrationContainer />
  </Provider>
);

export default RegistrationProvider;
