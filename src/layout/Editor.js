import React, { useState } from "react";
import { ControlledEditor } from "@monaco-editor/react";
import actions from "../actions/actions.js";
import { connect } from "react-redux";
import SideBar from "./Editor/SideBar";

function EditorWrapper(props) {
  const handleEditorChange = (ev, value) => {
    props.setCode(value);
  };
  const [fileName, setFileName] = useState("");
  const [fileExtension, setFileExtension] = useState(".none");
  const handleInput = (e) => {
    setFileName(`${e.target.value}${fileExtension}`);
  };

  const handleChooseExtension = (option) => {
    switch (option) {
      case "javascript":
        return `.js`;
      case "java":
        return `.java`;
      case "python":
        return `.py`;
      default:
        return `.none`;
    }
  };
  const handleChangeSelect = (option) => {
    props.setEditorLanguage(option);
    setFileExtension(handleChooseExtension(option));
  };

  const handleSetFileName = () => {
    props.setFileName(fileName);
  };
  return (
    <div className="editor__wrapper">
      <SideBar />
      <div className="top-panel">
        <div className="top-panel__select-language">
          <p> Select Editor language: </p>
          <select onChange={(e) => handleChangeSelect(e.target.value)}>
            <option value="text">select language</option>
            <option value="javascript">javascript</option>
            <option value="java">java</option>
            <option value="python">python</option>
          </select>
        </div>
        <div className="top-panel__file-full-name">
          <input
            onChange={(e) => handleInput(e)}
            placeholder="filename"
          ></input>
          {fileExtension}
        </div>
        <button onClick={() => handleSetFileName()}> Submit</button>
        <p className="top-panel__warnings">aa</p>
      </div>
      <ControlledEditor
        height="100%"
        width="100vw"
        value={"// write your code"}
        onChange={handleEditorChange}
        language={props.editorLanguage}
        theme="dark"
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    editorLanguage: state.code.editorLanguage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCode: (code) => dispatch(actions.setCode(code)),
    setEditorLanguage: (editorLanguage) =>
      dispatch(actions.setEditorLanguage(editorLanguage)),
    setFileName: (fileName) => dispatch(actions.setFileName(fileName)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditorWrapper);

// `0: ".java" java
// 1: ".es" js
// 2: ".es6" js
// 3: ".htm" ?
// 4: ".html" html
// 5: ".js" js
// 6: ".jsx" js
// 7: ".ts" js
// 8: ".tsx" js
// 9: ".vue"
// 10: ".py"`
