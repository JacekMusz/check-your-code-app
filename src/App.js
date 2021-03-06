import React, { Component } from "react";
import "./style/main.css";
import NavBar from "./layout/NavBar";
import { Route, Switch } from "react-router-dom";
import PageMain from "./layout/PageMain";
import PageEditor from "./layout/PageEditor";

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Switch>
          <Route path="/" exact component={PageMain} />
          <Route path="/editor" component={PageEditor} />
        </Switch>
      </div>
    );
  }
}

export default App;
