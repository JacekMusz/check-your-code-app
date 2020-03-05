export const reduxSetBundleId = bundleId => (
  console.log(bundleId, "actions"),
  {
    type: "SET_BUNDLE_ID",
    bundleId
  }
);

export const reduxSetToken = sessionToken => ({
  type: "SET_TOKEN",
  sessionToken
});
export const reduxSetCode = code => (
  console.log(code, "actions"),
  {
    type: "SET_CODE",
    code
  }
);

export default {
  reduxSetBundleId,
  reduxSetToken,
  reduxSetCode
};
