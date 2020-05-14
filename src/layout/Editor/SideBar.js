import React, { Component } from "react";
import { FaBars } from "react-icons/fa";
import classNames from "classnames";
// import //apiFilters,
// //  apiCreateBundle,
// //   apiCheckBundle,
// //   apiGetAnalysis,
// //   apiGetDiffAnalysis,
// "../../api/apiBundle";
import actions from "../../actions/actions.js";
import { connect } from "react-redux";
import withSteps from "./withSteps";
import CreateBundle from "./CreateBundle";
import CheckBundle from "./CheckBundle";
import GetAnalysis from "./GetAnalysis";

class SideBar extends Component {
  state = {
    sideBarHiden: 1,
    complitedSteps: [],
    activeStepId: 1,
    activeAnalysisProcess: this.props.bundleId !== "noData" ? true : false,
  };

  handleToggleSideBarHiden = () => {
    if (this.props.bundleId === "noData") {
      this.setState({ sideBarHiden: !this.state.sideBarHiden });
    }
  };

  handleActiveAnalysisProcess = (value) => {
    this.setState({ activeAnalysisProcess: value });
  };

  handleSetComplitedSteps = (steps) => {
    this.setState({
      complitedSteps: this.state.complitedSteps.concat(steps),
    });
  };

  handleSetActiveSteps = (activeStepId) => {
    this.setState({
      activeSteps: activeStepId,
    });
  };

  render() {
    const {
      fileName,
      setBundleId,
      code,
      setComplitedSteps,
      complitedSteps,
      bundleId,
    } = this.props;

    const FirstStep = withSteps(CreateBundle);
    const SecondStep = withSteps(CheckBundle);
    const ThirdStep = withSteps(GetAnalysis);

    const classForSideBar = classNames({
      "side-bar": true,
      "side-bar--showed": this.state.sideBarHiden,
      "side-bar--disactive": fileName.length < 3,
    });
    //console.log("render sidebar", this.state);
    return (
      <div className={classForSideBar}>
        <div
          disabled={this.props.bundleId !== "noData"}
          className="side-bar__top"
          onClick={() => this.handleToggleSideBarHiden()}
        >
          {this.state.sideBarHiden ? (
            "Hide Me !"
          ) : (
            <FaBars className="top-icon" />
          )}
        </div>
        <div className="side-bar__steps">
          <FirstStep
            handleSetComplitedSteps={this.handleSetComplitedSteps}
            handleActiveAnalysisProcess={this.handleActiveAnalysisProcess}
            //handleSetActiveSteps={this.handleSetActiveSteps}
            stepId={1}
            complitedSteps={this.state.complitedSteps}
            dataStep={{
              fileName: fileName,
              setBundleIdMethod: setBundleId,
              code: code,
              setComplitedSteps: setComplitedSteps,
              bundleId: bundleId,
            }}
          />
          <SecondStep
            handleSetComplitedSteps={this.handleSetComplitedSteps}
            stepId={2}
            complitedSteps={this.state.complitedSteps}
            dataStep={{
              complitedSteps: complitedSteps,
              bundleId: bundleId,
              setResult: this.props.setResult,
              result: this.props.result,
            }}
          />
          <ThirdStep
            handleSetComplitedSteps={this.handleSetComplitedSteps}
            stepId={3}
            complitedSteps={this.state.complitedSteps}
            dataStep={{
              setComplitedSteps: setComplitedSteps,
              result: this.props.result,
            }}
          />
        </div>
        <div className="side-bar__buttons"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { sessionToken, bundleId } = state.settings;
  const { fileName, code, result } = state.codeFile;
  return {
    sessionToken: sessionToken,
    fileName: fileName,
    code: code,
    bundleId: bundleId,
    result: result,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setBundleId: (bundleId) => dispatch(actions.setBundleId(bundleId)),
    setResult: (result) => dispatch(actions.setResult(result)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
