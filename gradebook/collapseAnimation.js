const collapseHeading = document.querySelectorAll(".collapse-heading");
const collapseBody = document.querySelectorAll(".collapse-body");

collapseHeading.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (collapseBody[index].classList.contains("hidden")) {
      collapseBody[index].classList.remove("hidden");
    } else {
      collapseBody[index].classList.add("hidden");
    }
  });
});
