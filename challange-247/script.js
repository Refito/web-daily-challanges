const stars = document.querySelectorAll(".stars > iconify-icon");

stars.forEach((star) =>
  star.addEventListener("click", (event) => {
    let count = event.target.getAttribute("data-id");
    handleRating(count);
  })
);

const handleRating = (count) => {
  // reset
  for (let i = 0; i < stars.length; i++) stars[i].classList.remove("active");

  // render
  for (let i = 0; i < count; i++) stars[i].classList.add("active");
};

const inputContainers = document.querySelectorAll(".input-container");
const inputs = document.querySelectorAll(".input-container > input");

inputs.forEach((input) => {
  input.addEventListener("focus", (event) => {
    let index = event.target.getAttribute("data-id");
    inputContainers[index - 1].classList.add("active");
  });

  input.addEventListener("blur", (event) => {
    let index = event.target.getAttribute("data-id");
    inputContainers[index - 1].classList.remove("active");
  });
});
