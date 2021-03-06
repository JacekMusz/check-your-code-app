import React from "react";
import { ControlledEditor } from "@monaco-editor/react";
import actions from "../actions/actions.js";
import { connect } from "react-redux";

function EditorWrapper(props) {
  const handleEditorChange = (ev, value) => {
    props.setCode(value);
  };

  return (
    <div className="editor__wrapper">
      <p className="editor__current-language-info">
        Current editor language: {props.editorLanguage}
      </p>
      <select
        className="button"
        onChange={(e) => props.setEditorLanguage(e.target.value)}
      >
        <option value="text">select language</option>
        <option value="javascript">javascript</option>
        <option value="java">java</option>
        <option value="html">html</option>
        <option value="python">python</option>
      </select>
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
    //editorLanguage: state.store.editorLanguage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCode: (code) => dispatch(actions.setCode(code)),
    setEditorLanguage: (editorLanguage) =>
      dispatch(actions.setEditorLanguage(editorLanguage)),
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
