let input = document.getElementById("input");
let res = document.getElementById("res");
let arr = JSON.parse(localStorage.getItem("links")) || [];

function local() {
  arr.push(input.value);
  localStorage.setItem("links", JSON.stringify(arr));
  input.value = "";
  display();
}

function display() {
  let imgLinks = JSON.parse(localStorage.getItem("links"));
  res.innerHTML = "";
  res.innerHTML = imgLinks.map((link) => `<img src="${link}">`).join("");
}
