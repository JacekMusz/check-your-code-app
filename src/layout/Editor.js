import React, { useRef, useState } from "react";
import "../style/Editor.css";
import { ControlledEditor } from "@monaco-editor/react";
import actions from "../actions/actions.js";
import { connect } from "react-redux";

function EditorWrapper(props) {
  const handleEditorChange = (ev, value) => {
    props.setCode(value);
  };

  const [editorLanguage, setLanguage] = useState("plaintext");

  return (
    <div className="Editor__wrapper">
      <select className="button" onChange={e => setLanguage(e.target.value)}>
        <option value="txt">select language</option>
        <option value="javascript">javascript</option>
        <option value="java">java</option>
        <option value="typescript">typescript</option>
        <option value="html">html</option>
        <option value="python">python</option>
      </select>
      <ControlledEditor
        height="90vh"
        width="100%"
        value={"// write your code"}
        onChange={handleEditorChange}
        language={editorLanguage}
        theme="dark"
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    editorLanguage2: state.editorLanguage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setCode: code => dispatch(actions.reduxSetCode(code))
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
