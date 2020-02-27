const initialState = {
  bundleId: "noData",
  jsCode: "noData",
  sessionToken: "noData"
};

export default function bundleStore(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case "SET_BUNDLEID":
      return { ...state, bundleId: action.bundleId };
    case "JS_CODE":
      return { ...state, bundleId: action.jsCode };
    case "sessionToken":
      return { ...state, sessionToken: action.sessionToken };
    default:
      return state;
  }
}
