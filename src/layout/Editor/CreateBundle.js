import React from "react";
import { apiCreateBundle } from "../../api/apiBundle";

const CreateBundle = (props) => {
  const handleCreateBundle = () => {
    apiCreateBundle(`/${props.dataStep.fileName}`, `${props.dataStep.code}`)
      .then((resp) => {
        console.log(resp);
        props.dataStep.setBundleIdMethod(resp.data.bundleId);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="step-one">
      <h3>Step one - Create Bundle!</h3>

      <button onClick={() => handleCreateBundle()}>Create Bundle</button>
    </div>
  );
};

export default CreateBundle;
