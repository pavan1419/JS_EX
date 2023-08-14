const allButtons =  document.querySelectorAll(".my-btn button")
console.log(allButtons)

allButtons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        console.log(e.currentTarget.textContent)
    })
})