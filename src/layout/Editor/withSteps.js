import React from "react";
import classNames from "classnames";

const withSteps = (Component) => {
  return class WithSteps extends React.Component {
    state = {
      activeStep: false,
    };

    //-----CLASSES-----
    stepClasses = classNames({
      "step ": true,
      "step step--active": this.props.activeStepId === this.props.stepId,
    });

    render() {
      return (
        <div className={this.stepClasses}>
          <button
            onClick={() =>
              this.setState({ activeStep: !this.state.activeStep })
            }
          >
            {this.state.activeStep ? "true" : "false"}
          </button>
          <Component dataStep={this.props.dataStep} />
        </div>
      );
    }
  };
};

export default withSteps;
