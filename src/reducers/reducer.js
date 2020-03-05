const initialState = {
  bundleId: "noData",
  code: "noData",
  sessionToken:
    "08406328ef4d4bd1c986fd972eb10e83b44e21a9e9d768644c48426735d6638f"
};

export default function bundleStore(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case "SET_BUNDLE_ID":
      console.log(action.bundleId, "reducer");
      return { ...state, bundleId: action.bundleId };
    case "SET_TOKEN":
      console.log(action.sessionToken, "reducer");
      return { ...state, sessionToken: action.sessionToken };
    case "SET_CODE":
      console.log(action.code, "reducer");
      return { ...state, code: action.code };
    default:
      return state;
  }
}
