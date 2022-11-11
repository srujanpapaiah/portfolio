document.querySelector(".dark").addEventListener("click", () => {
  document.querySelector("body").classList.toggle("white");
  document.querySelector(".bright").classList.remove("hidden");
  document.querySelector(".dark").classList.add("hidden");
  document.querySelector(".nav-logo").classList.toggle("white-text");
  document.querySelector(".nav-anchors").classList.toggle("white-text");
  document.querySelector(".intro-text").classList.toggle("white-text");
});

document.querySelector(".bright").addEventListener("click", () => {
  document.querySelector("body").classList.toggle("white");
  document.querySelector(".bright").classList.add("hidden");
  document.querySelector(".dark").classList.remove("hidden");
  document.querySelector(".nav-logo").classList.toggle("white-text");
  document.querySelector(".nav-anchors").classList.toggle("white-text");
  document.querySelector(".intro-text").classList.toggle("white-text");
});

const hire = document.querySelector(".hire-button").textContent.toUpperCase();
document.querySelector(".hire-button").textContent = hire;
document.querySelector(".hire-button").style.color = "white";
document.querySelector(".hire-button").style.fontWeight = "900";
