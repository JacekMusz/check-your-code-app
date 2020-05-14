import React, { useState, useEffect, useRef } from "react";
import { apiGetAnalysis } from "../../api/apiBundle";
import classNames from "classnames";

const CheckBundle = (props) => {
  const intervalId = useRef(null);
  const [stopApiCall, setStopApiCall] = useState(false);
  const [bundleStatus, setBundleStatus] = useState("Send a code to analysing");

  const classesForProgressBar = classNames({
    "step-two__progress-bar": true,
    "step-two__progress-bar--finished": bundleStatus === "DONE",
  });

  const classesNextStepButton = classNames({
    "next-step-button": true,
    "next-step-button--animation": bundleStatus === "DONE",
  });

  const handaleNexStep = () => {
    props.handleSetComplitedSteps([props.stepId]);
  };

  const handleApiResponse = (resp) => {
    console.log();

    if (resp.data.status === "DONE") {
      console.log("isDone");
      clearInterval(intervalId.current);
      props.dataStep.setResult(resp);
      setStopApiCall(true);
    }
  };

  useEffect(() => {
    if (
      props.dataStep.result.data.status === "noData" &&
      props.complitedSteps.includes(1)
    ) {
      intervalId.current = setInterval(() => {
        console.log("zapytanie api");
        apiGetAnalysis(props.dataStep.bundleId)
          .then((resp) => handleApiResponse(resp))
          .catch((err) => console.log(err));
      }, 10000);
    } else {
      setBundleStatus(props.dataStep.result.data.status);
      clearInterval(intervalId.current);
    }
  }, [props.complitedSteps, stopApiCall]);
  return (
    <div className="step-two">
      <h3>Step two - Check Bundle </h3>

      {props.complitedSteps.includes(1) ? (
        <div className={classesForProgressBar}>{bundleStatus}</div>
      ) : null}
      <button
        disabled={bundleStatus !== "DONE"}
        className={classesNextStepButton}
        onClick={() => handaleNexStep()}
      >
        Next Step
      </button>
    </div>
  );
};

export default CheckBundle;
