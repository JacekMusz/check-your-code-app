import React from "react";
import "./App.css";
import {
  apiFilters,
  apiCreateBundle,
  apiCheckBundle,
  apiGetAnalysis,
  apiGetDiffAnalysis
} from "./api/apiBundle";

function App() {
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
    <div className="App">
      <button onClick={() => handleApiFilters()}>Get Filters</button>
      <button onClick={() => handleCreateBundle()}>CreateBundle</button>
      <button onClick={() => handleCheckBundle()}>CheckBundle</button>
      <button onClick={() => handleGetAnalysis()}>Get Analysis</button>
      <button onClick={() => handleGetDiffAnalysis()}>Get Diff Analysis</button>
    </div>
  );
}

export default App;
