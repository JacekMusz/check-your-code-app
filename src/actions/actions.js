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
export const setFullFileName = (fileName) => (
  console.log(fileName),
  {
    type: "SET_FILE_NAME",
    fileName: fileName,
  }
);
export const setResult = (result) => ({
  type: "SET_RESULT",
  result,
});
export const setComplitedSteps = (complitedSteps) => ({
  type: "SET_COMPLITED_STEPS",
  complitedSteps: complitedSteps,
});

export const setEditorAvailable = (value) => ({
  type: "SET_COMPLITED_STEPS",
  value,
});

export default {
  setBundleId,
  setToken,
  setCode,
  setEditorLanguage,
  setFullFileName,
  setComplitedSteps,
  setResult,
};
