import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import registrationReducer from '../reducers/registrationReducer';

const RegistrationStore = (railsProps) => (
  createStore(registrationReducer, railsProps, applyMiddleware(thunk))
);

export default RegistrationStore;
