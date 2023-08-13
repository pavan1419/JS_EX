// old methodes supports IE 
// appendchild
// insertbefore
// removechild
// replacechild

const todo  = document.querySelector(".todo-list")
const li =  document.createElement("li")
li.textContent = "hii IE "

// appendChild
// todo.appendChild(li)

// insertbefore
const refernce = document.querySelector(".first-todo")
todo.insertBefore(li, refernce)

// removeChild
todo.removeChild(li)

//replaceChild
todo.replaceChild(li, refernce)