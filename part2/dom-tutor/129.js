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

todolist.addEventListener("click",(e)=>{
  if(e.target.classList.contains("done")){
    console.log("done")
    const liSpan = e.target.parentNode.previousElementSibling
    liSpan.style.textDecoration = "Line-through"
  }
  if(e.target.classList.contains("remove")){
const removeNode = e.target.parentNode.parentNode
removeNode.remove()
    console.log("removed")
  }
})