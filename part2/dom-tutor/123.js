// object event 

const btn = document.querySelector(".my-btn")
btn.addEventListener("click", function(){
    console.log(this.textContent)
})
