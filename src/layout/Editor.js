import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import "../style/Editor.css";

import Editor from "@monaco-editor/react";

function EditorWrapper() {
  const [isEditorReady, setIsEditorReady] = useState(false);
  const valueGetter = useRef();

  function handleEditorDidMount(_valueGetter) {
    setIsEditorReady(true);
    valueGetter.current = _valueGetter;
  }

  function handleShowValue() {
    alert(valueGetter.current());
  }

  return (
    <div className="Editor__wrapper">
      <button
        className="button button--editor"
        onClick={handleShowValue}
        disabled={!isEditorReady}
      >
        Show value
      </button>
      <Editor
        theme="dark"
        width="50vw"
        height="80vh"
        language="javascript"
        value={"// write your code here"}
        editorDidMount={handleEditorDidMount}
      />
    </div>
  );
}

export default EditorWrapper;
