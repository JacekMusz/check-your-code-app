import { publicApi } from "./apiIndex";

// let kodJS =
//   "function clean(toClean, source){if (typeof(toClean) !== 'string') return true;if (typeof(source) !== 'string') return true;return source.replace(toClean, String('CLEANED')).toString();}";
///let kodJS2 = "true=false";
/////
export const apiFilters = () => {
  return publicApi
    .get("filters", {
      headers: {
        "Session-Token":
          "08406328ef4d4bd1c986fd972eb10e83b44e21a9e9d768644c48426735d6638f"
      }
    })
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
};
export const apiCreateBundle = (newFilePath, newFileContent) => {
  console.log(newFilePath, newFileContent);
  return publicApi
    .post("bundle", {
      "Content-Type": "application/json",
      headers: {
        "Session-Token":
          "08406328ef4d4bd1c986fd972eb10e83b44e21a9e9d768644c48426735d6638f"
      },
      files: [{ filePath: newFilePath, fileContent: newFileContent }]
      //files: [{ filePath: "/file.js", fileContent: kodJS2 }]
    })
    .then(resp => {
      return resp;
    })
    .catch(err => console.log(err));
};

export const apiCheckBundle = bundleID => {
  console.log(bundleID);
  return publicApi
    .get(`bundle/${bundleID}`, {
      "Content-Type": "application/json",
      headers: {
        "Session-Token":
          "08406328ef4d4bd1c986fd972eb10e83b44e21a9e9d768644c48426735d6638f"
      }
    })
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
};

export const apiExtendBundle = () => {
  return publicApi
    .put(`bundle/:bundleId`, {
      "Content-Type": "application/json",
      headers: {
        "Session-Token":
          "08406328ef4d4bd1c986fd972eb10e83b44e21a9e9d768644c48426735d6638f"
      },
      files: [{ filePath: "/file2.js", fileContent: "const a = 3" }],
      removedFiles: ["/file.js"]
    })
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
};

export const apiGetAnalysis = bundleId => {
  return publicApi
    .get(`analysis/${bundleId}`, {
      headers: {
        "Session-Token":
          "08406328ef4d4bd1c986fd972eb10e83b44e21a9e9d768644c48426735d6638f"
      }
    })
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
};

export const apiGetDiffAnalysis = bundleId => {
  return publicApi
    .get(`analysis/${bundleId}/${bundleId}`, {
      headers: {
        "Session-Token":
          "08406328ef4d4bd1c986fd972eb10e83b44e21a9e9d768644c48426735d6638f"
      }
    })
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
};
