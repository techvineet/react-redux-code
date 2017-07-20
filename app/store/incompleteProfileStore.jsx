import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import incompleteProfileReducer from "../reducers/incompleteProfileReducer";

const incompleteProfileStore = (railsProps) => (
  createStore(incompleteProfileReducer, railsProps, applyMiddleware(thunk))
);

export default incompleteProfileStore;
