document.querySelector(".addButton").addEventListener("click", () => {
  let tag = document.createElement("p");
  let value = document.querySelector(".input").value;
  var text = document.createTextNode(value);
  tag.appendChild(text);
  document.querySelector(".container").appendChild(tag);
});

const [count, setCount] = useState();
