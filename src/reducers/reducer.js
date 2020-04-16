const initialState = {
  bundleId: "noData",
  code: "noData",
  sessionToken: process.env.REACT_APP_DEFAULT_SESSION_TOKEN,
  editorLanguage: "plaintext",
};

export default function store(state = initialState, action) {
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
