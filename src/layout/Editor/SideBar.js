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
    sideBarDisactive: true,
  };

  handleToggleSideBarHiden = () => {
    this.setState({ sideBarHiden: !this.state.sideBarHiden });
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

    return (
      <div className={classForSideBar}>
        <div
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
            stepId={1}
            dataStep={{
              fileName: fileName,
              setBundleIdMethod: setBundleId,
              code: code,
              setComplitedSteps: setComplitedSteps,
              complitedSteps: complitedSteps,
            }}
          />
          <SecondStep
            stepId={2}
            dataStep={{
              setComplitedSteps: setComplitedSteps,
              complitedSteps: complitedSteps,
              bundleId: bundleId,
            }}
          />
          <ThirdStep
            stepId={3}
            dataStep={{
              setComplitedSteps: setComplitedSteps,
              complitedSteps: complitedSteps,
            }}
          />
        </div>
        <div className="side-bar__buttons"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { sessionToken, complitedSteps, bundleId } = state.settings;
  const { fileName, code } = state.codeFile;
  return {
    sessionToken: sessionToken,
    fileName: fileName,
    code: code,
    complitedSteps: complitedSteps,
    bundleId: bundleId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setBundleId: (bundleId) => dispatch(actions.setBundleId(bundleId)),
    setComplitedSteps: (complitedSteps) =>
      dispatch(actions.setComplitedSteps(complitedSteps)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
