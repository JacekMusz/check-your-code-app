export const setBundleId = (bundleId) => ({
  type: "SET_BUNDLE_ID",
  bundleId,
});

export const setToken = (sessionToken) => ({
  type: "SET_TOKEN",
  sessionToken,
});
export const setCode = (code) => ({
  type: "SET_CODE",
  code,
});
export const setEditorLanguage = (editorLanguage) => ({
  type: "SET_EDITOR_LANGUAGE",
  editorLanguage,
});
export const setFileName = (fileName) => ({
  type: "SET_FILE_NAME",
  fileName: fileName,
});

export default {
  setBundleId,
  setToken,
  setCode,
  setEditorLanguage,
  setFileName,
};

// // import React from "react";
// import { apiCreateBundle } from "../../api/apiBundle";

// const CreateBundle = (props) => {
//   const handleCreateBundle = () => {
//     console.log();
//     apiCreateBundle(`./${props.dataStep.fileName}`, "const a = 3")
//       .then((resp) => {
//         console.log(resp);
//         this.props.setBundleId(resp.data.bundleId);
//       })
//       .catch((err) => console.log(err));
//   };
//   return (
//     <div className="step-one">
//       <h3>Step one - Create Bundle!</h3>

//       <button onClick={() => handleCreateBundle()}>Create Bundle</button>
//     </div>
//   );
// };

// export default CreateBundle;
