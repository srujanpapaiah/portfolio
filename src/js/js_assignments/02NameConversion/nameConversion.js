"use strict";

document.querySelector("#convert-btn").addEventListener("click", function () {
  const value = document.querySelector("#text").value;

  document.querySelector("#camel-case").textContent = value.toUpperCase();

  //   document.querySelector("#pascal-case").textContent = value.pascalCase();

  //   document.querySelector("#snake-case").textContent = value.snakeCase();

  //   document.querySelector("#screaming-snake-case").textContent =
  //     value.screamingSnakeCase();

  //   document.querySelector("#kebab-case").textContent = value.kebabCase();

  //   document.querySelector("#screaming-kebab-case").textContent =
  //     value.screamingKebabCase();
});
