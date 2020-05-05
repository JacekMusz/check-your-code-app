import React from "react";
import { apiCreateBundle } from "../../api/apiBundle";

const CreateBundle = (props) => {
  const {
    fileName,
    code,
    setBundleIdMethod,
    setComplitedSteps,
  } = props.dataStep;
  const handleCreateBundle = () => {
    console.log("active");
    apiCreateBundle(`/${fileName}`, `${code}`)
      .then((resp) => {
        setBundleIdMethod(resp.data.bundleId);
      })
      .then(setComplitedSteps([1]))
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
    </div>
  );
};

export default CreateBundle;
