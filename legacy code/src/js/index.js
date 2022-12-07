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

const hire = document.querySelector(".hireButton").textContent.toUpperCase();
document.querySelector(".hireButton").textContent = hire;
document.querySelector(".hireButton").style.color = "white";
document.querySelector(".hireButton").style.fontWeight = "900";

document.querySelector(".open").addEventListener("click", () => {
  document.querySelector(".open").classList.add("hidden");
  document.querySelector(".close").classList.remove("hidden");
  document.querySelector(".mobile").classList.remove("hidden");
  document.querySelector("body").classList.add("overflow");
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".open").classList.remove("hidden");
  document.querySelector(".close").classList.add("hidden");
  document.querySelector(".mobile").classList.add("hidden");
  document.querySelector("body").classList.remove("overflow");
});

export default js;
