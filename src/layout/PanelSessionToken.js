import React, { Component } from "react";

class PanelSessionToken extends Component {
  state = {
    newSessionToken: "",
  };

  handleNewSessionToken = (e) => {
    this.setState({
      newSessionToken: e.target.value,
    });
  };

  handleConfirmSessionToken = () => {
    const { newSessionToken } = this.state;
    if (newSessionToken.length > 10) {
      this.props.setToken(newSessionToken);
      this.setState({
        newSessionToken: "",
      });
    }
  };
  render() {
    return (
      <div className="panel-session-token">
        <p className="panel-session-token__info">
          Your established Session-Token: <span>{this.props.sessionToken}</span>
        </p>
        <input
          type="text"
          placeholder="Session Token"
          onChange={(e) => this.handleNewSessionToken(e)}
        ></input>
        <button
          disabled={this.state.newSessionToken.length < 10}
          className="button"
          onClick={() => this.handleConfirmSessionToken()}
        >
          Confirm Session-Token
        </button>
      </div>
    );
  }
}

export default PanelSessionToken;
