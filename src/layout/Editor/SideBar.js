import React, { Component } from "react";
import { FaBars } from "react-icons/fa";
import classNames from "classnames";
import {
  //apiFilters,
  apiCreateBundle,
  //   apiCheckBundle,
  //   apiGetAnalysis,
  //   apiGetDiffAnalysis,
} from "../../api/apiBundle";
import actions from "../../actions/actions.js";
import { connect } from "react-redux";
import withSteps from "./withSteps";
import CreateBundle from "./CreateBundle";
import CheckBundle from "./CheckBundle";
import GetAnalysis from "./GetAnalysis";

class SideBar extends Component {
  state = {
    sideBarHiden: 0,
    activeStepId: 1,
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
    const FirstStep = withSteps(CreateBundle);
    const SecondStep = withSteps(CheckBundle);
    const ThirdStep = withSteps(GetAnalysis);

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
          <FirstStep
            activeStepId={this.state.activeStepId}
            stepId={1}
            dataStep={{
              fileName: this.props.fileName,
              setBundleMethod: this.props.setBudnleId,
            }}
          />
          <SecondStep activeStepId={this.state.activeStepId} stepId={2} />
          <ThirdStep activeStepId={this.state.activeStepId} stepId={3} />
        </div>
        <div className="side-bar__buttons"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sessionToken: state.settings.sessionToken,
    fileName: state.code.fileName,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setBundleId: (bundleId) => dispatch(actions.setBundleId(bundleId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
