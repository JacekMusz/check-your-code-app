import React, { Component } from "react";
import "./style/main.css";
import NavBar from "./layout/NavBar";
import { Route, Switch } from "react-router-dom";
import PageMain from "./layout/PageMain";
import PageEditor from "./layout/PageEditor";

class App extends Component {
  state = {
    windowTop: true
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        this.setState({
          windowTop: false
        });
      } else {
        this.setState({
          windowTop: true
        });
      }
    });
  }

  handleClassForNavBar = () => {
    if (this.state.windowTop) {
      return `--top`;
    } else {
      return `--scroll`;
    }
  };

  render() {
    return (
      <div className="app">
        <NavBar scrollClass={this.handleClassForNavBar()} />
        <Switch>
          <Route path="/" exact component={PageMain} />
          <Route path="/editor" component={PageEditor} />
        </Switch>
      </div>
    );
  }
}

export default App;
