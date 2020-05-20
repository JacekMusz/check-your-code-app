const initialState = {
  bundleId: "noData",
  result: {
    data: {
      status: "noData",
      analysisResults: { suggestions: { 0: { message: "" } } },
    },
  },
};

export default function dataApiResponse(state = initialState, action) {
  switch (action.type) {
    case "SET_BUNDLE_ID":
      return { ...state, bundleId: action.bundleId };
    case "SET_RESULT":
      return { ...state, result: action.result };
    case "RESET_REDUCER_DATA_API_RESPONSE":
      return {
        bundleId: "noData",
        result: {
          data: {
            status: "noData",
            analysisResults: { suggestions: { 0: { message: "" } } },
          },
        },
      };
    default:
      return state;
  }
}
