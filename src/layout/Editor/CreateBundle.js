import React from "react";

const CreateBundle = (props) => {
  return (
    <div className="step-one">
      <h3>Step one - Create Bundle!</h3>

      <button onClick={() => props.handleCreateBundle()}>Create Bundle</button>
    </div>
  );
};

export default CreateBundle;
