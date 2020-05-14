const initialState = {
  code: "noData",
  editorLanguage: "plaintext",
  fileName: "",
  result: { data: { status: "noData" } },
};

export default function codeFile(state = initialState, action) {
  switch (action.type) {
    case "SET_CODE":
      return { ...state, code: action.code };
    case "SET_RESULT":
      return { ...state, result: action.result };
    case "SET_EDITOR_LANGUAGE":
      return { ...state, editorLanguage: action.editorLanguage };
    case "SET_FILE_NAME":
      return { ...state, fileName: action.fileName };
    default:
      return state;
  }
}
