import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { enableBatching } from "redux-batched-actions";

import userProfileReducer from "../reducers/userProfileReducer";

const userProfileStore = (railsProps) => (
  createStore(enableBatching(userProfileReducer), railsProps, applyMiddleware(thunk))
);

export default userProfileStore;
