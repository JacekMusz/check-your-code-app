import React, { useState } from "react";
import { apiCreateBundle } from "../../api/apiBundle";
import classNames from "classnames";

const CreateBundle = (props) => {
  const { fileName, code, setBundleIdMethod } = props.dataStep;

  const [nextStepAvailable, setNextStepAvailable] = useState(false);
  const [newBundleId, setNewBundleId] = useState("");

  const classesNextStepButton = classNames({
    "next-step-button": true,
    "next-step-button--animation": nextStepAvailable,
  });

  const handleCreateBundle = () => {
    apiCreateBundle(`/${fileName}`, `${code}`)
      .then((resp) => {
        console.log(resp);
        setNewBundleId(resp.data.bundleId);
      })
      .then(setNextStepAvailable(true))
      .catch((err) => console.log(err));
  };

  const handaleNexStep = () => {
    setBundleIdMethod(newBundleId);
    props.handleSetComplitedSteps([props.stepId]);
  };
  console.log("render step1");
  return (
    <div className="step-one">
      <h3>Step one - Create Bundle! </h3>

      <button
        className="button"
        disabled={
          props.dataStep.bundleId !== "noData" ||
          props.complitedSteps.includes(1)
        }
        onClick={() => handleCreateBundle()}
      >
        Create Bundle
      </button>
      <button
        disabled={!nextStepAvailable || props.complitedSteps.includes(1)}
        className={classesNextStepButton}
        onClick={() => handaleNexStep()}
      >
        Next Step
      </button>
    </div>
  );
};

export default CreateBundle;
