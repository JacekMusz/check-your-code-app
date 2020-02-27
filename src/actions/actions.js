const reduxSetBundleId = bundleId => ({
  type: "BUNDLE_ID",
  bundleId
});

const reduxSetJsCode = jsCode => ({
  type: "JS_CODE",
  jsCode
});

const reduxSetSessionToken = jsCode => ({
  type: "JS_CODE",
  sessionToken
});

export default {
  reduxSetBundleId,
  reduxSetJsCode,
  reduxSetSessionToken
};
