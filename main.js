const spiderman = document.querySelector("#spiderman");
const robin = document.querySelector("#robin");
const batman = document.querySelector("#batman");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

spiderman.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});
robin.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});
batman.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});
close.addEventListener("click", () => {
  console.log("emnanoitrpolo");
  modal.classList.add("hidden");
  modal.classList.remove("visible");
});
