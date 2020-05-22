import { publicApi } from "./apiIndex";

export const apiCreateBundle = (newFilePath, newFileContent) => {
  return publicApi
    .post("bundle", {
      "Content-Type": "application/json",
      files: [{ filePath: newFilePath, fileContent: newFileContent }],
    })
    .then((resp) => {
      return resp;
    })
    .catch((err) => console.log(err));
};

export const apiCheckBundle = (bundleID) => {
  return publicApi
    .get(`bundle/${bundleID}`, {
      "Content-Type": "application/json",
    })
    .then((resp) => {
      return resp;
    })
    .catch((err) => console.log(err));
};

export const apiGetAnalysis = (bundleId) => {
  console.log(bundleId);
  return publicApi
    .get(`analysis/${bundleId}`)
    .then((resp) => {
      return resp;
    })
    .catch((err) => console.log(err));
};

//Dont use in this App
// export const apiFilters = () => {
//   return publicApi
//     .get("filters")
//     .then((resp) => console.log(resp))
//     .catch((err) => console.log(err));
// };

// export const apiExtendBundle = () => {
//   return publicApi
//     .put(`bundle/:bundleId`, {
//       "Content-Type": "application/json",
//       headers: {
//
//       },
//       files: [{ filePath: "/file2.js", fileContent: "const a = 3" }],
//       removedFiles: ["/file.js"],
//     })
//     .then((resp) => console.log(resp))
//     .catch((err) => console.log(err));
// };

// export const apiGetDiffAnalysis = (bundleId) => {
//   return publicApi
//     .get(`analysis/${bundleId}/${bundleId}`)
//     .then((resp) => console.log(resp))
//     .catch((err) => console.log(err));
// };
