import React from "react";
import "./App.css";
import NavBar from "./layout/NavBar";
import RightPanel from "./layout/RightPanel";
import Editor from "./layout/Editor";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App__editor-and-panel-wrapper">
        <Editor />
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
