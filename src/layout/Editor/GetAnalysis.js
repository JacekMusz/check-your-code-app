import React from "react";

const GetAnalysis = (props) => {
  return (
    <div className="step-three">
      <h3>Step three - Get Analysis</h3>
      <button
        className="button"
        disabled={props.activeStepId !== props.stepId}
        onClick={() => props.handleGetAnalysis()}
      >
        Get Analysis
      </button>
    </div>
  );
};

export default GetAnalysis;
