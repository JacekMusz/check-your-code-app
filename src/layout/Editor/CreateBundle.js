import React, { useState } from "react";
import { apiCreateBundle } from "../../api/apiBundle";

const CreateBundle = (props) => {
  //-----Destructuring props-----
  const { fileName, code, setBundleIdMethod, bundleId } = props.dataStep;
  const { handleSetComplitedSteps, stepId } = props;

  //-----Handlers-----
  const handleCreateBundle = () => {
    apiCreateBundle(`/${fileName}`, `${code}`)
      .then(
        (resp) => (
          setBundleIdMethod(resp.data.bundleId),
          handleSetComplitedSteps([stepId])
        )
      )
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="step-one">
      <>
        <h3>If your code is ready click Create Bundle !</h3>
        <button
          className="button"
          disabled={bundleId !== "noData"}
          onClick={() => handleCreateBundle()}
        >
          Create Bundle
        </button>
      </>
    </div>
  );
};

export default CreateBundle;
