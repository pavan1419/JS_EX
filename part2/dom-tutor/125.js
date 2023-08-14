const allBtn = document.querySelectorAll(".my-btn  button")
console.log(allBtn)

allBtn.forEach(button =>{
    button.addEventListener("click",(e)=>{
        e.target.style.backgroundColor = "yellow"
    })
})  