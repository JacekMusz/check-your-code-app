const initialState = {
  code: "noData",
  editorLanguage: "plaintext",
  fileName: "",
  sessionToken: process.env.REACT_APP_DEFAULT_SESSION_TOKEN,
  complitedSteps: [],
};

export default function codeFile(state = initialState, action) {
  switch (action.type) {
    case "SET_CODE":
      return { ...state, code: action.code };
    case "SET_TOKEN":
      return { ...state, sessionToken: action.sessionToken };
    case "SET_COMPLITED_STEPS":
      return { ...state, complitedSteps: action.complitedSteps };
    case "SET_EDITOR_LANGUAGE":
      return { ...state, editorLanguage: action.editorLanguage };
    case "SET_FILE_NAME":
      return { ...state, fileName: action.fileName };
    case "RESET_REDUCER_CODE_FILE":
      return {
        code: "noData",
        editorLanguage: "plaintext",
        fileName: "",
        sessionToken: process.env.REACT_APP_DEFAULT_SESSION_TOKEN,
        complitedSteps: [],
      };
    default:
      return state;
  }
}
