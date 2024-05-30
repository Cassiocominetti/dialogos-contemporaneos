document
  .getElementById("pt-button")
  .addEventListener("click", () => switchLanguage("pt"));
document
  .getElementById("en-button")
  .addEventListener("click", () => switchLanguage("en"));

function switchLanguage(language) {
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach((element) => {
    if (element.getAttribute("data-lang") === language) {
      element.style.display = "";
    } else {
      element.style.display = "none";
    }
  });
}
