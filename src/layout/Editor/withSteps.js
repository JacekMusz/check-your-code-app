import React from "react";
import classNames from "classnames";

const withSteps = (Component) => {
  return class WithSteps extends React.Component {
    state = {
      activeStep: 0,
    };

    //-----CLASSES-----
    stepClasses = classNames({
      step: true,
      "step step--active": this.state.activeStep,
    });

    render() {
      return (
        <div className={this.stepClasses}>
          <button
            onClick={() =>
              this.setState({ activeStep: !this.state.activeStep })
            }
          >
            {this.state.activeStep}
          </button>
          <Component />
        </div>
      );
    }
  };
};

export default withSteps;
