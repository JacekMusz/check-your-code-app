import React, { useRef, useEffect } from "react";
import { apiCreateBundle } from "../../api/apiBundle";

const CreateBundle = (props) => {
  const {
    fileName,
    code,
    setBundleIdMethod,
    setComplitedSteps,
  } = props.dataStep;
  const handleCreateBundle = () => {
    apiCreateBundle(`/${fileName}`, `${code}`)
      .then((resp) => {
        setBundleIdMethod(resp.data.bundleId);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="step-one">
      <h3>Step one - Create Bundle! </h3>

      <button
        className="button"
        disabled={props.activeStepId !== props.stepId}
        onClick={() => handleCreateBundle()}
      >
        Create Bundle
      </button>
      <button onClick={() => setComplitedSteps([1])}>Next Step</button>
    </div>
  );
};

export default CreateBundle;
