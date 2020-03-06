export const reduxSetBundleId = bundleId => ({
  type: "SET_BUNDLE_ID",
  bundleId
});

export const reduxSetToken = sessionToken => ({
  type: "SET_TOKEN",
  sessionToken
});
export const reduxSetCode = code => ({
  type: "SET_CODE",
  code
});
export const reduxSetEditorLanguage = editorLanguage => ({
  type: "SET_EDITOR_LANGUAGE",
  editorLanguage
});

export default {
  reduxSetBundleId,
  reduxSetToken,
  reduxSetCode,
  reduxSetEditorLanguage
};
