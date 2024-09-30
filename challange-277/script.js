const expandBtn = document.querySelector(".expand-button");
const expandContainer = document.querySelector(".expand-container");

expandBtn.addEventListener("click", (e) => {
  expandContainer.classList.toggle("active");
});
