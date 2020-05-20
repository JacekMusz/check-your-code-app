export const setBundleId = (bundleId) => ({
  type: "SET_BUNDLE_ID",
  bundleId,
});

export const setResult = (result) => ({
  type: "SET_RESULT",
  result,
});

export const resetDataApiResponsesReducer = () => ({
  type: "RESET_REDUCER_DATA_API_RESULT",
});

export default {
  setBundleId,
  setResult,
  resetDataApiResponsesReducer,
};
