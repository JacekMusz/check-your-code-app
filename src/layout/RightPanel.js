import React, { Component } from "react";
import {
  apiFilters,
  apiCreateBundle,
  apiCheckBundle,
  apiGetAnalysis,
  apiGetDiffAnalysis
} from "../api/apiBundle";
import "../style/ApiButtons.css";
import "../style/RightPanel.css";
import { connect } from "react-redux";
import actions from "../actions/actions.js";

class RightPanel extends Component {
  state = {
    newSessionToken: ""
  };
  //local state
  handleNewSessionToken = e => {
    this.setState({
      newSessionToken: e.target.value
    });
  };
  //global store
  handleConfirmSessionToken = () => {
    let { newSessionToken } = this.state;
    this.props.reduxSetToken(newSessionToken);
  };

  handleApiFilters = () => {
    apiFilters();
  };
  handleCreateBundle = () => {
    apiCreateBundle().then(resp => {
      this.props.reduxSetBundleId(resp.data.bundleId);
    });
  };
  handleCheckBundle = () => {
    apiCheckBundle(
      "gh/JacekMusz/DEEPCODE_PRIVATE_BUNDLE/0ffcd1f224a3667853052b78e2e57e5328d9972b96f50d015d9d056a2dadb233"
    );
  };
  handleGetAnalysis = () => {
    apiGetAnalysis(
      "gh/JacekMusz/DEEPCODE_PRIVATE_BUNDLE/0ffcd1f224a3667853052b78e2e57e5328d9972b96f50d015d9d056a2dadb233"
    );
  };

  handleGetDiffAnalysis = () => {
    apiGetDiffAnalysis(
      "gh/JacekMusz/DEEPCODE_PRIVATE_BUNDLE/0ffcd1f224a3667853052b78e2e57e5328d9972b96f50d015d9d056a2dadb233"
    );
  };
  render() {
    return (
      <div className="right-panel">
        <p className="right-panel__session-token-info">
          Your established Session-Token: <span>{this.props.sessionToken}</span>
        </p>
        <input
          type="text"
          placeholder="Session Token"
          onChange={e => this.handleNewSessionToken(e)}
        ></input>
        <button
          disabled={this.state.newSessionToken.length < 10}
          className="button"
          onClick={() => this.handleConfirmSessionToken()}
        >
          Confirm Session-Token
        </button>
        <br />
        <button className="button" onClick={() => this.handleApiFilters()}>
          Get Filters
        </button>
        <br />
        <input placeholder="file name" type="text"></input>
        <button className="button" onClick={() => this.handleCreateBundle()}>
          Create Bundle
        </button>

        <br />

        <button className="button" onClick={() => this.handleCheckBundle()}>
          Check Bundle
        </button>
        <button className="button" onClick={() => this.handleGetAnalysis()}>
          Get Analysis
        </button>
        <button className="button" onClick={() => this.handleGetDiffAnalysis()}>
          Get Diff Analysis
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sessionToken: state.bundleStore.sessionToken
  };
};
const mapDispatchToProps = dispatch => {
  return {
    reduxSetBundleId: bundleId => dispatch(actions.reduxSetBundleId(bundleId)),
    reduxSetToken: sessionToken => dispatch(actions.reduxSetToken(sessionToken))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RightPanel);
