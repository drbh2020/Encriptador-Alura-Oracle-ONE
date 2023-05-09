const author = document.getElementById("author");
const closeInfo = document.getElementById("close-author")
const infoDialog = document.getElementById("info");

author.addEventListener("click", (e) => {
  infoDialog.showModal();
})

closeInfo.addEventListener("click", (e) => {
  infoDialog.close();
})



/* Toast */

/* const showToast(message, position, type) {
  const toast = document.getElementById("toast");
  toast.className = toast.className + " show";

  if (!message) toast.innerText = message;

  setTimeout(() => {
    toast.className = toast.className.replace(" show", "")
  }, 3000);
} */




