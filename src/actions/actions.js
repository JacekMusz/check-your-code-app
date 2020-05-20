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
export const setFullFileName = (fileName) => ({
  type: "SET_FILE_NAME",
  fileName: fileName,
});

export const setComplitedSteps = (complitedSteps) => ({
  type: "SET_COMPLITED_STEPS",
  complitedSteps: complitedSteps,
});

export const setEditorAvailable = (value) => ({
  type: "SET_COMPLITED_STEPS",
  value,
});

export const resetCodeFileReducer = () => ({
  type: "RESET_REDUCER_CODE_FILE",
});

export default {
  setToken,
  setCode,
  setEditorLanguage,
  setFullFileName,
  setComplitedSteps,
  resetCodeFileReducer,
};
