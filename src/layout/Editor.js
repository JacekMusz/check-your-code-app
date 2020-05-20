import React, { useState, useRef } from "react";
import { ControlledEditor } from "@monaco-editor/react";
import actions from "../actions/actions.js";
import { connect } from "react-redux";
import SideBar from "./Editor/SideBar";
import { isFileNameIncorrect } from "../utils/formValidation";
import { returnFileExtension } from "../utils/formValidation";
import classNames from "classnames";
import actionsDataApiResponses from "../actions/actionsDataApiResponses.js";

function EditorWrapper(props) {
  //-----Hooks-----
  const [fileName, setFileName] = useState("");
  const [fileExtension, setFileExtension] = useState(".none");
  const [warning, setWarning] = useState(
    "Please choose language and write file name (at least 3 signs without spaces and special signs)"
  );
  const [editorAvailable, setEditorAvailable] = useState(false);
  const [nextStepAvaiable, setNextStepAvailable] = useState(false);
  const selectRef = useRef(null);
  const inputRef = useRef(null);

  //-----Editor-----
  const handleEditorChange = (ev, value) => {
    props.setCode(value);
  };

  const monacoOptions = {
    readOnly: !editorAvailable,
  };

  //-----Handlers-----
  const handleInput = (e) => {
    setFileName(`${e.target.value}`);
    handleNextStepAvailable();
  };
  const handleChangeSelect = (option) => {
    props.setEditorLanguage(option);
    setFileExtension(returnFileExtension(option));
    handleNextStepAvailable();
  };

  const handleSubmitButton = () => {
    if (isFileNameIncorrect(fileName) || fileName.length <= 2) {
      setWarning(
        "Write file name (at least 3 signs without spaces and special signs)"
      );
    } else if (fileExtension === ".none") {
      setWarning("Select file language");
    } else {
      props.setFullFileName(`${fileName}${fileExtension}`);
      setWarning("Now you can use Editor below");
      setEditorAvailable(true);
    }
  };

  const handleResetButton = () => {
    props.resetCodeFileReducer();
    props.resetDataApiResponsesReducer();
    setEditorAvailable(false);
    setNextStepAvailable(false);
    inputRef.current.value = "";
    selectRef.current.value = "none";
    setWarning("Set new data");
  };

  const handleNextStepAvailable = () => {
    if (
      !isFileNameIncorrect(fileName) &&
      fileName.length > 2 &&
      !(fileExtension === ".none")
    ) {
      setNextStepAvailable(true);
    } else {
      setNextStepAvailable(false);
    }
  };

  //-----Classes-----
  const editorClasses = classNames({
    "controlled-editor-wrapper": true,
    "controlled-editor-wrapper--disabled": !editorAvailable,
    "controlled-editor-wrapper--enabled": editorAvailable,
  });

  return (
    <div className="editor__wrapper">
      <SideBar handleReset={handleResetButton} />
      <div className="top-panel">
        <div className="top-panel__select-language">
          <p> Select Editor language: </p>
          <select
            ref={selectRef}
            onChange={(e) => handleChangeSelect(e.target.value)}
          >
            <option value="none">select language</option>
            <option value="javascript">javascript</option>
            <option value="java">java</option>
            <option value="python">python</option>
          </select>
        </div>
        <div className="top-panel__file-full-name">
          <input
            ref={inputRef}
            onChange={(e) => handleInput(e)}
            placeholder="filename"
          ></input>
          {fileExtension}
        </div>
        <button
          className="next-step-button"
          disabled={!nextStepAvaiable || editorAvailable}
          onClick={() => handleSubmitButton()}
        >
          {" "}
          Next Step
        </button>
        <p className="top-panel__warnings">{warning}</p>
        <button onClick={() => handleResetButton()} className="reset-button">
          RESET
        </button>
      </div>
      <div className={editorClasses}>
        <ControlledEditor
          height="90%"
          width="100vw"
          value={"//type your  code and use the menu in right top corner!"}
          onChange={handleEditorChange}
          language={props.editorLanguage}
          theme="dark"
          options={monacoOptions}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    editorLanguage: state.codeFile.editorLanguage,
    editorAvailable: state.codeFile.editorAvailable,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCode: (code) => dispatch(actions.setCode(code)),
    setEditorLanguage: (editorLanguage) =>
      dispatch(actions.setEditorLanguage(editorLanguage)),
    setFullFileName: (fileName) => dispatch(actions.setFullFileName(fileName)),
    resetCodeFileReducer: () => dispatch(actions.resetCodeFileReducer()),
    resetDataApiResponsesReducer: () =>
      dispatch(actionsDataApiResponses.resetDataApiResponsesReducer()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditorWrapper);
