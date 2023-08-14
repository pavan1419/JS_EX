const todoform = document.querySelector(".form-todo")
const input =  document.querySelector(".form-todo input[type ='text']")
const todolist = document.querySelector(".todo-list")

todoform.addEventListener("submit", (e)=>{
    e.preventDefault()
    const newInput  = input.value
    const newLi = document.createElement("li")
    const newLiInnerHtml = `<span class="text">${newInput}</span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">remove</button>
    </div>`
  newLi.innerHTML = newLiInnerHtml 
  todolist.append(newLi) 
    input.value = ""
})