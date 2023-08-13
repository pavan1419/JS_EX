// Element.insertAdjacentHTML adding directly html to site 
// beforebegin
// afterbegin
// beforeend 
// afterend

const todo = document.querySelector(".todo-list")
console.log(todo)
todo.insertAdjacentHTML("beforeend", "<li>beforeend todo </li>")
todo.insertAdjacentHTML("beforebegin", "<li>beforebegin todo </li>")
todo.insertAdjacentHTML("afterbegin", "<li>afterbegin todo </li>")
todo.insertAdjacentHTML("afterend", "<li>afterend todo </li>")