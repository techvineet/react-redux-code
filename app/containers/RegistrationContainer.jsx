import React from "react";
import { connect } from "react-redux";

import Registration from "../components/Registration";
import * as actions from "../actions/registrationActionCreators";

const mapStateToProps = (state) => {
  console.log(state);
  return { ...state };
};

export default connect(mapStateToProps, actions)(Registration);
