import { createRegexFromDictionary, replacementCipher, hasOnlyAlphanumericLetters } from "./utils/utils.js";
import { encryptionDictionary, flippedDictionary } from "../js/utils/data.js";

/* Website Points */
const sectionMessage = document.querySelector(".output__message");
const sectionDisplay = document.querySelector(".output__display");

const textInput = document.getElementById("input");
const textOutput = document.getElementById("output");

const buttonEncrypt = document.getElementById("encrypt");
const buttonDecrypt = document.getElementById("decrypt");
const buttonCopy = document.getElementById("copy");


/* test data */
console.log(createRegexFromDictionary(encryptionDictionary));
console.log(createRegexFromDictionary(flippedDictionary));
console.log(textInput.value === "");


/* html dependant functions */
const toggleAndDisplayMessage = (encryptedText) => {
  if (!sectionDisplay.classList.contains("active")) {
    sectionMessage.classList.remove("active");
    sectionDisplay.classList.add("active");
  }
  textOutput.textContent = encryptedText;
}

const getTextValue = () => {
  const textValue = textInput.value.toLowerCase();

  if (textValue === "" || textValue === null) {
    throw new Error("Expected value is empty");
  }

  if (hasOnlyAlphanumericLetters(textValue)) {
    throw new Error("Expected value has especial characters");
  }

  return textValue;
}

/* DRY function */
const handleCipher = (dictionary) => {
  try {
    const inputValue = getTextValue();
    const encryptedText = replacementCipher(inputValue, dictionary);
    toggleAndDisplayMessage(encryptedText);
  } catch (error) {
    console.error(error);
  }
}

/* Events */
buttonEncrypt.addEventListener("click", (e) => {
  e.preventDefault();
  handleCipher(encryptionDictionary)
});

buttonDecrypt.addEventListener("click", (e) => {
  e.preventDefault();
  handleCipher(flippedDictionary)
});

buttonCopy.addEventListener("click", (e) => {
  const selection = textOutput.textContent;
  navigator.clipboard.writeText(selection);
});