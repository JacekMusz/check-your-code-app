const initialState = {
  code: "noData",
  editorLanguage: "plaintext",
};

export default function code(state = initialState, action) {
  switch (action.type) {
    case "SET_CODE":
      return { ...state, code: action.code };
    case "SET_EDITOR_LANGUAGE":
      return { ...state, editorLanguage: action.editorLanguage };
    default:
      return state;
  }
}
