import React from 'react';
import { Provider } from 'react-redux';

import incompleteProfileStore from '../store/incompleteProfileStore';
import CompleteProfileContainer from '../containers/CompleteProfileContainer';

const CompleteProfileProvider = (props, _railsContext) => (
  <Provider store={ incompleteProfileStore(props) }>
    <CompleteProfileContainer />
  </Provider>
)

export default CompleteProfileProvider;
