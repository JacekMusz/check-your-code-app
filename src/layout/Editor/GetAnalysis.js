import React from "react";
import classNames from "classnames";

const GetAnalysis = (props) => {
  //Destructuring props
  const { analysisResults } = props.dataStep.result.data;

  const result = () => {
    if (
      props.complitedSteps.includes(2) &&
      Object.keys(analysisResults.files).length === 0
    ) {
      return "DEEP CODE after analysis your code didn't give any suggestion.";
    } else {
      return Object.keys(analysisResults.suggestions).map((item, index) => {
        return (
          <li className="suggestion" key={index}>
            {`${index + 1}. `}
            {analysisResults.suggestions[item].message}
          </li>
        );
      });
    }
  };

  return (
    <div className="step-three">
      <h3>Results of analysis: </h3>
      <br />
      <div className="suggestion-list">{result()}</div>
      <button onClick={() => props.dataStep.handleReset()}>
        Reset and try again
      </button>
    </div>
  );
};

export default GetAnalysis;
