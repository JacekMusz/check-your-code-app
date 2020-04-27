import React from "react";

const CheckBundle = (props) => {
  return (
    <div className="step-two">
      <h3>Step two - Check Bundle </h3>
      <button onClick={() => props.handleCreateBundle()}>Check Bundle</button>
    </div>
  );
};

export default CheckBundle;
