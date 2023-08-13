// static list vs live list

// querySelector gives us static list 

// const listItems = document.querySelectorAll(".todo-list li")
// const newLi = document.createElement("li")
// newLi.textContent = "item item "
// const ul = document.querySelector(".todo-list")
// ul.append(newLi)
// console.log(listItems)



// getElementbySOmthing gives us live list 

const ul = document.querySelector(".todo-list")
const listItems1 = ul.getElementsByTagName("li")
const newLi = document.createElement("li")
newLi.textContent = "item item "
ul.append(newLi)
console.log(listItems1)