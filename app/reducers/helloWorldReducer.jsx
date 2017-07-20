import { combineReducers } from 'redux';
import { HELLO_WORLD_NAME_UPDATE } from '../constants/helloWorldConstants';

const name = (state = '', action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const klass = (state = '', action) => {
  return state;
};

const helloWorldReducer = combineReducers({ name, klass });

export default helloWorldReducer;
