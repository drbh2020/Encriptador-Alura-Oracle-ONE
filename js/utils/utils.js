export const flippedParameters = (data) =>
  Object.fromEntries(Object.entries(data).map(([key, value]) => [value, key]));

export const createRegexFromDictionary = (dictionary, flags = "g") => {
  if (typeof dictionary !== "object" || dictionary == null) {
    throw new TypeError("Expected object as input");
  }
  const pattern = Object.keys(dictionary)
    .map((key) => `(${key})`) //optinal
    .join("|");

  const regex = new RegExp(pattern, flags);

  return regex;
};

export const replacementCipher = (text, dictionary) => {
  return text.replaceAll(createRegexFromDictionary(dictionary), (match) => dictionary[match]);
};

export const hasOnlyAlphanumericLetters = (string) => {
  const regex = new RegExp("[^a-z\\s0-9]", "g");
  const test = regex.test(string);
  return test;
};
