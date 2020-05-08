import React, { useState, useEffect, useRef } from "react";
import { apiGetAnalysis } from "../../api/apiBundle";
import classNames from "classnames";

const CheckBundle = (props) => {
  //const [bundleId, setBundleId] = useState("");
  const intervalId = useRef(null);
  const [stopApiCall, setStopApiCall] = useState(false);
  const [bundleStatus, setBundleStatus] = useState("Send a code to analysing");

  const classesForProgressBar = classNames({
    "step-two__progress-bar": true,
    "step-two__progress-bar--finished": bundleStatus === "DONE",
  });

  const handleListener = () => {
    return props.dataStep.complitedSteps.includes(1) ? (
      <div className={classesForProgressBar}>{bundleStatus}</div>
    ) : null;
  };

  const handleApiResponse = (resp) => {
    setBundleStatus(resp.data.status);
    if (resp.data.status === "DONE") {
      console.log(resp);
      clearInterval(intervalId.current);
      setStopApiCall(true);
    }
  };

  useEffect(() => {
    if (props.dataStep.bundleId !== "noData" && !stopApiCall) {
      intervalId.current = setInterval(() => {
        apiGetAnalysis(props.dataStep.bundleId)
          .then((resp) => handleApiResponse(resp))
          .catch((err) => console.log(err));
      }, 5000);
    } else {
      clearInterval(intervalId.current);
      setStopApiCall(true);
    }
  }, [props.dataStep.bundleId, bundleStatus, stopApiCall]);
  return (
    <div className="step-two">
      <h3>Step two - Check Bundle </h3>

      {handleListener()}
    </div>
  );
};

export default CheckBundle;
