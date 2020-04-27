import React, { Component } from "react";
import { FaBars } from "react-icons/fa";
import classNames from "classnames";
import {
  apiFilters,
  apiCreateBundle,
  apiCheckBundle,
  apiGetAnalysis,
  apiGetDiffAnalysis,
} from "../../api/apiBundle";
import actions from "../../actions/actions.js";
import { connect } from "react-redux";
import withSteps from "./withSteps";
import StepOne from "./StepOne";
import StepTwo from "./StepOne";
import StepThree from "./StepOne";

class SideBar extends Component {
  state = {
    sideBarHiden: 0,
  };

  handleToggleSideBarHiden = () => {
    this.setState({ sideBarHiden: !this.state.sideBarHiden });
  };

  handleCreateBundle = () => {
    apiCreateBundle("/file2.js", "const a = 3")
      .then((resp) => {
        console.log(resp);
        this.props.setBundleId(resp.data.bundleId);
      })
      .catch((err) => console.log(err));
  };

  render() {
    const FirstStep = withSteps(StepOne);
    const SecondStep = withSteps(StepTwo);
    const ThirdStep = withSteps(StepThree);

    const classForSideBar = classNames({
      "side-bar": true,
      "side-bar--hiden": this.state.sideBarHiden,
    });
    return (
      <div className={classForSideBar}>
        <div
          className="side-bar__top"
          onClick={() => this.handleToggleSideBarHiden()}
        >
          {this.state.sideBarHiden ? (
            <FaBars className="top-icon" />
          ) : (
            "Hide Me !"
          )}
        </div>
        <div className="side-bar__steps">
          <FirstStep />
          <SecondStep />
          <ThirdStep />
        </div>
        <div className="side-bar__buttons"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sessionToken: state.settings.sessionToken,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setBundleId: (bundleId) => dispatch(actions.setBundleId(bundleId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
