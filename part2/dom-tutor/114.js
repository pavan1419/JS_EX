// document.createElement()
// append -  append add element after exesting one
// prepend - prepend adding element befpr exesting one 
// adding and selecting Element and text content 

const todo  = document.querySelector(".todo-list")
const newTodo = document.createElement("li")    
// const newTodoText = document.createTextNode("new todo item")
newTodo.textContent = "hiii todo" 
// newTodo.appendChild(newTodoText)

todo.prepend(newTodo)
// console.log(newTodo)


// // remove
// // removing added element and text content 

// const todo1  = document.querySelector(".todo-list li")

// todo1.remove(todo1)
// newTodo.remove(newTodo)
// console.log(todo1)


// after 
// before 


const todo2  = document.querySelector(".todo-list")
const newTodo1 = document.createElement("li")    
newTodo1.textContent = "hiii todo2"

todo2.before(newTodo1)
// todo2.after(newTodo1)

