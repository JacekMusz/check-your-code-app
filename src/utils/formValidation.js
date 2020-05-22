export const isFileNameCorrect = (fileName) => {
  const regex = /[a-z0-9\_\-]/i;
  const properSigns = [];
  [...fileName].forEach((sign) => properSigns.push(regex.test(sign)));
  return true && !properSigns.includes(false);
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
