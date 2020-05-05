import React from "react";
import { apiGetAnalysis } from "../../api/apiBundle";

const CheckBundle = (props) => {
  const handleCheckBundle = () => {
    apiGetAnalysis(props.dataStep.bundleId).then((resp) => console.log(resp));
  };
  return (
    <div className="step-two">
      <h3>Step two - Check Bundle </h3>
      <button
        className="button"
        disabled={props.activeStepId !== props.stepId}
        onClick={() => handleCheckBundle()}
      >
        Check Bundle
      </button>
    </div>
  );
};

export default CheckBundle;
