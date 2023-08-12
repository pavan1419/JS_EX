// innerhtml to add html element 

const todo  = document.querySelector(".todo-list")
console.log(todo.innerHTML)

const innerElement = todo.innerHTML
todo.innerHTML = todo.innerHTML + "<li>New Todo</li>"

// todo.classList.add("innerElement")