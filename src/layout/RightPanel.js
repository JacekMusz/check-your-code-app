import React from "react";
import {
  apiFilters,
  apiCreateBundle,
  apiCheckBundle,
  apiGetAnalysis,
  apiGetDiffAnalysis
} from "../api/apiBundle";
import "../style/ApiButtons.css";
import "../style/RightPanel.css";

const RightPanel = () => {
  let handleApiFilters = () => {
    apiFilters();
  };
  let handleCreateBundle = () => {
    apiCreateBundle();
  };
  let handleCheckBundle = () => {
    apiCheckBundle(
      "gh/JacekMusz/DEEPCODE_PRIVATE_BUNDLE/0ffcd1f224a3667853052b78e2e57e5328d9972b96f50d015d9d056a2dadb233"
    );
  };
  let handleGetAnalysis = () => {
    apiGetAnalysis(
      "gh/JacekMusz/DEEPCODE_PRIVATE_BUNDLE/0ffcd1f224a3667853052b78e2e57e5328d9972b96f50d015d9d056a2dadb233"
    );
  };
  let handleGetDiffAnalysis = () => {
    apiGetDiffAnalysis(
      "gh/JacekMusz/DEEPCODE_PRIVATE_BUNDLE/0ffcd1f224a3667853052b78e2e57e5328d9972b96f50d015d9d056a2dadb233"
    );
  };
  return (
    <div className="right-panel">
      <input placeholder="Session Token"></input>
      <button className="button" onClick={() => handleApiFilters()}>
        Get Filters
      </button>
      <input placeholder="file name" type="text"></input>
      <button className="button" onClick={() => handleCreateBundle()}>
        Create Bundle
      </button>
      <button className="button" onClick={() => handleCheckBundle()}>
        Check Bundle
      </button>
      <button className="button" onClick={() => handleGetAnalysis()}>
        Get Analysis
      </button>
      <button className="button" onClick={() => handleGetDiffAnalysis()}>
        Get Diff Analysis
      </button>
    </div>
  );
};

export default RightPanel;
