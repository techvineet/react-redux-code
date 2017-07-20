import { connect } from "react-redux";

import UserProfile from "../components/UserProfile";
import * as actions from "../actions/userProfileActionCreators";

const mapStateToProps = (state) => {
  console.log(state);
  return { ...state };
};

export default connect(mapStateToProps, actions)(UserProfile);
