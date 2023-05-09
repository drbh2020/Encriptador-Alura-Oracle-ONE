import { flippedParameters } from "./utils.js";

/* Data */
export const encryptionDictionary = Object.freeze({
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
});

export const flippedDictionary = Object.freeze(flippedParameters(encryptionDictionary));

console.log(flippedDictionary);
