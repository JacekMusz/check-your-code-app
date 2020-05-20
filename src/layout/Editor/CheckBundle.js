import React, { useState, useEffect, useRef } from "react";
import { apiGetAnalysis } from "../../api/apiBundle";
import classNames from "classnames";

const CheckBundle = (props) => {
  //Hooks
  const intervalId = useRef(null);
  const [bundleStatus, setBundleStatus] = useState("Work in progress");

  //Destructuring props
  const { result, setResult, bundleId } = props.dataStep;
  const { complitedSteps, stepId } = props;

  //Classes
  const classesForProgressBar = classNames({
    "step-two__progress-bar": true,
    "step-two__progress-bar--finished": bundleStatus === "DONE",
  });

  const classesNextStepButton = classNames({
    "next-step-button": true,
    "next-step-button--animation":
      bundleStatus === "DONE" && !complitedSteps.includes(2),
  });

  //Handlers
  const handaleNexStep = () => {
    props.handleSetComplitedSteps([stepId]);
  };

  const handleApiResponse = (resp) => {
    if (resp.data.status === "DONE") {
      clearInterval(intervalId.current);
      setResult(resp);
    }
  };

  useEffect(() => {
    if (
      complitedSteps.includes(1) &&
      result.data.status !== "DONE" &&
      bundleId !== "noData"
    ) {
      intervalId.current = setInterval(() => {
        apiGetAnalysis(bundleId)
          .then((resp) => handleApiResponse(resp))
          .catch((err) => console.log(err));
      }, 10000);
    } else {
      setBundleStatus(result.data.status);
      clearInterval(intervalId.current);
    }
  }, [complitedSteps]);
  return (
    <div className="step-two">
      {props.complitedSteps.includes(1) ? (
        <div className={classesForProgressBar}>{bundleStatus}</div>
      ) : null}
      <button
        disabled={bundleStatus !== "DONE" || complitedSteps.includes(2)}
        className={classesNextStepButton}
        onClick={() => handaleNexStep()}
      >
        Show Results
      </button>
    </div>
  );
};

export default CheckBundle;
