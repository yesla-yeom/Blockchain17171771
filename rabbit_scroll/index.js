const button = document.getElementById("findBtn");
const rabbit = document.getElementById("rabbit");

button.addEventListener("click", () => {
  rabbit.scrollIntoView({ behavior: "smooth", block: "center" });
});
