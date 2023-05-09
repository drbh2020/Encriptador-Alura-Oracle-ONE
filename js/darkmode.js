const darkModeToggle = document.getElementById("dark-mode-toggle");

let darkMode = localStorage.getItem("darkmode");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "enabled")
}

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null)
}

if (darkMode === "enabled"){
  enableDarkMode();
}


darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkmode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
})
