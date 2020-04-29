const initialState = {
  code: "noData",
  editorLanguage: "plaintext",
  fileName: "",
};

export default function code(state = initialState, action) {
  switch (action.type) {
    case "SET_CODE":
      return { ...state, code: action.code };
    case "SET_EDITOR_LANGUAGE":
      return { ...state, editorLanguage: action.editorLanguage };
    case "SET_FILE_NAME":
      return { ...state, fileName: action.fileName };
    default:
      return state;
  }
}
