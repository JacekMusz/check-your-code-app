import React from "react";
import { apiCreateBundle } from "../../api/apiBundle";

const CreateBundle = (props) => {
  const handleCreateBundle = () => {
    console.log();
    apiCreateBundle(`/${props.dataStep.fileName}`, "const a = 3")
      .then((resp) => {
        console.log(resp);
        // this.props.setBundleId(resp.data.bundleId);
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
