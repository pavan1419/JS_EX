// static list vs live list



const listItems = document.querySelectorAll(".todo-list li")
const newLi = document.createElement("li")
newLi.textContent = "item item "
const ul = document.querySelector(".todo-list")
ul.append(newLi)
console.log(listItems)