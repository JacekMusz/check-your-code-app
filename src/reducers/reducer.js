const initialState = {
  bundleId: "noData",
  code: "noData",
  sessionToken: "noData"
};

export default function bundleStore(state = initialState, action) {
  switch (action.type) {
    case "SET_BUNDLEID":
      return { ...state, bundleId: action.bundleId };
    case "SET_CODE":
      return { ...state, code: action.code };
    case "SET_SESSION_TOKEN":
      return { ...state, sessionToken: action.sessionToken };
    default:
      return state;
  }
}
