const initialState = {
  bundleId: "noData",
  sessionToken: process.env.REACT_APP_DEFAULT_SESSION_TOKEN,
};

export default function settings(state = initialState, action) {
  switch (action.type) {
    case "SET_BUNDLE_ID":
      return { ...state, bundleId: action.bundleId };
    case "SET_TOKEN":
      return { ...state, sessionToken: action.sessionToken };
    default:
      return state;
  }
}
