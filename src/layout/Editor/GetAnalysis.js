import React from "react";
import classNames from "classnames";

const GetAnalysis = (props) => {
  const classesNextStepButton = classNames({
    "next-step-button": true,
  });

  const handleShowResults = (result) => {
    console.log(result);
  };

  return (
    <div className="step-three">
      <h3>Step three - Show results</h3>
      <button
        className="button"
        disabled={!props.complitedSteps.includes(2)}
        onClick={() => handleShowResults(props.dataStep.result.data)}
      >
        Get Analysis
      </button>
      <button
        disabled={true}
        className={classesNextStepButton}
        onClick={() => this.handaleNexStep()}
      >
        Return to Editor
      </button>
    </div>
  );
};

export default GetAnalysis;
