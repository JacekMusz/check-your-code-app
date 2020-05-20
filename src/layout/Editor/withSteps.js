import React from "react";
import classNames from "classnames";

const withSteps = (Component) => {
  return class WithSteps extends React.Component {
    state = {};

    //-----Classes-----
    stepClasses = classNames({
      "step ": true,
      "step--active":
        this.props.complitedSteps.length + 1 === this.props.stepId,
      " step--complited": this.props.complitedSteps.includes(this.props.stepId),
    });

    shouldComponentUpdate = (nextProps, nextState) => {
      if (this.props.complitedSteps !== nextProps.complitedSteps) {
        return true;
      } else return false;
    };

    render() {
      const {
        dataStep,
        complitedSteps,
        handleSetComplitedSteps,
        stepId,
      } = this.props;
      return (
        <div className={this.stepClasses}>
          <Component
            handleSetComplitedSteps={handleSetComplitedSteps}
            dataStep={dataStep}
            stepId={stepId}
            complitedSteps={complitedSteps}
          />
        </div>
      );
    }
  };
};

export default withSteps;
