// clone nodes

const ul = document.querySelector(".todo-list")
const li = document.createElement("li")
li.textContent = "hii todo new"
const li1 = li.cloneNode(true)
// li1.textContent = "hii todo new"
ul.append(li)
ul.prepend(li1)
console.log(ul)