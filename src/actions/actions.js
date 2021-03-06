export const setBundleId = (bundleId) => ({
  type: "SET_BUNDLE_ID",
  bundleId,
});

export const setToken = (sessionToken) => ({
  type: "SET_TOKEN",
  sessionToken,
});
export const setCode = (code) => ({
  type: "SET_CODE",
  code,
});
export const setEditorLanguage = (editorLanguage) => ({
  type: "SET_EDITOR_LANGUAGE",
  editorLanguage,
});

export default {
  setBundleId,
  setToken,
  setCode,
  setEditorLanguage,
};
