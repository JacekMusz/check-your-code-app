import React from "react";

const StepThree = (props) => {
  return (
    <div className="step-three">
      <h3>Step three - Get Analysis</h3>
      <button onClick={() => props.handleGetAnalysis()}>Get Analysis</button>
    </div>
  );
};

export default StepThree;
