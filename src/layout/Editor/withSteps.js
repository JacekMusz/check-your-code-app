import React from "react";

const withSteps = (Component) => {
  return class WithSteps extends React.Component {
    state = {
      activeStep: 0,
    };
    render() {
      return (
        <div>
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
