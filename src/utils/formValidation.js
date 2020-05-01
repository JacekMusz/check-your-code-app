export const isFileNameIncorrect = (fileName) => {
  let fileNameArray = fileName.split("");
  let results = fileNameArray.map((item) => {
    return properSigns.includes(item);
  });
  console.log(results.includes(false));
  return results.includes(false);
};

export const returnFileExtension = (option) => {
  switch (option) {
    case "javascript":
      return `.js`;
    case "java":
      return `.java`;
    case "python":
      return `.py`;
    default:
      return `.none`;
  }
};

const properSigns = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "w",
  "x",
  "y",
  "z",
  "-",
  "_",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  ".",
];
