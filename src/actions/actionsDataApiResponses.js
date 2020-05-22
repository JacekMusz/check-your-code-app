export const setBundleId = (bundleId) => ({
  type: "SET_BUNDLE_ID",
  bundleId,
});

export const setResult = (result) => ({
  type: "SET_RESULT",
  result,
});

export const resetDataApiResponses = () => ({
  type: "RESET_DATA_API_RESULT",
});

export default {
  setBundleId,
  setResult,
  resetDataApiResponses,
};
