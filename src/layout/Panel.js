import React, { Component } from "react";
import PanelSessionToken from "./PanelSessionToken.js";
import {
  apiFilters,
  apiCreateBundle,
  apiCheckBundle,
  apiGetAnalysis,
  apiGetDiffAnalysis
} from "../api/apiBundle";
import { connect } from "react-redux";
import actions from "../actions/actions.js";

class Panel extends Component {
  state = {
    newFileName: ""
  };

  handleApiFilters = () => {
    apiFilters();
  };
  handleCreateBundle = () => {
    console.log(this.handleNewFilePath(), this.props.fileContent);
    apiCreateBundle(this.handleNewFilePath(), this.props.fileContent).then(
      resp => {
        console.log(resp);
        this.props.reduxSetBundleId(resp.data.bundleId);
      }
    );
  };
  handleCheckBundle = () => {
    apiCheckBundle(this.props.currentBundleId);
  };
  handleGetAnalysis = () => {
    apiGetAnalysis(this.props.currentBundleId);
  };

  handleGetDiffAnalysis = () => {
    apiGetDiffAnalysis(this.props.currentBundleId);
  };

  handleNewFilePath = () => {
    const { newFileName } = this.state;
    switch (this.props.editorLanguage) {
      case "javascript":
        return `/${newFileName}.js`;
      case "java":
        return `/${newFileName}.java`;
      case "html":
        return `/${newFileName}.html`;
      case "python":
        return `/${newFileName}.py`;
      default:
        return `/${newFileName}.txt`;
    }
  };

  handleNewFileName = e => {
    this.setState({
      newFileName: e.target.value
    });
  };
  render() {
    return (
      <div className="panel">
        <PanelSessionToken
          reduxSetToken={this.props.reduxSetToken}
          sessionToken={this.props.sessionToken}
        />
        <br />
        <button className="button" onClick={() => this.handleApiFilters()}>
          Get Filters
        </button>
        <br />
        <input
          onChange={e => this.handleNewFileName(e)}
          placeholder="file name"
          type="text"
        ></input>
        <p>Your currentBundleID: {this.props.currentBundleId}</p>
        <button
          className="button"
          disabled={this.props.fileContent === "noData"}
          onClick={() => this.handleCreateBundle()}
        >
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
    sessionToken: state.mainStore.sessionToken,
    editorLanguage: state.mainStore.editorLanguage,
    fileContent: state.mainStore.code,
    currentBundleId: state.mainStore.bundleId
  };
};
const mapDispatchToProps = dispatch => {
  return {
    reduxSetBundleId: bundleId => dispatch(actions.reduxSetBundleId(bundleId)),
    reduxSetToken: sessionToken => dispatch(actions.reduxSetToken(sessionToken))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Panel);
