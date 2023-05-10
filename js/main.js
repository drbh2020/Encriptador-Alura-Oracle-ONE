import { createRegexFromDictionary, replacementCipher, hasOnlyAlphanumericLetters } from "./utils/utils.js";
import { encryptionDictionary, flippedDictionary } from "./utils/constants.js";

/* Website Points */
const sectionMessage = document.querySelector(".output__message");
const sectionDisplay = document.querySelector(".output__display");

const textInput = document.getElementById("input");
const textOutput = document.getElementById("output");

const warningMessage = document.querySelector(".warning__message");
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
  const textValue = textInput.value;

  if (textValue === "" || textValue === null) {
    throw new Error("Expected value is empty");
    
  }

  if (hasOnlyAlphanumericLetters(textValue)) {
    warningMessage.style.color = "red";
    throw new Error("Expected value has especial characters");
    
  } else {
    warningMessage.style.color = "inherit";
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
    // showAlert();
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

/* ////////////////////EXTRA FUNCTIONALITIES//////////////////////////// */

/* Dialog */
const author = document.getElementById("author");
const closeInfo = document.getElementById("close-author")
const infoDialog = document.getElementById("info");

author.addEventListener("click", (e) => {
  infoDialog.showModal();
})

closeInfo.addEventListener("click", (e) => {
  infoDialog.close();
})

/* Word counter */
const correctChars = document.querySelector(".count__correct")
const wrongChars = document.querySelector(".count__wrong")
const regexWrong = new RegExp("[^a-z\\s0-9]", "g");
const regexCorrect =new RegExp("[a-z\\s0-9]", "g");

const countChars = (str, regex) => {
  return ((str || '').match(regex) || []).length
}

textInput.addEventListener("input", (e) => {
  const currentText = textInput.value;
  correctChars.textContent = countChars(currentText, regexCorrect);
  wrongChars.textContent = countChars(currentText, regexWrong);
});


/* highlight textarea */
const highlights = document.querySelector(".input__highlights");
const backdrop = document.querySelector(".input__backdrop");

function applyHighlights(text) {
  return text
    .replace(/\n$/g, '\n\n')
    .replace(regexWrong, '<mark>$&</mark>');
}

function handleInput() {
  var text = textInput.value;
  var highlightedText = applyHighlights(text);

  highlights.innerHTML = highlightedText;
}

function handleScroll() {
  var scrollTop = textInput.scrollTop;
  backdrop.scrollTop = scrollTop;
  
  var scrollLeft = textInput.scrollLeft;
  backdrop.scrollLeft = scrollLeft;  
}

function bindEvents() {
  textInput.addEventListener('input', handleInput);
  textInput.addEventListener('scroll', handleScroll); 
}
bindEvents();
handleInput();