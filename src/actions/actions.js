const reduxSetBundleId = bundleId => ({
  type: "BUNDLE_ID",
  bundleId
});

const reduxSetCode = code => ({
  type: "SET_CODE",
  code
});

const reduxSetSessionToken = sessionToken => ({
  type: "SET_SESSION_TOKEN",
  sessionToken
});

export default {
  reduxSetBundleId,
  reduxSetCode,
  reduxSetSessionToken
};
