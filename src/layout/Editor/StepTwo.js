import React from "react";

const StepTwo = (props) => {
  return (
    <div className="step-two">
      <h3>Step two - Check Bundle </h3>
      <button onClick={() => props.handleCreateBundle()}>Check Bundle</button>
    </div>
  );
};

export default StepTwo;
