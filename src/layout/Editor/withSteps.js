import React from "react";
import classNames from "classnames";

const withSteps = (Component) => {
  return class WithSteps extends React.Component {
    state = {
      activeStepId: this.props.dataStep.complitedSteps.length + 1,
      complitedStep: false,
    };

    //-----CLASSES-----

    stepClasses = classNames({
      "step ": true,
      "step--active":
        this.state.activeStepId === this.props.stepId &&
        !this.props.dataStep.complitedSteps.includes(this.props.stepId),
      "step--complited": this.props.dataStep.complitedSteps.includes(
        this.props.stepId
      ),
    });

    render() {
      const { dataStep } = this.props;
      return (
        <div className={this.stepClasses}>
          <Component
            dataStep={dataStep}
            activeStepId={this.state.activeStepId}
            stepId={this.props.stepId}
          />
        </div>
      );
    }
  };
};

export default withSteps;
