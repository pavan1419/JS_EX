// innerhtml to add html element 

const todo  = document.querySelector(".todo-list")
console.log(todo.innerHTML)

const innerElement = todo.innerHTML
todo.innerHTML += "<li>Todo 2</li>"
todo.innerHTML += "<li>Todo 3</li>"

// todo.classList.add("innerElement")


const todo1 = document.querySelector(".todo-list")
console.log(todo1.innerHTML)

todo1.innerHTML += "<li>Todo 4</li>"
// todo1.innerHTML = "<li>Todo lala</li>" // only use when you have to change whole inner html not for adding 

// when should use it and when not 

// never use this innerhtml adding becase it has to render again and again 


