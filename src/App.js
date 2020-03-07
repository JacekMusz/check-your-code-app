import React from "react";
import "./App.css";
import NavBar from "./layout/NavBar";
import Panel from "./layout/Panel";
import Editor from "./layout/Editor";

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="app__editor-and-panel-wrapper">
        <Editor />
        <Panel />
      </div>
    </div>
  );
}

export default App;
