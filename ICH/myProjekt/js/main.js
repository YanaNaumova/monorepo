const cookiesContainer = document.querySelector(".cookiesSection");
const rejectBtn = document.querySelector(".rejectBtn");
const acceptBtn = document.querySelector(".acceptBtn");

rejectBtn.addEventListener("click", () => {
  cookiesContainer.classList.add("hidden");
});
acceptBtn.addEventListener("click", () => {
  cookiesContainer.classList.add("hidden");
});
