import React, { Component } from "react";
import classNames from "classnames";
import actionsDataApiResponses from "../../actions/actionsDataApiResponses.js";
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
  };

  handleToggleSideBarHiden = () => {
    if (
      this.props.bundleId === "noData" ||
      this.state.complitedSteps.includes(2)
    ) {
      this.setState({ sideBarHiden: !this.state.sideBarHiden });
    }
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
      bundleId,
      setResult,
      result,
      handleReset,
    } = this.props;

    const { sideBarHiden, complitedSteps } = this.state;

    const FirstStep = withSteps(CreateBundle);
    const SecondStep = withSteps(CheckBundle);
    const ThirdStep = withSteps(GetAnalysis);

    const classForSideBar = classNames({
      "side-bar": true,
      "side-bar--disactive": fileName.length < 3 || code === "noData",
      "side-bar--active-and-hiden": fileName.length > 2 && sideBarHiden,
      "side-bar--active-and-showed": fileName.length > 2 && !sideBarHiden,
      "side-bar--analysing-in-progress":
        bundleId !== "noData" && !complitedSteps.includes(2),
    });
    return (
      <div className={classForSideBar}>
        <div
          disabled={bundleId !== "noData"}
          className="side-bar__top"
          onClick={() => this.handleToggleSideBarHiden()}
        >
          <span>
            {!sideBarHiden ? "Go back to Editor !" : "Check your code now!"}
          </span>
        </div>
        <div className="side-bar__steps">
          <FirstStep
            handleSetComplitedSteps={this.handleSetComplitedSteps}
            stepId={1}
            complitedSteps={complitedSteps}
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
            complitedSteps={complitedSteps}
            dataStep={{
              complitedSteps: complitedSteps,
              bundleId: bundleId,
              setResult: setResult,
              result: result,
            }}
          />
          <ThirdStep
            stepId={3}
            complitedSteps={complitedSteps}
            dataStep={{
              fileName: fileName,
              setComplitedSteps: setComplitedSteps,
              result: result,
              handleToggleSideBarHiden: this.handleToggleSideBarHiden,
              handleReset: handleReset,
            }}
          />
        </div>
        <div className="side-bar__buttons"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { sessionToken, bundleId, result } = state.dataApiResponses;
  const { fileName, code } = state.codeFile;
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
    setBundleId: (bundleId) =>
      dispatch(actionsDataApiResponses.setBundleId(bundleId)),
    setResult: (result) => dispatch(actionsDataApiResponses.setResult(result)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
