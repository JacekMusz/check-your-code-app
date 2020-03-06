const initialState = {
  bundleId: "noData",
  code: "noData",
  sessionToken:
    "08406328ef4d4bd1c986fd972eb10e83b44e21a9e9d768644c48426735d6638f",
  editorLanguage: "plaintext"
};

export default function mainStore(state = initialState, action) {
  switch (action.type) {
    case "SET_BUNDLE_ID":
      return { ...state, bundleId: action.bundleId };
    case "SET_TOKEN":
      return { ...state, sessionToken: action.sessionToken };
    case "SET_CODE":
      return { ...state, code: action.code };
    case "SET_EDITOR_LANGUAGE":
      return { ...state, editorLanguage: action.editorLanguage };
    default:
      return state;
  }
}
