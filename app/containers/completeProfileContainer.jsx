import { connect } from "react-redux";

import CompleteProfile from "../components/CompleteProfile";
import * as actions from "../actions/incompleteProfileActionCreators";

const mapStateToProps = (state) => {
  console.log(state);
  return { ...state };
};

export default connect(mapStateToProps, actions)(CompleteProfile);
