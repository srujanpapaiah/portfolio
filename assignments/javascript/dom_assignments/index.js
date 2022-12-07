/////////////////////////////////////////////
/////////////  Assignment 1  /////////////////
//////////////////////////////////////////////

document.querySelector(
  ".side-bar .crayons-card .crayons-subtitle-2"
).textContent = "Srujan";
document.querySelector(".side-bar .crayons-card p").textContent =
  "Full Stack Software Developer";

//////////////////////////////////////////////
/////////////  Assignment 2  /////////////////
//////////////////////////////////////////////

const arr = [];
const title = document.querySelectorAll(".as-imagegrid-item-title");
for (let i = 0; i < title.length; i++) {
  arr.push(title[i].textContent);
}
console.log(arr);

/////////////////////////////////////////////
/////////////  Assignment 3  /////////////////
//////////////////////////////////////////////

arr = [];
const accor = document.querySelectorAll(
  ".accordion-homepage section"
).textContent;
for (let i = 0; i < accor.length; i++) {
  arr.push(accor[i]);
}
console.log(arr);
