import { publicApi } from "./apiIndex";

export const apiFilters = () => {
  return publicApi
    .get("filters", {
      headers: {
        "Session-Token": process.env.REACT_APP_DEFAULT_SESSION_TOKEN,
      },
    })
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));
};
export const apiCreateBundle = (newFilePath, newFileContent) => {
  console.log(newFilePath, newFileContent);
  return publicApi
    .post("bundle", {
      "Content-Type": "application/json",
      headers: {
        "Session-Token": process.env.REACT_APP_DEFAULT_SESSION_TOKEN,
      },
      files: [{ filePath: newFilePath, fileContent: newFileContent }],
    })
    .then((resp) => {
      return resp;
    })
    .catch((err) => console.log(err));
};

export const apiCheckBundle = (bundleID) => {
  console.log(bundleID);
  return publicApi
    .get(`bundle/${bundleID}`, {
      "Content-Type": "application/json",
      headers: {
        "Session-Token": process.env.REACT_APP_DEFAULT_SESSION_TOKEN,
      },
    })
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));
};

export const apiExtendBundle = () => {
  return publicApi
    .put(`bundle/:bundleId`, {
      "Content-Type": "application/json",
      headers: {
        "Session-Token": process.env.REACT_APP_DEFAULT_SESSION_TOKEN,
      },
      files: [{ filePath: "/file2.js", fileContent: "const a = 3" }],
      removedFiles: ["/file.js"],
    })
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));
};

export const apiGetAnalysis = (bundleId) => {
  return publicApi
    .get(`analysis/${bundleId}`, {
      headers: {
        "Session-Token": process.env.REACT_APP_DEFAULT_SESSION_TOKEN,
      },
    })
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));
};

export const apiGetDiffAnalysis = (bundleId) => {
  return publicApi
    .get(`analysis/${bundleId}/${bundleId}`, {
      headers: {
        "Session-Token": process.env.REACT_APP_DEFAULT_SESSION_TOKEN,
      },
    })
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));
};
