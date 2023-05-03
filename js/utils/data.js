import { flippedParameters } from "./utils.js";

/* Data */
export const encryptionDictionary = Object.freeze({
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
});

export const flippedDictionary = flippedParameters(encryptionDictionary);

/* Maybe use the arrays instead of the object */
/* const encryptionParameters2 = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"]
] */