document.querySelector(".dark").addEventListener("click", () => {
  document.querySelector("body").classList.toggle("white");
  document.querySelector(".bright").classList.toggle("hidden");
  document.querySelector(".dark").classList.toggle("hidden");
  document.querySelector(".nav-logo").classList.toggle("white-text");
  document.querySelector(".nav-anchors").classList.toggle("white-text");
  document.querySelector(".intro-text").classList.toggle("white-text");
});

document.querySelector(".bright").addEventListener("click", () => {
  document.querySelector("body").classList.toggle("white");
  document.querySelector(".bright").classList.toggle("hidden");
  document.querySelector(".dark").classList.toggle("hidden");
  document.querySelector(".nav-logo").classList.toggle("white-text");
  document.querySelector(".nav-anchors").classList.toggle("white-text");
  document.querySelector(".intro-text").classList.toggle("white-text");
});
